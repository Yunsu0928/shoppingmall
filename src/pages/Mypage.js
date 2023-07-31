import { Outlet } from "react-router-dom";

function Mypage() {
	return (
		<div>
			마이페이지 입니다
			<Outlet></Outlet>
		</div>
	);
}

export default Mypage;
