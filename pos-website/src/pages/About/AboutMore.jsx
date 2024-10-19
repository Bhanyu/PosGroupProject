import styles from "../About/about.module.scss"


const AboutMore = ()=>{
    return(
        <section id={styles.aboutMore}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>Haqqımızda</h2>
                    <p>Haqqımızda daha çox oxuyun</p>
                    <p className={styles.pos_group}>"POS GROUP" şirkəti olaraq sizi salamlayırıq. 2020-ci il tarixindən rəsmi "POS GROUP"MMC şirkəti adından fəaliyyət göstərən şirkət,daima keyfiyyətli avadanlıq,yüksək xidmət və sərfəli qiymətlərlə müştərilərin etimadını qazanmışdır. Şirkətimiz istənilən ticarət obyektləri üçün Barkod Pos sistemi avadanlıqlarının satışını və Proqram təminatının yazılımını icra edir.</p>
                <button>
                    Haqqımızda daha çox
                </button>
                </div>
                <div className={styles.aboutImg}>
                    <img src="https://www.posstore.az/images/location/about.webp" alt="" />
                </div>
            </div>
        </section>
    )
}
export default AboutMore