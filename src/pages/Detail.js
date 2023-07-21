import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
// import Item from "../components/Item";

function Detail({ clothes }) {
	//유저가 URL파라미터에 입력한 내용을 가져오려면 useParams()를 사용
	let { id } = useParams();

	//console.log(id); // detail/1 1이 출력된다
	let findProduct = clothes.find((e) => {
		return e.id == id;
	});
	console.log(findProduct);

	return (
		<div>
			상세페이지입니다
			<div>
				<Row>
					{/* <Item clothes={clothes} /> */}
					<Col>
						<img
							src="https://codingapple1.github.io/shop/shoes1.jpg"
							alt=""
							width="100%"
						/>
					</Col>
					<Col>
						<h4>{findProduct.title}</h4>
						<p>{findProduct.content}</p>
						<p>{findProduct.price}원</p>
						<button>주문하기</button>
					</Col>
				</Row>
			</div>
		</div>
	);
}

export default Detail;
