import Container from "../UI/Container/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Home.module.css";

export const Home = () => {
	const navigate = useNavigate();
	const [numOfDivs, setNumOfDivs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	const numDivsHandler = event => {
		const array = [];
		let quantity = event.target.value;
		for (let i = 0; i < quantity; i++) {
			array.push(i);
		}

		setNumOfDivs(array);
	};

	const sendSubmit = link => {
		navigate(link);
	};

	return (
		<Container>
			<h1>Выберете сложность</h1>
			<div className={styles.wrapper}>
				<div className={styles.actions}>
					<button
						value={6}
						// onClick={() => sendSubmit(/game/easy)}
						onClick={event => numDivsHandler(event)}
					>
						Easy
					</button>
					<button
						value={16}
						// onClick={() => sendSubmit(/game/medium)}
						onClick={event => numDivsHandler(event)}
					>
						Medium
					</button>
					<button
						value={20}
						// onClick={() => sendSubmit(/game/hard)}
						onClick={event => numDivsHandler(event)}
					>
						Hard
					</button>
					<button type="button" onClick={() => sendSubmit(`/game/${numOfDivs.length}`)}>
						Играть
					</button>
				</div>
				<div className={styles.grid}>
					{numOfDivs.map(el => (
						<div key={el}></div>
					))}
				</div>
			</div>
		</Container>
	);
};
