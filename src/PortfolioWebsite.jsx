import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function PortfolioWebsite() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const services = [
    {
      title: 'UI/UX Design',
      description:
        'Modern and user-friendly interface designs for websites and mobile applications.',
    },
    {
      title: 'Web Development',
      description:
        'Responsive and fast websites built using modern technologies and frameworks.',
    },
    {
      title: 'Brand Identity',
      description:
        'Creative branding solutions including logos, typography, and color systems.',
    },
  ];

  const portfolio = [
    {
      title: 'Creative Dashboard',
      category: 'Web Design',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile App',
      image:
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website',
      category: 'Frontend Development',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-violet-600">
            University of La Salette
          </h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide">
            <a href="#about" className="hover:text-violet-600 transition">About</a>
            <a href="#services" className="hover:text-violet-600 transition">Services</a>
            <a href="#portfolio" className="hover:text-violet-600 transition">Portfolio</a>
            <a href="#contact" className="hover:text-violet-600 transition">Contact</a>
          </nav>

          <button
            className="md:hidden text-violet-600"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-5 shadow-lg">
            <nav className="flex flex-col gap-5 text-sm font-semibold uppercase tracking-wide">
              <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
              <a href="#services" onClick={() => setMobileMenu(false)}>Services</a>
              <a href="#portfolio" onClick={() => setMobileMenu(false)}>Portfolio</a>
              <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6 py-16 md:py-28">
          <div>
            <p className="text-violet-600 font-semibold uppercase tracking-widest mb-4">
              Hello, I’m
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              King Parungao
            </h2>

            <p className="text-gray-500 text-lg mb-8 max-w-lg">
              A Freelance UI Designer & Web Developer creating modern digital experiences for startups and businesses.
            </p>

            <button className="bg-violet-600 hover:bg-violet-700 transition text-white px-8 py-4 rounded-full shadow-xl font-semibold">
              View My Work
            </button>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 md:w-96 md:h-96 border-[14px] border-violet-600 rounded-2xl"></div>

            <img
              src="https://i.imgur.com/542JFBU.png"
              alt="Profile"
              className="relative z-10 w-64 sm:w-72 md:w-[420px] rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Passionate about crafting beautiful and functional user experiences with clean design and efficient code.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-5">
                Hi There! I’m King Parungao
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                I specialize in frontend development, UI/UX design, and digital branding. I help businesses transform ideas into engaging online experiences.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Birthday:</span> December 12, 1999
                </div>
                <div>
                  <span className="font-semibold">Email:</span> parungaokingedward12@gmail.com
                </div>
                <div>
                  <span className="font-semibold">Phone:</span> 09758955045
                </div>
                <div>
                  <span className="font-semibold">Location:</span> Altavista Subdivision, Patul, Santiago City
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {[
                ['HTML', '80%'],
                ['CSS', '70%'],
                ['JavaScript', '85%'],
                ['React', '90%'],
              ].map(([skill, value]) => (
                <div key={skill}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill}</span>
                    <span className="text-gray-500">{value}</span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-violet-600 rounded-full"
                      style={{ width: value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Providing creative digital solutions tailored to your brand and business goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition">
                <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  ✦
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-7">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A collection of selected projects showcasing design and development expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolio.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-6">
                  <p className="text-violet-600 text-sm font-semibold uppercase mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Have a project in mind? Let’s work together.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-600">Email: parungaokingedward12@gmail.com</p>
              <p className="text-gray-600">Phone: 09758955045</p>
              <p className="text-gray-600">Location: Santiago City</p>
            </div>

            <form className="space-y-5">
              <input className="w-full border p-4 rounded-2xl" placeholder="Your Name" />
              <input className="w-full border p-4 rounded-2xl" placeholder="Your Email" />
              <textarea className="w-full border p-4 rounded-2xl" rows="5" placeholder="Your Message"></textarea>

              <button className="bg-violet-600 text-white w-full py-4 rounded-2xl font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-600 text-white text-center py-8">
        <p>© 2026 King Parungao Portfolio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}