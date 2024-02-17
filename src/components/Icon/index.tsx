import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import {
  DeleteSvg,
  FilterSvg,
  LockSvg,
  PolicySvg,
  UnlockSvg,
  UsersSvg,
  WarningSvg,
} from "./svg";

const PolicyIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={() => PolicySvg(props)} />
);

const UsersIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={() => UsersSvg(props)} />
);

const FilterIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={() => FilterSvg(props)} />
);

const WarningIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={() => WarningSvg(props)} />
);

const DeleteIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={() => DeleteSvg(props)} />
);

const UnlockIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={() => UnlockSvg(props)} />
);

const LockIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={() => LockSvg(props)} />
);

export {
  PolicyIcon,
  UsersIcon,
  FilterIcon,
  WarningIcon,
  DeleteIcon,
  UnlockIcon,
  LockIcon,
};
