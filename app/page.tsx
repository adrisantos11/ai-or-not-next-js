import Link from "next/link";
import Button from "@mui/material/Button";
import bckgImg from "@/public/landscape20.jpeg";
import { TextField } from "@mui/material";
import "./page.scss";

export default function Home() {
	return (
		<main
			className="p-home"
			style={{
				backgroundImage: `url(${bckgImg.src})`,
			}}
		>
			<h1 className="p-home__title">Is this AI or not</h1>
			<div className="p-home__subtitle">
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
				className="p-home__user-input"
			/>
			<div className="p-home__buttons-container">
				<div className="p-home__game-buttons">
					<Link href="/game">
						<Button
							className="p-home__button p-home__button--game"
							variant="contained"
						>
							Start game
						</Button>
					</Link>

					<Link href="/dashboard">
						<Button
							variant="contained"
							className="p-home__button p-home__button--dashboard"
						>
							Dashboard
						</Button>
					</Link>
				</div>
				{/* <Button
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
				</Button> */}
			</div>
		</main>
	);
}
