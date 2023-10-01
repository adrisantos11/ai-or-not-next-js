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

	React.useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API}/api/test`)
			.then((data) => {
				console.log(data);
				return data.json();
			})
			.then((data) => console.log(data));
	}, []);

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
			<div
				className="p-game__image p-game__image--left"
				style={{ backgroundImage: `url(${bckgImg1.src})` }}
				onClick={() => {
					setSelected(1);
				}}
			>
				{selected === 0 ? (
					<div className="p-game__select-img">
						<span className="p-game__select-img-txt">
							Select image
						</span>
					</div>
				) : (
					""
				)}
				{selected === 0 ? (
					<div className="p-game__img-data">
						<span className="p-game__image-title">Image_name</span>
						<span className="p-game__image-description">
							Description
						</span>
					</div>
				) : (
					""
				)}
				{selected === 1 ? (
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
				{...(selected === 0 && {
					onClick: () => {
						setSelected(2);
					},
				})}
			>
				{selected === 0 ? (
					<div className="p-game__select-img">
						<span className="p-game__select-img-txt">
							Select image
						</span>
					</div>
				) : (
					""
				)}
				{selected === 0 ? (
					<div className="p-game__img-data">
						<span className="p-game__image-title">Image_name</span>
						<span className="p-game__image-description">
							Description
						</span>
					</div>
				) : (
					""
				)}
				{selected === 2 ? (
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
