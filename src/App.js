import { useState } from "react";
import "./App.css";
import data from "./data";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
// import bg from "./asset/main.png";
// import {a,b} from '경로' // import 여러개 하려면

function App() {
	let [clothes] = useState(data);

	return (
		<div className="App">
			{/* <div>
				<Button variant="primary">Primary</Button>
			</div> */}
			<Navbar bg="dark" data-bs-theme="dark">
				<Container>
					<Navbar.Brand href="#home">Hong Shopping</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			{/* <div
				className="main-bg"
				style={{ backgroundImage: "url(" + bg + ")" }}
			></div> */}
			{/* <img src={process.env.PUBLIC_URL + '/logo192.png'}> public폴더 안의 이미지를 사용하는 방법*/}

			<div className="main-bg"></div>
			<div>
				<Row>
					<Col>
						<img
							src="https://i.pinimg.com/originals/57/77/e0/5777e04ffc1c8e4b4f1168a083648d4b.jpg"
							alt="clothes1"
							width="60%"
							height="60%"
						/>
						<h4>{data[0].title}</h4>
						<p>{data[0].content}</p>
						<p>{data[0].price}</p>
					</Col>
					<Col>
						<img
							src="https://i.pinimg.com/564x/90/9a/ec/909aec1bf5958d3968208a9569a63a7b.jpg"
							alt="clothes2"
							width="60%"
							height="60%"
						/>
						<h4>상품명</h4>
						<p>상품설명</p>
					</Col>
					<Col>
						<img
							src="https://i.pinimg.com/564x/5f/d6/71/5fd67181f630fad522e3c4897daac90a.jpg"
							alt="clothes3"
							width="60%"
							height="60%"
						/>
						<h4>상품명</h4>
						<p>상품설명</p>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default App;
