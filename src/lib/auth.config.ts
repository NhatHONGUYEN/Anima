import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      // Ajoute l'ID de l'utilisateur à la session
      if (session.user) {
        session.user.id = token.sub || user.id; // `token.sub` pour JWT, `user.id` pour la base de données
      }
      return session;
    },
    async jwt({ token, user }) {
      // Ajoute l'ID de l'utilisateur au token JWT
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
