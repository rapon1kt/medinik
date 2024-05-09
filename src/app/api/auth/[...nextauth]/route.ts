import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions: any = {
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const response = await fetch("http://localhost:8884/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password,
					}),
				});

				const user = await response.json();

				if (user && response.ok) {
					return user;
				} else {
					return;
				}
			},
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		}),
	],
	pages: { signIn: "/login" },
	callbacks: {
		async jwt({ token, user }: any) {
			user && (token.user = user);
			return token;
		},
		async session({ session, token }: any) {
			session = token.user as any;
			return session;
		},
	},
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
