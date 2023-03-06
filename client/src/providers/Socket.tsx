import React, { createContext, useMemo, useContext } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext(null);
interface SocketProviderProps {
    children: React.ReactNode;
}

const AppCtx = createContext<SocketProviderProps | null>(null);

export const SocketProvider = ({ children }) => {
    const socket = useMemo(() => io('http://localhost:3001'), []);
    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
    return useContext(SocketProvider);
};
