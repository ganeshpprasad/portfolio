import React from "react";
import "./App.sass";
import { Main, Tech, projects, Projects, Contact } from "./sections";

function App() {
	return (
		<div className="App">
			<Main />
			<Tech />
			<Projects project={projects.VOICE_REC} />
			<Projects project={projects.NEWS_APP} />
			<Contact />
		</div>
	);
}

export default App;
