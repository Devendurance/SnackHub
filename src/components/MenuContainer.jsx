import { Link } from "react-router-dom";
function MenuContainer({ link, icon, isHome }) {
  return (
    <li className={isHome ? `active !flex !justify-center !items-center ` : `!flex !justify-center !items-center`}>
      <Link to={link}>
        <span className="icon">{icon}</span>
      </Link>
    </li>
  );
}

export default MenuContainer;