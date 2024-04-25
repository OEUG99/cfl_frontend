// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Ticket.css'; // Assuming your CSS file is named Ticket.css

// Assuming qr_code contains the path to the local image file
const qr_code = '/qr_code.png';

const Ticket = () => {
    return (
        <div className="ticket-container">
            <h1>PPV AND TICKETS ON SALE!</h1>

            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <div className="ticket created-by-anniedotexe">
                <div className="left">
                    <div className="image">
                        <p className="admit-one">
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>

                        </p>
                        <div className="ticket-number">
                            <p>

                            </p>
                        </div>
                    </div>
                    <div className="ticket-info">
                        <p className="date">
                            <span>TUESDAY</span>
                            <span className="june-29">April</span>
                            <span>2024</span>
                        </p>
                        <div className="show-name">
                            <br/>
                            <h1>CREATOR FIGHT
                            <br/>
                                LEAGUE
                            </h1>
                            <h2>
                            Boxing Event
                            </h2>
                        </div>
                        <div className="time">
                            <p>8:00 PM <span>TO</span> 11:00 PM</p>
                            <p>DOORS <span>@</span> 7:00 PM</p>
                        </div>
                        <p className="location">
                            <span>Boxing Arena</span>
                            <span className="separator"><i className="far fa-smile"></i></span>
                            <span>Nashville, Tennessee</span>
                        </p>
                    </div>
                </div>
                <div className="right">
                    <p className="admit-one">
                        <span>ADMIT ONE</span>
                        <span>ADMIT ONE</span>
                        <span>ADMIT ONE</span>
                    </p>
                    <div className="right-info-container">
                        <div className="show-name">
                            <h1>Small Creators</h1>
                        </div>
                        <div className="time">
                            <p>8:00 PM <span>TO</span> 11:00 PM</p>
                            <p>DOORS <span>@</span> 7:00 PM</p>
                        </div>
                        <div className="barcode">
                            <img src={qr_code} alt="QR code"/>
                        </div>
                        <p className="ticket-number">
                            #20030220
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;