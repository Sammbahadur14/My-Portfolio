import './Style.css'

const Contact = ()=>{
    return(
        <>
        <section className="contact" id="contact">
            <h2 className="heading"> {" "} Contact <span>Me!</span> </h2>
            <form action="#">
                <div className="input-box">
                <input type="number" placeholder="Mobile No." />
                <input type="text" placeholder="Email Subjects" />
                </div>
                <textarea name=""  id="" cols={30} rows={10} placeholder="Your Message" defaultValue={""}/>
                <input type="Submit" defaultValue="Send Message" className="btn" />
            </form>
            </section>

        </>
    )
}
export default Contact