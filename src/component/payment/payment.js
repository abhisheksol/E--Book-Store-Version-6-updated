import React from 'react';
import Footer from '../footer';

function Payment() {
    return (
        <div style={{ textAlign: 'center', padding: '0px' }}>
            <h1 style={{ marginBottom: '20px',color:'red' }}>Payment Page is Not Yet developed</h1>
            <p style={{ color: 'yellow', fontSize: '18px', marginBottom: '30px' }}>Sorry, this page is not yet developed. It will be implemented in the future.</p>

            {/* Your payment form can go here */}

            {/* Embed the Lottie animation */}
            <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <dotlottie-player
                    src="https://lottie.host/03929e02-bfd3-42ee-ac00-63612d55e785/r7CpvMiSvn.json"

                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                    style={{ width: '300px', height: '300px' }}
                ></dotlottie-player>
            </div>
            <Footer/>
        </div>
    );
}

export default Payment;
