import { Link } from "react-router-dom"
import './Style.css'

const About = ()=>{
    return(
        <>
            <section className="about" id="about">
            <div className="about-img">
                <img src="https://iili.io/HNM09fV.png" alt="" />
            </div>
            <div className="about-content">
                <h2 className="heading">
                {" "}
                About <span>Me</span>
                </h2>
                <h3>Full stack Developer</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat in
                odio est facere rerum a, autem architecto facilis ex aspernatur vero
                dolores explicabo beatae vitae dignissimos ratione, cum adipisci.
                </p>
                <Link href="#" className="btn">Read more </Link>
            </div>
            </section>

        </>
    )
}
export default About