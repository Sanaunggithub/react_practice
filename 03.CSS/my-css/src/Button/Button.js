//2.Modules
import styles from './Button.module.css'
function Button(){

    //3.inline
    const he = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }
    return(
        <>
            <button className={styles.button}>Click me</button><br/><br/>
            <button style={he}>Click me</button>
        </>
        
    )
}

export default Button;