// eslint-disable-next-line camelcase
import { New_Tegomin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Spacer from "react-spacer";
import styles from "./style.module.scss";

const newTegomin = New_Tegomin({ subsets: ["latin"], weight: "400" });

export default function Page(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Spacer grow="1" />
      <div className={styles.inner}>
        <Spacer />
        <div className={styles.textsWrapper}>
          <h1 className={`${newTegomin.className} ${styles.heading1}`}>
            がろクイズ
          </h1>
          <Link href="/quiz/1">はじめる</Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            alt="🍣"
            height={125}
            quality={100}
            src="/garo.jpg"
            width={85}
          />
        </div>
      </div>
      <Spacer grow="1" />
    </div>
  );
}
