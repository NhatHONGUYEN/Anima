import { create } from "zustand";

type SessionState = {
  userId: string | null;
  setUserId: (userId: string | null) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
}));

type LikeState = {
  likedAnimes: Record<number, boolean>; // { animeId: boolean }
  toggleLike: (animeId: number) => void; // Fonction pour liker/unliker un anime
};

export const useLikeStore = create<LikeState>((set) => ({
  likedAnimes: {}, // Initialement, aucun anime n'est liké
  toggleLike: (animeId) =>
    set((state) => ({
      likedAnimes: {
        ...state.likedAnimes, // On conserve les likes existants
        [animeId]: !state.likedAnimes[animeId], // On inverse l'état du like pour cet anime
      },
    })),
}));
