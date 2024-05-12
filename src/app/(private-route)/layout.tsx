import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../api/config/authOptions";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
	children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/");
	}

	return <>{children}</>;
}
