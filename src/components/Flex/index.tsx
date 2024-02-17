import { HTMLAttributes } from "react";
import { BaseComponentModel } from "models/baseComponent";

const Flex = (props: BaseComponentModel) => {
  const { children, ...rest } = props;

  return (
    <div
      style={{ display: "flex", ...rest }}
      {...(rest as HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  );
};

export default Flex;
