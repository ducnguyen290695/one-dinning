export enum ActivedStatusE {
  ACTIVED = 0,
  INACTIVED = 1,
}

export enum NotificationType {
  STORE_STATUS_OFF = "store_status_off",
  STORE_STATUS_ON = "store_status_on",
  STORE_LOCK = "store_lock",
  STORE_UNLOCK = "store_unlock",
  STORE_DELETE = "store_delete",

  USER_LOCK = "user_lock",
  USER_UNLOCK = "user_unlock",
  USER_STATUS_OFF = "user_status_off",
  USER_STATUS_ON = "user_status_on",
  USER_DELETE = "user_delete",

  SHOP_NEW_PHOTO = "shop_new_photo",
  USER_REGISTRATION = "user_registration",
}
