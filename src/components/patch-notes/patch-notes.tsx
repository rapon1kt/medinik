import { Container, Chip, Typography, Box } from "@mui/joy";
import { Whatshot, East } from "@mui/icons-material";

function PatchNotes() {
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				my: 5,
			}}
		>
			<Box>
				<Chip
					size="lg"
					sx={{ mb: 2 }}
					startDecorator={<Whatshot sx={{ color: "#cc0000" }} />}
				>
					Patch Notes v1.9.2
				</Chip>
				<Typography level="h1" sx={{ width: "30rem", mb: 4 }}>
					The <Typography sx={{ color: "#710000" }}>latest version </Typography>
					of software is always waiting for you
				</Typography>
				<Typography
					level="body-lg"
					sx={{ width: "36rem", mb: 3, fontSize: 20 }}
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

			<img
				src="patch-notes.png"
				alt="patch-notes"
				style={{ width: 400, height: 360 }}
			/>
		</Container>
	);
}

export default PatchNotes;
