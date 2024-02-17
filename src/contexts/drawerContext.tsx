import { Button, Drawer } from "antd";
import Flex from "components/Flex";
import { createContext, useState } from "react";
import Text from "components/Text";
import { CloseOutlined } from "@ant-design/icons";
import { systemColor } from "styles/theme";
import Box from "components/Box";

interface DrawerProviderPropsI {
  children: React.ReactNode;
}

interface DrawerConfigI {
  title: string;
  content?: React.ReactNode;
  okeButtonLabel?: string;
  cancelButtonLabel?: string;
  onOke?: () => void;
  onCancel?: () => void;
}

export const DrawerContext = createContext({
  openDrawer: (_config?: DrawerConfigI) => {},
  closeDrawer: () => {},
});

const defaultConfigs = {
  title: "",
  content: <></>,
  okeButtonLabel: "",
  cancelButtonLabel: "",
  onOke: () => {},
  onCancel: () => {},
};

const DrawerProvider = (props: DrawerProviderPropsI) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [drawerConfig, setDrawerConfig] =
    useState<DrawerConfigI>(defaultConfigs);

  const openDrawer = (configs?: DrawerConfigI) => {
    setDrawerConfig({ ...defaultConfigs, ...configs });
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}
      <Drawer
        placement="right"
        onClose={closeDrawer}
        open={isOpen}
        bodyStyle={{
          padding: "0px",
        }}
        headerStyle={{
          display: "none",
        }}
      >
        <Flex flexDirection="column" alignItems="space-between" height="100%">
          <Flex
            backgroundColor={systemColor.green}
            color="white"
            justifyContent="space-between"
            height="28px"
            padding="18px"
            alignItems="center"
          >
            <Text fontSize="20px" fontWeight="500">
              {drawerConfig?.title}
            </Text>

            <CloseOutlined
              style={{
                color: "white",
                fontSize: "24px",
              }}
              onClick={closeDrawer}
            />
          </Flex>

          <Box padding="24px 16px" flex={1}>
            {drawerConfig.content}
          </Box>

          <Flex
            height="83px"
            padding="8px 16px 0 16px"
            borderTop="1px solid #ebebeb"
            gap="4px"
          >
            <Button
              style={{
                width: "calc(50% - 2px)",
                height: "40px",
                fontSize: "16px",
              }}
              onClick={drawerConfig?.onCancel}
            >
              {drawerConfig.cancelButtonLabel}
            </Button>
            <Button
              style={{
                width: "calc(50% - 2px)",
                height: "40px",
                fontSize: "16px",
              }}
              type="primary"
              onClick={drawerConfig?.onOke}
            >
              {drawerConfig?.okeButtonLabel}
            </Button>
          </Flex>
        </Flex>
      </Drawer>
    </DrawerContext.Provider>
  );
};

export default DrawerProvider;
