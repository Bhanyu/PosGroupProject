

import styles from "../../components/Layout/Footer/footer.module.scss";
const Questions = ()=>{
    return(
        <section id={styles.mainQuestions}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Suallarınız var?</h2>
                    <p>Biznesinizə kömək edək</p>
                </div>
                <button>İndi əlaqə saxlayın</button>
            </div>
        </section>
    )
}
export default Questions