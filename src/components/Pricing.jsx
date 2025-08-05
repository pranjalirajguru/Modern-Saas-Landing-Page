const plans = [
  {
    title: "Basic",
    price: "$9/mo",
    features: ["1 User", "Email Support", "Analytics Dashboard"],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$29/mo",
    features: ["5 Users", "Priority Support", "Advanced Analytics"],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited Users", "Dedicated Manager", "Custom Integrations"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
        <p className="text-gray-600 text-lg mb-12">Choose the plan that fits your team size and goals.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-lg transition ${
                plan.highlight ? "bg-indigo-600 text-white scale-105" : "bg-gray-50"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className={plan.highlight ? "" : "text-gray-700"}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-medium ${
                  plan.highlight
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.highlight ? "Get Pro" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
