// import { css } from "@emotion/react";
import Layout from "../../components/layout";
import { client, urlFor } from "../../lib/client";
import Image from "next/Image";
import css from "../../styles/Pizza.module.css";
import leftArrow from "../../assets/arrowLeft.png";
import rightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore }  from "../../store/store";
import toast, { Toaster } from "react-hot-toast"

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();
  const [Quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(1);
  const handelQuantity = (types) => {
    types === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };

  //{ Add to cart }//

  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({
      ...pizza,
      price: pizza.price[size],
      Quantity: Quantity,
      size: size,
    });
   toast.success("Added to cart")
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.ImageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt=""
            objectFit="cover"
            layout="fill"
            unoptimized
          />
        </div>
        <div className={css.rightSide}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed)" }}> ₹ </span>
            {pizza.price[size]}
            <span style={{ color: "#d3d3d3" }}></span>
          </span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVaraints}>
              <div
                onClick={() => setSize(0)}
                className={size === 0 ? css.selected : ""}
              >
                Small{" "}
              </div>
              <div
                onClick={() => setSize(1)}
                className={size === 1 ? css.selected : ""}
              >
                Medium
              </div>
              <div
                onClick={() => setSize(2)}
                className={size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>
          {/* quantity counter */}
          <div className={css.quantity}>
            <span>quantity</span>

            <div className={css.counter}>
              <Image
                src={leftArrow}
                alt=""
                height={20}
                width={20}
                objectFit="contain"
                onClick={() => handelQuantity("dec")}
              />
              <span style={{ color: "var(--themered)" }}>{Quantity}</span>
              <Image
                src={rightArrow}
                alt=""
                height={20}
                width={20}
                objectFit="contain"
                onClick={() => handelQuantity("inc")}
              />
            </div>
          </div>

          <div className={`btn ${css.btn}`} onClick={addToCart}>Add to Cart</div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
    // `*[_type=="pizza" && defined (slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current =='${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
