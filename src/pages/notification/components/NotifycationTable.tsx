import { Pagination, Spin, TablePaginationConfig } from "antd";
import { itemRender } from "components/CustomTable";
import Flex from "components/Flex";
import { Notifycation } from "models/notifycation";
import NotifycationRow from "./NotifycationRow";

interface PropsI {
  data?: Notifycation[];
  pagination?: TablePaginationConfig;
  isLoading?: boolean;
  onPageChange?: (page: number, pageSize: number) => void;
}

const NotifycationTable = (props: PropsI) => {
  const { data, pagination, isLoading = false, onPageChange } = props;

  return (
    <Flex
      flexDirection="column"
      gap="20px"
      margin="0 -20px -72px -20px"
      borderTop="1px solid rgba(0, 0, 0, 0.06)"
    >
      <Flex
        flexDirection="column"
        gap="16px"
        backgroundColor="#f0f2f5"
        maxHeight="calc(100vh - 360px)"
        overflowY="auto"
        position="relative"
      >
        {isLoading && (
          <Flex
            position="absolute"
            top="0px"
            left="0px"
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Spin />
          </Flex>
        )}
        {data?.map((item) => <NotifycationRow {...item} />)}
      </Flex>

      <Pagination
        defaultCurrent={1}
        current={pagination?.current}
        total={pagination?.total}
        pageSize={pagination?.pageSize}
        showSizeChanger={false}
        style={{
          height: "32px",
          alignSelf: "center",
        }}
        onChange={onPageChange}
        itemRender={itemRender({
          currentPage: pagination?.current as number,
          totalPage: Math.ceil(
            Number(pagination?.total) / Number(pagination?.pageSize)
          ),
        })}
      />
    </Flex>
  );
};

export default NotifycationTable;
