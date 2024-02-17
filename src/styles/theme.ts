import { ThemeConfig } from "antd";

export const systemColor = {
  green: "#618264",
  greenLight: "#e3efe4",
  orangeLight: "#FAAD14",
  black: "#000000",
  white: "#FFFFFF",
  yellow: "#FEAB35",
  successLight: "#51FD00",
  gray: "#f0f2f5",
  blue: "#1786ec",
};

export const customAntdTheme: ThemeConfig = {
  token: {
    colorPrimary: systemColor.green,
  },
  components: {
    Menu: {
      itemMarginInline: 0,
      itemMarginBlock: 0,
      itemBorderRadius: 0,
      itemSelectedColor: systemColor.green,
      activeBarWidth: 3,
      itemActiveBg: systemColor.greenLight,
      itemHeight: 40,
      iconSize: 18,
      itemColor: systemColor.black,
      colorItemBgSelected: systemColor.greenLight,
    },
    Button: {
      borderRadius: 3,
      colorPrimaryBg: systemColor.green,
    },
    Input: {
      borderRadius: 3,
    },
    Select: {
      borderRadius: 3,
    },
    Pagination: {
      borderRadius: 3,
      colorPrimary: systemColor.blue,
    },
  },
};
