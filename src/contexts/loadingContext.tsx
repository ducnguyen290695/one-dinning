import Box from "components/Box";
import { createContext, useCallback, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const LoadingContext = createContext({
  isLoading: false,
  turnOnLoading: () => {},
  turnOffLoading: () => {},
});

const LoadingProvider = ({ children }: { children: React.ReactElement }) => {
  const [isLoading, setIsLoading] = useState(false);

  const turnOnLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const turnOffLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <LoadingContext.Provider
      value={{ turnOnLoading, turnOffLoading, isLoading }}
    >
      {isLoading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          zIndex={10000}
          backgroundColor="rgba(0,0,0,0.4)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spin
            indicator={
              <LoadingOutlined style={{ fontSize: 50, color: "white" }} spin />
            }
          />
        </Box>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
