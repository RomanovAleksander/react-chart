import React, { useContext, useState, useCallback } from 'react';

const ChartContext = React.createContext({});

export function useChart() {
  return useContext(ChartContext);
}

const ChartProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const updateData = useCallback((res) => {
    const currentTimestamp = Date.now();
    const newData = JSON.parse(res.data);

    setData((prev) => {
      // the time in milliseconds when an item was created must be more than the time 5 minutes ago
      const filteredData = prev.filter((item) => item[0].timestamp >= currentTimestamp - 5 * 60000)
      return [...filteredData, newData]
    })
  }, []);

  const value = {
    data, updateData
  };

  return (
    <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
  );
}

export default ChartProvider;
