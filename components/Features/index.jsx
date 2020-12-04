const Features = () => {
  const featuresData = [
    {
      icon: "/features/wallet.svg",
      title: "Be involved in your financial decisions",
      text:
        "Automated finance tools are great, except when they aren’t. We provide you with tools that are quick to use, but ultimately you are in control. We help you learn, instead of dictating.",
      reverse: false,
    },
    {
      icon: "/features/personal_finance.svg",
      title: "Everything in one place",
      text:
        "Add all of your accounts and track everything in one place. Get valuable information like net worth from all your accounts together.",
      reverse: true,
    },
    {
      icon: "/features/finance.svg",
      title: "Oh my, the reports",
      text:
        "Intuitive reports give you a quick way to learn about your finances. By default, we include net worth and cash flow reports, but soon you’ll be able to create any report that you like. You’ll even be able to download custom reports from others.",
      reverse: false,
    },
    {
      icon: "/features/online_transactions.svg",
      title: "The fastest way to manage transactions",
      text:
        "Breeze through your transactions and update them easily with a streamlined, minimal interface. Categorizing your transactions correctly is important and we’ve optimized this process. Manage split transactions and transfers all in the same editor.",
      reverse: true,
    },
  ];

  return (
    <div className="app-features" id="features">
      <div className="container">
        {featuresData.map((feature) => {
          return (
            <div key={feature.title} className="app-features__item">
              <div className={`row align-items-center ${feature.reverse ? 'row-reverse': ''}`}>
                  <div className="col-12 col-lg-6 t-center">
                      <img
                        className="app-features__item-img"
                        src={feature.icon}
                        alt={feature.title}
                        />
                  </div>
                  <div className="col-12 col-lg-6">
                      <div className="app-features__item-content">
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                    </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
