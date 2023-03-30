"use client";
import arrayShuffle from "array-shuffle";
// eslint-disable-next-line camelcase
import { New_Tegomin } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import rn from "random-number";
import { useEffect, useMemo, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import Spacer from "react-spacer";
import { useLocalStorage, useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";
import useQuizList from "./useQuizList";

const newTegomin = New_Tegomin({ subsets: ["latin"], weight: "400" });

export default function Page({
  params: { quizNumber: paramsQuizNumber },
}: {
  params: { quizNumber: string };
}): JSX.Element {
  const quizNumber = useMemo(
    () => parseInt(paramsQuizNumber, 10) - 1,
    [paramsQuizNumber]
  );
  const quizList = useQuizList();
  const [quiz, setQuiz] = useState<(typeof quizList)[0]>();
  const [answers, setAnswers] = useLocalStorage<string[]>(
    "answers",
    quizList.map(() => "")
  );
  const router = useRouter();
  const { height } = useWindowSize();

  useEffect(() => {
    const { choices, ...quiz } = quizList[quizNumber];

    setQuiz({
      ...quiz,
      choices: arrayShuffle(choices),
    });
  }, [quizList, quizNumber]);

  return (
    <div className={styles.wrapper} style={{ height }}>
      <Spacer grow="1" />
      <div className={styles.inner}>
        <div className={styles.heading1Wrapper}>
          <h1
            className={`${newTegomin.className} ${styles.heading1}`}
          >{`がろクイズ 第 ${quizNumber + 1} 問`}</h1>
        </div>
        <div className={styles.textsWrapper}>
          {quiz ? (
            <>
              <h2 className={styles.heading2}>{quiz.title}</h2>
              <ul className={styles.list}>
                {quiz.choices.map((choice) => (
                  <li className={styles.item} key={choice}>
                    <div
                      className={styles.choiceBlock}
                      onClick={(): void => {
                        const nextAnswers = [...answers];

                        nextAnswers[quizNumber] = choice;

                        if (nextAnswers.includes("")) {
                          setAnswers(nextAnswers);

                          router.push(`/quiz/${quizNumber + 2}`);

                          return;
                        }

                        setAnswers(quizList.map(() => ""));

                        const correctAnswersCount = nextAnswers.filter(
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
              {quizNumber ? (
                <div
                  className={styles.returnBlock}
                  onClick={(): void => {
                    router.back();
                  }}
                >
                  戻る
                </div>
              ) : null}
            </>
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
  );
}
