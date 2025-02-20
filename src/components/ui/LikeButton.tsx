import { useState } from "react";
import FullyHeart from "../FullyHeart";
import EmptyHeart from "../EmptyHeart";

interface LikeButtonProps {
  onLike?: (liked: boolean) => void;
  defaultLiked?: boolean;
  className?: string;
}

const LikeButton = ({
  onLike,
  defaultLiked = false,
  className = "",
}: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(defaultLiked);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (onLike) {
      onLike(!isLiked); // Callback si besoin
    }
  };

  return (
    <div
      className={`absolute top-0 right-0 p-4 cursor-pointer ${className}`}
      onClick={handleLike}
    >
      {isLiked ? <FullyHeart /> : <EmptyHeart />}
    </div>
  );
};

export default LikeButton;
