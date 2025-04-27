"use client";
import Image from "next/image";

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

export default function Home() {
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * baljakPhrases.length);
    return baljakPhrases[randomIndex];
  };

  return (
    <div className="cursor-knife flex flex-col justify-center items-center w-full h-full bg-blue-400 absolute">
      <h1 className="hidden md:block fixed top-0 text-center leading-none tracking-tighter text-[20px] md:text-[36px]">
        Euna's Baljak Roulette
      </h1>
      <h2 className="fixed md:hidden top-4 text-center leading-none tracking-tighter text-[20px] md:text-[36px]">
        Euna's Baljak Roulette
      </h2>
      <article>
        <Image
          src="/euna.jpeg"
          alt="euna"
          width={200}
          height={200}
          className="w-[150px] md:w-[180px] mb-[-2%] md:mb-0"
          style={{
            mixBlendMode: "multiply",
            height: "auto",
          }}
        />

        {/* barrel */}
        <div className="z-10">
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
            <button
              onClick={() => alert(getRandomPhrase())}
              className="px-4 py-8 bg-white text-blue-500 rounded"
            ></button>
          </div>
        </div>
      </article>
      <footer className="w-full border-t border-black fixed bottom-0 p-4 text-center">
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
