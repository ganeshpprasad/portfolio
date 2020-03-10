import React from "react";
import { useSpring, animated } from "react-spring";
import { DEV1, DEV2 } from "../assets/icons";

export const Main = () => {
	// const props = useSpring({ opacity: 1, from: { opacity: 0 } });
	const props = useSpring({ scroll: 100, from: { scroll: 0 } });

	return (
		<animated.div scrollTop={props} className={"main-con"}>
			<h2 className={"name"}>Hello</h2>
			<h2 className={"name"}>I'm Ganesh Prasad P</h2>
			<p className={"desc"}>
				I'm a web and mobile app developer for 2+ years. I have
				developed professional grade apps. I'm passionate about User
				Experience and implement strong usability techniques to all the
				products I built.
			</p>
			{/* <span>{getIcon(DEV_1)}</span>
			 */}
			{/* <DEV1></DEV1>
			<DEV2 /> */}
		</animated.div>
	);
};
