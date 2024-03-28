import { Button, Container, Stack, Typography, Box } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

function Hero() {
	const media = useMediaQuery("(max-width: 800px)");

	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				height: "90vh",
			}}
		>
			<Box
				sx={
					media
						? {
								width: { lg: "60%", md: "80%" },
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								textAlign: "center",
						  }
						: {
								width: { lg: "60%", md: "100%" },
						  }
				}
			>
				<Typography level="h2">Easily and fast</Typography>
				<Typography level="h1" gutterBottom>
					Technology software
				</Typography>
				<Typography
					level="body-lg"
					sx={{ width: media ? "100%" : "60%", mb: 3 }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
					scelerisque accumsan fermentum. Proin at risus pharetra, bibendum nunc
					eget, pellentesque dui. Nunc porta nulla at elementum placerat.
					Suspendisse gravida, justo in facilisis rutrum, magna odio
					sollicitudin mauris, non maximus ex mi ac risus.
				</Typography>
				<Stack sx={{ display: "flex", flexDirection: "row", gap: 3, mb: 2 }}>
					<Button
						size="lg"
						sx={{ background: "linear-gradient(45deg, #cc0000, #710000)" }}
						component="a"
						href="/docs"
					>
						Get Started
					</Button>
					<Button
						size="lg"
						color="neutral"
						variant="outlined"
						component="a"
						href="/download"
					>
						Download
					</Button>
				</Stack>
				<Typography level="body-sm">
					Supported on Windows, Linux, and macOS
				</Typography>
			</Box>
			<img
				id="software-example"
				src="software-example.png"
				alt="software-example"
				style={{ width: "40%" }}
			/>
		</Container>
	);
}

export default Hero;
