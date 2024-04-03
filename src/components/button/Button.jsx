import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, type, to, onClick }) => {
  const base = "btn center";

  const styles = {
    round: base + " round",
    round_sm: base + " round round--small",
    primary: base + " primary",
    primary_md: base + " primary--md",
  };

  if (to)
    return (
      <Link className={`${styles[type]}`} to={to}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={`${styles[type]}`}>
      {children}
    </button>
  );
};
export default Button;
