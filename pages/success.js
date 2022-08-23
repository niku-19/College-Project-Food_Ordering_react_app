import Head from "next/head";
import Layout from "../components/layout";
import OrderModal from "../components/OrderModal";

export default function Success() {

  return(
    <Layout>
       <Head>
          <title>FUDO</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        <OrderModal opened={true} PaymentMethod={1}></OrderModal>
    </Layout>
  )
}


