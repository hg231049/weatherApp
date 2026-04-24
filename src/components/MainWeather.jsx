const MainWeather = ({ temp, city, desc, icon }) => {
  // 오늘 날짜
  const today = new Date();
  const dateString =  today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <div className="flex flex-col justify-between gap-[60px] p-10 bg-white/10 backdrop-blur-lg rounded-[10px] h-full">
          <div className="info flex justify-between items-center">
            <div className="left">
                <h3 className="location text-[30px] font-bold">{city}</h3>
                <p className="date text-[16px] font-normal">{dateString}</p>
            </div>
            <div className="right">
                <div className="text-[50px] "><img src={iconUrl} alt={desc} className='w-32 h-32' /></div>
            </div>
          </div>
          <div className="today-weather flex items-baseline ">
            <h2 className="temp text-[70px] font-black">{temp}°</h2>
            <p>{desc}</p>
          </div>
        </div>
        
    );
}
export default MainWeather;