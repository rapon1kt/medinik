import {
	Box,
	Stack,
	Button,
	Container,
	Typography,
	Dropdown,
	Menu,
	MenuItem,
	MenuButton,
	Divider,
} from "@mui/joy";
import {
	Download,
	Info,
	Language,
	Rocket,
	Support,
	Settings,
	Logout,
	AccountCircle,
	ArrowDropDown,
	Sell,
	LoginRounded,
} from "@mui/icons-material";

interface NavbarProps {
	isLogged?: boolean;
}

function Navbar({ isLogged }: NavbarProps) {
	return (
		<Box sx={{ display: "flex", flexDirection: "column" }}>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "end",
					p: 1,
				}}
			>
				<Dropdown>
					<MenuButton variant="plain" size="sm" startDecorator={<Language />}>
						English
					</MenuButton>
					<Menu size="sm">
						<MenuItem sx={{ gap: 1 }}>Portuguese</MenuItem>
					</Menu>
				</Dropdown>
			</Container>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Typography level="h3" startDecorator={<Rocket />} className="logo">
					raponikt
				</Typography>
				<Stack sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
					<Button variant="plain" color="neutral" startDecorator={<Download />}>
						Downloads
					</Button>
					<Button variant="plain" color="neutral" startDecorator={<Info />}>
						Informations
					</Button>
					<Button variant="plain" color="neutral" startDecorator={<Support />}>
						Support
					</Button>
				</Stack>
				<Button
					variant="soft"
					startDecorator={<LoginRounded />}
					color="neutral"
				>
					Sign In
				</Button>
				{isLogged && (
					<Dropdown>
						<MenuButton variant="soft">
							<Typography
								startDecorator={<AccountCircle />}
								endDecorator={<ArrowDropDown />}
								level="body-sm"
								color="primary"
							>
								My account
							</Typography>
						</MenuButton>
						<Menu>
							<MenuItem sx={{ gap: 1 }}>
								<Sell />
								Plans
							</MenuItem>
							<MenuItem sx={{ gap: 1 }}>
								<Settings />
								Preferences
							</MenuItem>
							<Divider />
							<MenuItem sx={{ gap: 1 }}>
								<Logout />
								Logout
							</MenuItem>
						</Menu>
					</Dropdown>
				)}
			</Container>
		</Box>
	);
}

export default Navbar;
