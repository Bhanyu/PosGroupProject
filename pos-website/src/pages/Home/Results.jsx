import React from "react";
import styles from "../Home/home.module.scss"
import classNames from "classnames";
import { IoMdTrophy } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


const Results = ()=>{
    return(
        <section id={styles.mainPages}>
            <div className={styles.container}>
                <h2>Nəticələrimiz</h2>
                <p>3000+ müştəri məmnuniyyəti</p>
                <div  className={classNames("row", styles.fullScores)}>
           <div className={classNames(" col-12 col-md-6 col-lg-3", styles.col)}>
  
   <div className={classNames("card", styles.scoreCard)}>
   <div className={classNames("card-content", styles.cardİcon)}>
   <IoMdTrophy className={styles.innerIcon} />

     </div>
   <div className={classNames("card-content", styles.cardContent)}>
      <h5 className={classNames("card-title", styles.cardHead)}>
     3000
        </h5>
        <p className={classNames("card-text", styles.cardInner)}>
        12 fərqli sektor
        </p>
     </div>
    </div>
  
  </div>


  <div className={classNames(" col-12 col-md-6 col-lg-3", styles.col)}>
  
  <div className={classNames("card", styles.scoreCard)}>
  <div className={classNames("card-content", styles.cardİcon)}>
  <FaBriefcase className={styles.innerIcon} />

    </div>
  <div className={classNames("card-content", styles.cardContent)}>
     <h5 className={classNames("card-title", styles.cardHead)}>
      156
       </h5>
       <p className={classNames("card-text", styles.cardInner)}>
       12 fərqli sektor
       </p>
    </div>
   </div>
 
 </div>

 <div className={classNames(" col-12 col-md-6 col-lg-3", styles.col)}>
  
  <div className={classNames("card", styles.scoreCard)}>
  <div className={classNames("card-content", styles.cardİcon)}>
  <FaLightbulb className={styles.innerIcon} />

    </div>
  <div className={classNames("card-content", styles.cardContent)}>
     <h5 className={classNames("card-title", styles.cardHead)}>
      5100
       </h5>
       <p className={classNames("card-text", styles.cardInner)}>
       12 fərqli sektor
       </p>
    </div>
   </div>
 
 </div>

 <div className={classNames(" col-12 col-md-6 col-lg-3", styles.col)}>
  
  <div className={classNames("card", styles.scoreCard)}>
  <div className={classNames("card-content", styles.cardİcon)}>
  <FaHeart className={styles.innerIcon} />

    </div>
  <div className={classNames("card-content", styles.cardContent)}>
     <h5 className={classNames("card-title", styles.cardHead)}>
    44
       </h5>
       <p className={classNames("card-text", styles.cardInner)}>
       12 fərqli sektor
       </p>
    </div>
   </div>
 
 </div>



           </div>
            
            </div>
        </section>
    )
}
export default Results