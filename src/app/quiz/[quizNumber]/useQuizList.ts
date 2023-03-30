import { useMemo } from "react";

type Quiz = {
  answer: string;
  choices: string[];
  title: string;
};

export type QuizListData = Quiz[];

export default function useQuizList(): QuizListData {
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

  return quizList;
}
