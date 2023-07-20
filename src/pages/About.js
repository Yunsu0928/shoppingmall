import { Outlet } from "react-router-dom";

function About() {
	return (
		<div>
			<div>어바웃페이지입니다</div>
			<Outlet></Outlet>
		</div>
	);
}

export default About;
