"use client";

import * as React from "react";
import Link from "next/link";
import bckgImg from "@/public/landscape20.jpeg";
import "./page.scss";

export default function Home() {
	const [userName, setUserName] = React.useState<string>("");

	React.useEffect(() => {
		localStorage.setItem("currentUser", "");
	}, []);
	return (
		<main
			className="p-home"
			style={{
				backgroundImage: `url(${bckgImg.src})`,
			}}
		>
			<div className="p-home__page p-home__page--1">
				<h1 className="p-home__title">Is this AI or not</h1>
				<div className="p-home__subtitle">
					<h3>
						<b style={{ fontStyle: "italic" }}>ALPHA version</b>
					</h3>
					<h3>Show your capacity of AI detecting</h3>
					<h3>
						Learn the main differences between real-world images and
						AI images, and see how far AI can go with this simple
						but addictive game
					</h3>
				</div>
				<input
					id="playerName"
					className="p-home__user-input"
					placeholder="Username"
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						setUserName(event.target.value);
					}}
				/>
				<div className="p-home__buttons-container">
					<div className="p-home__game-buttons">
						<Link href="/game">
							<button
								className="p-home__button p-home__button--game"
								onClick={() => {
									const usersObj: any =
										JSON.parse(
											String(
												localStorage.getItem(
													"userRecords"
												)
											)
										) || {};
									const usersObjKeys = Object.keys(usersObj);
									if (
										!usersObjKeys.find(
											(key: string) => key === userName
										)
									) {
										usersObj[userName] = 0;
										localStorage.setItem(
											"userRecords",
											JSON.stringify(usersObj)
										);
									}
									localStorage.setItem(
										"currentUser",
										userName
									);
								}}
							>
								Start game
							</button>
						</Link>

						<Link href="/dashboard">
							<button className="p-home__button p-home__button--dashboard">
								Dashboard
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="p-home__page p-home__page--2">
				<div className="p-home__description">
					<h2>Description</h2>
					<h3>{`Test your ability to spot AI-generated art!`}</h3>
					<h3>
						{`'AI or Not'
					challenges you to distinguish between two images – one
					created by AI, the other by a human. AI or Not' will test
					your ability to differentiate between human and AI-generated
					visuals`}
					</h3>
					<h3>{`Can you tell the difference?`}</h3>
				</div>
				<div className="p-home__how-to-play">
					<h2>How to play?</h2>
					<h3>{`You will be presented with two pictures simultaneously`}</h3>
					<h3>
						{`Choose the one you believe was created by AI to earn a point and aim to accumulate the highest score possible!`}
					</h3>
				</div>
			</div>
		</main>
	);
}
