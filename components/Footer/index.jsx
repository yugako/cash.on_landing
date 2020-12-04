import React from 'react';
import CallToAction from '../CallToAction';
import { AppLogo } from '../ui/AppLogo';

export const Footer = () => {
    return (
        <footer className='app-footer'>
            <CallToAction/>

            <div className="app-footer__logo">
                <AppLogo />
            </div>
            <div className="app-footer__copyright">
                <div className="container">
                    <p>Powered by <a href="https://hasiuk.netlify.com">George</a></p>
                </div>
            </div>
        </footer>
    );
}