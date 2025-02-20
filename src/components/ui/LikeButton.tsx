import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import FullyHeart from "../FullyHeart";
import EmptyHeart from "../EmptyHeart";
import toast from "react-hot-toast";
import Image from "next/image";

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

    // Sélectionne le bon GIF et message selon l'état
    const gifSrc = !isLiked ? "/like.gif" : "/dislike.gif";

    toast.custom((t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"} maxw-3xl`}
      >
        <div className="relative p-4">
          <Image
            className="h-40 w-40 rounded-full"
            src={gifSrc}
            alt={isLiked ? "Disliked" : "Liked"}
            width={200}
            height={200}
          />
        </div>
      </div>
    ));

    if (onLike) {
      onLike(!isLiked);
    }
  };

  return (
    <motion.div
      className={`absolute top-0 right-0 p-4 cursor-pointer ${className}`}
      onClick={handleLike}
      whileTap={{ scale: 0.8 }} // Effet d'appui
      whileHover={{ scale: 1.1 }} // Effet au survol
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
        key={isLiked ? "liked" : "unliked"} // Change d'icône avec une animation
      >
        {isLiked ? <FullyHeart /> : <EmptyHeart />}
      </motion.div>
    </motion.div>
  );
};

export default LikeButton;
