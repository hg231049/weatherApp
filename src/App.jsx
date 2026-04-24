import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import MainWeather from './components/MainWeather';
import DetailsGrid from './components/DetailsGrid';
import ChartWeather from './components/ChartWeather';
import WeatherIcon from './components/WeatherIcon';
import bgImage from './assets/img/bg-earth.jpg';
import bgImageDay from './assets/img/bg-day.png';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


function App() {
  // 다크모드
  const [isDark,setIsDark] = useState(false);

  // 날씨 데이터
  const [weather, setWeather] = useState(null);
  const [foreCast,setForeCast] = useState([]);// 차트용 데이터 상태
  // 도시 데이터
  const [city,setCity] = useState("Seoul");

  // 도시 이름을 받아서 데이터를 다시 불러오는 함수
  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  const fetchWeather = async () => {
    try {
      // 1. 현재 날씨
      const CurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const CurrentRes = await fetch(CurrentUrl);
      const CurrentData = await CurrentRes.json();
      setWeather(CurrentData); // 받은 데이터를 state에 저장

      // 2. 5일 예보
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
      const forecastRes = await fetch(forecastUrl);
      const forecastData = await forecastRes.json();
      // 차트에서 사용할 데이터 8개(24시간분)만 추출해서 가공
      const processedData = forecastData.list.slice(0, 8).map(item => ({
        // '2026-04-23 15:00:00' -> '15:00' 형태로 변환
        time: item.dt_txt.split(' ')[1].substring(0, 5),
        temp: Math.round(item.main.temp)
      }));

      setForeCast(processedData); // 받은 예보 데이터를 state에 저장


    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    // 테마설정 함수
    const checkTime = () => {
      const hour = new Date().getHours();
      // 오전6시~ 일반모드, 오후6시~ 다크모드
      if (hour >= 18 || hour < 6 ){
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    checkTime();
    fetchWeather();
  }, [city]); // 처음 화면 뜰 때 딱 한 번 호출

  // 테마에 따라 보여줄 배경 이미지 결정
  const currentBg = isDark ? bgImage : bgImageDay;

  return (
    <div 
      className='relative min-h-screen text-white bg-slate-900 overflow-x-hidden'
    >
      {/* 1. 배경 이미지 레이어 */}
      <div 
        className='fixed inset-0 bg-cover bg-center bg-no-repeat z-0'
        style={{ backgroundImage: `url(${currentBg})` }}
      />
      
      {/* 2. 배경을 살짝 어둡게 해주는 오버레이 (텍스트 가독성) */}
      <div className='fixed inset-0 bg-black/40 z-10' />

      {/* 3. 실제 컨텐츠 영역 */}
      <div className='relative z-20 min-h-screen flex items-center justify-center py-10 lg:p-10'>
        <div className='inner w-full max-w-7xl mx-auto'>
          <Header onSearch={handleSearch}/>
          <Main>
            {weather ? (
              <>
                {/* 왼쪽 영역: 메인 날씨 정보 */}
                <section className='lg:col-span-4 h-full'>
                  <MainWeather 
                    temp={Math.round(weather.main.temp)} 
                    city={weather.name}
                    desc={weather.weather[0].main}
                    icon={weather.weather[0].icon}
                  />
                </section>

                {/* 오른쪽 영역: 차트 및 상세 지표 */}
                <section className='flex flex-col gap-4 lg:col-span-8 h-full'>
                  <ChartWeather data={foreCast} />
                  <DetailsGrid 
                    humidity={weather.main.humidity}
                    wind={weather.wind.speed}
                    feelsLike={Math.round(weather.main.feels_like)}
                    pressure={weather.main.pressure}
                    visibility={weather.visibility}
                    rain={weather.rain ? weather.rain['1h'] : 0}
                     icon={weather.weather[0].icon}
                  />
                </section>
              </>
            ) : (
              <div className="col-span-12 text-center py-20 text-xl font-bold">
                날씨 데이터를 불러오는 중입니다...
              </div>
            )}
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;