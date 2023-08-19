import React from "react";
import "./HomePage.css";
import elephantCover from "../../assets/elephant--homepage-cover.jpg";

const HomePage = (props) => {
	return (
		<div className="homePage">
			<img src={elephantCover} alt="Homepage Cover" className="cover" />
			<h1>{props.greeting}!</h1>
			<h2>{props.explanation}</h2>
			<h3>{props.message}</h3>
		</div>
	);
};

export default HomePage;
