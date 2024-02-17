import { HomeFilled, BellFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { routePath } from "router/paths";
import { PolicyIcon, UsersIcon } from "components/Icon";
import { CSSProperties, useEffect, useState } from "react";
import { valueof } from "models/common";
import { systemColor } from "styles/theme";
import { useLocation } from "react-router-dom";

interface Menu {
  key: string;
  icon: React.ReactElement;
  label: string;
  style?: CSSProperties;
  onClick: () => void;
}

const useMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activedKey, setActivedKey] = useState<valueof<typeof routePath>>(
    routePath.Store
  );

  const menus: Menu[] = [
    {
      key: routePath.Store,
      icon: <HomeFilled />,
      label: "店舗一覧",
    },
    {
      key: routePath.User,
      icon: (
        <UsersIcon
          fill={
            activedKey === routePath.User
              ? systemColor.green
              : systemColor.black
          }
        />
      ),
      label: "ユーザー一覧",
    },
    {
      key: routePath.Notification,
      icon: <BellFilled />,
      label: "通知管理",
    },
    {
      key: routePath.Policy,
      icon: (
        <PolicyIcon
          fill={
            activedKey === routePath.Policy
              ? systemColor.green
              : systemColor.black
          }
        />
      ),
      label: "プライバシーポリシー",
    },
  ].map((menu) => ({
    ...menu,
    onClick: () => {
      navigate(menu.key);
      setActivedKey(menu?.key as valueof<typeof routePath>);
    },
  }));

  const mappingMenu: {
    [key: string]: Menu;
  } = menus.reduce((acc, item) => {
    Object.assign(acc, {
      [item.key]: item,
    });

    return acc;
  }, {});

  const selectDefaultMenu = () => {
    setActivedKey(location?.pathname as valueof<typeof routePath>);
  };

  useEffect(() => {
    selectDefaultMenu();
  }, [location]);

  return { menus, mappingMenu, activedKey };
};

export default useMenu;
