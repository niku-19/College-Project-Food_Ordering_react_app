import Link from "next/link";
import Layout from "../components/layout";
import OrderModal from "../components/OrderModal";

export default function Success() {

  return(
    <Layout>
        <OrderModal opened={true} PaymentMethod={1}></OrderModal>
    </Layout>
  )
}


