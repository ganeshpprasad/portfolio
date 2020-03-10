import React, { Component } from "react";
import { Link } from "../assets/icons";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export const projects = {
	NEWS_APP: "newsApp",
	VOICE_REC: "voiceRecorder"
};

export class Projects extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let desc, title, url;

		switch (this.props.project) {
			case projects.NEWS_APP:
				url = `https://github.com/ganeshpprasad/newsapp`;
				title = `See all the news`;
				desc = `A simple nextjs app which fetches news data from NewsAPI.
			The app has a simple data handling.`;
				break;
			case projects.VOICE_REC:
				url = `https://github.com/ganeshpprasad/journalRecorder`;
				title = `Record your Thoughts in words`;
				desc = `A voice recorder app which will generate transcripts.
						You can use this app to record random thoughts you wanna
						get back to and read them later. Meetings can also be
						recorded for written records.{" "}`;
				break;
			default:
				break;
		}

		return (
			<div className="main-con proj-con">
				<ParallaxLayer
					offset={this.props.project === projects.NEWS_APP ? 1 : 2}
					speed={
						this.props.project === projects.NEWS_APP ? 0.5 : 0.8
					}>
					<h2 className="proj-title">{title}</h2>
					<div className="proj-desc-con">
						<p className="proj-desc">{desc}</p>
						<a
							className="proj-link"
							rel="noopener noreferrer"
							target="_blank"
							href={url}>
							Github
							<Link style={"width: 50rem"} />
						</a>
					</div>
				</ParallaxLayer>
			</div>
		);
	}
}
