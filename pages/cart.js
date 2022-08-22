import { useStore } from "../store/store";
import Layout from "../components/layout";
import css from "../styles/Cart.module.css";
import { urlFor } from "../lib/client";
import Pizza from "./pizza/[slug]";
import Image from "next/Image";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../components/OrderModal";
import { useRouter } from "next/router";

export default function Cart() {
  const [PaymentMethod, setPayementMethod] = useState(null);
  const cartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const removeItemFromCart = (i) => {
    removePizza(i);
    toast.error("Item Removed");
  };
  const [Order,setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem('order')  )

  const Total = () =>
    cartData.pizzas.reduce((a, b) => a + b.Quantity * b.price, 0);

  const payOnDelivery = () => {
    setPayementMethod(0);
    typeof window !== "undefined" && localStorage.setItem("total", Total());
  };
  const router = useRouter();

  const handelCheckout = async () => {
    typeof window !== "undefined" && localStorage.setItem("total", Total());
    setPayementMethod(1);
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData.pizzas),
    });
    if (response.statusCode === 500) return;
    const data = await response.json();
    toast.loading("Redirecting....");
    router.push(data.url)
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </thead>
            <tbody className={css.tbody}>
              {cartData.pizzas.map((Pizza, i) => {
                const src = urlFor(Pizza.image).url();
                return (
                  <tr key={i}>
                    <td className={css.imageTd}>
                      <Image
                        loader={() => src}
                        src={src}
                        alt=""
                        objectFit="cover"
                        width={85}
                        height={85}
                      />
                    </td>
                    <td>{Pizza.name}</td>
                    <td>
                      {Pizza.size === 0
                        ? "Small"
                        : Pizza.size === 1
                        ? "Medium"
                        : "Large"}
                    </td>
                    <td>
                      <span style={{ color: "var(--themeRed)" }}> ₹ </span>
                      {Pizza.price}
                    </td>
                    <td>{Pizza.Quantity}</td>
                    <td>
                      <span style={{ color: "var(--themeRed)" }}> ₹ </span>
                      {Pizza.price * Pizza.Quantity}
                    </td>
                    <td
                      style={{
                        color: "var(--themeRed)",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      onClick={() => removeItemFromCart(i)}
                    >
                      x
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.cartDetails}>
            <div>
              <span>Items</span>
              <span>{cartData.pizzas.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span style={{ color: "var(--themeRed)" }}>
                {" "}
                ₹<span>{Total()}</span>
              </span>
            </div>
          </div>


          {!Order && cartData.pizzas.length > 0 ? (
            
          


          <div className={css.button}>
            <button className="btn" onClick={payOnDelivery}>
              Pay On Delivery
            </button>
            <button className="btn" onClick={handelCheckout}>
              Pay Now
            </button>
          </div>
          ) : null}
        </div>
      </div>
      <Toaster />
      <OrderModal
        opened={PaymentMethod === 0}
        setOpened={setPayementMethod}
        PaymentMethod={PaymentMethod}
      />
    </Layout>
  );
}
