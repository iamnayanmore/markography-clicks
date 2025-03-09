declare module "*.css";

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "jquery" {
  const jQuery: any;
  export default jQuery;
}

declare module 'masonry-layout' {
  const Masonry: any;
  export default Masonry;
}