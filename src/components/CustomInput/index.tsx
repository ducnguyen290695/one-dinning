import { Input, Image, QRCode } from "antd";
import Flex from "components/Flex";
import Text from "components/Text";
import { imagePath } from "constants/imagePath";
import { BaseComponentModel } from "models/baseComponent";
import { CSSProperties } from "react";

const { TextArea } = Input;

export enum InputType {
  Input = "Input",
  TextArea = "TextArea",
  Image = "Image",
  QRCode = "QRCode",
  Password = "Password",
}

interface PropsI extends BaseComponentModel {
  inputType?: keyof typeof InputType;
  value?: string;
  readOnly?: boolean;
  placeholder?: string;
  showCount?: boolean;
  maxLength?: number;
  autoSize?: boolean | Object;
  height?: number;
  label?: string;
  style?: CSSProperties;
  src?: string;
  qrValue?: string;
  size?: number;
  canResize?: "block" | "both" | "horizontal" | "inline" | "none" | "vertical";
  errorLevel?: "L" | "M" | "Q" | "H";
  fallback?: string;
}

const CustomInput = (props: PropsI) => {
  const {
    inputType = InputType.Input,
    readOnly = false,
    value,
    placeholder = "",
    showCount,
    maxLength = 100,
    autoSize,
    height = 100,
    label = "",
    style,
    src = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    qrValue = "-",
    size = 100,
    canResize = "vertical",
    errorLevel = "M",
    fallback,
    ...rest
  } = props;

  const renderInput = () => {
    switch (inputType) {
      case InputType.TextArea: {
        return (
          <Flex flexDirection="column">
            <TextArea
              maxLength={maxLength}
              placeholder={placeholder}
              readOnly={readOnly}
              autoSize={autoSize}
              value={value}
              style={{
                height,
                resize: canResize,
                background: readOnly ? "#f5f5f5" : "unset",
                ...style,
              }}
            />

            {showCount && (
              <Text alignSelf="flex-end" marginTop="5px">
                {value ? value?.length : 0}/{maxLength}
              </Text>
            )}
          </Flex>
        );
      }

      case InputType.Image: {
        return (
          <Image
            width={110}
            height={110}
            src={src}
            style={{
              borderRadius: "15px",
              border: "1px solid rgb(240 240 240)",
              objectFit: "cover",
            }}
            fallback={fallback || imagePath.placeholder}
          />
        );
      }

      case InputType.QRCode: {
        return (
          <QRCode
            value={qrValue}
            size={size}
            errorLevel={errorLevel}
            style={{
              padding: 0,
              border: "none",
              ...style,
            }}
          />
        );
      }

      case InputType.Password: {
        return <Input.Password placeholder={placeholder} />;
      }

      default: {
        return (
          <Input
            readOnly={readOnly}
            value={value}
            placeholder={placeholder}
            style={{
              height: "38px",
              backgroundColor: readOnly ? "#f5f5f5" : "unset",
              ...style,
            }}
          />
        );
      }
    }
  };

  return (
    <Flex flexDirection="column" {...rest}>
      <Text marginBottom="8px" fontSize="14px">
        {label}
      </Text>
      {renderInput()}
    </Flex>
  );
};

export default CustomInput;
