import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { IoBagOutline } from "react-icons/io5";

import styles from "../Header/burgerMenu.module.scss";
const BurgerMenu = () => {

const [isOpen, setIsOpen] = useState(false);
const toggleMenu = ()=>{
    setIsOpen(!isOpen);
}


  return (
    <div className={styles.burgerMenu}>
      <div className={styles.burgerMenuLogo} onClick={toggleMenu}>
        {
            isOpen ? <IoMdClose /> : <IoMdMenu />
        }
       

      </div>
      <ul className={`${styles.burgerMenuContent} ${isOpen ? styles.show : ""}`}>
        <li>
          <a href="#">Əsas</a>
        </li>
        <li>
          <a href="#">Haqqımızda</a>
        </li>
        <li>
          <a href="#">Tərəfdaşlarımız</a>
        </li>
        <li>
          <a href="#">Əlaqə</a>
        </li>
        <li>
          <a href="#">Proqram Təminatı</a>
        </li>
        <li>
          <a href="#">Avadaqanlıqlar</a>
        </li>
        <li>
          <a href="#">Sektorlar</a>
        </li>
        <li>
          <a href="#">
          <IoBagOutline />

          </a>
        </li>
      </ul>
    </div>
  );
};
export default BurgerMenu;
