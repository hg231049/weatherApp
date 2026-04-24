import { useState } from 'react';

const Header = ({onSearch}) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //페이지 새로고침 방지
        if (inputValue.trim()){
            onSearch(inputValue); // 부모의 handleSubmit 실행
            setInputValue(""); //입력창 비우기
        }
    }
    return (
        <header className="mb-10">
            <div className="flex justify-between flex-col items-center lg:flex-row">
                <div className="main-title mb-6 text-[40px] font-bold lg:text-[60px] lg:mb-0">
                    <h1>WEATHER APP</h1>
                </div>
                <div className="search-location flex justify-between w-full p-[10px_20px] border border-white/50 rounded-[10px] lg:w-auto">
                    <input 
                        type="text" 
                        placeholder="지역을 검색하세요" 
                        className="w-[90%]" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" onClick={handleSubmit}>🔍</button>
                </div>
            </div>
        </header>
        
    );
}
export default Header;