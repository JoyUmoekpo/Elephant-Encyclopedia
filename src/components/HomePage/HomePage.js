import React from "react";
import "./HomePage.css";
import elephantCover from "../../assets/elephant--homepage-cover.jpg";

const HomePage = () => {
	return (
		<div>
			{" "}
			<img src={elephantCover} alt="Homepage Cover" className="cover" />{" "}
		</div>
	);
};

export default HomePage;
