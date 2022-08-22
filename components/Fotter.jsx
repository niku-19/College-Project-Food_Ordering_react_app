import { UilFacebook, UilGithub , UilInstagram } from "@iconscout/react-unicons";
import css from "../styles/Fotter.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";


export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45} color=""/>
        <UilGithub size={45} color=""/>
        <UilInstagram size={45} color=""/>
      </div>
      <div className={css.logo}>
          <Image src={Logo} alt="" height="50" width="50" />
          <span>FUDO</span>
        </div>
    </div>
  )
}

// export default Footer;
