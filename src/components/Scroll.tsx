import React, { ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

const Scroll = (props: Props) => {
	return (
		<div
			style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
		>
			{props.children}
		</div>
	);
};

export default Scroll;
