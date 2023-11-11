import styles from "./Card.module.css";

const jsBadge = "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?q=80&w=1753&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const Card = ({ card, onClick }) => {
	return (
		<div className={`memory-card${card.isFlipped ? " flip" : ""}`} onClick={onClick} style={{ order: card.order }} data-testid={card.id}>
			<img className="front-face" src={card.image} alt="Card" />
			<img className="back-face" src={jsBadge} alt="JS Badge" />
		</div>
	);
};
