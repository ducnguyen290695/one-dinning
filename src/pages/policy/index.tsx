import Box from "components/Box";
import { useEffect, useRef, useState } from "react";
import { EditFilled, SaveFilled } from "@ant-design/icons";
import { systemColor } from "styles/theme";
import { createPolicy, getPolicy } from "apiClients/policy";
import useLoading from "hooks/useLoading";
import { Policy } from "models/policy";
import { notification } from "antd";
import { notifyMessage } from "constants/message";
import Editor from "components/Editor";
import { POLICY_KEY } from "constants/common";

const PolicyPage = () => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { turnOffLoading, turnOnLoading } = useLoading();
  const [policy, setPolicy] = useState<Policy>();
  const policyContentRef = useRef<HTMLDivElement>(null);

  const handleChangePolicyContent = (content: string) => {
    setPolicy({
      ...policy,
      content,
    } as Policy);
  };

  const handleSave = async () => {
    turnOnLoading();
    try {
      await createPolicy(policy as Policy);
      toggleEditMode();
      await getDefaultPolicy();
    } catch (err) {
      console.error({ err });
      notification.error({
        message: notifyMessage.failed,
      });
    } finally {
      turnOffLoading();
      notification.success({
        message: notifyMessage.success,
      });
    }
  };

  const createDefaultPolicy = async () => {
    const defaultPolicy = {
      key: POLICY_KEY,
      title: POLICY_KEY,
      content: "<div>Policy content</div>",
    };

    await createPolicy(defaultPolicy);
  };

  const getDefaultPolicy = async () => {
    try {
      const { data } = await getPolicy(POLICY_KEY);

      if (!policyContentRef.current) {
        return;
      }

      if (data?.title) {
        setPolicy(data);

        policyContentRef.current.innerHTML = data?.content || "";

        return;
      }

      await createDefaultPolicy();
      getDefaultPolicy();
    } catch (err) {
      console.error({ err });
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    getDefaultPolicy();
  }, []);

  return (
    <Box minHeight="calc(100vh - 240px)">
      {isEditMode ? (
        <Box>
          <SaveFilled
            style={{
              scale: "1.8",
              transformOrigin: "0 0",
              marginBottom: "20px",
              color: systemColor.green,
              cursor: "pointer",
            }}
            onClick={handleSave}
          />
          <Editor
            height="calc(100vh - 380px)"
            defaultValue={policy?.content || ""}
            autoFocus={true}
            onChange={handleChangePolicyContent}
          />
        </Box>
      ) : (
        <Box>
          <EditFilled
            style={{
              scale: "1.5",
              marginBottom: "10px",
              color: systemColor.green,
              cursor: "pointer",
            }}
            onClick={toggleEditMode}
          />
          <Box
            maxHeight="calc(100vh - 270px)"
            overflowY="auto"
            padding="0 160px"
          >
            <div ref={policyContentRef}></div>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PolicyPage;
