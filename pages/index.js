import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p>
        Nulla anim est laboris reprehenderit culpa. Dolor elit fugiat do do anim
        commodo eu officia Lorem occaecat do eu amet ea. Ipsum amet consequat
        culpa tempor exercitation laborum nisi do id. Cupidatat officia aliquip
        officia sunt. Laboris ut reprehenderit cupidatat et mollit id esse
        nostrud consectetur minim. Veniam et ullamco dolore veniam Lorem ullamco
        elit tempor. Incididunt ullamco ad quis eu.
      </p>
      <Footer />
    </div>
  );
}
