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
					alignItems: "center",
				}}
			>
				<Chip
					size="lg"
					sx={{ mb: 2 }}
					startDecorator={<Whatshot sx={{ color: "#cc0000" }} />}
				>
					Patch Notes v1.9.2
				</Chip>
				<Typography level={"h1"} sx={{ mb: 4 }}>
					The <Typography sx={{ color: "#710000" }}>latest version </Typography>
					of software is always waiting for you
				</Typography>
				{media && (
					<img
						src="patch-notes.png"
						alt="patch-notes"
						style={{ width: 350, height: 320 }}
					/>
				)}
				<Typography
					level={!media ? "body-lg" : "body-md"}
					sx={{ width: "100%", mb: 3 }}
				>
					Proin at risus pharetra, bibendum nunc eget, pellentesque dui. Nunc
					porta nulla at elementum placerat. Suspendisse gravida, justo in
					facilisis rutrum, magna odio sollicitudin mauris, non maximus ex mi ac
					risus.
				</Typography>
				<Typography
					level="title-lg"
					endDecorator={<East />}
					component="a"
					href="#"
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
