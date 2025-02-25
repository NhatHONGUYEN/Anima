export type CustomButtonProps = {
  label: string;
  href?: string;
  icon?: React.ElementType;
  variant?: "default" | "outline";
  onClick?: () => void;
};

export type LikeButtonProps = {
  onLike?: (liked: boolean) => void;
  defaultLiked?: boolean;
  className?: string;
};
