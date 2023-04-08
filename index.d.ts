declare module "noclassname" {
  const noClassname: {
    [key in keyof JSX.IntrinsicElements]: any;
  };
  export default noClassname;
}
