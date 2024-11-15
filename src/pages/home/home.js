import React from "react";
import Clock from "../../components/clock/clock";
import Greetings from "../../components/greeting/greeting";

import "./home.css";

function Home() {
    return (
        <div>
            <main>
                <ul>
                    <li>
                        <div className="greeting">
                            <Greetings />
                        </div>
                    </li>
                    <li>
                        <div className="clock">
                            <Clock />
                        </div>
                    </li>
                </ul>
            </main>
        </div>
    );
}
export default Home;