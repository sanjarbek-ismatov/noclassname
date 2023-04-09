declare module "noclassname" {
  const styled: {
    [key in keyof JSX.IntrinsicElements]: (
      segment: TemplateStringsArray,
      ...args: string[]
    ) => () => JSX.Element;
  };
  export default styled;
}
