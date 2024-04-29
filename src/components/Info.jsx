import React from "react";

export default function Info() {
    return (
        <section className="info">
            <div className="content">
                <span className="green_info inter-custom_info">Our features</span>
                <h1 className="inter-custom">How our data will help your <br /> day-to-day business</h1>
                <p className="inter-custom_info first_p">Brace yourself for an extraordinary journey into the <br /> future of technology.</p>
                <a className="inter-custom_info" href="#"><img className="color_b" src="img/Shield check.png" alt="Data Security" /> Data Security</a>
                <div className="line"></div>
                <p className="inter-custom_info second_p" >Gain valuable insights into your operations. Your brand is more than just a <br /> logo; it's the essence of your business. We create compelling brand identities <br /> that tell your unique story and resonate with your target audience.</p>
                <a className="inter-custom_info"  href="#"><img src="img/Brand icon.png" alt="Analytics" /> Analytics</a>
                <div className="line"></div>
                <p className="inter-custom_info second_p" >Gain valuable insights into your operations. Your brand is more than just a <br /> logo; it's the essence of your business. We create compelling brand identities <br /> that tell your unique story and resonate with your target audience.</p>
                <div className="line"></div>
            </div>
            <div className="img_laptop">
                <img className="laptop" src="img/Dekstop blokify 4 1.png" alt="Laptop" />
            </div>
        </section>
    );
}
