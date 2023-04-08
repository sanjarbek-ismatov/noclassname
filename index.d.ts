import { ReactHTML } from "react";

declare module "noclassname" {
  const noClassname: {
    [key: keyof React.ReactHTML]: ReactHTML;
  };
  export default noClassname;
}
