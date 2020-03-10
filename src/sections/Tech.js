import React, { Component } from "react";

export class Tech extends Component {
	getTechObjects() {
		return (
			<>
				<div className={"scores"}>
					<span>React Native</span> <span>9</span>
				</div>
				<div className={"scores"}>
					<span>React</span> <span>9</span>
				</div>
				<div className={"scores"}>
					<span>Responsive web dev</span> <span>9</span>
				</div>
				<div className={"scores"}>
					<span>Typescript</span> <span>8</span>
				</div>
				<div className={"scores"}>
					<span>CI/CD</span> <span>9</span>
				</div>
				<div className={"scores"}>
					<span>Testing</span> <span>7</span>
				</div>
				<div className={"scores"}>
					<span>Nodejs</span> <span>6</span>
				</div>
				<div className={"scores"}>
					<span>Docker</span> <span>6</span>
				</div>
				<div className={"scores"}>
					<span>Python</span> <span>6</span>
				</div>
			</>
		);
	}

	render() {
		return <div className={"main-con"}>{this.getTechObjects()}</div>;
	}
}
