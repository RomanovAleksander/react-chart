import { useChart } from '../../context/ChartContext';
import './temperature.css';

const Temperature = () => {
  const { data } = useChart();
  const lastItem = data[data.length-1];

  return (
    <div className="temperature">
      {lastItem && lastItem.map((item) => {
        return (
          <div className="temperature__item" key={item.id}>
            <div className="temperature__item-id">ID {item.id}</div>
            <div className="temperature__item-temp">Temp: {item.temperature} C</div>
          </div>
        )
      })}
    </div>
  );
};

export default Temperature;
