import { useState } from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";
import data from "../data";
import axios from "axios";

function Main() {
	let [clothes, setClothes] = useState(data);
	return (
		<div className="flex">
			<div className="main-bg"></div>

			<Row>
				<Item clothes={clothes} />
			</Row>
			<div>
				{/* ajax쓰러면 옵션3개 중 택1
				1. XMLHttpRequest 2.fetch() 3. axio */}
				<button
					className="buttonStyle"
					onClick={() => {
						// 로딩 중 ui 띄우기
						axios
							.get("https://codingapple1.github.io/shop/data2.json")
							.then((result) => {
								console.log(result.data);
								console.log(clothes);
								// clothes에 가져온 데이터 추가하기
								// 기존 데이터를 복사해서 사용하기
								let copy = [...clothes, ...result.data];
								setClothes(copy);
								// 로딩중 ui 숨기기
							})
							.catch(() => {
								console.log("실패했습니다");
								// 로딩중 ui 숨기기
							});

						// fetch는 json데이터를 가져왔을때 json을 그대로 출력해주기 때문에 JSON>array/object변환과정이 필요하다
						// fetch("https://codingapple1.github.io/shop/data2.json")
						// .then(result => result.json()) // JSON>array/object변환과정이 필요하다
						// .then(data => {})
						// 그래서 axios가 fetch보다 편리하다고 볼 수 있다 (JSON데이터를 한 번 더 변환해주지 않아도 돼서)

						// 동시에 ajax요청 여러개 하려면
						// Promise.all([axios.get('/url1'), axios.get('/url2')])
						// promiseall안에 모두가 성공하면 코드를 실행하고 싶을때
						// .then(()=>{})쓰면된다
						// get을 두번써도 되지만 그러면 코드가 너무 길어지니까

						// 원래 서버와 문자만 주고 받을 수 있는데 객체랑 배열을 어떻게 주고 받았을까?
						// "{name: Kim''}" 이렇게 문자열로 만들어서 주고받으면 된다 일명 JSON
					}}
				>
					더보기
				</button>
			</div>
		</div>
	);
}

export default Main;
