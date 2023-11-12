import Container from "../UI/Container/Container";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>404 - Page Not Found</h1>
        <p className={styles.message}>Упс! Такой страницы не существует.</p>
      </div>
    </Container>
  );
};

export default NotFound;
