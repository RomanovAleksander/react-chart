import React, { useContext, useEffect, useRef, useCallback } from 'react';
import { useChart } from './ChartContext';
import {showToast} from "../utils/toast";

const SocketContext = React.createContext({});

export function useSocket() {
  return useContext(SocketContext)
}

const SocketProvider = ({ children }) => {
  const SERVER_URL = 'ws://localhost:8999';
  const socket = useRef(null);
  const { updateData } = useChart();

  const connect = useCallback(() => {
    socket.current = new WebSocket(SERVER_URL);

    socket.current.onopen = () => {
      showToast('Connected', 'success');
    };

    socket.current.onmessage = (res) => {
      updateData(res);
    };

    socket.current.onclose = () => {
      showToast('Disconnected', 'warn');
      setTimeout(() => {
        connect();
      }, 5000);
    };
  }, [updateData])

  useEffect(() => {
    connect();

    return () => {
      socket.current.close();
    }
  }, [connect]);

  const value = {};

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export default SocketProvider;
