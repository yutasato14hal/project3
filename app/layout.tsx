import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// 転職相談サイトのメタデータ
export const metadata: Metadata = {
  title: '【年収UP支援】20代30代向け転職相談・年収診断 | LINEで相談',
  description:
    '年収300-400万円からの年収アップを実現。転職相談無料。あなたの市場価値を診断し、最適な転職先を提案。LINE個別相談対応中。',
  keywords: [
    '転職',
    '年収アップ',
    '転職エージェント',
    '20代転職',
    '30代転職',
    '転職相談',
    '年収400万 転職',
    '未経験転職 成功',
    '転職 市場価値',
  ],
  openGraph: {
    title: '【年収UP支援】20代30代向け転職相談・年収診断 | LINEで相談',
    description:
      '年収300-400万円からの年収アップを実現。転職相談無料。あなたの市場価値を診断し、最適な転職先を提案。LINE個別相談対応中。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【年収UP支援】20代30代向け転職相談・年収診断 | LINEで相談',
    description:
      '年収300-400万円からの年収アップを実現。転職相談無料。あなたの市場価値を診断し、最適な転職先を提案。LINE個別相談対応中。',
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
        <meta name="title" content={String(metadata.title || '')} />
        <meta name="description" content={String(metadata.description || '')} />

        {/* keywordsが存在し、空でない場合のみmetaタグを追加 */}
        {metadata.keywords && metadata.keywords.length > 0 && (
          <meta
            name="keywords"
            content={
              Array.isArray(metadata.keywords)
                ? metadata.keywords.join(', ')
                : ''
            }
          />
        )}

        {/* Favicon基本設定 */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* PNG形式のファビコン */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple Touch Icon（iOS向け） */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Android Chrome向けアイコン */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />

        {/* Web App Manifest */}
        <link rel="manifest" href="/career/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
