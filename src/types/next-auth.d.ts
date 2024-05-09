import NextAuth from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			_id: string;
			name: string;
			email: string;
			password: string;
			avatar_url: string;
			birthday: Date;
			createdAt: Date;
			updatedAt: Date;
		};
	}
}
