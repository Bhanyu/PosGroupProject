import { useState, useEffect } from "react";
import classNames from "classnames";
import styles from "../Home/home.module.scss";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";



const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers([
      {
        id: 1,
        customerImg: "https://www.posstore.az/images/customer/team-1.jpg",
      },
      {
        id: 2,
        customerImg: "https://www.posstore.az/images/customer/team-2.jpg",
      },
      {
        id: 3,
        customerImg: "https://www.posstore.az/images/customer/team-3.jpg",
      },
      {
        id: 4,
        customerImg: "https://www.posstore.az/images/customer/team-4.jpg",
      },
      {
        id: 5,
        customerImg: "https://www.posstore.az/images/customer/team-5.jpg",
      },
      {
        id: 6,
        customerImg: "https://www.posstore.az/images/customer/team-5.jpg",
      },
    ]);
  });

  return (
    <section id={styles.customersPart}>
      <div className={styles.container}>
        <h2>Müştərilərimiz</h2>
        <p>
          Xidmətlərimiz haqqında daha çox öyrənmək üçün bu gün bizimlə əlaqə
          saxlayın.
        </p>
        <div className={styles.customersInnerParts}>
          <div className={classNames("row", styles.fullCustomers)}>
            {customers.map((customer) => {
              return (
                <div
                  key={customer.id}
                  className={classNames(
                    "col-12 col-md-6 col-lg-4",
                    styles.cstmCol
                  )}
                >
                  <div className={classNames("card", styles.cstmCard)}>
                    <div className={styles.cstmCardImg}>
                      <img src={customer.customerImg} alt="" />
                      <SiTicktick className={styles.thick}/>
 

                    </div>
                    <div className={styles.cstmCardContent}>
                      <p>
                        <IoLocationSharp /> Bakı,Azərbaycan
                      </p>
                      <h5>Lorem Ipsum</h5>

                      <div className={styles.cstmCardContentLinks}>
                        <button>
                          <FaFacebook className={styles.social} />
                        </button>
                        <button>
                          <FaLinkedin className={styles.social}/>
                        </button>
                        <button>
                          <FaTwitter className={styles.social}/>
                        </button>
                        <button>
                          <FaInstagram className={styles.social} />
                        </button>
                      </div>
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
export default Customers;
