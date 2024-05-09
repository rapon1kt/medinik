"use client";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";
import {
	CssVarsProvider,
	IconButton,
	IconButtonProps,
	useColorScheme,
} from "@mui/joy";
import React from "react";

function ToggleTheme(props: IconButtonProps) {
	const { onClick, ...other } = props;
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => setMounted(true), []);

	return (
		<IconButton
			aria-label="toggle light/dark mode"
			size="sm"
			variant="outlined"
			disabled={!mounted}
			onClick={(event) => {
				setMode(mode === "light" ? "dark" : "light");
				onClick?.(event);
			}}
			{...other}
		>
			{mode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
		</IconButton>
	);
}

export default function ChangeTheme() {
	return (
		<CssVarsProvider>
			<ToggleTheme />
		</CssVarsProvider>
	);
}
