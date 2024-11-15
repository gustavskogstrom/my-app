import React from "react";
import "./services.css";

function Services() {
    return (
        <main>
            <div className="services-container">
                <h2 className="services-title">Våra Tjänster</h2>
                <div className="services-list">
                    <div className="service-item">
                        <h3>Tjänst 1</h3>
                        <p>Beskrivning av tjänst 1.</p>
                    </div>
                    <div className="service-item">
                        <h3>Tjänst 2</h3>
                        <p>Beskrivning av tjänst 2.</p>
                    </div>
                    <div className="service-item">
                        <h3>Tjänst 3</h3>
                        <p>Beskrivning av tjänst 3.</p>
                    </div>
                    {/* Lägg till ytterligare tjänster om så önskas */}
                </div>
            </div>
        </main>
    );
}

export default Services;
