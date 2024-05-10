"use client";
import { Box, Divider, Chip } from "@mui/joy";
import {
	Navbar,
	Hero,
	Features,
	PatchNotes,
	Download,
	Footer,
} from "@/components";
import { useSession } from "next-auth/react";
import React from "react";

export default function Home() {
	const { data: session, status } = useSession();
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				background: (theme: any) => theme.palette.background.surface,
			}}
		>
			<Navbar status={status} session={session!} />
			<Hero />
			<Divider sx={{ px: { lg: 25, xs: 10 } }}>
				<Chip sx={{ px: 2, py: 1 }}>Why should you use our product?</Chip>
			</Divider>
			<Features />
			<Divider sx={{ px: { lg: 25, xs: 10 } }}>
				<Chip sx={{ px: 2, py: 1 }}>Still not confident?</Chip>
			</Divider>
			<PatchNotes />
			<Divider sx={{ px: { lg: 25, xs: 10 } }}>
				<Chip sx={{ px: 2, py: 1 }}>Where do you start? Here!</Chip>
			</Divider>
			<Download />
			<Divider />
			<Footer />
		</Box>
	);
}
