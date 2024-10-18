import classNames from "classnames";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../Home/home.module.scss";
import { useEffect, useState } from "react";

const Sectors = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Barkod Oxuyucular",
        productImg: "https://www.posstore.az/images/list/BarkodOxuyucu.png",
      },
      {
        id: 2,
        name: "Barkod printerlər",
        productImg: "https://www.posstore.az/images/list/BarkodPrinter.png",
      },
      {
        id: 3,
        name: "Barkod Tərəzilər",
        productImg: "https://www.posstore.az/images/list/BarkodTerezi.png",
      },
      {
        id: 4,
        name: "Pul Qutuları",
        productImg: "https://www.posstore.az/images/list/CekPrinter.png",
      },
      {
        id: 5,
        name: "Çek Printerlər",
        productImg: "https://www.posstore.az/images/list/Komputerler.png",
      },
      {
        id: 6,
        name: "Toxunuşlu Monitorlar",
        productImg: "https://www.posstore.az/images/list/CardReader.png",
      },
      {
        id: 7,
        name: "Kart Oxuyucular",
        productImg: "https://www.posstore.az/images/list/Komputerler.png",
      },
      {
        id: 8,
        name: "Fiyatgörlər",
        productImg: "https://www.posstore.az/images/list/Kagizlar.png",
      },
      {
        id: 9,
        name: "Kağızlar",
        productImg: "https://www.posstore.az/images/list/Kagizlar.png",
      },
      {
        id: 10,
        name: "Komputerlər",
        productImg: "https://www.posstore.az/images/list/Komputerler.png",
      },
    ]);
  },[]);

  return (
    <section id={styles.givenSectors}>
      <div className={styles.container}>
        <h2>Sektorlar</h2>
        <p>
          Biznesin avtomatlaşdırılması üçün bütün sektorlara uyğun hər növ
          avandanlıqlar
        </p>
        <div className={styles.sectorsInnerParts}>
          <div className={classNames("row", styles.fullScores)}>
         {products.map((product)=>{
            return(
                <div key={product.id}
                className={classNames(" col-12 col-md-6 col-lg-4", styles.col)}
              >
                <Link className={styles.sectorLink} to={`/sectors/${product.id}`}>
                
                <div className={classNames("card", styles.sectorCard)}>
   <div className={styles.sectorCardImg}>
    <img src={product.productImg} alt="" />
   </div>
   <div className={styles.sectorCardContent}>
                    <div className={styles.sectorCardContentLeft}>
                      <button>Satış</button>
                      <h5>{product.name}</h5>
                      <p>
                        <IoLocationSharp /> Bakı,Azərbaycan
                      </p>
                    </div>
                    <div
                      className={styles.sectorCardContentRight}>
                      <FaHeart className={styles.like}/>
                    </div>
                  </div >
               
                </div>
             
                </Link>
                </div>
             
            )
         })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sectors;
