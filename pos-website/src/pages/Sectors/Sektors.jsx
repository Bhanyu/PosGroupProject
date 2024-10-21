import styles from "../Sectors/sektors.module.scss"
import AllSektors from "./AllSektors";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Sektors = ()=>{
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //   setProducts([
    //     {
    //       id: 1,
    //       name: "Barkod Oxuyucular",
    //       productImg: "https://www.posstore.az/images/list/BarkodOxuyucu.png",
    //     },
    //     {
    //       id: 2,
    //       name: "Barkod printerlər",
    //       productImg: "https://www.posstore.az/images/list/BarkodPrinter.png",
    //     },
    //     {
    //       id: 3,
    //       name: "Barkod Tərəzilər",
    //       productImg: "https://www.posstore.az/images/list/BarkodTerezi.png",
    //     },
    //     {
    //       id: 4,
    //       name: "Pul Qutuları",
    //       productImg: "https://www.posstore.az/images/list/CekPrinter.png",
    //     },
    //     {
    //       id: 5,
    //       name: "Çek Printerlər",
    //       productImg: "https://www.posstore.az/images/list/Komputerler.png",
    //     },
    //     {
    //       id: 6,
    //       name: "Toxunuşlu Monitorlar",
    //       productImg: "https://www.posstore.az/images/list/CardReader.png",
    //     },
    //     {
    //       id: 7,
    //       name: "Kart Oxuyucular",
    //       productImg: "https://www.posstore.az/images/list/Komputerler.png",
    //     },
    //     {
    //       id: 8,
    //       name: "Fiyatgörlər",
    //       productImg: "https://www.posstore.az/images/list/Kagizlar.png",
    //     },
    //     {
    //       id: 9,
    //       name: "Kağızlar",
    //       productImg: "https://www.posstore.az/images/list/Kagizlar.png",
    //     },
    //     {
    //       id: 10,
    //       name: "Komputerlər",
    //       productImg: "https://www.posstore.az/images/list/Komputerler.png",
    //     },
    //   ]);
    // },[]);
  
    return (
      <>
      <AllSektors/>
      <section id={styles.servicesTypes}>
            <div className={styles.container}>
               
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
      </>
   
    );
}
export default Sektors