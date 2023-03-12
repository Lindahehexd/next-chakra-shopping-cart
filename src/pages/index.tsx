import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import ItemCard from "@/components/Products/ItemCard";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta
          name="description"
          content="A simple nodic shopping cart using Next.js, Typescript, Chakra UI, Redux Toolkit, Redux-Persist"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ItemCard />
      <Footer />
    </>
  );
}
