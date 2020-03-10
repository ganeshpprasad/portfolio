import React from "react";
import "./App.sass";
import { Main, Tech, projects, Projects } from "./sections";

function App() {
	return (
		<div className="App">
			<Main />
			<Tech />
			<Projects project={projects.VOICE_REC} />
			<Projects project={projects.NEWS_APP} />
		</div>
	);
}

export default App;
