import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import LinkedinProvider from "next-auth/providers/linkedin"



const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        LinkedinProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
          })
    ],
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (account?.provider === 'google') {
                token.idToken = account.id_token;
            }

            return token;
        },
        async session({ session, token }) {
            session.idToken = token.idToken;

            return session;
        },
    },
});

export { handler as GET, handler as POST }