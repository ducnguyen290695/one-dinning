import { Button, Modal } from "antd";
import Flex from "components/Flex";
import { createContext, useState } from "react";
import Text from "components/Text";
import { systemColor } from "styles/theme";
import { WarningIcon } from "components/Icon";

interface ModalProviderPropsI {
  children: React.ReactNode;
}

interface ModalConfigI {
  title?: string;
  content?: React.ReactNode | string;
  okeButtonLabel?: string;
  cancelButtonLabel?: string;
  footer?: React.ReactNode;
  onOke?: () => void;
  onCancel?: () => void;
}

export const ModalContext = createContext({
  openModal: (_config?: ModalConfigI) => {},
  closeModal: () => {},
});

const defaultConfigs = {
  title: "",
  content: <></>,
  okeButtonLabel: "",
  cancelButtonLabel: "",
  footer: null,
  onOke: () => {},
  onCancel: () => {},
};

const ModalProvider = (props: ModalProviderPropsI) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<ModalConfigI>(defaultConfigs);

  const openModal = (configs?: ModalConfigI) => {
    setModalConfig({ ...defaultConfigs, ...configs });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    closeModal();
    modalConfig?.onCancel?.();
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Modal
        centered
        open={isOpen}
        onCancel={closeModal}
        footer={modalConfig?.footer}
      >
        <Flex justifyContent="center" marginBottom="10px">
          <WarningIcon />
        </Flex>

        <Text textAlign="center" color={systemColor.green} marginBottom="8px">
          {modalConfig?.title}
        </Text>
        <Text textAlign="center"> {modalConfig?.content}</Text>

        <Flex
          padding="8px 16px 0 16px"
          gap="10px"
          justifyContent="center"
          marginTop="32px"
        >
          <Button
            style={{
              width: "147px",
              height: "36px",
              fontSize: "16px",
            }}
            onClick={handleCancel}
          >
            {modalConfig?.cancelButtonLabel}
          </Button>
          <Button
            style={{
              width: "147px",
              height: "36px",
              fontSize: "16px",
            }}
            type="primary"
            onClick={modalConfig?.onOke}
          >
            {modalConfig?.okeButtonLabel}
          </Button>
        </Flex>
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
