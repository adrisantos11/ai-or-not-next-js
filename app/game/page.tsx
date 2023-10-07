"use client";
import "./page.scss";
import bckgImg2 from "@/public/sciencefiction10.jpeg";
import successImg from "@/public/success.svg";
import wrongImg from "@/public/wrong.svg";
import backgIcon from "@/public/back-icon.svg";
import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

const IMAGES_NUMBER = 137;

/**
 *
 * @param min
 * @param max
 * @returns
 */
const generateRandom = (min = 0, max = 100) => {
	const difference = max - min;
	const rand = Math.random();
	return Math.floor(rand * difference) + min;
};

enum StatesEnum {
	"initial" = 0,
	"left-selection" = 1,
	"right-selection" = 2,
	"score-page" = 3,
}

const GamePage = () => {
	const [selected, setSelected] = React.useState<StatesEnum>(
		StatesEnum["initial"]
	);

	const [score, setScore] = React.useState<number>(0);
	const [keepPlaying, setKeepPlaying] = React.useState<boolean>(true);

	const getImage = () => {
		const leftImage = document.getElementById("left-game-image");
		if (leftImage)
			leftImage.style.backgroundImage = `url(${`${
				process.env.NEXT_PUBLIC_API
			}/api/test?image-id=${generateRandom(0, IMAGES_NUMBER)}`})`;
	};

	React.useEffect(() => getImage(), []);

	React.useEffect(() => {
		if (
			selected !== StatesEnum["initial"] &&
			selected !== StatesEnum["score-page"]
		) {
			setTimeout(() => {
				setSelected(() => StatesEnum["score-page"]);
			}, 1000);
		}
	}, [selected]);

	return (
		<div className="p-game">
			<Link href="/">
				<Image
					src={backgIcon.src}
					alt="back-icon"
					className="p-game__icon-back"
					width={50}
					height={50}
				></Image>
			</Link>
			{selected === StatesEnum["score-page"] ? (
				<div className="p-next-round">
					<div className="p-next-round__score-container">
						<span className="p-next-round__title">SCORE</span>
						<span className="p-next-round__score">
							<b>{score}</b>
						</span>
					</div>
					<div className="p-next-round__historical-score-container">
						<span>
							<b>2</b> points for personal record
						</span>
						<span>
							<b>8</b> points for global record
						</span>
					</div>
					<div className="p-next-round__button-container">
						{keepPlaying && (
							<Button
								className="p-next-round__button p-next-round__button--next"
								variant="contained"
								onClick={() => {
									setSelected(() => StatesEnum["initial"]);
									getImage();
								}}
							>
								Next
							</Button>
						)}
						<Link href="/">
							<Button
								className="p-next-round__button p-next-round__button--exit"
								variant="outlined"
							>
								Exit
							</Button>
						</Link>
					</div>
				</div>
			) : (
				""
			)}
			<div
				className="p-game__image p-game__image--left"
				id="left-game-image"
				onClick={() => {
					setSelected(() => StatesEnum["left-selection"]);
					setScore((score) => score + 1);
				}}
			>
				{selected === StatesEnum["initial"] ? (
					<div className="p-game__select-img">
						<span className="p-game__select-img-txt">
							Select image
						</span>
					</div>
				) : (
					""
				)}
				{selected === StatesEnum["initial"] ? (
					<div className="p-game__img-data">
						<span className="p-game__image-title">Image_name</span>
						<span className="p-game__image-description">
							Description
						</span>
					</div>
				) : (
					""
				)}
				{selected === StatesEnum["left-selection"] ? (
					<div className="p-game__result">
						<div className="p-game__result-img">
							<Image
								src={successImg.src}
								alt="Success"
								fill
							></Image>
						</div>
						<span className="p-game__result-txt">SUCCESS</span>
					</div>
				) : (
					""
				)}
			</div>
			<div
				className="p-game__image p-game__image--right"
				style={{ backgroundImage: `url(${bckgImg2.src})` }}
				{...(selected === StatesEnum["initial"] && {
					onClick: () => {
						setSelected(() => StatesEnum["right-selection"]);
						setKeepPlaying(false);
					},
				})}
			>
				{selected === StatesEnum["initial"] ? (
					<div className="p-game__select-img">
						<span className="p-game__select-img-txt">
							Select image
						</span>
					</div>
				) : (
					""
				)}
				{selected === StatesEnum["initial"] ? (
					<div className="p-game__img-data">
						<span className="p-game__image-title">Image_name</span>
						<span className="p-game__image-description">
							Description
						</span>
					</div>
				) : (
					""
				)}
				{selected === StatesEnum["right-selection"] ? (
					<div className="p-game__result">
						<div className="p-game__result-img">
							<Image
								src={wrongImg.src}
								alt="Wrong"
								className="p-game__result-img"
								fill
							></Image>
						</div>

						<span className="p-game__result-txt">WRONG</span>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default GamePage;
