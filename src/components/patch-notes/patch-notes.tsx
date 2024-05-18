import { Container, Chip, Typography, Box } from "@mui/joy";
import { Whatshot, East } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

function PatchNotes() {
	const media = useMediaQuery("(max-width: 976px)");

	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: !media ? "space-between" : "center",
				textAlign: !media ? "" : "center",
				my: 5,
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: !media ? "start" : "center",
					mr: 4,
				}}
			>
				<Chip
					size="lg"
					sx={{
						mb: 1.2,
						height: "40px",
						fontSize: "16px",
					}}
					startDecorator={
						<Whatshot sx={{ color: "#cc0000", fontSize: "27px" }} />
					}
					variant="outlined"
				>
					Patch Notes v1.9.2
				</Chip>
				<Typography level="h1" sx={{ mb: 2, width: !media ? "30rem" : "auto" }}>
					The <Typography sx={{ color: "#710000" }}>latest version </Typography>
					of software is always waiting for you
				</Typography>
				{media && (
					<img
						src="patch-notes.png"
						alt="patch-notes"
						style={{ width: 450, height: 450 }}
					/>
				)}
				<Typography level="body-lg" sx={{ width: "100%", mb: 3, mt: 2 }}>
					We are continually dedicated to offering you the latest and greatest
					version of our study organization software. These updates are designed
					to ensure you have access to the best functionality and highest
					efficiency no matter where you are in your academic journey.
				</Typography>
				<Typography
					level="title-lg"
					endDecorator={<East sx={{ color: "rgb(228, 116, 116)" }} />}
					textAlign="start"
					component="a"
					href="https://github.com/rapon1kt/medinik"
					sx={{
						textDecoration: "none",
						":hover": {
							textDecoration: "underline",
						},
					}}
				>
					Read the latest version of change log
				</Typography>
			</Box>
			{!media && (
				<img
					src="patch-notes.png"
					alt="patch-notes"
					style={{ width: 400, height: 360 }}
				/>
			)}
		</Container>
	);
}

export default PatchNotes;
