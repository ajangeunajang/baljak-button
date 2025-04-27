import { Rock_3D, Geist_Mono } from "next/font/google";
import "./globals.css";
import '98.css';

const rock3D = Rock_3D({
  weight: ["400"], // 필요한 가중치를 추가하세요.
  style: ["normal"], // 필요한 스타일을 추가하세요.
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hit the Baljak Button",
  description: "은아의 발작버튼 찾기",
  openGraph: {
    images: [
      {
        url: "/baljakog.png",
        width: 1200,
        height: 630,
        alt: "Euna's Baljak Roulette",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rock3D.variable} cursor-knife antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
