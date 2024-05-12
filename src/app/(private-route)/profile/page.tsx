"use client";
import { Footer, Navbar } from "@/components";
import { Typography, Box } from "@mui/joy";
import { useSession } from "next-auth/react";
import React from "react";

export default function Admin() {
	const { data: session } = useSession();
	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				background: (theme: any) => theme.palette.background.surface,
			}}
		>
			<Navbar session={session!} status="authenticated" />
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Typography component="pre">
					{JSON.stringify(session?.user, null, 2)}
				</Typography>
			</Box>
			<Footer />
		</Box>
	);
}
