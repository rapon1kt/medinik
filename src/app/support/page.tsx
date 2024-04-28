"use client";
import { Footer, Navbar } from "@/components";
import {
	BugReportOutlined,
	BusAlert,
	Email,
	Error,
	GitHub,
	InstallDesktop,
	Lock,
	QuestionMark,
	Send,
} from "@mui/icons-material";
import {
	Box,
	Container,
	CssVarsProvider,
	FormControl,
	FormHelperText,
	FormLabel,
	IconButton,
	Input,
	Link,
	Stack,
	Typography,
} from "@mui/joy";
import { useMediaQuery } from "@mui/material";
import React from "react";

export default function Support() {
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
							support
						</Typography>
						<Typography level="body-lg" sx={{ marginBottom: 3 }}>
							Do you need help with...
						</Typography>
					</Stack>
					<Stack
						sx={{
							display: "flex",
							flexDirection: {
								xs: "column",
								md: "row",
							},
							gap: {
								xs: 5,
								md: 0,
							},
							width: "100%",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: { xs: "100%", md: "50%" },
								alignItems: "center",
								minHeight: "50vh",
							}}
						>
							<Typography
								gutterBottom
								startDecorator={<InstallDesktop />}
								level="h3"
							>
								Installation?
							</Typography>
							<Box sx={{ width: "90%" }}>
								<Typography color="danger" level="title-md">
									How to Install Medinik
								</Typography>
								<Typography
									gutterBottom
									level="body-lg"
									sx={{ textAlign: "justify" }}
								>
									Installing it on your computer is a simple and straightforward
									process. Follow the steps below to complete the installation
									successfully:
								</Typography>
								<Typography level="body-md">
									• <strong>Step 1: </strong>Download the program from the{" "}
									<Link color="danger" href="/download">
										downloads tab
									</Link>
								</Typography>
								<Typography level="body-md">
									• <strong>Step 2: </strong>Run the Installation File
								</Typography>
								<Typography
									gutterBottom
									level="body-sm"
									sx={{ textAlign: "justify" }}
								>
									After the download is complete, locate the installation file
									on your computer. It will usually be in your browser's
									downloads folder or default downloads location. Double-click
									the file to start the installation process.
								</Typography>
								<Typography level="body-md">
									• <strong>Step 3: </strong> Follow the Installation
									Instructions
								</Typography>
								<Typography
									gutterBottom
									level="body-sm"
									sx={{ textAlign: "justify" }}
								>
									Once the installation file runs, you will see an installation
									window. Follow the on-screen instructions to proceed. You may
									be asked to agree to terms of use, select an installation
									location, or choose additional settings during this process.
								</Typography>
								<Typography level="body-md">
									• <strong>Step 4: </strong>Complete the Installation
								</Typography>
								<Typography
									gutterBottom
									level="body-sm"
									sx={{ textAlign: "justify" }}
								>
									After following all the instructions, wait until the program
									is completely installed on your system. This may take a few
									minutes depending on the speed of your computer.
								</Typography>
								<Typography level="body-md">
									• <strong>Step 5: </strong>Run the program
								</Typography>
								<Typography
									gutterBottom
									level="body-sm"
									sx={{ textAlign: "justify" }}
								>
									After the installation is completed successfully, you should
									see a program icon on your desktop or in the applications
									menu. Click the icon to launch the program for the first time.
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: { xs: "100%", md: "50%" },
								alignItems: "center",
								minHeight: "50vh",
							}}
						>
							<Typography gutterBottom startDecorator={<Lock />} level="h3">
								Don't know your login?
							</Typography>
							<Box sx={{ width: "90%", mb: 5 }}>
								<Typography color="danger" level="title-md">
									How to Recover Your Login
								</Typography>
								<Typography
									gutterBottom
									level="body-lg"
									sx={{ textAlign: "justify" }}
								>
									To recover your login, enter your e-mail address below and
									we'll send you your registration details.
								</Typography>
								<FormControl>
									<FormLabel>E-mail</FormLabel>
									<Input
										size="lg"
										startDecorator={<Email />}
										endDecorator={
											<IconButton type="submit" color="danger" variant="soft">
												<Send />
											</IconButton>
										}
										color="danger"
										placeholder="Enter your e-mail here"
									/>
									<FormHelperText>
										Forgot your email address? Send a message to our support on
										GitHub.
									</FormHelperText>
								</FormControl>
							</Box>
							<Typography gutterBottom startDecorator={<Error />} level="h3">
								Your problem is not here?
							</Typography>
							<Typography width="90%" level="body-lg">
								For more details and solutions, please message us on the GitHub
								issues page.
							</Typography>
							<Link
								mt={5}
								variant="plain"
								borderRadius={16}
								fontSize={40}
								color="neutral"
								startDecorator={<GitHub />}
								href="https://github.com/rapon1kt/medinik/issues"
							>
								GitHub
							</Link>
						</Box>
					</Stack>
				</Container>
				<Footer />
			</Box>
		</CssVarsProvider>
	);
}
