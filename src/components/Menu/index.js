import styles from "@/components/Menu/Menu.module.css";

const Menu = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div class={styles.logo}>
          <a href="#">
            <img src="images/thegames_symbol.png" alt="The Games" />
          </a>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menuItems} id={styles.menuItems}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Cadastrar jogos</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
        <div className={styles.menuBtn} id={styles.menuBtn}>
          <i id="menuIcon"></i>
        </div>
      </nav>
    </>
  );
};
export default Menu;