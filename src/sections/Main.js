import React from "react";
import { useTrail, animated } from "react-spring";
import { DEV1, DEV2 } from "../assets/icons";

const config = { mass: 5, tension: 2000, friction: 200 };
const items = ["I build mobile and web apps", "React Native", "React"];
export const Main = () => {
	// const props = useSpring({ opacity: 1, from: { opacity: 0 } });

	const trail = useTrail(items.length, {
		config,
		opacity: 1,
		x: 0,
		height: 60,
		from: { opacity: 0, x: 20, height: 0 }
	});

	return (
		<div className={"main-con"}>
			<h2 className={"salut"}>Hello!</h2>
			<h2 className={"primary"}>I'm Ganesh Prasad P</h2>
			<div>
				{trail.map(({ x, height, ...rest }, index) => (
					<animated.div
						className={index > 0 ? "secondary" : "secondary-black"}
						key={items[index]}
						style={{
							...rest,
							transform: x.interpolate(
								x => `translate3d(0,${x}px,0)`
							)
						}}>
						<animated.div style={{ height }}>
							{items[index]}
						</animated.div>
					</animated.div>
				))}
			</div>
		</div>
	);
};
