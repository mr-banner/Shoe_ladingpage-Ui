import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              alt="Logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((links, index) => (
              <div
                key={index}
                className="flex justify-center items-center bg-white h-12 w-12 rounded-full"
              >
                <img src={links.src} alt={links.alt} height={24} width={24} />
              </div>
            ))}
          </div>
      </div>

        <div className="flex flex-1 flex-wrap justify-between lg:gap-10 gap-20 max-sm:gap-7">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white text-2xl font-montserrat leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className="text-white-400 leading-normal mt-3 font-montserrat text-base hover:text-slate-gray hover:cursor-pointer">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-slate-gray mt-24 max-sm:flex-col max-sm:items-center ">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
              <p> &copy; Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat max-sm:mt-3">Terms & conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
