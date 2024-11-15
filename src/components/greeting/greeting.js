import React, { useState, useEffect } from "react";

import "./greeting.css";

function TimeBasedGreeting() {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const updateGreeting = () => {
            const hour = new Date().getHours();
            if (hour < 12) {
                setGreeting("God Morgon");
            } else if (hour === 12) {
                setGreeting("God Förmiddag");
            } else if (hour > 12 && hour < 17) {
                setGreeting("God Eftermiddag");
            } else {
                setGreeting("God Kväll");
            }
        };

        updateGreeting();

        const intervalId = setInterval(updateGreeting, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {greeting}
        </div>
    );
}

export default TimeBasedGreeting;
