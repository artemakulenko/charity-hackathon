import classnames from "classnames";
import heart from "../../assets/images/heart.png";
import styles from "./Card.module.css";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
	const handleClick = () => {
		!isFlipped && !isDisabled && onClick(index);
	};

	return (
		<div
			className={classnames("card", {
				"is-flipped": isFlipped,
				"is-inactive": isInactive,
			})}
			onClick={handleClick}
		>
			<div className="card-face card-font-face">
				<img src={heart} alt="backside" />
			</div>
			<div className="card-face card-back-face">
				<img src={card.image} alt="card" />
			</div>
		</div>
	);
};

export default Card;
