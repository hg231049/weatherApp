const getWeatherIcon = (code) => {
  switch(code) {
    case '01d': return <WiDaySunny />;
    case '02d': return <WiDayCloudy />;
    case '09d': return <WiRain />;
    // ... 이런 식으로 매칭
    default: return <WiCloud />;
  }
}

export default getWeatherIcon;