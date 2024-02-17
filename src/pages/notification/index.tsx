import { getNotifications } from "apiClients/notifycation";
import Box from "components/Box";
import CustomTable from "components/CustomTable";
import { COMMON_DEBOUNCE_DELAY, PAGE_OPTIONS } from "constants/common";
import { debounce } from "lodash";
import { QueryParams } from "models/apiRequest";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { turnOffNotification } from "redux/slices/notification";
import NotifycationTable from "./components/NotifycationTable";

const UserPage = () => {
  const dispatch = useDispatch();

  const [params, setParams] = useState<QueryParams>({
    sortBy: "asc",
    page: 1,
    limit: 10,
  });

  const { data, isFetching, refetch } = useQuery(
    ["getNotifications", params],
    getNotifications(params),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  const handleSearch = debounce((value: string) => {
    setParams({
      ...params,
      search: value?.trim(),
      page: 1,
    });
  }, COMMON_DEBOUNCE_DELAY);

  const handlePageChange = (page: number) => {
    setParams({
      ...params,
      page,
    });
  };

  const handleChangePageSize = (value: string) => {
    setParams({
      ...params,
      limit: parseInt(value),
      page: 1,
    });
  };

  const handleRefetch = () => {
    refetch();
    dispatch(turnOffNotification());
  };

  useEffect(() => {
    handleRefetch();
  }, []);

  return (
    <Box>
      <CustomTable
        pageOptions={PAGE_OPTIONS}
        isShowSortButton={false}
        customTable={
          <NotifycationTable
            isLoading={isFetching}
            pagination={{
              total: data?.total,
              pageSize: data?.perPage,
              current: params?.page,
            }}
            data={data?.data || []}
            onPageChange={handlePageChange}
          />
        }
        onSearch={handleSearch}
        data={data?.data}
        onRefresh={handleRefetch}
        onChangePageSize={handleChangePageSize}
      />
    </Box>
  );
};

export default UserPage;
