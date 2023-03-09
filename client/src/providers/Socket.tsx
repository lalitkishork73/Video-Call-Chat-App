import React, { createContext, useMemo, useContext } from 'react';
import { io, ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

const SocketContext = createContext(null);
interface SocketProviderProps {
    children: any;
    socket: Socket;
}
interface DefaultEventsMap {
    uri: string;
    opts?: Partial<ManagerOptions & SocketOptions> | undefined;
}

const App = createContext<SocketProviderProps | null>(null);

export const SocketProvider = (props) => {
    const socket: Socket<DefaultEventsMap> = useMemo(() => io('http://localhost:3001'), []);

    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
    return useContext(SocketProvider);
};
