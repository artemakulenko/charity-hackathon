import Container from "../UI/Container/Container";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "../UI/Button/Button";
import styles from "./Home.module.css";

export const Home = () => {
	const navigate = useNavigate();
	const [numOfDivs, setNumOfDivs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
	const [description, setDescription] = useState(0);

	const numDivsHandler = event => {
		const array = [];
		let quantity = event.currentTarget.value;
		for (let i = 0; i < quantity; i++) {
			array.push(i);
		}

		setDescription(Number(event.currentTarget.value));
		setNumOfDivs(array);
	};

	const sendSubmit = link => {
		navigate(link);
	};

	return (
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.actions}>
					<h1 className={styles.title}>
						Добро пожаловать в <br /> Homebound <span style={{ color: "red" }}>Hearts!</span>
					</h1>
					<h2 className={styles.h2}>
						Выберите сложность:
						{description ? (
							<span>
								{description === 12 ? " Легко, Сетка 3*4" : ""}
								{description === 16 ? " Средне, Сетка 4*4" : ""}
								{description === 20 ? " Сложно, Сетка 4*5" : ""}
							</span>
						) : (
							""
						)}
					</h2>

					<div className={styles.btnGrid}>
						<Button value={12} style="primary" onClick={event => numDivsHandler(event)}>
							Легко
						</Button>
						<Button value={16} style="primary" onClick={event => numDivsHandler(event)}>
							Средне
						</Button>
						<Button value={20} style="primary" onClick={event => numDivsHandler(event)}>
							Сложно
						</Button>
						<Button type="button" style="action" onClick={() => sendSubmit(`/game/${numOfDivs.length}`)}>
							Играть
						</Button>
					</div>
				</div>

				<div className={` ${styles.grid} ${numOfDivs.length === 12 ? styles.easy : ""} ${numOfDivs.length === 16 ? styles.medium : ""} ${numOfDivs.length === 20 ? styles.hard : ""}`}>
					{numOfDivs.map(el => (
						<div key={el}></div>
					))}
				</div>
			</div>
		</Container>
	);
};
