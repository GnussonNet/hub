import * as icons from "lucide-react";
import type { LucideProps } from "lucide-react";

export interface IconProps extends Omit<LucideProps, "color" | "size"> {
  name: keyof Omit<typeof icons, "createReactComponent">;
  color?: string;
  size?: string | number;
}

const LucideIcon = ({ name, color, size, ...rest }: IconProps) => {
  const LucideIcon = icons[name] as React.ComponentType<any>;

  return <LucideIcon color={color} size={size} {...rest} />;
};

export default LucideIcon;
