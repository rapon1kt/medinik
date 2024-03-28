"use client";
import { East, FileDownload } from "@mui/icons-material";
import { Container, Typography, Button, Stack } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

function Download() {
	const media = useMediaQuery("(max-width: 451px)");

	return (
		<Container maxWidth="lg" sx={{ textAlign: "center", my: 16 }}>
			<Typography level="h1">
				Start using <Typography sx={{ color: "#710000" }}>Medinik</Typography>{" "}
				Software now
			</Typography>
			<Typography level="body-lg" sx={{ mb: 4 }}>
				Ooh! We forgot to mention, it's completely free :)
			</Typography>
			<Stack
				sx={{
					display: "flex",
					flexDirection: media ? "column" : "row",
					alignItems: "center",
					justifyContent: "center",
					gap: 4,
				}}
			>
				<Button
					variant="soft"
					color="neutral"
					size="lg"
					sx={{ background: "#710000", width: "15rem" }}
					endDecorator={<East />}
				>
					Register now
				</Button>
				<Button
					variant="outlined"
					color="neutral"
					size="lg"
					sx={{ borderColor: "#710000", width: "15rem" }}
					endDecorator={<FileDownload />}
				>
					Download
				</Button>
			</Stack>
		</Container>
	);
}

export default Download;
