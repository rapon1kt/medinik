"use client";
import {
	Box,
	Button,
	Card,
	Chip,
	Container,
	CssVarsProvider,
	Divider,
	Link,
	Stack,
	Typography,
} from "@mui/joy";
import { Footer, Navbar } from "@/components";
import React from "react";
import {
	Apple,
	BugReport,
	ChangeCircle,
	Help,
	Info,
	Microsoft,
	NewReleases,
	Rocket,
	SafetyCheck,
} from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

export default function DownloadPage() {
	const media = useMediaQuery("(max-width: 1120px)");

	return (
		<CssVarsProvider defaultMode="dark">
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					background: (theme: any) => theme.palette.background.surface,
					minHeight: "100vh",
				}}
			>
				<Navbar />
				<Container
					maxWidth="lg"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "space-between",
						padding: !media ? "4rem" : "4rem 0 2rem 0",
					}}
				>
					<Stack sx={{ textAlign: "center", height: "20%", gap: 3 }}>
						<Typography
							level="title-lg"
							gutterBottom
							className="logo"
							sx={{
								background:
									"linear-gradient(120deg, #710000, #cf0034, #bf2626)",
								"-webkit-background-clip": "text",
								"-webkit-text-fill-color": "transparent",
							}}
						>
							download
						</Typography>
						<Typography level="h1" sx={{ fontSize: 50 }}>
							Download Medinik
						</Typography>
						<Typography level="body-lg" sx={{ marginBottom: 3 }}>
							Free. Useful. Practice.
						</Typography>
					</Stack>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
							height: "80%",
						}}
					>
						{!media && (
							<Stack
								sx={{
									display: "flex",
									flexDirection: "column",
									width: "20%",
									gap: 1,
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
									}}
								>
									<img
										src="/assets/favicon.ico"
										width={200}
										height={200}
										style={{ borderRadius: "12px" }}
									/>
									<Typography gutterBottom level="body-lg">
										Version 1.9.2.3764.5
									</Typography>
								</Box>
								<Divider sx={{ mx: 2 }} />
								<Stack sx={{ display: "flex", width: "100%", gap: 2 }}>
									<Link href="https://www.github.com/rapon1kt/medinik">
										<Typography
											sx={{
												p: 1,
												fontDecoration: "none",
												width: "100%",
												mx: 2,
												borderRadius: "12px",
												mt: 1,
												background: (mode: any) =>
													mode.palette.background.level1,
												":hover": {
													background: (mode: any) =>
														mode.palette.background.level2,
												},
											}}
											fontWeight={600}
											variant="solid"
											endDecorator={
												<ChangeCircle style={{ color: "#710000" }} />
											}
										>
											Changelog
										</Typography>
									</Link>
									<Link href="https://www.github.com/rapon1kt/medinik/releases">
										<Typography
											sx={{
												p: 1,
												fontDecoration: "none",
												width: "100%",
												mx: 2,
												borderRadius: "12px",
												backgroundColor: (mode: any) =>
													mode.palette.background.level1,
												":hover": {
													background: (mode: any) =>
														mode.palette.background.level2,
												},
											}}
											variant="solid"
											endDecorator={
												<NewReleases style={{ color: "#710000" }} />
											}
											fontWeight={600}
										>
											News
										</Typography>
									</Link>
									<Link href="https://www.github.com/rapon1kt/medinik/issues">
										<Typography
											sx={{
												p: 1,
												fontDecoration: "none",
												mx: 2,
												width: "100%",
												borderRadius: "12px",
												backgroundColor: (mode: any) =>
													mode.palette.background.level1,
												":hover": {
													background: (mode: any) =>
														mode.palette.background.level2,
												},
											}}
											fontWeight={600}
											variant="solid"
											endDecorator={<BugReport style={{ color: "#710000" }} />}
										>
											Report Bugs
										</Typography>
									</Link>
								</Stack>
							</Stack>
						)}

						{/* <Divider sx={{ mx: 2 }} orientation="vertical" /> */}
						<Stack
							sx={{
								width: "80%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-around",
								gap: 2,
							}}
						>
							<Box
								sx={{
									width: "100%",
									display: "flex",
									gap: 2,
								}}
							>
								<Button
									sx={{
										width: "50%",
										borderColor: "#710000",
										color: "white",
										background: "linear-gradient(120deg, #710000, #bf2626)",
										backgroundSize: "200% 100%",
										backgroundPosition: "100% 0",
										transition: "background-position .5s",
										":hover": {
											backgroundPosition: "0 0",
										},
									}}
									startDecorator={<Microsoft />}
									variant="outlined"
								>
									Microsoft
								</Button>
								<Button
									color="neutral"
									sx={{
										width: "50%",
										borderColor: "#710000",
										color: "white",
									}}
									startDecorator={<Apple />}
									variant="outlined"
								>
									MacOS
								</Button>
							</Box>
							<Stack spacing={2}>
								<Card variant="soft">
									<Typography sx={{ display: "flex", gap: 1 }} level="title-lg">
										<Info />
										<Typography level="title-lg" sx={{ opacity: "50%" }}>
											Good to know
										</Typography>
									</Typography>
									<Typography level="body-md">
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</Typography>
								</Card>
								<Stack
									sx={{
										display: "flex",
										flexDirection: !media ? "row" : "column",
										alignItems: "center",
										justifyContent: "center",
										gap: 2,
									}}
								>
									<Button
										variant="outlined"
										sx={{
											width: !media ? "25%" : "100%",
											height: "2.5rem",
											borderRadius: "12px",
											borderColor: "#710000",
											color: "white",
											background:
												"linear-gradient(120deg, #710000, #cf0034, #bf2626)",
											backgroundSize: "200% 100%",
											backgroundPosition: "100% 0",
											transition: "background-position .5s",
											":hover": {
												backgroundPosition: "0 0",
											},
										}}
									>
										Download .exe 64bit
									</Button>
									<Chip sx={{ fontSize: 16 }} variant="plain">
										or
									</Chip>
									<Button
										variant="soft"
										color="neutral"
										sx={{
											width: !media ? "25%" : "100%",
											color: "white",
											height: "2.5rem",
											borderRadius: "12px",
										}}
									>
										Download .exe 34bit
									</Button>
								</Stack>
								<Divider />
								<Typography
									sx={{
										display: "flex",
										flexDirection: "column",
										width: "100%",
										alignItems: "start",
									}}
								>
									<Typography sx={{ display: "flex", gap: 1 }} level="title-sm">
										<Help />
										Contrary to popular belief, Lorem Ipsum is not simply random
										text.
									</Typography>
									<Typography level="body-sm">
										It has roots in a piece of classical Latin literature from
										45 BC, making it over 2000 years old.
									</Typography>
								</Typography>
								<Divider />
								<Typography
									sx={{
										display: "flex",
										flexDirection: "column",
										width: "100%",
										alignItems: "start",
									}}
								>
									<Typography sx={{ display: "flex", gap: 1 }} level="title-sm">
										<SafetyCheck />
										Safety of our software
									</Typography>
									<Typography level="body-sm">
										Contrary to popular belief, Lorem Ipsum is not simply random
										text. It has roots in a piece of classical Latin literature
										from 45 BC, making it over 2000 years old.
									</Typography>
								</Typography>
							</Stack>
						</Stack>
					</Box>
				</Container>
				<Footer />
			</Box>
		</CssVarsProvider>
	);
}
