import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 転職相談サイトのメタデータ
export const metadata: Metadata = {
  title: "【年収UP支援】20代30代向け転職相談・年収診断 | LINEで相談",
  description:
    "年収300-400万円からの年収アップを実現。転職相談無料。あなたの市場価値を診断し、最適な転職先を提案。LINE個別相談対応中。",
  keywords: [
    "転職",
    "年収アップ",
    "転職エージェント",
    "20代転職",
    "30代転職",
    "転職相談",
    "年収400万 転職",
    "未経験転職 成功",
    "転職 市場価値",
  ],
  openGraph: {
    title: "【年収UP支援】20代30代向け転職相談・年収診断 | LINEで相談",
    description:
      "年収300-400万円からの年収アップを実現。転職相談無料。あなたの市場価値を診断し、最適な転職先を提案。LINE個別相談対応中。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "【年収UP支援】20代30代向け転職相談・年収診断 | LINEで相談",
    description:
      "年収300-400万円からの年収アップを実現。転職相談無料。あなたの市場価値を診断し、最適な転職先を提案。LINE個別相談対応中。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="title" content={String(metadata.title || "")} />
        <meta name="description" content={String(metadata.description || "")} />
        
        {/* keywordsが存在し、空でない場合のみmetaタグを追加 */}
        {metadata.keywords && metadata.keywords.length > 0 && (
          <meta
            name="keywords"
            content={Array.isArray(metadata.keywords) ? metadata.keywords.join(", ") : ""}
          />
        )}
        
        {/* 必要に応じて他のmetaタグも追加 */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
