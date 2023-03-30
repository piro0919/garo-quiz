"use client";
// eslint-disable-next-line camelcase
import { New_Tegomin, Yusei_Magic } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { TwitterShareButton } from "react-share";
import Spacer from "react-spacer";
import { useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";

const newTegomin = New_Tegomin({ subsets: ["latin"], weight: "400" });
const yuseiMagic = Yusei_Magic({ subsets: ["latin"], weight: "400" });

export default function Page({
  params: { point: paramsPoint },
}: {
  params: { point: string };
}): JSX.Element {
  const point = useMemo(() => parseInt(paramsPoint, 10), [paramsPoint]);
  const [url, setUrl] = useState("");
  const { height } = useWindowSize();
  const pathname = usePathname();

  useEffect(() => {
    setUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);

  return (
    <div className={styles.wrapper} style={{ height }}>
      <Spacer grow="1" />
      <div className={styles.inner}>
        <div className={styles.heading1Wrapper}>
          <h1 className={`${newTegomin.className} ${styles.heading1}`}>
            がろクイズ 結果発表
          </h1>
        </div>
        <div className={styles.textsWrapper}>
          <p
            className={`${yuseiMagic.className} ${styles.resultBlock}`}
          >{`あなたは ${point}% がろさんですｱﾊｰ!!`}</p>
          <div className={styles.linksWrapper}>
            <TwitterShareButton
              hashtags={["がろクイズ"]}
              title={`わたしは ${point}% がろさんですｱﾊｰ!!`}
              url={url}
            >
              ツイートする
            </TwitterShareButton>
            <Link href="/">トップへ戻る</Link>
          </div>
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
