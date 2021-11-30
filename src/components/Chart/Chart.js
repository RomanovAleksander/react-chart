import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
  LineElement, Title, Tooltip, Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useChart } from '../../context/ChartContext';
import { chartOptions } from '../../utils/consts';
import './chart.css';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  Title, Tooltip, Legend
);

const styles = {
  height: '100%',
  width: '100%'
}

const Chart = () => {
  const [linesData, setLinesData] = useState({ 0: Array(5), 1: Array(5) });
  const { data } = useChart();

  useEffect(() => {
    if (data.length) {
      const lastItem = data[data.length-1];
      lastItem.forEach((item, idx) => {
        if (item.data <= 100) {
          setLinesData((prev) => {
            const withoutFirstItem = prev[idx].slice(1);
            return {
              ...prev,
              [idx]: [...withoutFirstItem, item.data]
            }
          })
        }
      })
    }
  }, [data]);

  return (
    <div className="chart">
      <div className="chart__header">DATA</div>
      <div className="chart__labels">
        <div className="chart__labels-item">
          <div className="block grey" />
          <span>1</span>
        </div>
        <div className="chart__labels-item">
          <div className="block black" />
          <span>2</span>
        </div>
      </div>
      <div>
        <Line options={chartOptions}
              style={styles}
              data={{
                labels: [0, 1, 2, 3, 4],
                datasets: [
                  {
                    label: "1",
                    data: linesData[0],
                    backgroundColor: ["lightgrey"],
                    borderColor: ["lightgrey"],
                  },
                  {
                    label: "2",
                    data: linesData[1],
                    backgroundColor: ["black"],
                    borderColor: ["black"],
                  },
                ],
              }}
        />
      </div>
    </div>
  );
}

export default Chart;
