import React from 'react'
import Image from "next/image";
import imagem1 from "../../../app/public/Photo.jpg";
import imagem2 from "../../../app/public/Photo2.jpg";
import imagem3 from "../../../app/public/Photo3.jpg";
import imagem4 from "../../../app/public/Photo4.jpg";
import imagem5 from "../../../app/public/Photo5.jpg";
import imagem6 from "../../../app/public/Photo6.jpg";


const Carousel = () => {
  return (
    <div className="carousel carousel-center rounded-box">
  <div className="carousel-item">

    <Image src={imagem1} alt="car1" width={400} height={400} />
    <Image src={imagem2} alt="car2" width={400} height={400} />
    <Image src={imagem3} alt="car3" width={400} height={400} />
    <Image src={imagem4} alt="car4" width={400} height={400} />
    <Image src={imagem5} alt="car5" width={400} height={400} />
    <Image src={imagem6} alt="car6" width={400} height={400} />

  </div>
</div>)}

export default Carousel