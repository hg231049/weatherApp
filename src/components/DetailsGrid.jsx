const DetailsGrid = () => {
    const Weather_List = [
        { id: 1, label: "습도", value:"45%", icon:"💧"},
        { id: 2, label: "바람", value:"3 m/s", icon:"💨"},
        { id: 3, label: "기압", value:"1013 hPa", icon:"🌡️"},
        { id: 4, label: "자외선", value:"중간", icon:"☀️"},
        { id: 5, label: "체감온도", value:"15°", icon:"☀️"},
        { id: 6, label: "가시거리", value:"10km", icon:"☀️"},
    ];

    return (
        <div>
            <div className="detail-info grid grid-cols-2 gap-3 lg:grid-cols-3">
                {Weather_List.map((item) => (
                    <div className="flex justify-between items-end p-4 bg-white/10 backdrop-blur-lg rounded-[10px]">
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