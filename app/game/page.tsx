"use client";

import styles from "./page.module.css";
import bckgImg1 from "@/public/bckg_img.png";
import bckgImg2 from "@/public/sciencefiction10.jpeg";
import successImg from "@/public/success.svg";
import wrongImg from "@/public/wrong.svg";

import Image from "next/image";

const GamePage = () => {
	return (
		<div className={styles["images-container"]}>
			<div
				className={styles["image"]}
				style={{ backgroundImage: `url(${bckgImg1.src})` }}
				onClick={() => {
					console.log(false);
				}}
			>
				<div className={styles["select-image"]}>
					<span className={styles["select-image-txt"]}>
						Select image
					</span>
				</div>
				<div className={styles["img-data"]}>
					<span className={styles["image-title"]}>Image_name</span>
					<span className={styles["image-description"]}>
						Description
					</span>
				</div>
				<div className={styles["result"]}>
					<Image
						src={successImg.src}
						alt="Success"
						width={225}
						height={225}
					></Image>
					<span className={styles["result-txt"]}>SUCCESS</span>
				</div>
			</div>
			<div
				className={styles["image"]}
				style={{ backgroundImage: `url(${bckgImg2.src})` }}
				onClick={() => {
					console.log(true);
				}}
			>
				<div className={styles["select-image"]}>
					<span className={styles["select-image-txt"]}>
						Select image
					</span>
				</div>
				<div className={styles["img-data"]}>
					<span className={styles["image-title"]}>Image_name</span>
					<span className={styles["image-description"]}>
						Description
					</span>
				</div>
				<div className={styles["result"]}>
					<Image
						src={wrongImg.src}
						alt="Wrong"
						width={225}
						height={225}
					></Image>
					<span className={styles["result-txt"]}>WRONG</span>
				</div>
			</div>
		</div>
	);
};

export default GamePage;
