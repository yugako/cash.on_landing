
const Banner = () => {
    return (
        <div className="app-banner">
            <div className="container">
                <div className="app-banner__text">
                    <h1>Track your money, save money.</h1>
                    <p>It's that simple. Welcome to the easiest tool to see how many chicken sandwiches you bought.</p>
                    <div className="app-banner__btns">
                        <a href="https://dev-cash-on.herokuapp.com" className="btn">Get Started</a>
                        <a href="#features" className="btn reverse">Learn more</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;