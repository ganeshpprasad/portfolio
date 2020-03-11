import React from "react";
import "./App.sass";
import { Main, Tech, projects, Projects, Contact } from "./sections";
import { Parallax } from "react-spring/renderprops-addons";

function App() {
	let parallax;
	return (
		<div className="App">
			<Parallax pages={4} scrolling={true} ref={ref => (parallax = ref)}>
				<Main />
				<Projects />
				<Projects project={projects.VOICE_REC} />
				<Projects project={projects.NEWS_APP} />

				<Contact />
			</Parallax>
		</div>
	);
}

export default App;
