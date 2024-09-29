import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import LinkedinProvider from "next-auth/providers/linkedin"
import { google, login } from "@/app/login/_lib/slice";
import { makeStore } from "@/lib/store";


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
                makeStore().dispatch(google({'token': account.id_token}));
                console.log(token);
                console.log(user);
                console.log(account);
                console.log(profile);
            }

            return token;
        },
    },
});

export { handler as GET, handler as POST }