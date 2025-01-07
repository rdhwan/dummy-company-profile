import PricingCard from "@/components/pricing-card";

const PricingPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: [
        "Real-time price updates",
        "Basic portfolio tracking",
        "Daily market summaries",
        "Access to community forums",
      ],
    },
    {
      name: "Pro",
      price: "$29.99",
      features: [
        "All Basic features",
        "Advanced analytics tools",
        "Personalized alerts",
        "API access",
        "24/7 customer support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Pro features",
        "Custom integrations",
        "Dedicated account manager",
        "On-demand reporting",
        "Advanced security features",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center intersect:motion-preset-slide-down-sm">
          Pricing Plans
        </h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto intersect:motion-preset-slide-down-sm motion-delay-100">
          Choose the plan that best fits your needs and start your journey into
          the world of cryptocurrency with CryptoScope.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
