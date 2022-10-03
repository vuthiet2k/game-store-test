declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
