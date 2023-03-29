"use client";
// eslint-disable-next-line camelcase
import { New_Tegomin, Rampart_One } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { TwitterShareButton } from "react-share";
import Spacer from "react-spacer";
import styles from "./style.module.scss";

const newTegomin = New_Tegomin({ subsets: ["latin"], weight: "400" });
const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });

export default function Page(): JSX.Element {
  const pathname = usePathname();
  const point = useMemo(
    () => parseInt(pathname.split("/").at(-1) as string, 10),
    [pathname]
  );
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Spacer grow="1" />
      <div className={styles.inner}>
        <div className={styles.heading1Wrapper}>
          <h1 className={`${newTegomin.className} ${styles.heading1}`}>
            がろクイズ 結果発表
          </h1>
        </div>
        <div className={styles.textsWrapper}>
          <p
            className={`${rampartOne.className} ${styles.resultBlock}`}
          >{`あなたは ${point}% がろさんですｱﾊｰ!!`}</p>
          <TwitterShareButton
            hashtags={["がろクイズ"]}
            title={`わたしは ${point}% がろさんですｱﾊｰ!!`}
            url={url}
          >
            ツイートする
          </TwitterShareButton>
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
