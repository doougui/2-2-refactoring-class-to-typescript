import { IconBaseProps } from "react-icons"

export type InputContainerProps = {
  isFocused: boolean;
  isFilled: boolean;
}

export type InputProps = {
  name: string;
  placeholder?: string;
  icon?: React.ComponentType<IconBaseProps>;
}