import { ComponentProps } from "react";
declare module "noclassname" {
  const styled: {
    [key in keyof JSX.IntrinsicElements]: (
      segment: TemplateStringsArray,
      ...args: string[]
    ) => (props: ComponentProps<key>) => JSX.Element;
  };
  export default styled;
}
