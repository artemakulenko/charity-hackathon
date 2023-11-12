import Logo from "../Logo/Logo";
// import Login from "../Login/Login";
import Container from "../UI/Container/Container";
import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.wrapper}>
					<Logo />
				</div>
			</Container>
		</header>
	);
}

export default Header;
