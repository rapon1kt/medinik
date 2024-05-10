"use client";
import {
	Box,
	Stack,
	Button,
	Container,
	Typography,
	Dropdown,
	Menu,
	MenuItem,
	MenuButton,
	Link,
} from "@mui/joy";
import {
	Download,
	Info,
	Language,
	Support,
	LoginRounded,
	RocketLaunch,
	AccountCircle,
	LogoutRounded,
} from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import React from "react";

interface NavBarProps {
	session: Session;
	status: "authenticated" | "loading" | "unauthenticated";
}

function Navbar({ session, status }: NavBarProps) {
	const media = useMediaQuery("(max-width: 746px)");
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			{!media && (
				<Container
					maxWidth="lg"
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "end",
						p: 1,
					}}
				>
					<Dropdown>
						<MenuButton variant="plain" size="sm" startDecorator={<Language />}>
							English
						</MenuButton>
						<Menu size="sm">
							<MenuItem sx={{ gap: 1 }}>Portuguese</MenuItem>
						</Menu>
					</Dropdown>
				</Container>
			)}
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					mt: media ? "2rem" : 0,
				}}
			>
				<Typography
					component="a"
					href="/"
					level="h3"
					startDecorator={<RocketLaunch />}
					className="logo"
					sx={{ textDecoration: "none" }}
				>
					Medinik
				</Typography>
				{!media ? (
					<>
						<Stack sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
							<Link href="/download">
								<Button
									variant="plain"
									color="neutral"
									startDecorator={<Download />}
								>
									Downloads
								</Button>
							</Link>
							<Link href="/infos">
								<Button
									variant="plain"
									color="neutral"
									startDecorator={<Info />}
								>
									Informations
								</Button>
							</Link>
							<Link href="/support">
								<Button
									variant="plain"
									color="neutral"
									startDecorator={<Support />}
								>
									Support
								</Button>
							</Link>
						</Stack>
						{status !== "authenticated" ? (
							<Link href="/login	">
								<Button
									variant="soft"
									startDecorator={<LoginRounded />}
									color="neutral"
								>
									Sign In
								</Button>
							</Link>
						) : (
							<Button
								variant="soft"
								startDecorator={<LogoutRounded />}
								onClick={() => signOut()}
								color="neutral"
							>
								Sign Out
							</Button>
						)}
					</>
				) : (
					<Dropdown>
						<MenuButton variant="soft" size="md" startDecorator={<MenuIcon />}>
							Menu
						</MenuButton>
						<Menu size="sm">
							{status === "authenticated" && (
								<MenuItem component="a" href="/profile" sx={{ gap: 1 }}>
									<Button
										variant="plain"
										color="neutral"
										startDecorator={<AccountCircle />}
									>
										Profile
									</Button>
								</MenuItem>
							)}
							<MenuItem component="a" href="/download" sx={{ gap: 1 }}>
								<Button
									variant="plain"
									color="neutral"
									startDecorator={<Download />}
								>
									Downloads
								</Button>
							</MenuItem>
							<MenuItem component="a" href="/infos" sx={{ gap: 1 }}>
								<Button
									variant="plain"
									color="neutral"
									startDecorator={<Info />}
								>
									Informations
								</Button>
							</MenuItem>
							<MenuItem component="a" href="/support" sx={{ gap: 1 }}>
								<Button
									variant="plain"
									color="neutral"
									startDecorator={<Support />}
								>
									Support
								</Button>
							</MenuItem>
							{status !== "authenticated" ? (
								<MenuItem component="a" href="/login" sx={{ gap: 1 }}>
									<Button
										variant="plain"
										startDecorator={<LoginRounded />}
										color="neutral"
									>
										Sign In
									</Button>
								</MenuItem>
							) : (
								<MenuItem onClick={() => signOut()} sx={{ gap: 1 }}>
									<Button
										variant="plain"
										startDecorator={<LogoutRounded />}
										color="neutral"
									>
										Sign Out
									</Button>
								</MenuItem>
							)}
						</Menu>
					</Dropdown>
				)}
			</Container>
		</Box>
	);
}

export default Navbar;
