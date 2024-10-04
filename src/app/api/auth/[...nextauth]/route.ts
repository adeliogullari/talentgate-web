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

                // const response = await fetch('http://localhost:8000/api/v1/auth/google', {
                //     method: 'POST',
                //     headers: {'Content-Type': 'application/json'},
                //     body: JSON.stringify({'token': account.id_token})
                // })

                // const responseJson = await response.json();

                // Cookies.set('accessToken', responseJson.access_token);
                // Cookies.set('refreshToken', responseJson.refresh_token)
                token.idToken = account.id_token;

                console.log(token);
                console.log(user);
                console.log(account);
                console.log(profile);
            }

            return token;
        },
        async session({ session, token }) {
            // Include the tokens in the session object
            session.idToken = token.idToken;
            console.log(session);

            return session;
        },
    },
});

export { handler as GET, handler as POST }