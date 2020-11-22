import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Saturno MX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.teaser_container}>
        <video
          className={styles.teaser}
          autoPlay
          playsInline
          muted
          loop
          tabindex="0"
        >
          <source src="/video/muy-pronto.mp4" type="video/mp4;" />
          <source src="/video/muy-pronto.webm" type="video/webm;" />
        </video>
      </div>
    </div>
  );
}
