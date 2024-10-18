import { useEffect, useState } from "react";
import styles from "../Home/home.module.scss";
import classNames from "classnames";
const Advantages = () => {
  const [advantages, setAdvantages] = useState([]);
  useEffect(() => {
    setAdvantages([
      {
        id: 1,
        title: "Hər yerdən giriş imkanı",
      },
      {
        id: 2,
        title: "Yalnız sizə lazım olan funksiyalar",
      },
      {
        id: 3,
        title: "Texniki dəstək",
      },
      {
        id: 4,
        title: "Geniş çeşidli xidmətlər",
      },
      {
        id: 5,
        title: "Avandanlıqların quraşdırlması",
      },
      {
        id: 6,
        title: "Analitik sistemlər",
      },
    ]);
  }, []);

  return (
    <section id={styles.mainAdvantages}>
      <div className={styles.container}>
        <h2>Üstünlüklərimiz</h2>
        <p>
          Biz dünyanın aparıcı aparat və proqram təminatı istehsalçıları ilə
          işləyirik və yüksək keyfiyyətli xidmətlərə zəmanət veririk.
        </p>
        <div className={styles.advantagesInnerParts}>
          <div className={classNames("row", styles.fullAdvantages)}>
            {advantages.map((advantage) => {
              return (
                <div
                  key={advantage.id}
                  className={classNames(
                    "col-12 col-md-6 col-lg-4",
                    styles.advCol
                  )}
                >
             
                    <div className={classNames("card", styles.advCard)}>
                      <div className={styles.advCardImg}>
                        <img src="https://www.posstore.az/images/location/about.webp" alt="" />
                      </div>
                      <div className={styles.advCardContent}>
                       <h5>{advantage.title}</h5>
                      </div>
                    </div>
                 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages
