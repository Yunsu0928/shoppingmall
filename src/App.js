import "./App.css";
import Main from "./components/Main";
import { Button, Navbar, Container, Nav, Row } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
// import bg from "./asset/main.png";
// import {a,b} from '경로' // import 여러개 하려면

function App() {
	return (
		<div className="App">
			{/* <div>
				<Button variant="primary">Primary</Button>
			</div> */}
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">Hong Shopping</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link to="/" href="/">
							Home
						</Nav.Link>
						<Nav.Link to="/detail" href="detail">
							Detail
						</Nav.Link>
						<Nav.Link to="/about" href="about">
							About
						</Nav.Link>
						<Nav.Link to="/mypage" href="mypage">
							My Page
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			{/* <Link to="/">HOME</Link>
			<Link to="/detail">Detail</Link>
			<Link to="/about">About</Link> */}

			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/detail" element={<div>상세페이지</div>} />
				<Route path="/about" element={<div>어바웃페이지</div>} />
				<Route path="/mypage" element={<div>마이페이지</div>} />
			</Routes>

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
