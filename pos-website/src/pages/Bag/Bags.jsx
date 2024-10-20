
// import { useEffect, useState } from "react"
// import styles from "../Bag/bags.module.scss"

// const Bags = ()=>{

//     const [cardItems, setCardItems] = useState([])
// useEffect(()=>{
//     const card = JSON.parse(localStorage.getItem('card')) || [];
//     setCardItems(card);
// },[])
// const removeFromCart = (id) => {
//     const updatedCart = cardItems.filter(item => item.id !== id); 
//     setCardItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };
// const totalPrice = cardItems.reduce((total,item)=>total + item.price2 *item.quantity, 0)

//     return(
//         <section id={styles.shopBag}>
//             <div className={styles.bagContainer}>
//            {
//             cardItems.length === 0 ? (
//                 <div>
//                      <div className={styles.bagImg}>
//                 <img src="https://www.posstore.az/emptyCart.png" alt="" />
//                 </div>
//                 <div className={styles.bagCard}>
//                 <h2>SƏBƏTİNİZ BOŞDUR</h2>
//                 <p>Biznesinizə az, Özünüzə isə daha çox vaxt ayırın</p>
//                 <button>Məhsullara keçid et</button>
//                 </div>
//                 </div>
//             ) : (
//                 <div>
//                 <h2>Səbətdəki Məhsullar</h2>
//                 {cardItems.map((item) => (
//                   <div key={item.id} className={styles.cartItem}>
//                     <img src={item.image} alt={item.name} />
//                     <div>
//                       <h4>{item.name}</h4>
//                       <p>{item.price2} AZN x {item.quantity}</p>
//                       <button 
//                   className={styles.removeBtn} 
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   Sil
//                 </button>

//                     </div>
//                   </div>
//                 ))}
//                 <h3>Cəmi: {totalPrice} AZN</h3>
//               </div>
//             )
//            }
//             </div>
//         </section>
//     )
// }
// export default Bags



import React, { useEffect, useState } from 'react';
import styles from "../Bag/bags.module.scss";

const Bags = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  // Məhsulu səbətdən silən funksiyanı yazırıq
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id); // Məhsulu id-ə görə filtrləyib silirik
    setCartItems(updatedCart); // Yenilənmiş səbəti state-ə təyin edirik
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Yenilənmiş səbəti localStorage-da saxlayırıq
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price2 * item.quantity, 0);

  return (
    <section id={styles.shopBag}>
      <div className={styles.bagContainer}>
        {cartItems.length === 0 ? (
          <div>
            <div className={styles.bagImg}>
              <img src="https://www.posstore.az/emptyCart.png" alt="Boş Səbət" />
            </div>
            <div className={styles.bagCard}>
              <h2>SƏBƏTİNİZ BOŞDUR</h2>
              <p>Biznesinizə az, Özünüzə isə daha çox vaxt ayırın</p>
              <button>Məhsullara keçid et</button>
            </div>
          </div>
        ) : (
          <div>
            <h2>Səbətdəki Məhsullar</h2>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price2} AZN x {item.quantity}</p>
                </div>
                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeFromCart(item.id)}
                >
                  Sil
                </button>
              </div>
            ))}
            <h3>Cəmi: {totalPrice} AZN</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Bags;
