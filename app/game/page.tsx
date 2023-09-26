"use client";
import "./page.scss";
import bckgImg1 from "@/public/portrait1.jpeg";
import bckgImg2 from "@/public/sciencefiction10.jpeg";
import successImg from "@/public/success.svg";
import wrongImg from "@/public/wrong.svg";
import backgIcon from "@/public/back-icon.svg";
import * as React from "react";

import Image from "next/image";
import Link from "next/link";

const GamePage = () => {
	const [selected, setSelected] = React.useState<number>(0);

	fetch(`${process.env.NEXT_PUBLIC_API}/api/test`)
		.then((data) => {
			console.log(data);
			return data.json();
		})
		.then((data) => console.log(data));

	return (
		<div className="p-game-page">
			<Link href="/">
				<Image
					src={backgIcon.src}
					alt="back-icon"
					width={50}
					height={50}
					className="p-game-page__icon-back"
				></Image>
			</Link>
			<div
				className="p-game-page__image p-game-page__image--left"
				style={{ backgroundImage: `url(${bckgImg1.src})` }}
				onClick={() => {
					setSelected(1);
					console.log(true);
				}}
			>
				{selected === 0 ? (
					<div className="p-game-page__select-img">
						<span className="p-game-page__select-img-txt">
							Select image
						</span>
					</div>
				) : (
					""
				)}
				<div className="p-game-page__img-data">
					<span className="p-game-page__image-title">Image_name</span>
					<span className="p-game-page__image-description">
						Description
					</span>
				</div>
				{selected === 1 ? (
					<div className="p-game-page__result">
						<Image
							src={successImg.src}
							alt="Success"
							width={225}
							height={225}
						></Image>
						<span className="p-game-page__result-txt">SUCCESS</span>
					</div>
				) : (
					""
				)}
			</div>
			<div
				className="p-game-page__image p-game-page__image--right"
				style={{ backgroundImage: `url(${bckgImg2.src})` }}
				onClick={() => {
					setSelected(2);
					console.log(false);
				}}
			>
				{selected === 0 ? (
					<div className="p-game-page__select-img">
						<span className="p-game-page__select-img-txt">
							Select image
						</span>
					</div>
				) : (
					""
				)}
				<div className="p-game-page__img-data">
					<span className="p-game-page__image-title">Image_name</span>
					<span className="p-game-page__image-description">
						Description
					</span>
				</div>
				{selected === 2 ? (
					<div className="p-game-page__result">
						<Image
							src={wrongImg.src}
							alt="Wrong"
							width={225}
							height={225}
						></Image>
						<span className="p-game-page__result-txt">WRONG</span>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default GamePage;
