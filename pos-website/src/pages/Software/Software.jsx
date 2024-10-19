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
        {id:1 , name:"A BRONZE PAKET" , price:150, img:bronze},
        {id:2 , name:"B SILVER PAKET" , price:250, img:silver},
        {id:3 , name:"C GOLD PAKET" , price:350, img:gold},
        {id:4 , name:"D PLATİNUM PAKET" , price:450, img:platinium},
        {id:5 , name:"E PREMİUM PAKET" , price:0, img: premium},
        {id:6 , name:"F VİP PAKET" , price:0, img: vip},

    ])
})


    return(
  <>
  <AllSoftware/>
        <section id={styles.mainSoftware}>
            <div className={styles.container}>
            <div className={styles.softwareInnerParts}>
                <div className={classNames("row", styles.fullSoftware)}>
                    {
                        programs.map((program,index)=>{
                            return(
                                <div key={index} className={classNames("col-12 col-md-6 col-lg-3", styles.softwareCard)}>
                                    <div className={classNames("card", styles.card)}>
                                    <div className={styles.softwareCardImg}>
    <img src={program.img} alt="" />
   </div>

   <div className={styles.softwareCardContent}>
   <h5>{program.name}</h5>
   <p>{program.price} AZN</p>
                      <button className={styles.more}>Ətraflı</button>
                     
                      <button className={styles.addBasket}>Səbətə əlavə et <LuShoppingBasket className={styles.basket}/> </button>
                  
                 
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