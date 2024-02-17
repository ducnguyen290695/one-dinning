import Box from "components/Box";
import Flex from "components/Flex";
import Text from "components/Text";

interface PropsI {
  isLocked: boolean;
  isDeleted: boolean;
}

const ActivedStatus = (props: PropsI) => {
  const { isLocked, isDeleted } = props;

  return (
    <Flex
      backgroundColor={isDeleted ? "#dedede" : isLocked ? "#fff7e8" : "#ecfbe6"}
      borderRadius="7px"
      padding="8px"
      alignItems="center"
      gap="8px"
      minWidth="100px"
    >
      <Box
        backgroundColor={
          isDeleted ? "#dedede" : isLocked ? "#9f9f9f" : "#52c41a"
        }
        height="6px"
        width="6px"
        borderRadius="50%"
      />
      <Text>{isDeleted ? "削除済み" : isLocked ? "休止中" : "使用中"}</Text>
    </Flex>
  );
};

export default ActivedStatus;
