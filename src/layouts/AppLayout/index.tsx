import { useEffect, useMemo, useState } from "react";
import { Avatar, Badge, Layout, Menu, Popover } from "antd";
import { systemColor } from "styles/theme";
import Box from "components/Box";
import useMenu from "hooks/useMenu";
import Text from "components/Text";
import { useLocation } from "react-router-dom";
import {
  LeftOutlined,
  RightOutlined,
  BellOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import Flex from "components/Flex";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { getUserProfile, logout } from "apiClients/auth";
import { useSelector, useDispatch } from "react-redux";
import { turnOnNotification } from "redux/slices/notification";
import { RootState } from "redux/store";
import Cookies from "js-cookie";
import { ACCESS_TOKEN } from "constants/common";
import { io } from "socket.io-client";
import { baseURL } from "constants/apiPaths";

const { Header, Content, Sider } = Layout;

const menuContent = (
  <Box minWidth="100px">
    <Text width="100%" cursor="pointer" onClick={logout}>
      ログアウト
    </Text>
  </Box>
);

const NOTIFICATION_EVENT = "notification";

const MainLayout = () => {
  const { menus, mappingMenu, activedKey } = useMenu();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation();
  const { data } = useQuery(["getUserProfile"], getUserProfile);
  const { isShowNotify } = useSelector(
    (state: RootState) => state.notification
  );
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return window.navigator.onLine;
  });

  const dispatch = useDispatch();

  const headerTitle = useMemo(() => {
    return mappingMenu?.[location.pathname]?.label;
  }, [location.pathname, mappingMenu]);

  const handleToggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const handleShowNotification = () => {
    dispatch(turnOnNotification());
  };

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    const socket = io(baseURL as string, {
      extraHeaders: {
        authorization: Cookies.get(ACCESS_TOKEN) as string,
      },
    });

    socket.connect();
    socket.on(NOTIFICATION_EVENT, handleShowNotification);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: systemColor.green,
          padding: "0 18px",
        }}
      >
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <img
              src="/logo.png"
              alt=""
              style={{
                height: "40px",
                width: "40px",
                marginRight: "15px",
              }}
            />

            <Text fontWeight={500} fontSize="20px" color={systemColor.white}>
              One dining fes
            </Text>
          </Flex>

          <Flex alignItems="center">
            <Box marginRight="57px" marginTop="5px">
              <Badge
                dot={true}
                color="orange"
                offset={[-5, 22]}
                style={{
                  display: isShowNotify ? "block" : "none",
                }}
              >
                <BellOutlined
                  color={systemColor.white}
                  style={{
                    fontSize: "24px",
                    color: "white",
                  }}
                />
              </Badge>
            </Box>

            <Popover placement="bottomRight" content={menuContent}>
              <Flex cursor="pointer" alignItems="center">
                <Avatar
                  size={32}
                  icon={<UserOutlined />}
                  style={{
                    border: "1px solid white",
                    minWidth: "32px",
                  }}
                  src={data?.profile?.avatarUrl}
                />

                <Flex marginRight="20px">
                  <Badge
                    dot={true}
                    color="green"
                    offset={[14, 10]}
                    style={{
                      display: isOnline ? "block" : "none",
                      height: "10px",
                      width: "10px",
                    }}
                  >
                    <Flex flexDirection="column" marginLeft="8px">
                      <Text
                        lineHeight="20px"
                        fontWeight="700"
                        color="white"
                        fontSize="14px"
                        minWidth="60px"
                      >
                        {data?.name}
                      </Text>
                      <Text
                        lineHeight="20px"
                        fontWeight="400"
                        color="white"
                        fontSize="12px"
                      >
                        {data?.role}
                      </Text>
                    </Flex>
                  </Badge>
                </Flex>

                <CaretDownOutlined
                  style={{
                    color: "white",
                    marginLeft: "12px",
                  }}
                />
              </Flex>
            </Popover>
          </Flex>
        </Flex>
      </Header>

      <Layout>
        <Sider
          width={235}
          style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            paddingTop: 16,
            backgroundColor: systemColor.white,
            position: "relative",
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={[activedKey]}
            selectedKeys={[activedKey]}
            style={{ height: "100%", borderRight: 0 }}
            inlineCollapsed={collapsed}
            items={menus}
          />

          <Box
            position="absolute"
            right="-14px"
            top="calc(50% - 7px)"
            filter="drop-shadow(rgba(40, 43, 0, 0.1) 4px 3px 3px)"
            onClick={handleToggleMenu}
          >
            <Box
              height="66px"
              width="14px"
              backgroundColor="white"
              clipPath="polygon(0 0, 100% 20%, 100% 80%, 0% 100%)"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#8c8c8c"
              cursor="pointer"
              fontSize="11px"
            >
              {collapsed ? <RightOutlined /> : <LeftOutlined />}
            </Box>
          </Box>
        </Sider>

        <Layout
          style={{
            backgroundColor: systemColor.gray,
          }}
        >
          <Header
            style={{
              background: systemColor.white,
              padding: "24px",
              minHeight: "100px",
            }}
          >
            <Text
              fontSize="20px"
              fontWeight={500}
              lineHeight="48px"
              paddingLeft="6px"
            >
              {headerTitle}
            </Text>
          </Header>

          <Box padding="16px 25px">
            <Content
              style={{
                margin: 0,
                minHeight: 280,
                padding: "20px",
                width: "100%",
                backgroundColor: systemColor.white,
              }}
            >
              <Outlet />
            </Content>
          </Box>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
