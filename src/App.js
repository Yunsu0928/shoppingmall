import "./App.css";
import { useState } from "react";
import data from "./data";
import { Button, Navbar, Container, Nav, Row } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./components/Main";
import Detail from "./pages/Detail";
import Mypage from "./pages/Mypage";
import About from "./pages/About";
import Event from "./pages/Event";
// import bg from "./asset/main.png";
// import {a,b} from '경로' // import 여러개 하려면

function App() {
	let [clothes] = useState(data);
	// hook // 페이지 이동을 도와주는 함수
	// Link를 사용하게 되면 a태그가 만들어지기때문에 디자인적으로 별로 번거로움
	// <Link onClick={()=>{ navigate('/detail')}}>Detail</Link>
	// 이 함수를 실행하면 페이지가 이동된다
	// navigate(1) 이건 앞으로 한페이지 이동해주세요 라는 의미가 된다
	// -1을 넣으면 뒤로 한페이지 이동해주세요 라는 의미
	let navigate = useNavigate();

	return (
		<div className="App">
			{/* <div>
				<Button variant="primary">Primary</Button>
			</div> */}
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="/">Hong Shopping</Navbar.Brand>
					<Nav className="me-auto">
						{/* <Nav.Link to="/" href="/">Home</Nav.Link> */}
						<Nav.Link
							onClick={() => {
								navigate("/");
							}}
						>
							Home
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate("/detail/0");
							}}
						>
							Detail
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate("/about");
							}}
						>
							About
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate("/event");
							}}
						>
							Event
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								navigate("/mypage");
							}}
						>
							Mypage
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			{/* <Link to="/">HOME</Link>
			<Link to="/detail">Detail</Link>
			<Link to="/about">About</Link> */}

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/detail/:id" element={<Detail clothes={clothes} />} />
				{/* <Route path="/detail/:id" element={<Detail />} /> */}
				{/* /:id 이걸 URL 파라미터라고 한다 detail 뒤에 어떤 내용을 붙여도 Detail페이지를 보여준다 */}
				{/* <Route path="/detail" element={<Detail clothes={clothes}/>} /> */}
				{/* <Route path="/about" element={<About />} /> */}
				{/* <Route path="/about/member" element={<div>어바웃안의페이지</div>} /> */}
				{/* Nested Routes 방법 태그 안에 태그가 들어간 방법 */}
				<Route path="/about" element={<About />}>
					<Route path="member" element={<div>멤버페이지</div>} />
					<Route path="location" element={<div>위치페이지</div>} />
				</Route>
				<Route path="/mypage" element={<Mypage />} />
				<Route path="*" element={<div>없는 페이지입니다</div>} />
				<Route path="/event" element={<Event />}>
					<Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>} />
					<Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
					<Route path="three" element={<div>1주년 기념 쿠폰 받기</div>} />
				</Route>
			</Routes>
			{/* 이상한 페이지로 접근했을떄 404에러페이지가 뜨도록 하는 방법 */}

			{/* <div
				className="main-bg"
				style={{ backgroundImage: "url(" + bg + ")" }}
			></div> */}
			{/* <img src={process.env.PUBLIC_URL + '/logo192.png'}> public폴더 안의 이미지를 사용하는 방법*/}

			{/* <div className="main-bg"></div>
			<div>
				<Row>
					<Item clothes={clothes} />
				</Row>
			</div> */}
		</div>
	);
}

export default App;
