import CustomInput from "components/CustomInput";
import Flex from "components/Flex";
import useResponsive from "hooks/useResponsive";
import { User } from "models/user";
import { formatDate } from "utils/date";

interface PropsI extends User {}

const UserDetailModal = (props: PropsI) => {
  const { name, email, profile } = props;

  console.log({ props });

  const { isLaptop } = useResponsive();

  return (
    <Flex flexDirection="column" rowGap={isLaptop ? "10px" : "30px"}>
      <CustomInput
        inputType="Image"
        label="プロフィール"
        readOnly
        showCount
        src={profile?.avatarUrl}
      />
      <CustomInput label="お名前" readOnly value={name} />
      <CustomInput label="電話番号" readOnly value={profile?.phoneNumber} />
      <CustomInput label="メール" readOnly value={email} />
      <CustomInput
        label="生年月日"
        readOnly
        value={formatDate(profile?.dateOfBirth)}
      />
      <CustomInput label="住所" readOnly value={profile?.address} />
    </Flex>
  );
};

export default UserDetailModal;
