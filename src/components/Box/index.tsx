import { HTMLAttributes } from "react";
import { BaseComponentModel } from "models/baseComponent";

const Box = (props: BaseComponentModel) => {
  const { children, ...rest } = props;

  return (
    <div
      style={{
        ...rest,
      }}
      {...(rest as HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  );
};

export default Box;
