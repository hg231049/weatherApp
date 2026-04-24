import MainWeather from './MainWeather'; // 분리하면 더 좋아요!
import DetailsGrid from './DetailsGrid';
import ChartWeather from './ChartWeather';
const Main = ({ children }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
            { children }
        </div>
        
    );
}
export default Main;