import React, { createContext, useMemo, useContext } from 'react';
import io, { ManagerOptions, SocketOptions,Socket  } from 'socket.io-client';

const SocketContext = createContext(null);
interface SocketProviderProps {
    children: any;
}

const AppCtx = createContext<SocketProviderProps | null>(null);

export const SocketProvider = ({ children }) => {
    const socket = useMemo(() => io('http://localhost:3001'), []);
    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = (uri: string, opts?: Partial<ManagerOptions & SocketOptions> | undefined) => {
    return useContext(SocketProvider);
};
