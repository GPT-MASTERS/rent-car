import Image from "next/image";
import React from "react";
import heroImage from "../../app/public/download.jpeg";
import { Separator } from "@/components/ui/separator"


const HeroSection: React.FC = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={heroImage} // Caminho em relação à pasta `public`
          className="rounded-lg shadow-2xl "
          alt="Hero"
          width={1020} // Ajuste o tamanho conforme necessário
          height={400} // Ajuste o tamanho conforme necessário
        />
        <div className="">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <Separator orientation="horizontal" />
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Conheça</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


