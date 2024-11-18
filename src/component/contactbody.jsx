import styles from './Contactbody.module.css';
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";

const Contactbody = () => {
    let name;
    let email;
    let text;
    const onViaCallSubmit=()=>{
        console.log("I am From Call");
    }
    const onViaemailSubmit=()=>{
        console.log("I am From Email");
    }
    const onViamsgSubmit=()=>{
        console.log("I am From Msg");
    }
    const onSubmit = (event) => {
        event.preventDefault();
        name= event.target[0].value;
        email= event.target[1].value;
        text= event.target[2].value;
        console.log("Name", event.target[0].value);  // Corrected placement of .value
        console.log("Email", event.target[1].value); // Corrected placement of .value
        console.log("Text", event.target[2].value);  // Corrected placement of .value
    };
    
    return (
        <section className={styles.container}>
            <div className={styles.main}>
                <div className={styles['button-group']}>
                    <button className={styles.primary_btn} onClick={onViamsgSubmit}>
                        <MdOutlineMessage fontSize="24px" />
                        VIA SUPPORT CHAT
                    </button>
                    <button className={styles.primary_btn2} onClick={onViaemailSubmit}>
                        <MdOutlineAttachEmail fontSize="24px" />
                        VIA EMAIL
                    </button>
                    <button className={styles.primary_btn1} onClick={onViaCallSubmit}>
                        <IoCallOutline fontSize="24px" />
                        VIA CALL
                    </button>
                    <form onSubmit={onSubmit}>
                        <div className={styles.form_control}>  
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />  
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" />  
                        <label htmlFor="Text">Text</label>
                        <input type="text" name="Text" className={styles.text} />
                        </div>
                    <button className={styles.primary_btn3}>
                        Sumit Button
                    </button>
                    </form>
                </div>
            </div>
            <div className={styles.im24}>
            <img src="images/247.png" alt="logo" className="image" />
            </div>
        </section>
    );
};

export default Contactbody;
