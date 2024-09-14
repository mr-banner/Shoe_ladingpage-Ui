import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="h-[280px] w-[280px]" />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} width={24} height={24} alt="rating" />
        <p className="font-montserrat text-slate-gray text-xl leading-normal">
          {rating}
        </p>
      </div>
      <h3 className="font-palanquin font-semibold font-2xl mt-2 leading-normal">{name}</h3>
      <p className="font-montserrat mt-2 leading-normal font-2xl text-coral-red font-semibold">{price}</p>
    </div>
  );
};

export default PopularProductCard;
