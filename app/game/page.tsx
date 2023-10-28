"use client";
import "./page.scss";
import successImg from "@/public/success.svg";
import wrongImg from "@/public/wrong.svg";
import backgIcon from "@/public/back-icon.svg";
import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

const SIDES: string[] = ["left", "right"];

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

	const [imageTypeList, setImageTypeList] = React.useState<any[]>([
		{
			type: "ai",
			url: "api/image-1",
			url_amount: 137,
			path: "/images/ai",
			path_amout: 100,
			path_extension: "jpeg",
		},
		{
			type: "real",
			url: "api/image-2",
			url_amount: 20,
			path: "/images/real",
			path_amout: 100,
			path_extension: "jpg",
		},
	]);

	const [score, setScore] = React.useState<number>(0);
	const [keepPlaying, setKeepPlaying] = React.useState<boolean>(true);

	const getImage = (side: string, typeObject: any, cloud: boolean) => {
		const image = document.getElementById(`${side}-game-image`);
		const url: string = cloud
			? `${process.env.NEXT_PUBLIC_API}/${
					typeObject.url
			  }?image-id=${generateRandom(0, typeObject.url_amount + 1)}`
			: ` ${typeObject.path}/${generateRandom(
					0,
					typeObject.url_amount + 1
			  )}.${typeObject.path_extension}`;
		if (image) {
			image.style.backgroundImage = `url('${url}')`;
			// image.style.backgroundImage = `url('/images/ai/1.jpeg')`;
			image.onclick = () => {
				setSelected(() =>
					side === "left"
						? StatesEnum[`left-selection`]
						: StatesEnum[`right-selection`]
				);
				if (typeObject.type === "ai") setScore((score) => score + 1);
				else setKeepPlaying(false);
			};
		}
	};

	const getNewImages = (): void => {
		if (generateRandom(0, 2) === 1)
			setImageTypeList((list: any) => [...list.reverse()]);
		else setImageTypeList((list: any) => [...list]);
	};

	React.useEffect(() => {
		getNewImages();
	}, []);

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

	React.useEffect(() => {
		imageTypeList.map((obj: any, index: number) =>
			getImage(SIDES[index], obj, false)
		);
	}, [imageTypeList]);

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
									getNewImages();
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
			{imageTypeList.map((obj: any, index: number) => {
				const state: number =
					index === 0
						? StatesEnum["left-selection"]
						: StatesEnum["right-selection"];
				return (
					<div
						className={`p-game__image p-game__image--${SIDES[index]}`}
						id={`${SIDES[index]}-game-image`}
						key={`side-${SIDES[index]}`}
					>
						{selected === StatesEnum["initial"] ? (
							<>
								<div className="p-game__select-img">
									<span className="p-game__select-img-txt">
										Select image
									</span>
								</div>
								<div className="p-game__img-data">
									<span className="p-game__image-title">
										Image_name
									</span>
									<span className="p-game__image-description">
										Description
									</span>
								</div>
							</>
						) : (
							""
						)}
						{selected === state ? (
							<div className="p-game__result">
								{obj.type === "ai" ? (
									<>
										<div className="p-game__result-img">
											<Image
												src={successImg.src}
												alt="Success"
												fill
											></Image>
										</div>
										<span className="p-game__result-txt">
											SUCCESS
										</span>
									</>
								) : (
									<>
										<div className="p-game__result-img">
											<Image
												src={wrongImg.src}
												alt="Wrong"
												className="p-game__result-img"
												fill
											></Image>{" "}
										</div>
										<span className="p-game__result-txt">
											WRONG
										</span>
									</>
								)}
							</div>
						) : (
							""
						)}
					</div>
				);
			})}
		</div>
	);
};

export default GamePage;
