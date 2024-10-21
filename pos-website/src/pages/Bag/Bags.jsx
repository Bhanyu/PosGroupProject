
import { useEffect, useState } from "react"
import styles from "../Bag/bags.module.scss"

const Bags = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);


  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id)=>{
const updatedCart = cartItems.map((item)=>{
  if(item.id === id){
    return {...item, quantity: item.quantity + 1};
  }
  return item;
});
setCartItems(updatedCart);
localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const decreaseQuantity = (id)=>{
    const updatedCart = cartItems.map((item)=>{
      if(item.id === id && item.quantity > 1){
        return {...item, quantity: item.quantity - 1};
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
      }

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
              <a href="/equipments">Məhsullara keçid et</a>
            </div>
          </div>
        ) : (
          <div className={styles.totalBox}>
            <h2>Səbətdəki Məhsullar</h2>
            <div className={styles.bagItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} />
                <div className={styles.sectorCardContent}>
                  <h4>{item.name}</h4>
                  <p>{item.price} AZN x {item.quantity}</p>
                </div>
                <div className={styles.controlBtns}>
                  <button className={styles.decreaseBtn} onClick={()=>{decreaseQuantity(item.id)}} >
-
                  </button>
                <button 
                  className={styles.removeBtn} 
                  onClick={() => removeFromCart(item.id)}
                >
                  Sil
                </button>
                <button className={styles.increaseBtn} onClick={()=>{increaseQuantity(item.id)}} >
+
                  </button>
                </div>
              </div>
            ))}
            </div>
            <h3>Cəmi: {totalPrice} AZN</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Bags;




