import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SessionState = {
  userId: string | null;
  setUserId: (userId: string | null) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
}));

type LikeState = {
  likedAnimes: number[]; // Tableau d'IDs d'animes likés
  toggleLike: (animeId: number) => void; // Fonction pour liker/unliker un anime
};

export const useLikeStore = create<LikeState>()(
  persist(
    (set) => ({
      likedAnimes: [], // Initialement, aucun anime n'est liké
      toggleLike: (animeId) =>
        set((state) => {
          console.log("Current likedAnimes:", state.likedAnimes); // Debug
          const isLiked = state.likedAnimes.includes(animeId);
          if (isLiked) {
            // Si l'anime est déjà liké, on le retire du tableau
            return {
              likedAnimes: state.likedAnimes.filter((id) => id !== animeId),
            };
          } else {
            // Si l'anime n'est pas liké, on l'ajoute au tableau
            return {
              likedAnimes: [...state.likedAnimes, animeId],
            };
          }
        }),
    }),
    {
      name: "like-storage", // Nom sous lequel l'état sera stocké dans le localStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
