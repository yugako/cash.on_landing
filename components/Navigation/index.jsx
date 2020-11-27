const Navigation = () => {
    return (
        <header className='app-nav__wrapper'>
            <div className="container">
                <div className="app-nav">
                     <div className="app-nav__logo">
                        <img src="/app_logo.svg" alt="Cash.On"/>
                        <span>Cash.<strong>On</strong></span>
                    </div>
                    <nav className='app-nav__menu'>
                        <a href="#">About</a>
                        <a href="#features">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contacts</a>
                    </nav>
                    <div className="app-nav__cta">
                        <a href='https://dev-cash-on.herokuapp.com' className="app-nav__cta-btn btn">Try it for free</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navigation;