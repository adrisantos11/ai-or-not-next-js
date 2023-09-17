import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import bckgImg from "../public/bckg_img-darken.png";
import { TextField, colors } from "@mui/material";

export default function Home() {
	return (
		<main
			className={styles.main}
			style={{
				backgroundImage: `url(${bckgImg.src})`,
			}}
		>
			<h1 className={styles.title}>Is this AI or not</h1>
			<div className={styles.subtitle}>
				<h3>Show your capacity of AI detecting</h3>
				<h3>
					Learn the main differences between real-world images and AI
					images, and see how far AI can go with this simple but
					addictive game
				</h3>
			</div>
			<TextField
				id="playerName"
				label="Player name"
				variant="standard"
				sx={{ fontFamily: "inherit", width: "30rem" }}
				InputLabelProps={{
					sx: {
						color: "#8B8B8B",
						fontFamily: "inherit",
						fontSize: "1.25rem",
						lineHeight: "1.5rem",
					},
				}}
				InputProps={{
					sx: {
						color: "white",
						textAlign: "center",
						borderBottom: "2px solid white",
						"::placeholder": {
							color: "white",
						},
						fontFamily: "inherit",
						padding: ".125rem 0",
					},
				}}
			/>
			<div className={styles["buttons-container"]}>
				<div className={styles["game-buttons"]}>
					<Button
						variant="contained"
						sx={{
							borderRadius: "1.5rem",
							textTransform: "none",
							fontFamily: "inherit",
							fontSize: "1rem",
							padding: ".5rem 2rem",
							backgroundColor: "#4477CE",
						}}
					>
						<Link href="/game">Start game</Link>
					</Button>
					<Button
						variant="contained"
						// className={styles["dashboard-button"]}
						sx={{
							borderRadius: "1.5rem",
							textTransform: "none",
							fontFamily: "inherit",
							fontSize: "1rem",
							padding: ".5rem 2rem",
							backgroundColor: "#512B81",
							":hover": {
								backgroundColor: "#37185f",
							},
						}}
					>
						<Link href="/dashboard">Dashboard</Link>
					</Button>
				</div>
				<Button
					variant="outlined"
					disabled
					sx={{
						borderRadius: "1.5rem",
						textTransform: "none",
						fontFamily: "inherit",
						padding: ".5rem 2rem",
						borderColor: "#512B81",
						color: "#512B81",
					}}
				>
					Get our images
				</Button>
			</div>
		</main>
	);
}
