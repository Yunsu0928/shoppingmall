import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
// import Item from "../components/Item";

// const YellowBtn = styled.button`
//   background-color: ${ props => props.color };
//   color: ${props => props.color === 'blue' ? 'white' : 'black'}
// `
// <YellowBtn color="blue">버튼</YellowBtn>
// props를 이렇게 작성할 수 있다
// let NewBtn = styled.button(YellowBtn)`` // 기존 버튼 스타일들을 복붙안해도 쓸수 있는 방법

function Detail({ clothes }) {
	//유저가 URL파라미터에 입력한 내용을 가져오려면 useParams()를 사용
	let { id } = useParams();

	//console.log(id); // detail/1 1이 출력된다
	let findProduct = clothes.find((e) => {
		return e.id == id;
	});
	// console.log(findProduct);

	// useEffect hook 사용 방법
	useEffect(() => {
		console.log("안녕"); // mount시 출력 즉, 페이지 로드 시
	});
	let [count, setCount] = useState(0);

	return (
		<div>
			상세페이지입니다
      {/* useEffect가 update시 출력 즉, 재렌더링 시 */}
			{count}
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			> 
				버튼
			</button>
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
