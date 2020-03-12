import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export class Contact extends Component {
	render() {
		const { isMobile } = this.props;

		return (
			<div
				className={
					isMobile ? "connect-mobile-con main-con" : "main-con"
				}>
				<ParallaxLayer offset={isMobile ? 1.9 : 2.9} speed={0.1}>
					<h2 className="primary proj-title">
						Elsewhere in the internet
					</h2>
					<div className="connect-list">
						<a
							className="connect-item"
							href="https://medium.com/@ganeshpprasad">
							Medium
						</a>
						<a
							className="connect-item"
							href="https://twitter.com/ganeshpprasad">
							Twitter
						</a>
						<a
							className="connect-item"
							href="www.linkedin.com/in/ganeshprasadp">
							LinkedIn
						</a>
						<a
							className="connect-item"
							href="https://github.com/ganeshpprasad/">
							Github
						</a>
					</div>
				</ParallaxLayer>
			</div>
		);
	}
}
