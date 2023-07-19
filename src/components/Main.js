import { useState } from "react";
import { Row } from "react-bootstrap";
import Item from "./Item";
import data from "../data";

function Main() {
	let [clothes] = useState(data);
	return (
		<div>
			<div className="main-bg"></div>
			<div>
				<Row>
					<Item clothes={clothes} />
				</Row>
			</div>
		</div>
	);
}

export default Main;
