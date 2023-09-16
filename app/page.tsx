import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@mui/material/Button";
import bckgImg from "@/public/sciencefiction10.jpeg";

export default function Home() {
	return (
		<main
			className={styles.main}
			style={{ backgroundImage: `url(${bckgImg.src})` }}
		>
			<Image
				className={styles["background-image"]}
				src="/public/sciencefiction10.jpeg"
				alt="Background Image"
				fill={true}
			></Image>
			<h1 className={styles.title}>Is this AI or not</h1>
			<div className={styles.subtitle}>
				<h3>Show your capacity of AI detecting</h3>
				<h3>
					Learn the main differences between real-world images and AI
					images, and see how far AI can go with this simple but
					addictive game
				</h3>
			</div>
			<div>Text input</div>
			<div className={styles["buttons-container"]}>
				<div className={styles["game-buttons"]}>
					<Button variant="contained">
						<Link href="/game">Start game</Link>
					</Button>
					<Button variant="contained">
						<Link href="/dashboard">Dashboard</Link>
					</Button>
				</div>
				<Button variant="outlined">Get our images</Button>
			</div>
		</main>
	);
}
