import React from 'react';
import { FaCircle } from 'react-icons/fa';

export default function HomePage() {
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
                    <li><a className="inter-customa" href="">Home</a></li>
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
            <section className="first_page">
                <div className="text">
                    <h1 className="inter-custom_frs">Multipurpose <br /> Saas Website for <br />Increasing Revenue</h1>
                    <p className="inter-custom_p">Brace yourself for an extraordinary journey into the future of <br /> technology.</p>
                    <div className="email">
                        <input className="inter-custom" type="email" placeholder="Your Email Address" />
                        <button className="inter-custom">GET STARTED</button>
                    </div>
                </div>
                <div className="image_tablet">
                    <img src="img/Dekstop blokify 3 2.png" alt="" />
                </div>
            </section>
        </div>
    );
}


