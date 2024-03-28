import {
	AdsClick,
	Bolt,
	CloudDone,
	NewReleases,
	Whatshot,
} from "@mui/icons-material";
import { Container, Typography, Card, CardContent, Stack } from "@mui/joy";
import { useMediaQuery } from "@mui/material";

function Features() {
	const media = useMediaQuery("(max-width: 800px");

	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				py: 2,
			}}
		>
			<Typography level="h1" sx={{ textAlign: "center", mb: 4 }}>
				Because we
				<Typography sx={{ color: "#710000" }}> make </Typography>
				your experience{" "}
				<Typography sx={{ color: "#710000" }}>better</Typography>
			</Typography>
			<Stack
				sx={{
					display: "flex",
					flexDirection: media ? "column" : "row",
					justifyContent: "center",
					alignItems: "center",
					gap: 4,
				}}
			>
				<Card
					variant="soft"
					size="lg"
					sx={{
						width: media ? "100%" : "30%",
					}}
				>
					<CardContent>
						<Typography level="h3" gutterBottom startDecorator={<Bolt />}>
							Fast
						</Typography>
						<Typography level="body-md">
							Proin at risus pharetra, bibendum nunc eget, pellentesque dui.
							Nunc porta nulla at elementum placerat. Suspendisse gravida, justo
							in facilisis rutrum, magna odio sollicitudin mauris, non maximus
							ex mi ac risus.
						</Typography>
					</CardContent>
				</Card>
				<Card
					variant="soft"
					size="lg"
					sx={{
						width: media ? "100%" : "30%",
					}}
				>
					<CardContent>
						<Typography level="h3" gutterBottom startDecorator={<AdsClick />}>
							Simple
						</Typography>
						<Typography level="body-md">
							Proin at risus pharetra, bibendum nunc eget, pellentesque dui.
							Nunc porta nulla at elementum placerat. Suspendisse gravida, justo
							in facilisis rutrum, magna odio sollicitudin mauris, non maximus
							ex mi ac risus.
						</Typography>
					</CardContent>
				</Card>
				<Card
					variant="soft"
					size="lg"
					sx={{
						width: media ? "100%" : "30%",
					}}
				>
					<CardContent>
						<Typography level="h3" gutterBottom startDecorator={<CloudDone />}>
							Light
						</Typography>
						<Typography level="body-md">
							Proin at risus pharetra, bibendum nunc eget, pellentesque dui.
							Nunc porta nulla at elementum placerat. Suspendisse gravida, justo
							in facilisis rutrum, magna odio sollicitudin mauris, non maximus
							ex mi ac risus.
						</Typography>
					</CardContent>
				</Card>
			</Stack>
			<Card
				variant="soft"
				size="lg"
				sx={{ width: media ? "100%" : "80%", m: 3 }}
			>
				<CardContent
					sx={{ display: "flex", alignItems: "center", textAlign: "start" }}
				>
					<Typography level="h2" gutterBottom startDecorator={<NewReleases />}>
						New functions monthly
					</Typography>
					<Typography level="body-md">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
						consectetur purus vitae aliquam posuere. Maecenas facilisis pretium
						nulla at interdum. Nullam volutpat pharetra ultricies. Nunc mattis
						auctor pellentesque. Duis id viverra dui. Aenean vestibulum enim
						quis nisl consectetur, non gravida sem rhoncus. Curabitur ultricies
						semper placerat. Mauris accumsan rhoncus est nec aliquam. Nullam ut
						fermentum turpis. Mauris sollicitudin urna nec metus malesuada
						lobortis. Sed turpis libero, cursus ac dapibus sed, pharetra ac
						tellus.
					</Typography>
				</CardContent>
			</Card>
		</Container>
	);
}

export default Features;
