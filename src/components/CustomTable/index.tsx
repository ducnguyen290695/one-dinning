import React from "react";
import { Button, Empty, Input, Select, Table } from "antd";
import Box from "components/Box";
import Flex from "components/Flex";
import type {
  ColumnsType,
  TablePaginationConfig,
  TableProps,
} from "antd/es/table";
import {
  RedoOutlined,
  SearchOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Text from "components/Text";
import { FilterIcon } from "components/Icon";
import useResponsive from "hooks/useResponsive";
import { AnyObject } from "antd/es/_util/type";
import { systemColor } from "styles/theme";

export const itemRender =
  ({ currentPage, totalPage }: { currentPage: number; totalPage: number }) =>
  (
    index: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
    originalElement: React.ReactNode
  ) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPage;
    const isCurrentPage = currentPage === index;

    if (type === "prev") {
      return (
        <Box
          border="1px solid #d9d9d9"
          borderRadius="3px"
          height="32px"
          marginTop="1px"
        >
          <LeftOutlined
            style={{
              color: isFirstPage ? "#d9d9d9" : "unset",
            }}
          />
        </Box>
      );
    }
    if (type === "next") {
      return (
        <Box
          border="1px solid #d9d9d9"
          borderRadius="3px"
          height="32px"
          marginTop="1px"
        >
          <RightOutlined
            style={{
              color: isLastPage ? "#d9d9d9" : "unset",
            }}
          />
        </Box>
      );
    }

    if (type === "page") {
      return (
        <Box
          border={isCurrentPage ? "none" : "1px solid #d9d9d9"}
          borderRadius="3px"
          color={isCurrentPage ? systemColor.blue : systemColor.black}
          minWidth="32px"
        >
          {index}
        </Box>
      );
    }

    return originalElement;
  };

interface PropsI {
  columns?: ColumnsType<AnyObject>;
  data?: AnyObject[];
  pageOptions?: {
    value: string;
    label: string;
  }[];
  isShowSortButton?: boolean;
  customTable?: React.ReactNode;
  loading?: boolean;
  pagination?: TablePaginationConfig;
  onRow?: (record?: AnyObject, index?: number) => Object;
  onTableChange?: TableProps<AnyObject>["onChange"];
  onChangePageSize?: (value: string) => void;
  onSearch?: (value: string) => void;
  onRefresh?: () => void;
  onSort?: () => void;
}

const CustomTable = (props: PropsI) => {
  const {
    columns = [],
    data = [],
    pageOptions = [],
    isShowSortButton = true,
    customTable,
    loading,
    pagination,
    onRow,
    onTableChange,
    onChangePageSize,
    onSearch,
    onRefresh,
    onSort,
  } = props;

  const { windowHeight } = useResponsive();

  return (
    <Box>
      <Flex marginBottom="32px" justifyContent="space-between" width="100%">
        <Flex gap="16px" height="36px">
          <Input
            prefix={<SearchOutlined />}
            style={{
              width: "144px",
              height: "100%",
            }}
            placeholder="検索"
            onChange={(e) => {
              onSearch?.(e.target.value);
            }}
          />

          {isShowSortButton && (
            <Button
              icon={<FilterIcon />}
              style={{
                minWidth: "144px",
                height: "100%",
              }}
              onClick={onSort}
            >
              営業中のお店を検索
            </Button>
          )}

          <Button
            style={{
              width: "36px",
              height: "100%",
            }}
            icon={<RedoOutlined />}
            onClick={onRefresh}
          />
        </Flex>

        <Flex gap="8px" alignItems="center">
          <Text>〇〇件の中に</Text>

          <Select
            defaultValue="10"
            style={{ width: "80px", height: "100%" }}
            onChange={onChangePageSize}
            options={pageOptions}
          />

          <Text>件を表示する</Text>
        </Flex>
      </Flex>

      {customTable ? (
        data?.length ? (
          customTable
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          onChange={onTableChange}
          pagination={{
            position: ["bottomCenter"],
            showSizeChanger: false,
            itemRender: itemRender({
              currentPage: pagination?.current as number,
              totalPage: Math.ceil(
                Number(pagination?.total) / Number(pagination?.pageSize)
              ),
            }),
            ...pagination,
          }}
          scroll={{
            x: 0,
            y: windowHeight - 430,
          }}
          onRow={onRow}
        />
      )}
    </Box>
  );
};

export default CustomTable;
