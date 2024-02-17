import Box from "components/Box";
import { useEffect, useRef } from "react";
import { createPolicy, getPolicy } from "apiClients/policy";
import { POLICY_KEY } from "constants/common";

const PolicyPublicPage = () => {
  const policyContentRef = useRef<HTMLDivElement>(null);

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
        policyContentRef.current.innerHTML = data?.content || "";

        return;
      }

      await createDefaultPolicy();
      getDefaultPolicy();
    } catch (err) {
      console.error({ err });
    }
  };

  useEffect(() => {
    getDefaultPolicy();
  }, []);

  return (
    <Box minHeight="calc(100vh - 240px)" padding="0 160px">
      <div ref={policyContentRef}></div>
    </Box>
  );
};

export default PolicyPublicPage;
