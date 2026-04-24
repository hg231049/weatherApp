const DetailsGrid = ({humidity, wind, pressure,rain, feelsLike, visibility,icon}) => {
    const Weather_List = [
        { id: 1, label: "습도", value:humidity, icon:"💧"},
        { id: 2, label: "바람", value:wind, icon:"💨"},
        { id: 3, label: "기압", value:pressure, icon:"☁️"},
        { id: 4, label: "강수량", value:rain, icon:"☔"},
        { id: 5, label: "체감온도", value:feelsLike, icon:"🌡️"},
        { id: 6, label: "가시거리", value:visibility, icon:"👀"},
    ];

    return (
        <div>
            <div className="detail-info grid grid-cols-2 gap-3 lg:grid-cols-3">
                {Weather_List.map((item) => (
                    <div key={item.id} className="flex justify-between items-end p-4 bg-white/10 backdrop-blur-lg rounded-[10px]">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-white/50">{item.label}</h3>
                            <p className="font-bold text-[20px]">{item.value}</p>
                        </div>
                        <div className="icon text-[20px]">
                            {item.icon}
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
        
    );
}
export default DetailsGrid;