import React from 'react';
import './SocialBar.css'

const SocialBar = () => {
    return (
        <div className="social-bar">
            <div className="social-menu">
                <ul>
                    <p>Follow us on social media!</p>
                    <li><a href="https://twitter.com/CFL_FightLeague" target="blank"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li><a href="https://www.instagram.com/creator_fightleague/" target="blank"><i
                        className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/@CreatorFightLeague" target="blank"><i
                        className="fab fa-youtube"></i></a></li>
                    <li><a><i className="fab fa-discord" target="blank"></i></a></li>
                </ul>
            </div>

        </div>

    );
};

export default SocialBar;