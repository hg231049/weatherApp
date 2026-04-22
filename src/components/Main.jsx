import MainWeather from './MainWeather'; // 분리하면 더 좋아요!
import DetailsGrid from './DetailsGrid';
import ChartWeather from './ChartWeather';
const Main = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
            <section className='MainWeather lg:col-span-4 h-full'>
                <MainWeather />
            </section>
            <section className='DetailsGrid flex flex-col gap-4 lg:col-span-8 h-full'>
                <ChartWeather />
                <DetailsGrid />
            </section>
        </div>
        
    );
}
export default Main;