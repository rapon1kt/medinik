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
					Is innovative software created to transform the way students organize
					and manage their studies. Stands out for a series of qualities that
					make it an indispensable tool for any student seeking efficiency and
					academic success.
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
			{!media && (
				<img
					id="software-example"
					src="software-example.png"
					alt="software-example"
					style={{ width: "40%" }}
				/>
			)}
		</Container>
	);
}

export default Hero;
