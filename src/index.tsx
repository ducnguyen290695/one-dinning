import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import DrawerProvider from "contexts/drawerContext";
import { customAntdTheme } from "styles/theme";
import ConfigProvider from "antd/es/config-provider";
import ModalProvider from "contexts/modalContext";
import LoadingProvider from "contexts/loadingContext";
import { QueryClient, QueryClientProvider } from "react-query";

import "suneditor/dist/css/suneditor.min.css";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "redux/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider theme={customAntdTheme}>
        <LoadingProvider>
          <ModalProvider>
            <DrawerProvider>
              <QueryClientProvider client={queryClient}>
                <App />
              </QueryClientProvider>
            </DrawerProvider>
          </ModalProvider>
        </LoadingProvider>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
