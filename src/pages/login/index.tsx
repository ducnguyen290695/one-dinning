import { Button, Form, notification } from "antd";
import { login } from "apiClients/auth";
import Box from "components/Box";
import CustomInput from "components/CustomInput";
import Flex from "components/Flex";
import Text from "components/Text";
import { notifyMessage } from "constants/message";
import useLoading from "hooks/useLoading";
import { LoginErrorI, LoginFormI } from "models/auth";
import { useNavigate } from "react-router-dom";
import { routePath } from "router/paths";

const LoginPage = () => {
  const [form] = Form.useForm();
  const { turnOffLoading, turnOnLoading } = useLoading();
  const navigate = useNavigate();

  const handleLogin = async (form: LoginFormI) => {
    turnOnLoading();
    try {
      await login({
        email: form?.email?.trim(),
        password: form?.password?.trim(),
      });
      navigate(routePath.Store);

      notification.success({
        message: notifyMessage.success,
      });
    } catch (err) {
      notification.error({
        message: notifyMessage.failed,
        description: (err as LoginErrorI)?.data?.message,
      });
    } finally {
      turnOffLoading();
    }
  };

  return (
    <Flex height="calc(100vh - 72px)" padding="36px 56px" gap="30px">
      <Box height="100%">
        <img
          src="/login-bg.png"
          alt=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>

      <Flex flex={1} alignItems="center" justifyContent="center">
        <Flex width="300px" flexDirection="column" gap="10px">
          <Text fontWeight="700" fontSize="24px" textAlign="center">
            ログイン
          </Text>

          <Form
            form={form}
            name="control-hooks"
            onFinish={handleLogin}
            style={{ maxWidth: 600 }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "メールアドレスの形式が正しくありません。",
                },
              ]}
              normalize={(value) => value.trim()}
            >
              <CustomInput label="アカウント" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "必須項目です。入力してください。",
                },
              ]}
            >
              <CustomInput label="パスワード " inputType="Password" />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                style={{
                  borderRadius: "41px",
                  marginTop: "15px",
                  backgroundColor: "#1786ec",
                  width: "100%",
                  height: "38px",
                }}
              >
                ログイン
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
