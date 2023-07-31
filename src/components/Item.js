import { Col } from "react-bootstrap";

function Item({ clothes }) {
	return (
		<div className="col">
			{clothes.map((e, i) => {
				i = i + 1;
				return (
					<div>
						<img
							src={"https://codingapple1.github.io/shop/shoes" + i + ".jpg"}
							alt="clothes1"
							width="80%"
							height="80%"
							onClick={() => {}}
						/>
						<h4>{e.title}</h4>
						<p>{e.content}</p>
						<p>{e.price}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Item;
