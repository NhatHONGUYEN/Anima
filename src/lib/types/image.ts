export type ImageProps = {
  src: string;
  alt: string;
  fill: boolean;
  sizes: string;
  style: {
    objectFit: "cover" | "contain" | "fill" | "none" | "scale-down";
  };
  className: string;
  priority: boolean;
};
