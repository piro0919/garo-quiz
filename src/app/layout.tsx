// eslint-disable-next-line camelcase
import { Zen_Maru_Gothic } from "next/font/google";
import "ress/dist/ress.min.css";
import "./globals.scss";
import "./mq-settings.scss";

export const metadata = {
  description: "こんにちは、がろです。お寿司が好き",
  title: "がろクイズ",
};

const zenMaruGothic = Zen_Maru_Gothic({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ja">
      <body className={zenMaruGothic.className}>
        <script />
        {children}
      </body>
    </html>
  );
}
