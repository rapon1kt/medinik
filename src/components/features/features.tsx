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
					justifyContent: "space-between",
					alignItems: "center",
					gap: 4,
					p: "2rem 0 2rem 0",
				}}
			>
				<Card
					variant="plain"
					size="lg"
					sx={{
						width: media ? "90%" : "30%",
						boxShadow: "0px 1px 10px 1px #b35656",
					}}
				>
					<CardContent>
						<Typography level="h3" gutterBottom startDecorator={<Bolt />}>
							Intuitive Interface and User-Friendly
						</Typography>
						<Typography level="body-lg">
							One of main qualities is its intuitive interface. From the first
							access, users find a clean and organized design, making it easier
							to navigate and use the available features. The learning curve is
							minimal, allowing students to start using all of the software's
							tools quickly and efficiently.
						</Typography>
					</CardContent>
				</Card>
				<Card
					variant="plain"
					size="lg"
					sx={{
						width: media ? "90%" : "30%",
						boxShadow: "0px 1px 10px 1px #b35656",
					}}
				>
					<CardContent>
						<Typography
							level="h3"
							gutterBottom
							startDecorator={<NewReleases />}
						>
							Task and Deadline Management
						</Typography>
						<Typography level="body-lg">
							Allows students to record all their academic activities, assign
							deadlines and receive automatic reminders to ensure no assignment
							is forgotten. Furthermore, the task prioritization functionality
							helps users focus on what is most important, increasing
							productivity and study efficiency.
						</Typography>
					</CardContent>
				</Card>
				<Card
					variant="plain"
					size="lg"
					sx={{
						width: media ? "90%" : "30%",
						boxShadow: "0px 1px 10px 1px #b35656",
					}}
				>
					<CardContent>
						<Typography level="h3" gutterBottom startDecorator={<CloudDone />}>
							Review and Progress Monitoring Resources
						</Typography>
						<Typography level="body-lg">
							The software allows students to record their learning sessions
							study, take notes and mark the topics reviewed. With detailed
							graphs and reports, users can view their progress over time,
							identifying areas for improvement and adjusting your study methods
							as needed.
						</Typography>
					</CardContent>
				</Card>
			</Stack>
		</Container>
	);
}

export default Features;
