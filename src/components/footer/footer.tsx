import { Favorite, Rocket } from "@mui/icons-material";
import { Box, Typography, Container, Stack, Divider } from "@mui/joy";

function Footer() {
	return (
		<Box sx={{ background: (theme) => theme.palette.background.backdrop }}>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					my: 4,
				}}
			>
				<Typography level="h4" startDecorator={<Rocket />}>
					Medinik Software
				</Typography>
				<Typography
					level="body-md"
					sx={{ display: "flex", alignItems: "center", gap: 1 }}
				>
					Made with <Favorite sx={{ color: "#710000" }} /> by raponikt{" "}
				</Typography>
			</Container>
		</Box>
	);
}

export default Footer;
