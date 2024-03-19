import { Link } from "react-router-dom"
import './Style.css'

const Services = ()=>{
    return(
        <>
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

        </>
    )
}

export default Services