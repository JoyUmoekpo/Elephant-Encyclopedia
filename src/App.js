import "./App.css";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
	const content = [
		{
			greeting: "Hello everyone",
			explanation: "This is my application, Elephant Encyclopedia!",
			message: "Elephants🐘!",
		},
	];

	return (
		<div className="App">
			<header className="App-header">
				<HomePage
					greeting={content[0].greeting}
					explanation={content[0].explanation}
					message={content[0].message}
				/>
			</header>
		</div>
	);
};

export default App;
