import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import { Diamond } from "lucide-react";

function Logo() {
  return (
    <>
      <div className={styles.wrapper}>
        <Diamond className={styles.icon} />
        <Link to="/charity-hackathon/" className={styles.name}>
          Homebound Hearts
        </Link>
      </div>
    </>
  );
}

export default Logo;
