// import { useParams } from "react-router-dom";
// import { IoLocationSharp } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";
// import { LuShoppingBasket } from "react-icons/lu";

// import styles from "../Home/home.module.scss"
// const SingleSector = ()=>{
  
//     const productList = [
//         {id:1,
//              pageHead:"Avadanlıqlar-Barkod oxuyucu",
//         innerItems:[
//             {id:1,
//                  name:"OkuScan", 
//                  price1:110,
//                  price2:70, 
//                  image:"https://www.posstore.az/images/list/BarkodTerezi.png"},
//                  {id:2,
//                     name:"Netum", 
//                     price1:280,
//                     price2:190, 
//                     image:"https://www.posstore.az/images/list/BarkodPrinter.png"}
//         ]
//             },
//         {id:2,
//             pageHead:"Avadanlıqlar-Barkod printer",
//             innerItems:[
//                 {id:1,
//                      name:"OkuPrint 80mm", 
//                      price1:165,
//                      price2:115, 
//                      image:"https://www.posstore.az/images/list/CekPrinter.png"},
                    
//             ]},
//         {id:3, 
//             pageHead:"Avadanlıqlar-Barkod tərəzi",
//             innerItems:[
//                 {id:1,
//                      name:"Merc", 
//                      price1:650,
//                      price2:600, 
//                      image:"https://www.posstore.az/images/list/Komputerler.png"},
                   
//             ]
//         },
//         {id:4,
//             pageHead:"Avadanlıqlar-Barkod oxuyucu",
//             innerItems:[
//                 {id:1,
//                      name:"Pul Qutusu(Dəmir Çərçivə)", 
//                      price1:140,
//                      price2:110, 
//                      image:"https://www.posstore.az/images/list/CardReader.png"},
//                 ]
//         },
//         // {id:5, name:"Product 5"},
//         // {id:6, name:"Product 6"},
//         // {id:7, name:"Product 7"},
//         // {id:8, name:"Product 8"},
//         // {id:9, name:"Product 9"},
//         // {id:10, name:"Product 10"},
//     ]
//     const {sectorsId} = useParams()
//     const product = productList.find((p)=>{
//         return p.id === parseInt(sectorsId)
//     })
//     if (!product) {
//         return(
//             <div>Product is not found</div>
//         )
//     }

// const addToCard = (item)=>{
//     let card = JSON.parse(localStorage.getItem('card')) || [];
//     const existingItem = card.find((cardItem)=>cardItem.id === item.id);

//     if (existingItem) {
//         existingItem.quantity += 1
//     }
//     else{
//         card.push({...item, quantity: 1})
//     }
//     localStorage.setItem('card', JSON.stringify(card))
// }




//     return(
//         <section id={styles.SingleSectorPart}>
//             <div className={styles.container}>
//                 <div className={styles.bgFon}>
                  
//                 </div>
//                 <div className={styles.bgContent}>
//                         <h1>{product.pageHead}</h1>
//                     </div>
//                <div className={styles.singleCardsBox}>
//             {
//                 product.innerItems.map((item,index)=>{
//                     return(
//                         <div key={index} className={ styles.sectorCard}>
//                         <div className={styles.sectorCardImg}>
//                          <img src={item.image} alt="" />
//                         </div>
//                         <div className={styles.sectorCardContent}>
//                                          <div className={styles.sectorCardContentLeft}>
//                                            <button className={styles.sales}>Satış</button>
//                                            <h5>{item.name}</h5>
//                                            <p>
//                                              <IoLocationSharp /> Bakı,Azərbaycan
//                                            </p>
//                                            <button className={styles.additionalBtn}>Ətraflı</button>
//                                            <button className={styles.additionalBtn} onClick={()=>addToCard(item)}>Səbətə əlavə et <LuShoppingBasket className={styles.basket}/>
// </button>
//                                          </div>
//                                          <div
//                                            className={styles.sectorCardContentRight}>
//                                            <FaHeart className={styles.like}/>
//                                          </div>
//                                        </div >
                                    
//                                      </div>
//                     )
//                 })
//             }
//                </div>
//             </div>
//         </section>
//     )
// }
// export default SingleSector






import { useParams } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";

import styles from "../Home/home.module.scss";

const SingleSector = () => {

  const productList = [
    {id:1,
         pageHead:"Avadanlıqlar-Barkod oxuyucu",
    innerItems:[
        {id:1,
             name:"OkuScan", 
             price1:110,
             price2:70, 
             image:"https://www.posstore.az/images/list/BarkodTerezi.png"},
             {id:2,
                name:"Netum", 
                price1:280,
                price2:190, 
                image:"https://www.posstore.az/images/list/BarkodPrinter.png"}
    ]
        },
    {id:2,
        pageHead:"Avadanlıqlar-Barkod printer",
        innerItems:[
            {id:1,
                 name:"OkuPrint 80mm", 
                 price1:165,
                 price2:115, 
                 image:"https://www.posstore.az/images/list/CekPrinter.png"},
                
        ]},
    {id:3, 
        pageHead:"Avadanlıqlar-Barkod tərəzi",
        innerItems:[
            {id:1,
                 name:"Merc", 
                 price1:650,
                 price2:600, 
                 image:"https://www.posstore.az/images/list/Komputerler.png"},
               
        ]
    },
    {id:4,
        pageHead:"Avadanlıqlar-Barkod oxuyucu",
        innerItems:[
            {id:1,
                 name:"Pul Qutusu(Dəmir Çərçivə)", 
                 price1:140,
                 price2:110, 
                 image:"https://www.posstore.az/images/list/CardReader.png"},
            ]
    },
    // {id:5, name:"Product 5"},
    // {id:6, name:"Product 6"},
    // {id:7, name:"Product 7"},
    // {id:8, name:"Product 8"},
    // {id:9, name:"Product 9"},
    // {id:10, name:"Product 10"},
]

  const { sectorsId } = useParams();
  const product = productList.find((p) => p.id === parseInt(sectorsId));

  if (!product) {
    return <div>Product is not found</div>;
  }

  // Səbətə əlavə etmək funksiyası
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1; // Əgər məhsul artıq səbətdədirsə, sayını artır
    } else {
      cart.push({ ...item, quantity: 1 }); // Məhsulu səbətə əlavə et
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Yenilənmiş səbəti yadda saxla
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
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.sectorCardContent}>
                  <div className={styles.sectorCardContentLeft}>
                    <button className={styles.sales}>Satış</button>
                    <h5>{item.name}</h5>
                    <p>
                      <IoLocationSharp /> Bakı,Azərbaycan
                    </p>
                    <button className={styles.additionalBtn}>Ətraflı</button>
                    <button
                      className={styles.additionalBtn}
                      onClick={() => addToCart(item)} // Səbətə əlavə etmək funksiyasını buraya əlavə edirik
                    >
                      Səbətə əlavə et{" "}
                      <LuShoppingBasket className={styles.basket} />
                    </button>
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
