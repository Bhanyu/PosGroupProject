import React, { useState } from "react";
import styles from "../Footer/footer.module.scss"
import posLogo from "../../../images/posLogo.png"
import { Link } from "react-router-dom";
const Footer = ()=>{

const [openSection,setOpenSection] = useState(null)

const toggleSection = (section)=>{
    if(openSection === section){
        setOpenSection(null)
    }
    else{
        setOpenSection(section)
    }
}


    return(
        <footer id={styles.mainFooter}>
           <div className={styles.container}>
           <div className={styles.footİnnerPart}>
           <div className={styles.footLeftPart}>
           <img src={posLogo} alt="Logo"/>
           <h2>Köməyə ehtiyacınız var?</h2>
           <p>Nərimanov Rayonu,Əliyar Əliyev Küşəsi 52, Baku, Azerbaijan 1003</p>
        <form action="">
            <input type="email" placeholder="Email" />
            <button type="submit">Abunə ol</button>
        </form>
        
          </div>

          <div className={styles.footRightPart}>
          <ul>
            <li  className={styles.footListHead} >Sürətli keçidlər</li>
           
           
            
                     <li>
                 <Link className={styles.footLink} to={`/`}>
             Ana Səhifə
               </Link>
               </li>
            <li>
            <Link className={styles.footLink} to={`/about`}>
             Haqqımızda
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/partners`}>
             Tərəfdaşlarımız
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/equipments`}>
          Avadqanlıqlar
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
           Əlaqə
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/sectors`}>
          Sektorlar
               </Link>
            </li>
               
            
          </ul>
          <ul>
            <li  className={styles.footListHead} >Xidmətlərimiz</li>
          
             
                     <li>
                 <Link className={styles.footLink} to={`/`}>
           Market
               </Link>
               </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
             Restoran
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
             Kafe
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
          KofeShop
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
           1001 Xırdavat
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
          Telefon Mağazası
               </Link>
            </li>
              
            
          </ul>
          <ul>
            <li  className={styles.footListHead}>Sektorlar </li>
        
              
                      <li>
                 <Link className={styles.footLink} to={`/`}>
        Geyim Mağazaıarı
               </Link>
               </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
         Aptek
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
            Kiosk
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
        Oyuncaq Mağazaları
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
          Avto Ehtiyyat
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
         Zoo Mağazalar
               </Link>
            </li>
               
          </ul>
        
          </div>

          <div className={styles.footRightPartResponsive}>
          <ul>
            <li  className={styles.footListHead} onClick={()=>{toggleSection('quickLinks')}}>Sürətli keçidlər <span> {openSection ==="quickLinks" ? '-' : '+'}</span></li>
           {
            openSection === "quickLinks" && (
                <div className={styles.subList}>
                     <li>
                 <Link className={styles.footLink} to={`/`}>
             Ana Səhifə
               </Link>
               </li>
            <li>
            <Link className={styles.footLink} to={`/about`}>
             Haqqımızda
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/partners`}>
             Tərəfdaşlarımız
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/equipments`}>
          Avadqanlıqlar
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
           Əlaqə
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/sectors`}>
          Sektorlar
               </Link>
            </li>
                </div>
            )
           }
          </ul>
          <ul>
            <li  className={styles.footListHead} onClick={()=>toggleSection('services')}>Xidmətlərimiz <span>{openSection === 'services' ? '-' : '+'}</span> </li>
           {
            openSection === "services" && (
                <div className={styles.subList}>
                     <li>
                 <Link className={styles.footLink} to={`/`}>
           Market
               </Link>
               </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
             Restoran
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
             Kafe
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
          KofeShop
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
           1001 Xırdavat
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
          Telefon Mağazası
               </Link>
            </li>
                </div>
            )
           }
          </ul>
          <ul>
            <li  className={styles.footListHead} onClick={()=>toggleSection('sectors')}>Sektorlar <span>{openSection === 'services' ? '-' : '+'}</span> </li>
          {
            openSection === "sectors" && (
                <div className={styles.subList}>
                      <li>
                 <Link className={styles.footLink} to={`/`}>
        Geyim Mağazaıarı
               </Link>
               </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
         Aptek
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
            Kiosk
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
        Oyuncaq Mağazaları
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
          Avto Ehtiyyat
               </Link>
            </li>
            <li>
            <Link className={styles.footLink} to={`/`}>
         Zoo Mağazalar
               </Link>
            </li>
                </div>
            )
          }
          </ul>
        
          </div>
        </div>

        <div className={styles.footBottomPart}>
        © 2024 POS Store. Designed By BirSayt
        </div>

          </div>

        </footer>
    )
}
export default Footer