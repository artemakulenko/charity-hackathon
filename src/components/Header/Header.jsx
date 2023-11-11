import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <Login />
    </header>
  );
}

export default Header;
