import React, { useState } from "react";
import Button from "../Components/Button";
import { bigShoe1 } from "../assets/images";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import ShoeCard from "../Components/ShoeCard";
const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="home"
      className="flex xl:flex-row flex-col w-full p-2 min-h-screen max-container justify-center gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p className="text-xl text-coral-red">Our Summer Collections</p>
        <h1 className="text-8xl max-sm:text-[55px] max-sm:leading-[62px] mt-10 font-bold font-palanquin">
          <span className="xl:bg-white xl:whitespace-nowrap relative xl:z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg sm:text-base leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-16 gap-14">
          {statistics.map((stats, index) => (
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{stats.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stats.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex relative flex-1 justify-center items-center max-sm:min-h-[200%] xl:min-h-screen bg-hero bg-cover bg-center bg-primary">
          <img src={bigShoeImg} 
          width={550}
          alt="Shoe Collection" 
          className="relative z-10 top-0 object-contain" />

        <div className="flex absolute justify-center items-center sm:gap-6 gap-4 -bottom-[10%] max-sm:px-6 sm:left-[10%] max-sm:-bottom-[22%] max-sm:left-[18%]">
        {shoes.map((shoe)=>(
          <div key={shoe}>
          <ShoeCard
          imgURL = {shoe}
          changeBigShoeImage = {(shoe) => {setBigShoeImg(shoe)}}
          bigShoeImg = {bigShoeImg}
          />
          </div>
        ))}
      </div>
      </div>

    </section>
  );
};

export default Hero;
