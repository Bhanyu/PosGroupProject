import React from "react";
import styles from "../Header/header.module.scss"
import posLogo from "../../../images/posLogo.png"
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
const Header = ()=>{
    return(
        <header id={styles.mainHeader}>
         <div className={styles.container}>
            <div className={styles.headerLogo}>
               <Link to={`/`}>
               <img src={posLogo} alt="Logo"/>
               </Link>
            </div>
            <div className={styles.navigation}>
                <ul className={styles.navLinks}>
                    <li><a href="/">Əsas</a></li>
                    <li><a href="/about">Haqqımızda</a></li>
                    <li><a href="/partners">Tərəfdaşlarımız</a></li>
                    <li><a href="#">Əlaqə</a></li>
                    <li><a href="/software">Proqram Təminatı</a></li>
                    <li><a href="/equipments">Avadaqanlıqlar</a></li>
                    <li><a href="/sectors">Sektorlar</a></li>
                    <li><a href="#" className={styles.bag}><IoBagOutline /></a></li>
                </ul>
            </div>
           <BurgerMenu/>
         </div>
        </header>
    )
}
export default Header