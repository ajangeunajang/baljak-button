module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}', // Next.js 프로젝트에서는 pages 폴더의 경로를 설정
      './components/**/*.{js,ts,jsx,tsx}', // 컴포넌트 폴더의 경로 설정
    ],
    theme: {
      extend: {
        cursor: {
          knife: 'url(/knife.png) 16 16, auto', // 커스텀 커서 추가
        },
      },
    },
    plugins: [],
  }