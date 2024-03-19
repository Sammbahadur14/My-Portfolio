import { Link } from "react-router-dom"
import './Style.css'

const Projects =()=>{
    return(
        <>
        <section className="project" id="project">
            <h2 className="heading">
                Latest <span>Project</span>
            </h2>
            <div className="project-container">
                <div className="project-box">
                <img src="https://iili.io/HNM0x0N.jpg" alt="" />
                <div className="project-layer">
                    <h4>Web Design</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                    explicabo, 
                    </p>
                    <Link href="#"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </Link>
                </div>
                </div>
                <div className="project-box">
                <img src="https://iili.io/HNM0Kba.jpg" alt="" />
                <div className="project-layer">
                    <h4>Graphic Design</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                    explicabo,
                    </p>
                    <Link href="#"> <i class="fa-solid fa-arrow-up-right-from-square"></i> </Link>
                </div>
                </div>
                <div className="project-box">
                <img src="https://iili.io/HNMltDb.jpg" alt="" />
                <div className="project-layer">
                    <h4>Video editing</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                    explicabo, 
                    </p>
                    <Link href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
                </div>
                <div className="project-box">
                <img src="https://iili.io/HNMlZOu.jpg" alt="" />
                <div className="project-layer">
                    <h4>Logo design</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                    explicabo,
                    {" "}
                    </p>
                    <Link href="#"> <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
                </div>
                <div className="project-box">
                <img src="https://iili.io/HNMlmWx.jpg" alt="" />
                <div className="project-layer">
                    <h4>Web Design</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                    explicabo,
                    </p>
                    <Link href="#"> <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
                </div>
                <div className="project-box">
                <img src="https://iili.io/HNMlbxj.jpg" alt="" />
                <div className="project-layer">
                    <h4>Web Design</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                    explicabo,
                    </p>
                    <Link href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
                </div>
            </div>
            </section>

        </>
    )
}
export default Projects