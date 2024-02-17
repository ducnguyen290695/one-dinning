import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import Box from "components/Box";
import CustomTable from "components/CustomTable";
import Flex from "components/Flex";
import { DeleteIcon, UnlockIcon, LockIcon } from "components/Icon";
import Text from "components/Text";
import useDrawer from "hooks/useDrawer";
import useModal from "hooks/useModal";
import StoreDetailModal from "./components/StoreDetailModal";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
import { debounce, isEmpty } from "lodash";
import { COMMON_DEBOUNCE_DELAY, PAGE_OPTIONS } from "constants/common";
import { QueryParams } from "models/apiRequest";
import ActivedStatus from "components/ActivedStatus.tsx";
import useLoading from "hooks/useLoading";
import { sleep } from "utils/common";
import {
  lockStore,
  unLockStore,
  deleteStore,
  getStores,
} from "apiClients/store";
import { notification } from "antd";
import { Store } from "models/store";
import { notifyMessage } from "constants/message";

const StorePage = () => {
  const { openDrawer, closeDrawer } = useDrawer();
  const { openModal, closeModal } = useModal();
  const { turnOffLoading, turnOnLoading } = useLoading();

  const [params, setParams] = useState<QueryParams>({
    orderBy: "asc",
    page: 1,
    limit: 10,
  });

  const columns: ColumnsType<AnyObject> = [
    {
      title: "番号",
      dataIndex: "no",
      width: "7%",
      align: "center",
      render: (_, record, index) => {
        return (
          <Text
            onClick={() => handleOpenStoreDetail(record as Store)}
            cursor="pointer"
          >
            No.
            {(Number(params.page) - 1) * Number(params.limit) + index + 1}
          </Text>
        );
      },
    },
    {
      title: "ID",
      dataIndex: "id",
      width: "7%",
      align: "center",
      render: (text, record) => {
        return (
          <Text
            onClick={() => handleOpenStoreDetail(record as Store)}
            cursor="pointer"
          >
            {text}
          </Text>
        );
      },
    },
    {
      title: "店名",
      dataIndex: "name",
      align: "center",
      render: (text) => {
        return <Text textAlign="left">{text}</Text>;
      },
    },
    {
      title: "電話番号",
      dataIndex: "phoneNumber",
      width: "12%",
      align: "center",
      render: (text) => {
        return <Text textAlign="left">{text}</Text>;
      },
    },
    {
      title: "メール",
      dataIndex: "email",
    },
    {
      title: "住所",
      dataIndex: "address",
    },
    {
      title: "状態",
      dataIndex: "status",
      width: "12%",
      align: "center",
      render: (_, record) => {
        return (
          <Flex justifyContent="center">
            <ActivedStatus
              isLocked={record?.owner?.isLocked}
              isDeleted={!!record?.deletedAt}
            />
          </Flex>
        );
      },
    },
    {
      title: "詳細",
      dataIndex: "actions",
      width: "10%",
      align: "center",
      render: (_, record) => {
        return (
          <Flex gap="8px" alignItems="center" justifyContent="center">
            <Box
              height="24px"
              minWidth="24px"
              cursor="pointer"
              onClick={() => handleOpenConfirmDeleteModal(record?.id)}
            >
              {!record?.deletedAt && <DeleteIcon />}
            </Box>

            <Box
              height="24px"
              cursor="pointer"
              onClick={() =>
                !record?.owner?.isLocked
                  ? handleOpenConfirmLockModal(record?.id)
                  : handleOpenConfirmUnLockModal(record?.id)
              }
            >
              {record?.owner?.isLocked ? <LockIcon /> : <UnlockIcon />}
            </Box>
          </Flex>
        );
      },
    },
  ];

  const { data, isFetching, refetch } = useQuery(
    ["getStores", params],
    getStores(params),
    { keepPreviousData: true }
  );

  const handleSuccess = async () => {
    await sleep(500);
    notification.success({
      message: notifyMessage.success,
    });
  };

  const handleError = () => {
    notification.error({
      message: notifyMessage.failed,
    });
  };

  const handleSettled = () => {
    refetch();
    turnOffLoading();
    closeModal();
  };

  const { mutate: mutateLockStore } = useMutation(lockStore, {
    onSuccess: handleSuccess,
    onError: handleError,
    onSettled: handleSettled,
  });

  const { mutate: mutateUnLockStore } = useMutation(unLockStore, {
    onSuccess: handleSuccess,
    onError: handleError,
    onSettled: handleSettled,
  });

  const { mutate: mutateDeleteStore } = useMutation(deleteStore, {
    onSuccess: handleSuccess,
    onError: handleError,
    onSettled: handleSettled,
  });

  const handleSearch = debounce((value: string) => {
    setParams({
      ...params,
      search: value?.trim(),
      page: 1,
    });
  }, COMMON_DEBOUNCE_DELAY);

  const handleTableChange = (
    pagination: TablePaginationConfig,
    _: any,
    sorter: any
  ) => {
    setParams({
      ...params,
      page: pagination?.current,
      ...(!isEmpty(sorter) && {
        sortBy: sorter?.field,
        orderBy: sorter?.order,
      }),
    });
  };

  const handleChangePageSize = (value: string) => {
    setParams({
      ...params,
      limit: parseInt(value),
      page: 1,
    });
  };

  const handleSort = () => {
    setParams({
      ...params,
      orderBy: params.orderBy === "asc" ? "desc" : "asc",
      sortBy: "id",
    });
  };

  const confirmLockStore = (id: string) => {
    turnOnLoading();
    mutateLockStore(String(id));
  };

  const confirmUnLockStore = (id: string) => {
    turnOnLoading();
    mutateUnLockStore(String(id));
  };

  const confirmDeleteStore = (id: string) => {
    turnOnLoading();
    mutateDeleteStore(id);
  };

  const handleOpenStoreDetail = (store: Store) => {
    openDrawer({
      title: "詳細情報",
      cancelButtonLabel: "削除",
      okeButtonLabel: "ブロック",
      content: <StoreDetailModal {...store} />,
      onCancel: () => {
        handleOpenConfirmDeleteModal(String(store?.id));
        closeDrawer();
      },
      onOke: () => {
        handleOpenConfirmLockModal(String(store?.id));
        closeDrawer();
      },
    });
  };

  const handleOpenConfirmDeleteModal = (id: string) => {
    openModal({
      title: "警告",
      content: "このアカウントを本当に削除しますか？",
      cancelButtonLabel: "キャンセル",
      okeButtonLabel: "削除",
      onOke: () => {
        confirmDeleteStore(id);
      },
    });
  };

  const handleOpenConfirmLockModal = (id: string) => {
    openModal({
      title: "ブロック",
      content: "このアカウントを本当にブロックしますか？",
      cancelButtonLabel: "キャンセル",
      okeButtonLabel: "削除",
      onOke: () => {
        confirmLockStore(id);
      },
    });
  };

  const handleOpenConfirmUnLockModal = (id: string) => {
    openModal({
      title: "ブロックを解除",
      content: "ブロックを本当に解除しますか？",
      cancelButtonLabel: "キャンセル",
      okeButtonLabel: "削除",
      onOke: () => {
        confirmUnLockStore(id);
      },
    });
  };

  return (
    <Box>
      <CustomTable
        columns={columns}
        data={data?.data || []}
        loading={isFetching}
        pageOptions={PAGE_OPTIONS}
        pagination={{
          total: data?.total,
          pageSize: data?.perPage,
          current: params?.page,
        }}
        onRefresh={refetch}
        onSearch={handleSearch}
        onTableChange={handleTableChange}
        onChangePageSize={handleChangePageSize}
        onSort={handleSort}
        onRow={(record) => ({
          style: {
            background: !!record?.deletedAt ? "#ebebeb" : "white",
          },
        })}
      />
    </Box>
  );
};

export default StorePage;
