import React from "react";
import styles from "../Home/home.module.scss";
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


const Nrspay = ()=>{
    return(
        <section id={styles.nrspayPart}>
            <div className={styles.container}>
                <div className={styles.descriptionPart}>
                    <h1>Biznesinizə az, Özünüzə isə daha çox vaxt ayırın </h1>
                    <p>Biznesin avtomatlaşdırılması sahəsində etibarlı tərəfdaşınız</p>
                </div>
            </div>
        </section>
    )
}
export default Nrspay