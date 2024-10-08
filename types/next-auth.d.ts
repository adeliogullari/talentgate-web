import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    idToken: string
    accessToken?: string; // Optional property for access token
    refreshToken?: string; // Optional property for refresh token
  }

  interface JWT {
    idToken: string;
    accessToken?: string; // Optional property for access token
    refreshToken?: string; // Optional property for refresh token
  }

  interface Token {
    idToken: string;
  }
}