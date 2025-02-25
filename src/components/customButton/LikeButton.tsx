"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import toast from "react-hot-toast";
import Image from "next/image";
import EmptyHeart from "./EmptyHeart";
import FullyHeart from "./FullyHeart";

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

  const handleLike = (event: React.MouseEvent) => {
    event.stopPropagation(); // Empêche la propagation de l'événement
    setIsLiked(!isLiked);

    // Affiche une notification avec un GIF
    const gifSrc = !isLiked ? "/like.gif" : "/dislike.gif";
    toast.custom((t) => (
      <div
        className={`${t.visible ? "animate-enter" : "animate-leave"} max-w-3xl`}
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

    // Appelle la fonction onLike si elle est définie
    if (onLike) {
      onLike(!isLiked);
    }
  };

  return (
    <motion.div
      className={`absolute top-0 right-0 p-4 cursor-pointer ${className}`}
      onClick={handleLike} // Gère le clic ici
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
