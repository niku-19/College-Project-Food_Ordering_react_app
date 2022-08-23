import css from "../styles/Hero.module.css";
import Image from "next/dist/client/image";
import cherry from "../assets/cherry.png";
import HeroImage from "../assets/HeroImage.png";
import { UilPhone } from "@iconscout/react-unicons";
import Pizza1 from "../assets/p1.jpg";

export default function Hero() {
  return (
    <>
      <div className={css.container}>
        {/* left side */}
        <div className={css.left}>
          <div className={css.cherryDiv}>
            <spam>More than the faster</spam>
            <Image src={cherry} alt="" height={25} width={40} />
          </div>
          <div className={css.heroText}>
            <span>Be the Fastest</span>
            <span>In Delivering</span>
            <span>
              your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
            </span>
          </div>
          <span className={css.miniText}>
            Our Mission Is To Filling Your Tummy With Delicious Food and With
            Fast and Free Delivery
          </span>
          <a href="#MenuSection">
          <button className={`btn ${css.btn}`}>Get Started</button>
          </a>
        </div>
        {/* right side */}
        <div className={css.right}>
          <div className={css.imageContainer}>
            <Image src={HeroImage} alt="" layout="intrinsic" />
          </div>

          <div className={css.contactUs}>
            <span>Contact Us</span>
            <div>
             <a href="tel:6203601618"> <UilPhone color="white" /> </a>
            </div>
          </div>
          <div className={css.Pizza}>
              <div>
                <Image
                  src={Pizza1}
                  alt=""
                  objectFit="cover"
                  layout="intrinsic"
                />
              </div>
              <div className={css.Details}>
                <span>Italian Pizza</span>
                <span>
                <span style={{color : "var(--themeRed)"}}>₹
                </span> 700</span>
              </div>

            </div>
        </div>
      </div>
    </>
  );
}
