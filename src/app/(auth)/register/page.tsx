"use client";
import * as React from "react";
import {
	CssVarsProvider,
	Stack,
	Typography,
	Input,
	Link,
	FormLabel,
	FormControl,
	Button,
	Box,
	CssBaseline,
	GlobalStyles,
	formLabelClasses,
	Divider,
	IconButton,
	Checkbox,
} from "@mui/joy";
import { AlertComponent, ChangeTheme } from "@/components";
import { GitHub, RocketLaunch } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface MessageProps {
	title: string;
	description: string;
	severity: "danger" | "success";
}

export default function Register() {
	const [message, setMessage] = React.useState<MessageProps>();

	const router = useRouter();

	const handleSubmit = () => {
		console.log("Success");
	};

	return (
		<CssVarsProvider defaultMode="dark" disableTransitionOnChange>
			<CssBaseline />
			<GlobalStyles
				styles={{
					":root": {
						"--Collapsed-breakpoint": "769px",
						"--Cover-width": "50vw",
						"--Form-maxWidth": "800px",
						"--Transition-duration": "0.4s",
					},
				}}
			/>
			<Box
				sx={(theme) => ({
					width:
						"clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
					transition: "width var(--Transition-duration)",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					position: "relative",
					zIndex: 1,
					display: "flex",
					justifyContent: "flex-end",
					backdropFilter: "blur(12px)",
					backgroundColor: "rgba(255 255 255 / 0.2)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundColor: "rgba(19 19 24 / 0.4)",
					},
				})}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100dvh",
						width:
							"clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
						maxWidth: "100%",
						px: 2,
					}}
				>
					<Box
						component="header"
						sx={{
							py: 3,
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
							<IconButton
								onClick={() => router.push("/")}
								variant="soft"
								color="danger"
								size="sm"
							>
								<RocketLaunch />
							</IconButton>
							<Typography level="title-lg">Medinik</Typography>
						</Box>
						<ChangeTheme />
					</Box>
					<Box
						component="main"
						sx={{
							my: "auto",
							py: 2,
							pb: 5,
							display: "flex",
							flexDirection: "column",
							gap: 0.5,
							width: 400,
							maxWidth: "100%",
							mx: "auto",
							borderRadius: "sm",
							"& form": {
								display: "flex",
								flexDirection: "column",
								gap: 2,
							},
							[`& .${formLabelClasses.asterisk}`]: {
								visibility: "hidden",
							},
						}}
					>
						<Stack gap={3} sx={{ mb: 2 }}>
							<Stack gap={1}>
								<Typography level="h3">Sign Up</Typography>
								<Typography level="body-sm">
									Already have an account,{" "}
									<Link href="/login" level="title-sm" color="danger">
										Sign In!
									</Link>
								</Typography>
							</Stack>
							<Button
								startDecorator={<GitHub sx={{ color: "#e47474" }} />}
								variant="soft"
								color="neutral"
								fullWidth
							>
								Continue with GitHub
							</Button>
						</Stack>
						<Divider
							sx={(theme) => ({
								[theme.getColorSchemeSelector("light")]: {
									color: { xs: "#FFF", md: "text.tertiary" },
									"--Divider-lineColor": {
										xs: "#FFF",
										md: "var(--joy-palette-divider)",
									},
								},
							})}
						>
							or
						</Divider>
						{message && (
							<AlertComponent
								message={message}
								setMessage={setMessage}
								key="AuthAlert"
							/>
						)}
						<Stack gap={4} sx={{ mt: 2 }}>
							<form onSubmit={handleSubmit}>
								<FormControl required>
									<FormLabel>Name</FormLabel>
									<Input type="name" name="name" />
								</FormControl>
								<FormControl required>
									<FormLabel>Email</FormLabel>
									<Input type="email" name="email" />
								</FormControl>
								<FormControl required>
									<FormLabel>Password</FormLabel>
									<Input type="password" name="password" />
								</FormControl>
								<Checkbox
									color="danger"
									size="sm"
									label="Accept Terms of Use"
									name="terms"
									defaultChecked
								/>
								<Stack gap={4} sx={{ mt: 2 }}>
									<Button variant="soft" color="danger" type="submit" fullWidth>
										Sign up
									</Button>
								</Stack>
							</form>
						</Stack>
					</Box>
					<Box component="footer" sx={{ py: 3 }}>
						<Typography level="body-xs" textAlign="center">
							© Medinik {new Date().getFullYear()}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={(theme) => ({
					height: "100%",
					position: "fixed",
					right: 0,
					top: 0,
					bottom: 0,
					left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
					transition:
						"background-image var(--Transition-duration), left var(--Transition-duration) !important",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					backgroundColor: "background.level1",
					backgroundSize: "400px",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage: "url(software-example.png)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundImage: "url(new-functions.png)",
					},
				})}
			/>
		</CssVarsProvider>
	);
}
