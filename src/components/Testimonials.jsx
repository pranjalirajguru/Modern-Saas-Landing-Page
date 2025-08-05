const testimonials = [
  {
    name: "Aarav Sharma",
    quote: "This product changed the way our team works. It's fast, reliable, and easy to use.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mira Patel",
    quote: "Clean UI, powerful features — we love how intuitive it is. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dev Mehta",
    quote: "We've tried many tools before, but nothing matches the simplicity of this one.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
        <p className="text-gray-600 text-lg mb-12">Loved by teams, trusted by professionals.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">{t.name}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
