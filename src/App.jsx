import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import bgImage from './assets/img/bg-earth.jpg';

function App() {
  return (
    <div 
      className='relative min-h-screen text-white bg-slate-900 overflow-x-hidden'
    >
      {/* 1. 배경 이미지 레이어 */}
      <div 
        className='fixed inset-0 bg-cover bg-center bg-no-repeat z-0'
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* 2. 배경을 살짝 어둡게 해주는 오버레이 (텍스트 가독성) */}
      <div className='fixed inset-0 bg-black/40 z-10' />

      {/* 3. 실제 컨텐츠 영역 */}
      <div className='relative z-20 min-h-screen flex items-center justify-center py-10 lg:p-10'>
        <div className='inner w-full max-w-7xl mx-auto'>
          <Header/>
          <Main/>
        </div>
      </div>
    </div>
  );
}

export default App;