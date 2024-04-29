import React from "react";
import { FaCircle } from 'react-icons/fa';

export default function Header() {


    return (
        <div className="container_bkg_color">
            <header>
                <div className="logo">
                    <div className="ellipse">
                        <FaCircle style={{ color: '#d4d7de' }} />
                        <FaCircle style={{ color: '#ffffff' }} />
                    </div>
                    <h1 className="inter-custom">Blockify.</h1>
                </div>
                <nav>
                    <ul>
                        <li><a className="inter-customa" href="#">Home</a></li>
                        <li><a className="inter-customa" href="">Products</a></li>
                        <li><a className="inter-customa" href="">Pricing</a></li>
                        <li><a className="inter-customa" href="">Company</a></li>
                        <li><a className="inter-customa" href="">Resource</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><a className="inter-customa_color" href="">Sign Up</a></li>
                        <li><a className="inter-customa_color btn_log_in" href="login.html">LOG IN</a></li>
                    </ul>
                </nav>
            </header>

        </div>
        
    );
}