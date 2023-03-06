import React from 'react';
import { useSocket } from '../providers/Socket';

const Homepage = () => {
    const { socket } = useSocket();
 const 
    return (
        <>
            <main className="homepage-container">
                <form action="">
                    <div className="input-in">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name="email" id="email" />
                    </div>
                    <div className="input-in">
                        <label htmlFor="roomid">Room Id</label>
                        <input type="text" placeholder="Room Id" name="roomid" id="roomid" />
                    </div>
                    <div className="login-btn">
                        <button>Enter Room</button>
                    </div>
                </form>
            </main>
        </>
    );
};

export default Homepage;
