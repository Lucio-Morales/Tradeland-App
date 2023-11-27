import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h2>Landing view</h2>
      <Link to="/home">
        <button>start</button>
      </Link>
    </div>
  );
};

export default Landing;
