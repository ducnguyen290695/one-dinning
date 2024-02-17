import { CSSProperties, HTMLAttributes } from "react";

export interface BaseComponentModel
  extends Omit<
      HTMLAttributes<HTMLDivElement>,
      "color" | "content" | "translate"
    >,
    CSSProperties {
  children?: React.ReactNode | string;
}
