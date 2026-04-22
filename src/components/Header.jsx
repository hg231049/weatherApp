const Header = () => {
    return (
        <header className="mb-10">
            <div className="flex justify-between flex-col items-center lg:flex-row">
                <div className="main-title mb-6 text-[40px] font-black lg:text-[80px] lg:mb-0">
                    <h1>WEATHER APP</h1>
                </div>
                <div className="search-location flex justify-between w-full p-[10px_20px] border border-white/50 rounded-[10px] lg:w-auto">
                    <input type="text" placeholder="지역을 검색하세요" className="w-[90%]" />
                    <button>🔍</button>
                </div>
            </div>
        </header>
        
    );
}
export default Header;