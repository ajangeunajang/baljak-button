"use client";
import Image from "next/image";
import { useState } from "react";


const baljakPhrases = [
  "심플하면서도 화려하게 부탁해",
  "괜찮긴 한데 뭔가 부족하네",
  "미안 처음 시안으로 할게",
  "내가 말한 건 이런 느낌 아니었는데",
  "내일까지 좀 퀄리티 있게 부탁할게",
  "이거 괜찮은데? 이런 식으로 몇 개만 더 뽑아봐",
  "이거 나중에 조금만 수정해도 되지?",
  "이거 빨리 만들어줘. 어차피 간단한 거잖아.",
];

const nicePhrases = [
  "좋네요",
  "굿",
  "느낌 좋아요",
  "정말 좋네요",
  "아주 좋네요",
  "너무 좋네요",
  "수정사항은 없습니다",
  "사랑합니다",
  "멋져요",
  "대단해요",
  "좋아",
  "최고예요",
  "재밌어",
  "완벽해요",
  "감사합니다",
  "신나요",
  "좋은데요",
  "기대돼요",
  "눈부셔요",
  "잘하고 있어요",
  "훌륭해요",
  "아름다워요",
];

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-blue-400");
  const [pb, setPb] = useState("pb-0"); // For image bottom padding animation
  const [rotateDeg, setRotateDeg] = useState(0); // For image rotation
  const [showRestart, setShowRestart] = useState(false);

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * baljakPhrases.length);
    return baljakPhrases[randomIndex];
  };

  const rightButtonClick = () => {
    // Change background color first
    setBgColor("bg-red-500");

    setPb("pb-[50%]");
    setRotateDeg(Math.floor(Math.random() * 360)); 

    // Use setTimeout to delay the alert slightly so the animations have time to render
    setTimeout(() => {
      alert(getRandomPhrase());
      setShowRestart(true);
    }, 350); // Delay of 50ms, adjust as needed
  };

  const handleRestart = () => {
    // Refresh the page or reset the game state
    window.location.reload();
  };

  // 랜덤으로 rightButtonClick 지정
  const getRandomButtonHandler = () => {
    if (Math.random() < 0.1) {
      return rightButtonClick;
    } else {
      return () => {
        const randomIndex = Math.floor(Math.random() * nicePhrases.length);
        alert(nicePhrases[randomIndex]);
      };
    }
  };

  return (
    <div
      className={`cursor-knife flex flex-col justify-center items-center w-full h-full absolute ${bgColor}`}
    >
      <h1 className="hidden md:block fixed top-0 text-center leading-none tracking-tighter text-[20px] md:text-[36px]">
        Euna's Baljak Roulette
      </h1>
      <h2 className="fixed md:hidden top-2 text-center leading-none tracking-tighter text-[20px] md:text-[36px]">
        Euna's Baljak Roulette
      </h2>

      <article className="flex flex-col justify-center items-center">
        <Image
          src="/euna.jpeg"
          alt="euna"
          width={200}
          height={200}
          className={`w-[120px] md:w-[180px] mb-[-2%] md:mb-0 transition-all duration-500 ease-in-out ${pb}`} // Added transition for padding
          style={{
            mixBlendMode: "multiply",
            height: "auto",
            transform: `rotate(${rotateDeg}deg)`, // Apply random rotation via inline style
          }}
        />

        {/* barrel pc*/}
        <div className="z-10 hidden md:block">
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
        </div>

        {/* barrel mobile */}
        <div className="z-10 md:hidden">
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={getRandomButtonHandler()}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
        </div>


        {/* popup */}
        {showRestart && (
          <div className="w-full h-full bg-[0,0,0,0.4] fixed z-100 flex flex-col justify-center align-center backdrop-blur-sm">
            <div className="text-[10vw] md:text-[4vw] text-center leading-normal tracking-tighter">
              Congratulations, <br></br>you've found the Baljak button!
            </div>
            <div className="pt-6 flex justify-center items-center">
              <button onClick={handleRestart} className="w-1/3 text-center">
                다시 하기
              </button>
            </div>
          </div>
        )}
      </article>


      <footer className="w-full border-t border-black fixed bottom-0 p-2 md:p-4 text-center">
        <div>© 2025 은아의 발작룰렛. 모든 권리 보유.</div>
        <div>
          문의{" "}
          <a href="mailto:ajangeunajang@gmail.com?subject=은아의 발작룰렛 관련 문의 사항&body=안녕하세요,">
            ajangeunajang@gmail.com
          </a>
        </div>
        <div>
          인스타그램{" "}
          <a href="https://www.instagram.com/ajangeunajang" target="_blank">
            @ajangeunajang
          </a>
        </div>
        <div>싸늘하다. 가슴에 비수가 날아와 꽂힌다.</div>
      </footer>
    </div>
  );
}
