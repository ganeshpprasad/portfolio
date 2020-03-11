import React, { Component } from "react";
import { Link } from "../assets/icons";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export const projects = {
	NEWS_APP: "newsApp",
	VOICE_REC: "voiceRecorder"
};

export const techs = {
	RN: "React Native",
	R: "React",
	Next: "Nextjs",
	Redux: "Redux",
	Hooks: "Hooks",
	Node: "Nodejs",
	Heroku: "Heroku",
	Back: "Backbone",
	Docker: "Docker",
	GMail: "GMail APIs",
	Bitrise: "Bitrise",
	TP: "Typescript"
};

export class Projects extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let desc, title, url, offset, techstack, sub, when, info;

		switch (this.props.project) {
			case projects.NEWS_APP:
				info = `PROJECTS`;
				url = `https://github.com/ganeshpprasad/newsapp`;
				title = `See all the news`;
				desc = [
					`A simple nextjs app which fetches news data from NewsAPI.
			The app has a simple data handling.`
				];
				offset = 1.3;
				techstack = [techs.R, techs.Next, techs.Hooks, techs.Heroku];
				break;
			case projects.VOICE_REC:
				info = `PROJECTS`;
				url = `https://github.com/ganeshpprasad/journalRecorder`;
				title = `Record your Thoughts in words`;
				desc = [
					`A voice recorder app which will generate transcripts.
						You can use this app to record random thoughts you wanna
						get back to and read them later. Meetings can also be
						recorded for written records.{" "}`
				];
				offset = 2;
				techstack = [techs.Heroku];
				break;
			default:
				info = `WORK EXPERIENCE`;
				title = `Hiver`;
				sub = ` Front End and React Native Developer`;
				desc = [
					`I started off as a web developer and moved
				on to React Native develoment. Solely maintaining the app
				for about 6 months. `,
					`I got to build Hiver Analytics using chartjs`,
					`I built react-native app and setup CI/CD`
				];
				offset = 0.6;
				when = "April 2017 - Dec 2019";
				techstack = [
					techs.Back,
					techs.R,
					techs.RN,
					techs.TP,
					techs.Docker,
					techs.GMail,
					techs.Redux,
					techs.Hooks,
					techs.Bitrise
				];
				break;
		}

		return (
			<div className="proj-con">
				<ParallaxLayer
					style={{ display: "flex" }}
					offset={offset}
					speed={0.5}>
					<div className="proj-sec">
						<h2 className="primary proj-title">{title}</h2>
						<h4 className="secondary">{sub}</h4>
						{when ? (
							<h4 className="secondary-black">{when}</h4>
						) : null}
					</div>
					<div className="proj-desc-con">
						{desc.map(text => {
							return (
								<p className="secondary-black proj-desc">
									{text}
								</p>
							);
						})}
						<a
							className="proj-link"
							rel="noopener noreferrer"
							target="_blank"
							href={url}>
							Github
							<Link style={"width: 50rem"} />
						</a>
						<div className={"tech-con"}>
							{techstack.map(item => {
								return <span className="tech">{item}</span>;
							})}
						</div>
					</div>
				</ParallaxLayer>
			</div>
		);
	}
}
