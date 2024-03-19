import { Link } from "react-router-dom"
import './Style.css'
import { TypeAnimation } from "react-type-animation"
import ScrollReveal from "scrollreveal"
import { useEffect } from "react"


const Home = () =>{

  ScrollReveal({
    reset:true,
    distance:'80px',
    duration:'2000',
    delay:'200'
  });
  useEffect(() =>{
    ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
    ScrollReveal().reveal('.home-img, .sevices-container, .project-box, .contact form',{origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
    ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});
  })

    return(
        <>
<section className="home" id="home">
  <div className="home-content">
    <h3>Hello, It'a Me</h3>
    <h1> Samm </h1>
    <h3>
      And I'm a <span>
      <TypeAnimation
        sequence={[
          " Full stack Developer",
          1000,
          " Video Editor",
          1000,
          " Graphic Designer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
      />
      </span>
    </h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, atque.
      Error inventore, aspernatur corporis ab iste laudantium rerum a quidem
      molestias repellat, unde, doloremque eveniet odio similique quo
      repellendus accusantium?
    </p>
    <div className="social-media">
      <Link href="#"> <i class="fa-brands fa-instagram"></i> </Link>
      <Link href="#"> <i class="fa-brands fa-linkedin"></i> </Link>
      <Link href="#"> <i class="fa-brands fa-youtube"></i> </Link>
      <Link href="#"> <i class="fa-brands fa-codepen"></i> </Link>
    </div>
    <Link href="#" className="btn"> {" "} Download CV </Link>
  </div>
  <div className="home-img">
    <img src="https://i.ibb.co/x1LwR84/me.jpg" alt="" />
  </div>
</section>


{/* ====================== About Section ============================ */}


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


{/* ====================== Services Section ============================ */}


<section className="services" id="services">
  <h2 className="heading">
    {" "}
    Our <span>services</span>
  </h2>
  <div className="services-container">
    <div className="services-box">
      <i className="bx bx-code-alt"/>
      <h3>Web Development</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        dignissimos, iure minima sapiente cupiditate maiores, saepe corrupti
        amet pariatur numquam ad laudant ium eum libero ullam non animi minus?
        Voluptates, accusantium.
      </p>
      <Link href="#" className="btn"> Read More </Link>
    </div>
    <div className="services-box">
      <i className="bx bxs-paint" />
      <h3>Graphic Design</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        dignissimos, iure minima sapiente cupiditate maiores, saepe corrupti
        amet pariatur numquam ad laudant ium eum libero ullam non animi minus?
        Voluptates, accusantium.
      </p>
      <Link href="#" className="btn"> Read More </Link>
    </div>
    <div className="services-box">
      <i className="bx bx-code-alt" />
      <h3>Backend Development</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        dignissimos, iure minima sapiente cupiditate maiores, saepe corrupti
        amet pariatur numquam ad laudant ium eum libero ullam non animi minus?
        Voluptates, accusantium.
      </p>
      <Link href="#" className="btn">
        Read More </Link>
    </div>
  </div>
</section>

{/* ====================== Project Section ============================ */}


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


{/* ====================== Contact Section ============================ */}


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
export default Home