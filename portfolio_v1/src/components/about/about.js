import styles from './about.module.css';
function About(){
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1>About Me</h1>
                <h2>Omar Aghallaj</h2>
                <p>Eager to learn new skills &amp; software</p>
                <p>Interested in different type of fields, mainly <br/>
                3D design, videography and web development.
                </p>

                <div>
                    <h2>Skills</h2>
                </div>
            </div>
        </div>
        
    )
}

export default About;