function MenuContainer({ link, icon, isHome }) {
  return (
    <li className={isHome ? `active !flex !justify-center !items-center ` : `!flex !justify-center !items-center`}>
      <a href={link}>
        <span className="icon">{icon}</span>
      </a>
    </li>
  );
}

export default MenuContainer;