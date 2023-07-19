import { Col } from "react-bootstrap";

function Item({ clothes }) {
	return (
		<div>
			{clothes.map((e, i) => {
				i = i + 1;
				return (
					<Col>
						<img
							src={"https://codingapple1.github.io/shop/shoes" + i + ".jpg"}
							alt="clothes1"
							width="30%"
							height="30%"
						/>
						<h4>{e.title}</h4>
						<p>{e.content}</p>
						<p>{e.price}</p>
					</Col>
				);
			})}
		</div>
	);
}

export default Item;
