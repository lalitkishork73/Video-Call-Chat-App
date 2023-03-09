import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import './app.css';
import { SocketProvider } from './providers/Socket';

function App() {
    return (
        <>
            <div>
                <SocketProvider>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </SocketProvider>
            </div>asddad
        </>
    );
}

export default App;
