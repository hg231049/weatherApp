const MainWeather = () => {
    return (
        <div className="flex flex-col justify-between gap-[60px] p-10 bg-white/10 backdrop-blur-lg rounded-[10px] h-full">
          <div className="info flex justify-between items-center">
            <div className="left">
                <h3 className="location text-[30px] font-bold">Seoul</h3>
                <p className="date text-[16px] font-normal">Wednesday, 22 April</p>
            </div>
            <div className="right">
                <div className="text-[50px] ">☀️</div>
            </div>
          </div>
          <div className="today-weather flex items-baseline ">
            <h2 className="temp text-[70px] font-black">18°</h2>
            <p>Sunny</p>
          </div>
        </div>
        
    );
}
export default MainWeather;