import React from "react";
import "./HomePage.css";
import elephantCover from "../../assets/elephant--homepage-cover.jpg";

const HomePage = (props) => {
	return (
		<div>
			<img src={elephantCover} alt="Homepage Cover" className="cover" />
			<h1>{props.greeting}!</h1>
			<h2>{props.explanation}</h2>
		</div>
	);
};

export default HomePage;
