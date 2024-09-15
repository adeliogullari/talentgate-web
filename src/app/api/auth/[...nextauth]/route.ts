import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),


    ],
    callbacks: {
        async jwt({ token, user, account, profile }) {
            // Check if the account is from Google
            if (account?.provider === 'google') {
                console.log(token);
                console.log(user);
                console.log(account);
                console.log(profile);
            }

            // Always return the token object at the end of the callback
            return token;
        },
    },
});

export { handler as GET, handler as POST }