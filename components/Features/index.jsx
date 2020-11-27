const Features = ({features}) => {
    return(
        <div className="app-features" id='features'>
            <div className="container">
                <div className="row">
                    {features.map(feature => {
                        return (
                            <div key={feature.title} className="col-12 col-lg-4 app-features__item">
                                <img className="app-features__item-img" src={feature.image} alt={feature.title}/>
                                <div className="app-features__item-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </div>
                            </div>
                        ); 
                    })}
                </div>
            </div>
        </div>
    );
}

export default Features;