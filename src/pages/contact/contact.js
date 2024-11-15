import React from "react";
import "./contact.css"; // Antag att denna CSS-fil innehåller stilar för din kontakt-sida

function Contact() {
    return (
        <main>
            <div className="contact-container">
                <h1 className="contact-title">Kontakta Oss</h1>
                <p className="contact-description">
                    För frågor eller mer information, vänligen kontakta oss:
                </p>
                <ul className="contact-list">
                    <li>E-post: info@mittforetag.se</li>
                    <li>Telefon: 012-345 67 89</li>
                    <li>Adress: Huvudgatan 1, 123 45 Staden</li>
                </ul>
            </div>
        </main>
    );
}

export default Contact;
