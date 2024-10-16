
import styles from "../Home/home.module.scss"
import classNames from "classnames";

const Services = ()=>{
    return(
        <section id={styles.servicesTypes}>
            <div className={styles.container}>
                <h2 className={styles.title}>Xidmət növləri</h2>
                <p  className={styles.subtitle}>İstənilən sektora aid xidmətlər</p>
           <div  className={classNames("row", styles.row)}>
           <div className={classNames(" col-12 col-md-6 col-lg-2", styles.col)}>
  
   <div className={classNames("card", styles.card)}>
   <div className={classNames("card-content", styles.cardİmg)}>
   <img src="https://www.posstore.az/images/hero/h1.png" alt="" />
     </div>
   <div className={classNames("card-content", styles.cardContext)}>
      <h5 className={classNames("card-title", styles.cardTitle)}>
         Ticarət
        </h5>
        <p className={classNames("card-text", styles.cardText)}>
        12 fərqli sektor
        </p>
     </div>
    </div>
  
  </div>

  <div className={classNames(" col-12 col-md-6 col-lg-2", styles.col)}>
  
  <div className={classNames("card", styles.card)}>
  <div className={classNames("card-content", styles.cardİmg)}>
  <img src="	https://www.posstore.az/images/hero/h2.png" alt="" />
    </div>
  <div className={classNames("card-content", styles.cardContext)}>
     <h5 className={classNames("card-title", styles.cardTitle)}>
        Ticarət
       </h5>
       <p className={classNames("card-text", styles.cardText)}>
       12 fərqli sektor
       </p>
    </div>
   </div>
 
 </div>

 <div className={classNames(" col-12 col-md-6 col-lg-2", styles.col)}>
  
  <div className={classNames("card", styles.card)}>
  <div className={classNames("card-content", styles.cardİmg)}>
  <img src="https://www.posstore.az/images/hero/h3.png" alt="" />
    </div>
  <div className={classNames("card-content", styles.cardContext)}>
     <h5 className={classNames("card-title", styles.cardTitle)}>
        Ticarət
       </h5>
       <p className={classNames("card-text", styles.cardText)}>
       12 fərqli sektor
       </p>
    </div>
   </div>
 
 </div>

 <div className={classNames(" col-12 col-md-6 col-lg-2", styles.col)}>
  
  <div className={classNames("card", styles.card)}>
  <div className={classNames("card-content", styles.cardİmg)}>
  <img src="	https://www.posstore.az/images/hero/h6.png" alt="" />
    </div>
  <div className={classNames("card-content", styles.cardContext)}>
     <h5 className={classNames("card-title", styles.cardTitle)}>
        Ticarət
       </h5>
       <p className={classNames("card-text", styles.cardText)}>
       12 fərqli sektor
       </p>
    </div>
   </div>
 
 </div>

 <div className={classNames(" col-12 col-md-6 col-lg-2", styles.col)}>
  
  <div className={classNames("card", styles.card)}>
  <div className={classNames("card-content", styles.cardİmg)}>
  <img src="https://www.posstore.az/images/hero/h4.png" alt="" />
    </div>
  <div className={classNames("card-content", styles.cardContext)}>
     <h5 className={classNames("card-title", styles.cardTitle)}>
        Ticarət
       </h5>
       <p className={classNames("card-text", styles.cardText)}>
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
export default Services