import { useEffect, useState } from "react"
import styles from "../Software/software.module.scss"
import classNames from "classnames";
import bronze from "../../images/download.jpg";
import silver from "../../images/silver.jpg";
import gold from "../../images/gold.jpg";
import platinium from "../../images/platinium.jpg";
import premium from "../../images/premium.jpg";
import vip from "../../images/vip.jpg"
import { LuShoppingBasket } from "react-icons/lu";
import AllSoftware from "./AllSoftware";



const Software = ()=>{

const [programs , setPrograms] = useState([])

useEffect(()=>{
    setPrograms([
        {id:11 , name:"A BRONZE PAKET" , price:150, image:bronze},
        {id:12 , name:"B SILVER PAKET" , price:250, image:silver},
        {id:13 , name:"C GOLD PAKET" , price:350, image:gold},
        {id:14 , name:"D PLATİNUM PAKET" , price:450, image:platinium},
        {id:15 , name:"E PREMİUM PAKET" , price:650, image: premium},
        {id:16 , name:"F VİP PAKET" , price:750, image: vip},

    ])
})
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

    return(
  <>
  <AllSoftware/>
        <section id={styles.mainSoftware}>
            <div className={styles.container}>
            <div className={styles.softwareInnerParts}>
                <div className={classNames("row", styles.fullSoftware)}>
                    {
                        programs.map((item,index)=>{
                            return(
                                <div key={index} className={classNames("col-12 col-md-6 col-lg-3", styles.softwareCard)}>
                                    <div className={classNames("card", styles.card)}>
                                    <div className={styles.softwareCardImg}>
    <img src={item.image} alt="" />
   </div>

   <div className={styles.softwareCardContent}>
   <h5>{item.name}</h5>
   <p>{item.price} AZN</p>
                      <button className={styles.more}>Ətraflı</button>
                     
                      <button className={styles.addBasket} onClick={()=>{addToCart(item)}}>Səbətə əlavə et <LuShoppingBasket className={styles.basket}/> </button>
                  
                 
                  </div >
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

</div>
            </div>
        </section>
  </>
    )
}
export default Software



