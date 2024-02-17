import { Avatar } from "antd";
import Flex from "components/Flex";
import Text from "components/Text";
import { NotificationType } from "constants/enum";
import { imagePath } from "constants/imagePath";
import { Notifycation } from "models/notifycation";
import { useMemo } from "react";
import { DATE_TIME_FORMAT, formatDate } from "utils/date";

interface PropI extends Notifycation {}

const NotifycationRow = (props: PropI) => {
  const { title, createdAt, body, type, store, relatedUser } = props;

  const avatarUrl = useMemo(() => {
    switch (type) {
      case NotificationType.STORE_STATUS_ON:
      case NotificationType.STORE_STATUS_OFF:
      case NotificationType.STORE_LOCK:
      case NotificationType.STORE_UNLOCK: {
        return store?.avatarUrl;
      }

      case NotificationType.USER_LOCK:
      case NotificationType.USER_UNLOCK:
      case NotificationType.SHOP_NEW_PHOTO:
      case NotificationType.STORE_DELETE: {
        return relatedUser?.profile?.avatarUrl;
      }
    }
  }, [relatedUser?.profile?.avatarUrl, store?.avatarUrl, type]);

  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      padding="10px 26px"
    >
      <Flex gap="25px">
        <Avatar size={60} src={avatarUrl || imagePath.placeholder} />

        <Flex flexDirection="column" justifyContent="center" gap="8px">
          <Flex>
            <Text fontWeight="bold" marginRight="5px" fontSize="16px">
              {title}
            </Text>
          </Flex>

          <Text fontSize="14px">{body}</Text>
        </Flex>
      </Flex>

      <Text>{formatDate(String(createdAt), DATE_TIME_FORMAT)}</Text>
    </Flex>
  );
};

export default NotifycationRow;
