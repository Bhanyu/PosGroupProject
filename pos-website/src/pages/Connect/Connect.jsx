import AllConnect from "./AllConnect"
import styles from "../Connect/connect.module.scss"


const Connect = ()=>{
    return(
        <>
        <AllConnect/>
        <section id={styles.mainConnect}>
            <div className={styles.container}>
           
           
            <form className={styles.contactForm}>
            <h3>Formu doldurun</h3>
            <div className={styles.mainFormPart}>
            <input type="text" placeholder="Ad"/>
<input type="email" placeholder="Email" />
</div>
<input type="text" placeholder="Mövzu" />
<textarea name="notes" id="notes" cols="30" rows="10" placeholder="Qeydlər"></textarea>

<button type="submit">Göndər</button>
</form>

            </div>
        </section>
        </>
    )
}
export default Connect;