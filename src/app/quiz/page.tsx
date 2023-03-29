"use client";
import NoSSR from "@mpth/react-no-ssr";
import usePrevious from "@react-hook/previous";
import arrayShuffle from "array-shuffle";
// eslint-disable-next-line camelcase
import { New_Tegomin } from "next/font/google";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import rn from "random-number";
import { useEffect, useMemo, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import Spacer from "react-spacer";
import styles from "./style.module.scss";

const newTegomin = New_Tegomin({ subsets: ["latin"], weight: "400" });

export default function Page(): JSX.Element {
  const pathname = usePathname();
  const count = useMemo(
    () => parseInt(pathname.split("/").at(-1) as string, 10) - 1,
    [pathname]
  );
  const quizList = useMemo(
    () => [
      {
        answer: "garo_x_nemui",
        choices: [
          "garo_x_nemui",
          "garo_x_osushi",
          "garo_x_onakasuita",
          "garo_x_sing",
        ],
        title: "がろの Twitter の ID は？",
      },
      {
        answer: "短足ドッグ",
        choices: [
          "短足ドッグ",
          "クリスマスを口実に食べたいものたくさん買って食べるチャンスを逃すな",
          "昼夜逆転治さなきゃ治さなきゃ",
          "ﾈｹﾁｬﾝ",
        ],
        title:
          "がろのはじめてのツイートは「うまい、、耳が幸せだ…」\nでは 2 番目のツイートは？",
      },
      {
        answer: "第65位",
        choices: ["第65位", "第75位", "第85位", "第95位"],
        title: "がろ開催の「伸ばし棒そこちゃうやろ選手権」スーヌピーは第何位？",
      },
      {
        answer: "助かりす",
        choices: [
          "助かりす",
          "忙しらいおん",
          "困ったなまず",
          "ほんまにすまそんうさぎ",
        ],
        title:
          "がろが募集したアンケート「どれが好き？（声に出して読んでね）」\n最も投票数が多かったのは？",
      },
      {
        answer: "30.8%",
        choices: ["30.8%", "38.5%", "35.8%", "30.5%"],
        title: "では 2 番目に投票数が多かった選択肢の投票率は？",
      },
      {
        answer: "1.5点",
        choices: ["0.5点", "1点", "1.5点", "2点"],
        title: "かろが Twitter で報告した春のパン祭りで集めた点数は？",
      },
      {
        answer: "https://twitter.com/insideshoki/status/1606231621136285696",
        choices: [
          "https://twitter.com/insideshoki/status/1606231621136285696",
          "https://twitter.com/shuzonarita/status/1606471838221357058",
          "https://twitter.com/pc3589/status/1606225149312880640",
          "https://twitter.com/jo2geor2/status/1606242638599839745",
        ],
        title: "がろが Twitter ではじめていいねしたツイートは？",
      },
      {
        answer: "あぷで！？",
        choices: [
          "あぷで！？",
          "通信制限女によるテスト配信",
          "なんもしてない",
          "ひそひそお話",
        ],
        title:
          "2023年3月30日時点において、\nサムネイルが 1 度しか使われていないがろのツイキャス配信のタイトルは？",
      },
      {
        answer: "なんもしてない",
        choices: [
          "なんもしてない",
          "ひそひそお話",
          "があああああ",
          "お米炊けるまで〜",
        ],
        title: "2023 年最初に行われたがろのツイキャス配信のタイトルは？",
      },
      {
        answer: "伊達巻とかまぼこと天ぷらそば",
        choices: [
          "伊達巻とかまぼこと天ぷらそば",
          "イチゴとたくあんとかっぱえびせん",
          "ピザ",
          "とろける果実のど飴とたべっ子どうぶつ",
        ],
        title: "がろが 2023 年のお正月に食べたものは？",
      },
    ],
    []
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const prevCount = usePrevious(count, 0);
  const [quiz, setQuiz] = useState(quizList[0]);
  const { choices, title } = useMemo(() => quiz, [quiz]);
  const [answers, setAnswers] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (count === prevCount) {
      return;
    }

    const { choices, ...quiz } = quizList[count];

    setQuiz({
      ...quiz,
      choices: arrayShuffle(choices),
    });
  }, [count, prevCount, quizList]);

  useEffect(() => {
    history.pushState(null, "", location.href);

    const popstate = (): void => {
      history.go(1);
    };

    window.addEventListener("popstate", popstate);

    return () => {
      window.removeEventListener("popstate", popstate);
    };
  }, []);

  return (
    <NoSSR>
      <div className={styles.wrapper}>
        <Spacer grow="1" />
        <div className={styles.inner}>
          <div className={styles.heading1Wrapper}>
            <h1
              className={`${newTegomin.className} ${styles.heading1}`}
            >{`がろクイズ 第 ${count + 1} 問`}</h1>
          </div>
          <div className={styles.textsWrapper}>
            <h2 className={styles.heading2}>{title}</h2>
            <ul className={styles.list}>
              {choices.map((choice) => (
                <li className={styles.item} key={choice}>
                  <div
                    className={styles.choiceBlock}
                    onClick={(): void => {
                      const latestAnswers = [...answers, choice];

                      setAnswers(latestAnswers);

                      if (quizList.length >= count + 2) {
                        router.push(`/quiz/${count + 2}`);

                        return;
                      }

                      const correctAnswersCount = latestAnswers.filter(
                        (answer, index) => answer === quizList[index].answer
                      ).length;
                      const point = rn({
                        integer: true,
                        max:
                          correctAnswersCount === quizList.length
                            ? 100
                            : correctAnswersCount * 10 + 9,
                        min: correctAnswersCount * 10,
                      });

                      router.push(`/result/${point}`);
                    }}
                  >
                    {choice}
                  </div>
                  {choice.startsWith("http") ? (
                    <a href={choice} target="_blank">
                      <BiLinkExternal />
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
            {count ? (
              <div
                className={styles.returnBlock}
                onClick={(): void => {
                  setAnswers((prevAnswers) => {
                    prevAnswers.pop();

                    return prevAnswers;
                  });

                  router.push(`/quiz/${count}`);
                }}
              >
                戻る
              </div>
            ) : null}
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
    </NoSSR>
  );
}
