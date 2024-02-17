import { HTMLAttributes } from "react";
import { BaseComponentModel } from "models/baseComponent";

const Text = (props: BaseComponentModel) => {
  const { children, ...rest } = props;

  return (
    <p
      style={{ margin: 0, ...rest }}
      {...(rest as HTMLAttributes<HTMLParagraphElement>)}
    >
      {children}
    </p>
  );
};

export default Text;
