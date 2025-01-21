import type { NextAuthConfig } from 'next-auth';
import { Pages } from './app/lib/constants';

export const authConfig = {
  pages: {
    signIn: Pages.LogIn,
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith(Pages.Dashboard);
      if (isOnDashboard) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL(Pages.Dashboard, nextUrl));
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      console.log('DEBUG: ', url, baseUrl);
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
