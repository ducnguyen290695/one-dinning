import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { AnyObject } from "antd/es/_util/type";
import { deleteUser, getUsers, lockUser, unLockUser } from "apiClients/user";
import Box from "components/Box";
import CustomTable from "components/CustomTable";
import Flex from "components/Flex";
import { DeleteIcon, LockIcon, UnlockIcon } from "components/Icon";
import Text from "components/Text";
import { COMMON_DEBOUNCE_DELAY, PAGE_OPTIONS } from "constants/common";
import useDrawer from "hooks/useDrawer";
import useLoading from "hooks/useLoading";
import useModal from "hooks/useModal";
import { debounce } from "lodash";
import { QueryParams } from "models/apiRequest";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { sleep } from "utils/common";
import UserDetailModal from "./components/UserDetailModal";
import { notification } from "antd";
import { User } from "models/user";
import { notifyMessage } from "constants/message";

const UserPage = () => {
  const { openDrawer, closeDrawer } = useDrawer();
  const { openModal, closeModal } = useModal();
  const { turnOffLoading, turnOnLoading } = useLoading();

  const [params, setParams] = useState<QueryParams>({
    sortBy: "asc",
    page: 1,
    limit: 10,
  });

  const { data, isFetching, refetch } = useQuery(
    ["getUsers", params],
    getUsers(params),
    { keepPreviousData: true }
  );

  const columns: ColumnsType<AnyObject> = [
    {
      title: "STT",
      dataIndex: "no",
      width: "7%",
      align: "center",
      render: (_, record, index) => {
        return (
          <Text
            onClick={() => handleOpenUserDetail(record as User)}
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
            onClick={() => handleOpenUserDetail(record as User)}
            cursor="pointer"
          >
            {text}
          </Text>
        );
      },
    },
    {
      title: "お名前",
      dataIndex: "name",
      align: "center",
      width: "15%",
      render: (text) => {
        return <Text textAlign="left">{text}</Text>;
      },
    },
    {
      title: "電話番号",
      dataIndex: "phone",
      width: "12%",
      align: "center",
      render: (_, record) => {
        return <Text textAlign="left">{record?.profile?.phoneNumber}</Text>;
      },
    },
    {
      title: "メール",
      dataIndex: "email",
    },
    {
      title: "住所",
      dataIndex: "address",
      render: (_, record) => {
        return <Text>{record?.profile?.address}</Text>;
      },
    },
    {
      title: "詳細",
      dataIndex: "actions",
      width: "10%",
      align: "center",
      render: (_, record) => {
        return (
          <Flex gap="8px" alignItems="center">
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
                record?.isLocked
                  ? handleOpenConfirmUnLockModal(record?.id)
                  : handleOpenConfirmLockModal(record?.id)
              }
            >
              {record?.isLocked ? <LockIcon /> : <UnlockIcon />}
            </Box>
          </Flex>
        );
      },
    },
  ];

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

  const { mutate: mutateLockUser } = useMutation(lockUser, {
    onSuccess: handleSuccess,
    onError: handleError,
    onSettled: handleSettled,
  });

  const { mutate: mutateUnLockUser } = useMutation(unLockUser, {
    onSuccess: handleSuccess,
    onError: handleError,
    onSettled: handleSettled,
  });

  const { mutate: mutateDeleteUser } = useMutation(deleteUser, {
    onSuccess: handleSuccess,
    onError: handleError,
    onSettled: handleSettled,
  });

  const confirmLockUser = (id: string) => {
    turnOnLoading();
    mutateLockUser(String(id));
  };

  const confirmUnLockUser = (id: string) => {
    turnOnLoading();
    mutateUnLockUser(String(id));
  };

  const confirmDeleteUser = (id: string) => {
    turnOnLoading();
    mutateDeleteUser(id);
  };

  const handleOpenUserDetail = (user: User) => {
    openDrawer({
      title: "詳細情報",
      cancelButtonLabel: "削除",
      okeButtonLabel: "ブロック",
      content: <UserDetailModal {...user} />,
      onCancel: () => {
        handleOpenConfirmDeleteModal(String(user?.id));
        closeDrawer();
      },
      onOke: () => {
        handleOpenConfirmLockModal(String(user?.id));
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
        confirmDeleteUser(id);
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
        confirmLockUser(id);
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
        confirmUnLockUser(id);
      },
    });
  };

  const handleSearch = debounce((value: string) => {
    setParams({
      ...params,
      search: value?.trim(),
      page: 1,
    });
  }, COMMON_DEBOUNCE_DELAY);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setParams({
      ...params,
      page: pagination?.current,
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
    if (params.sortBy === "asc") {
      setParams({
        ...params,
        sortBy: "desc",
      });

      return;
    }

    setParams({
      ...params,
      sortBy: "asc",
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
        isShowSortButton={false}
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

export default UserPage;
