import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL!,
      wellKnown: process.env.AUTH0_ISSUER_BASE_URL! + '.well-known/openid-configuration',
      // authorization: {
      //   params: {
      //     audience: encodeURI('https://www.staging.cartaosimples.com.br/')
      //   }
      // }
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    }
  },
};

export default NextAuth(authOptions);