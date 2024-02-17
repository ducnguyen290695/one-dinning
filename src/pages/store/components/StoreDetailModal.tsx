import CustomInput from "components/CustomInput";
import Flex from "components/Flex";
import { imagePath } from "constants/imagePath";
import useResponsive from "hooks/useResponsive";
import { Store } from "models/store";

interface PropsI extends Store {}

const StoreDetailModal = (props: PropsI) => {
  const { phoneNumber, address, email, description, qrCode, avatarUrl } = props;

  console.log({ props });

  const { isLaptop } = useResponsive();

  return (
    <Flex flexDirection="column" rowGap={isLaptop ? "10px" : "30px"}>
      <Flex alignItems="flex-end" gap="8px">
        <CustomInput
          inputType="Image"
          label="店名"
          readOnly
          showCount
          src={avatarUrl}
          fallback={imagePath.placeholder}
        />
        <CustomInput
          inputType="QRCode"
          size={60}
          marginBottom="-12px"
          marginLeft="-12px"
          qrValue={qrCode}
        />
      </Flex>
      <CustomInput label="電話番号" readOnly value={phoneNumber} />
      <CustomInput label="住所" readOnly value={address} />
      <CustomInput label="メール" readOnly value={email} />
      <CustomInput
        inputType="TextArea"
        label="内容"
        readOnly
        showCount
        value={description}
      />
    </Flex>
  );
};

export default StoreDetailModal;
