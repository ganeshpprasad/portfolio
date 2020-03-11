import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export class Tech extends Component {
	getTechObjects() {
		return (
			<>
				<div className={"scores-small"}>
					<span>React Native</span> <span>9</span>
				</div>
				<div className={"scores-small"}>
					<span>React</span> <span>9</span>
				</div>
				<div className={"scores-small"}>
					<span>Responsive web dev</span> <span>9</span>
				</div>
				<div className={"scores-small"}>
					<span>Typescript</span> <span>8</span>
				</div>
				<div className={"scores-small"}>
					<span>CI/CD</span> <span>9</span>
				</div>
				<div className={"scores-small"}>
					<span>Testing</span> <span>7</span>
				</div>
			</>
		);
	}

	render() {
		return (
			<div className={"main-con tech-con"}>
				<ParallaxLayer offset={0.5} speed={0.9}>
					<h1 className={"proj-title"}>EXPERIENCE</h1>
				</ParallaxLayer>
				<ParallaxLayer
					style={{ width: "60%", padding: "1rem" }}
					offset={0.6}
					speed={0.8}>
					{this.getTechObjects()}
				</ParallaxLayer>
			</div>
		);
	}
}
