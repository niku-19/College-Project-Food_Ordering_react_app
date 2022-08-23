import css from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/Link";
import Logo from "../assets/Logo.png";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  const [Order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("Order"));
  }, []);
  const items = useStore((state) => state.cart.pizzas.length);


  return (
    <>
      <div className={css.header}>
        <div className={css.logo}>
          <Image src={Logo} alt="" height="50" width="50" />
          <a href="../">
            <span>FUDO</span>
          </a>
        </div>
        <div className={css.menu}>
          <ul>
            <li>
              <a href="../"> HOME </a>
            </li>
            <li>
              <a href="#MenuSection">MENU </a>
            </li>
            <li>
              <a href=""> CONTACT </a>
            </li>
          </ul>
        </div>
        <div className={css.rightSide}>
          <Link href="/cart">
            <div className={css.cart}>
              <UilShoppingBag size={35} color="#2e2e2e" />
              <div className={css.badge}>{items}</div>
            </div>
          </Link>

            <div className={css.cart}>
              <UilReceipt size={35} color="#2e2e2e" />
              <div className={css.badge}>{1}</div>
            </div>
        </div>
      </div>
    </>
  );
}

// export default Header;
