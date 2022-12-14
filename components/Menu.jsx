import css from "../styles/Menu.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/Link";

export default function Menu({ pizzas }) {
  return (
    <>
      <div id="MenuSection" className={css.container}>
        <div className={css.heading}>
          <span style={{ color: "var(--themeRed)" }}>OUR MENU</span>
          <span>Menu That Always</span>
          <span>Make You Fall In Love</span>
        </div>
        {/* pizzas */}
        <div className={css.menu}>
          {pizzas.map((pizza, id) => {
            const src = urlFor(pizza.image).url();
            return (
              <div className={css.pizza} key={id}>
                <Link href={`./pizza/${pizza.slug.current}`}>
                  <div className={css.ImageWrapper}>
                    <Image
                      loader={() => src}
                      src={src}
                      alt=""
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </Link>
                <span>{pizza.name}</span>
                <span>
                  <span style={{ color: "var(--themeRed" }}> ₹ </span>
                  {pizza.price[1]}
                  <span style={{ color: "#d3d3d3" }}>/-</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
