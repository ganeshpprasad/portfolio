import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export class Contact extends Component {
	render() {
		return (
			<div className="main-con">
				<ParallaxLayer offset={2.9} speed={0.5}>
					<h2 className="proj-title">Elsewhere in the internet</h2>
					<div className="connect-list">
						<a className="connect-item" href="">
							Medium
						</a>
						<a className="connect-item" href="">
							Twitter
						</a>
						<a className="connect-item" href="">
							LinkedIn
						</a>
						<a className="connect-item" href="">
							Github
						</a>
					</div>
				</ParallaxLayer>
			</div>
		);
	}
}
