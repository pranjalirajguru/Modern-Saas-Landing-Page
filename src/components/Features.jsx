const features = [
  {
    title: "AI Automation",
    desc: "Let smart algorithms handle repetitive tasks so you can focus on what matters.",
    icon: "⚙️",
  },
  {
    title: "Real-Time Insights",
    desc: "Get live analytics and make informed decisions on the fly.",
    icon: "📊",
  },
  {
    title: "Seamless Integration",
    desc: "Easily connect with your favorite tools and platforms.",
    icon: "🔌",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg mb-12">Our SaaS tools are crafted for performance, simplicity, and scalability.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
