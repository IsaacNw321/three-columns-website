import React from 'react';
import styles from "../../styles/footer.module.css";
import { 
    AiFillPhone, 
    AiOutlineMail

} from "react-icons/ai";
import { BsFillGeoFill } from "react-icons/bs";
import { 
    FaLinkedinIn,
    FaInstagram,
    FaBehance 
} from "react-icons/fa";


export const Footer = () => {

    const style = { 
        color: "white", 
        fontSize: "1.5vw",
        marginRight: "1vw",
        marginTop: "1vw" 
    }
    const style2 = { 
        color: "white", 
        fontSize: "1.5vw" 
    }
    const style3 = { 
        color: "white", 
        fontSize: "1vw" 
    }

  return (
    <div className={styles.container}>
        <div className={styles.brand}>
            Three Columns Studio&#169;
        </div>
        <span></span>
        <div className={styles.footer}>
            <div className={styles.div1}>
                <h2>Titulo</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, harum. Nemo est quae corrupti aliquid excepturi nam quibusdam quas saepe at. Ipsam nobis cupiditate praesentium repellendus eaque, repudiandae aperiam esse!</p>
            </div>
            <span></span>
            <div className={styles.div2}>
                <div>
                    <AiFillPhone style={style}/>
                    <h3>(+00) 123−456−789</h3>
                </div>
                <div>
                    <AiOutlineMail style={style}/>
                    <h3>Threecolumnsstudio.com</h3>
                </div>
                <div className={styles.form}>
                    Llenar formulario de servicios
                </div>
                <div className={styles.address}>
                    <div>
                        <BsFillGeoFill style={style2}/>
                    </div>
                    <div className={styles.addressDescription}>
                        <div>Three Columns Studio</div>
                        <div>
                            Ejemplo de ubicación
                            <br/>
                            número de calle, etc 123
                            <br/>
                        </div>
                        <div>
                            <h5>Revisar en <span>Google Maps</span></h5>
                        </div>
                    </div>
                </div>
            </div>
            <span></span>
            <div className={styles.div3}>
                <p>Revisa nuestra redes</p>
                <div>
                    <div><FaInstagram style={style3}/></div>
                    <div><FaBehance style={style3}/></div>
                    <div><FaLinkedinIn style={style3}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
