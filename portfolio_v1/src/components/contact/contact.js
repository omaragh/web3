import {FaInstagram, FaLinkedin, FaLongArrowAltLeft} from 'react-icons/fa';
import styles from './contact.module.css';

function Contact(){
    return (
        
        <div className={styles.information}>
            {/* <div className={styles.icons}>
                <FaLongArrowAltLeft className={styles.arrow}/>
            </div> */}
            
            <div className={styles.desc}>
                <p>If you liked what you've seen do not hesitate to reach out.</p>
                <p>I look forward to brainstorm and create amazing projects with you!</p>
                <p>Down below my socials!</p>
            </div>
            <div className={styles.icons}>
                <div className={styles.iconIG}>
                    <FaInstagram/>
                </div>
                <div className={styles.iconIN}>
                    <FaLinkedin/>
                </div>
            </div>
        </div>
    )
}

export default Contact;