






import { useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import money from "../../images/money.jpg";
import netum from "../../images/netum.jpg";
import winson from "../../images/winson.jpg";
import winson2 from "../../images/winson2.jpg";
import datalogic from "../../images/datalogic.jpg";



import styles from "../Home/home.module.scss";
const SingleSector = () => {
  const productList = [
    {id:1,
         pageHead:"Avadanlıqlar-Barkod oxuyucu",
    innerItems:[
        {id:1,
             name:"OkuScan", 
             
             price:70, 
             image:"https://www.posstore.az/images/list/BarkodTerezi.png"},
             {id:2,
                name:"Netum", 
               
                price:190, 
                image:"https://www.posstore.az/images/list/BarkodPrinter.png"}
    ]
        },
    {id:2,
        pageHead:"Avadanlıqlar-Barkod printer",
        innerItems:[
            {id:3,
                 name:"OkuPrint 80mm", 
              
                 price:115, 
                 image:"https://www.posstore.az/images/list/CekPrinter.png"},
                
        ]},
    {id:3, 
        pageHead:"Avadanlıqlar-Barkod tərəzi",
        innerItems:[
            {id:4,
                 name:"Merc", 
                
                 price:600, 
                 image:"https://www.posstore.az/images/list/Komputerler.png"},
               
        ]
    },
    {id:4,
        pageHead:"Avadanlıqlar-Barkod oxuyucu",
        innerItems:[
            {id:5,
                 name:"Pul Qutusu(Dəmir Çərçivə)", 
                
                 price:110, 
                 image:"https://www.posstore.az/images/list/CardReader.png"},
            ]
    },
    {id:5,
      pageHead:"Avadanlıqlar-Barkod oxuyucu",
        innerItems:[
            {id:6,
                 name:"Pul Qutusu(Dəmir Çərçivə)", 
                
                 price:110, 
                 image:money},
            ]
    },
    {id:6,
      pageHead:"Avadanlıqlar-Barkod oxuyucu",
        innerItems:[
            {id:7,
                 name:"Pul Qutusu(Dəmir Çərçivə)", 
               
                 price:110, 
                 image:datalogic},
            ]
    },
    {id:7,
      pageHead:"Avadanlıqlar-Barkod oxuyucu",
        innerItems:[
            {id:8,
                 name:"Pul Qutusu(Dəmir Çərçivə)", 
               
                 price:110, 
                 image:winson},
            ]
    },
    {id:8,
      pageHead:"Avadanlıqlar-Barkod oxuyucu",
        innerItems:[
            {id:9,
                 name:"Pul Qutusu(Dəmir Çərçivə)", 
                
                 price:110, 
                 image:winson2},
            ]
    },
    {id:9,
      pageHead:"Avadanlıqlar-Barkod oxuyucu",
        innerItems:[
            {id:10,
                 name:"Pul Qutusu(Dəmir Çərçivə)", 
                
                 price:110, 
                 image:netum},
            ]
    },
]

  const { sectorsId } = useParams();
  const product = productList.find((p) => p.id === parseInt(sectorsId));

  if (!product) {
    return <div>Product is not found</div>;
  }


  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      cart.push({ ...item, quantity: 1 }); 
    }

    localStorage.setItem('cart', JSON.stringify(cart)); 
  };

  return (
    <section id={styles.SingleSectorPart}>
      <div className={styles.container}>
        <div className={styles.bgFon}></div>
        <div className={styles.bgContent}>
          <h1>{product.pageHead}</h1>
        </div>
        <div className={styles.singleCardsBox}>
          {product.innerItems.map((item, index) => {
            return (
              <div key={index} className={styles.sectorCard}>
                <div className={styles.sectorCardImg}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={styles.sectorCardContent}>
                  <div className={styles.sectorCardContentLeft}>
                    <button className={styles.sales}>Satış</button>
                    <h5>{item.name}</h5>
                    <p>
                      <IoLocationSharp /> Bakı, Azərbaycan
                    </p>
                    <button className={styles.additionalBtn}>Ətraflı</button>
                    <button
                      className={styles.additionalBtn}
                      onClick={() => addToCart(item)} 
                    >
                      Səbətə əlavə et{" "}
                      <LuShoppingBasket className={styles.basket} />
                    </button>
                    <p className={styles.prices}>{item.price} AZN</p>
                  </div>
                  <div className={styles.sectorCardContentRight}>
                    <FaHeart className={styles.like} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



export default SingleSector;
