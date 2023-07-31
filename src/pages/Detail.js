import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Row, Col, Nav } from "react-bootstrap";
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
	//useEffect 사용 시 사용하는 변수들
	let [count, setCount] = useState(0);
	let [alarm, setAlarm] = useState(true);
	// input창에 숫자 외 글자 입력시 글자입력안된다는 메세지 띄우기
	let [num, setNum] = useState("");
	//	tab변경 state // 1이면 1번째 상태 2면 2번째상태 3이면 세번째상태가 보이는 것
	let [tab, setTab] = useState(0);

	//console.log(id); // detail/1 1이 출력된다
	let findProduct = clothes.find((e) => {
		return e.id == id;
	});
	// console.log(findProduct);

	// useEffect hook 사용 방법
	useEffect(() => {
		// console.log("안녕"); // mount시 출력 즉, 페이지 로드 시
		// 2초 뒤에 2초이벤트 창 안보이게 작업하기
		let a = setTimeout(() => {
			setAlarm(false);
		}, 2000);
		return () => {
			// return은 useEffect가 실행되기 전에 먼저 실행된다
			clearTimeout(a);
		};
	}, []);

	useEffect(() => {
		if (isNaN(num) === true) alert("숫자를 입력해주세요");
	}, [num]);

	return (
		<div>
			<p>상세페이지입니다</p>
			{/* input창에 숫자 외 글자 입력시 글자입력안된다는 메세지 띄우기 */}
			<input
				onChange={(e) => {
					setNum(e.target.value);
				}}
			/>
			<br />
			{/* <div className="alert alert-warning">2초 이내 구매시 할인!</div> */}
			{alert === true ? (
				<div className="alert alert-warning">2초 이내 구매시 할인!</div>
			) : null}
			{/* useEffect가 update시 출력 즉, 재렌더링 시 */}
			{count}
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				버튼
			</button>
			<div className="product_detail">
				{/* <Item clothes={clothes} /> */}
				<img
					src="https://codingapple1.github.io/shop/shoes1.jpg"
					alt=""
					width="30%"
				/>
				<div>
					<h4>{findProduct.title}</h4>
					<p>{findProduct.content}</p>
					<p>{findProduct.price}원</p>
					<button>주문하기</button>
				</div>
			</div>

			<Nav justify variant="tabs" defaultActiveKey="link-1">
				{/* defaultActiveKey는 기본으로 눌려있을 버튼을 의미한다 */}
				<Nav.Item>
					<Nav.Link
						eventKey="link-1"
						onClick={() => {
							setTab(0);
						}}
					>
						버튼0
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						eventKey="link-2"
						onClick={() => {
							setTab(1);
						}}
					>
						버튼1
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						eventKey="link-3"
						onClick={() => {
							setTab(2);
						}}
					>
						버튼2
					</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="disabled" disabled>
						버튼3
					</Nav.Link>
				</Nav.Item>
			</Nav>
			{/*  이렇게 진행하면 되지만 복잡하다
			{
				tab === 1 ? <div>내용1</div> : null
			}
			{
				tab === 2 ? <div>내용2</div> : null
			} */}
			{/* if문 사용방법 return문 안에서는 사용이 불가능하므로 바깥에서 사용한다 */}
			<TabContent tab={tab} />
			{/* 탭상태를 저장해둘 state가 필요하다 */}
		</div>
	);
}

function TabContent({ tab }) {
	// if (tab === 1) {
	// 	return <div className="start">내용1</div>;
	// }
	// if (tab === 2) {
	// 	return <div>내용2</div>;
	// }
	// if (tab === 3) {
	// 	return <div>내용3</div>;
	// }

	// tab state가 변할때 end부착
	let [fade, setFade] = useState("");

	useEffect(() => {
		//fade라는 변수를 end로 바꿔주세요 라는 코드를 넣기 // className의 fade가 그러면 end로 바뀌게 된다
		// tab state가 변할때 "end를 뗐다가" 부착하기
		// 단, clean up function이 실행되고 setFade('end')가 실행되기까지 텀을 조금 주기
		let a = setTimeout(() => {
			setFade("end");
		}, 100); // 0.1초 후에 화살표 안의 함수를 실행해주기
		return () => {
			clearTimeout(a);
			// clean up function
			// useEffect 실행전에 하고 싶은 코드
			setFade("");
		};
	}, [tab]);

	return (
		// <div className=`start ${fade}`>
		<div className={"start " + fade}>
			{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
		</div>
	);
	//tab이 1이면 내용1이 보이고 2면 내용2가 보이고...
}
export default Detail;
