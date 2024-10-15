

const Services = ()=>{
    return(
        <section id={styles.servicesTypes}>
            <div className={styles.container}>
                <h2 className={styles.title}>Xidmət növləri</h2>
                <p  className={styles.subtitle}>İstənilən sektora aid xidmətlər</p>
           <div  className={classNames("row", styles.row)}>
           <div className={classNames(" col-12 col-md-6 col-lg-4", styles.col)}>
   <Link href="#">
   <div className={classNames("card", styles.card)}>
      <div className={classNames("card-body", styles.cardBody1)}>
      <div className={classNames("card-content", styles.cardContext)}>
      <h5 className={classNames("card-title", styles.cardTitle)}>
          About Us
        </h5>
        <p className={classNames("card-text", styles.cardText)}>
          For a cup of coffee to be truly special it needs to pass
          through many hands and be treated with passion and commitment
          in every link of the chain. From the producer to the roaster,
          the barista to the customer, back to the producer and the
          harvester, it’s a process that repeats itself every time we
          serve a cup of coffee and needs to be cared for every step of
          the way.,
        </p>
     </div>
      </div>
    </div>
   </Link>
  </div>
           </div>
            </div>
        </section>
    )
}