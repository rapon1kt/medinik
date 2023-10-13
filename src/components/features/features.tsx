import {
	AdsClick,
	Bolt,
	CloudDone,
	NewReleases,
	Whatshot,
} from "@mui/icons-material";
import { Container, Typography, Card, CardContent, Stack } from "@mui/joy";

function Features() {
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
			<Typography level="h1" sx={{ mb: 4 }}>
				Because we
				<Typography sx={{ color: "#710000" }}> make </Typography>
				your experience{" "}
				<Typography sx={{ color: "#710000" }}>better</Typography>
			</Typography>
			<Stack
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					gap: 4,
				}}
			>
				<Card
					variant="soft"
					size="lg"
					sx={{
						width: "30%",
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
						width: "30%",
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
						width: "30%",
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
			<Card variant="soft" size="lg" sx={{ m: 3 }}>
				<CardContent
					sx={{ display: "flex", alignItems: "center", textAlign: "start" }}
				>
					<Typography level="h2" gutterBottom startDecorator={<NewReleases />}>
						New functions monthly
					</Typography>
					<Typography level="body-md">
						Proin at risus pharetra, bibendum nunc eget, pellentesque dui. Nunc
						porta nulla at elementum placerat. Suspendisse gravida, justo in
						facilisis rutrum, magna odio sollicitudin mauris, non maximus ex mi
						ac risus.
					</Typography>
					<img
						src="new-functions.png"
						alt="new-functions"
						style={{ width: 400, margin: 4 }}
					/>
				</CardContent>
			</Card>
		</Container>
	);
}

export default Features;
