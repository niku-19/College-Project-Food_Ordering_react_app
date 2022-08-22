import { Modal, useMantineTheme } from "@mantine/core";
import css from "../styles/OrderModal.module.css";
import Logo from "../public/logo.png";
import Image from "next/Image";
import { useState } from "react";
import { createOrder } from "../lib/orderHandler";
import toast from "react-hot-toast";
import { useStore } from "../store/store";
import { useRouter } from "next/router";

export default function OrderModal({ opened, setOpened, PaymentMethod }) {
  const theme = useMantineTheme();
  const router = useRouter();
  const resetCart = useStore((state) => state.resetCart);
  ///
  ///order know
  const [FormData, setFormData] = useState({});
  const handleInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const total = typeof window !== "undefined" && localStorage.getItem("total");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({
      ...FormData,
      total,
      PaymentMethod,
    });
    toast.success("Order Placed");
    router.push(`/order/${id}`);
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => setOpened(null)}
    >
      {/* niku content */}
      <form onSubmit={handleSubmit} className={css.container}>
        <Image className="brand_logo" src={Logo} alt="" />
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={handleInput}
          name="name"
          placeholder="Name"
          required
        />
        <label htmlFor="">Phone Number</label>
        <input
          type="Number"
          onChange={handleInput}
          name="phone"
          placeholder="phone Number"
          required
        />
        <label htmlFor="">Land Mark</label>
        <input
          type="text"
          onChange={handleInput}
          name="landmark"
          placeholder="LankMark"
          required
        />
        <label htmlFor=""> Adress </label>
        <textarea
          name="address"
          cols="8"
          rows="3"
          onChange={handleInput}
          placeholder="Enter Accurate Adress"
        />
        <span>
          You Will Pay
          <span
            style={{
              color: "var(--themeRed)",
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}
          >
            {" "}
            ₹ {total}
          </span>{" "}
          On Delivery
        </span>
        <button type="submit" className={`btn ${css.button_place_order}`}>
          place Order
        </button>
      </form>
    </Modal>
  );
}
