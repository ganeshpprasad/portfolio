import React from "react";
import "./App.sass";
import { Main, projects, Projects, Contact } from "./sections";
import { Parallax } from "react-spring/renderprops-addons";

function App() {
	let parallax;
	let isMobile;
	if (window.innerWidth < 400) {
		isMobile = true;
	} else if (window.innerWidth < 800) {
		isMobile = true;
	} else {
		isMobile = false;
	}

	return (
		<div className="App">
			<Parallax
				pages={isMobile ? 3 : 4}
				scrolling={true}
				ref={ref => (parallax = ref)}>
				<Main isMobile={isMobile} />
				<Projects isMobile={isMobile} />
				<Projects isMobile={isMobile} project={projects.VOICE_REC} />
				<Projects isMobile={isMobile} project={projects.NEWS_APP} />

				<Contact isMobile={isMobile} />
			</Parallax>
		</div>
	);
}

export default App;
