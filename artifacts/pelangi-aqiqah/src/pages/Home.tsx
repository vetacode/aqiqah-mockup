import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WHATSAPP_NUMBER = "6285606060505";
const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=Assalamualaikum%20Admin,%20Saya%20dapat%20info%20dari%20Website,%20mau%20tanya%20paket%20promo%20aqiqahnya?`;

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <MenuSection />
        <HowItWorksSection />
        <GallerySection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rainbow Arc */}
        <path d="M20 70C20 53.4315 33.4315 40 50 40C66.5685 40 80 53.4315 80 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M30 70C30 58.9543 38.9543 50 50 50C61.0457 50 70 58.9543 70 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.6"/>
        <path d="M40 70C40 64.4772 44.4772 60 50 60C55.5228 60 60 64.4772 60 70" stroke="currentColor" strokeWidth="6" strokeLinecap="round" opacity="0.3"/>
        {/* Crescent Moon */}
        <path d="M65 30C65 38.2843 58.2843 45 50 45C41.7157 45 35 38.2843 35 30C35 27.6041 35.5615 25.3387 36.5617 23.3323C31.5794 25.7501 28 30.9317 28 37C28 45.2843 34.7157 52 43 52C50.2926 52 56.3662 46.8049 57.7475 39.9572C62.1963 39.0682 65 34.9084 65 30Z" fill="currentColor"/>
        {/* Star */}
        <path d="M55 20L56.5 24H61L57.5 26.5L59 31L55 28L51 31L52.5 26.5L49 24H53.5L55 20Z" fill="currentColor"/>
      </svg>
      <span className="font-serif font-bold text-xl tracking-wide">Pelangi Aqiqah</span>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Layanan", href: "#layanan" },
    { name: "Menu", href: "#menu" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className={`transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
            <Logo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? "text-foreground" : "text-white/90"}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"}`}
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden text-2xl ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 md:hidden flex flex-col gap-4 border-t border-border"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-foreground font-medium hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-primary text-white px-6 py-3 rounded-full font-semibold mt-2"
          >
            Hubungi Kami
          </a>
        </motion.div>
      )}
    </nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1920&q=80" 
          alt="Goat roast feast" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      
      <div className="relative z-20 container mx-auto px-4 text-center text-white mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium tracking-wider uppercase"
        >
          <i className="fa-solid fa-star text-accent"></i>
          Dipercaya oleh ratusan ribu pelanggan
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-xl max-w-5xl mx-auto leading-tight"
        >
          Layanan Aqiqah Terpercaya di Bogor
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 font-light max-w-2xl mx-auto text-white/90 drop-shadow-md"
        >
          Sempurnakan ibadah aqiqah buah hati Anda dengan hidangan istimewa, pelayanan profesional, dan sesuai syariat.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-xl"></i>
              Pesan Sekarang
            </span>
          </a>
          <a 
            href="#layanan"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:-translate-y-1"
          >
            Lihat Paket
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-0.5 h-12 bg-gradient-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}

function WhyChooseUsSection() {
  const features = [
    { icon: "fa-leaf", title: "Animal Welfare", desc: "Pemeliharaan menganut prinsip kesejahteraan hewan." },
    { icon: "fa-file-medical", title: "Health Certificate", desc: "Setiap hewan memiliki Surat Keterangan Kesehatan Hewan." },
    { icon: "fa-scale-balanced", title: "Sesuai Syariat", desc: "Penyajian dengan kaidah Aman, Sehat, Utuh, Halal." },
    { icon: "fa-stethoscope", title: "Hewan Terawat", desc: "Pemeriksaan rutin oleh Dokter Hewan profesional." },
    { icon: "fa-award", title: "Terpercaya", desc: "Dipercaya 10 tahun oleh ratusan ribu pelanggan." },
    { icon: "fa-shield-halal", title: "Bergaransi", desc: "Kami mengganti produk yang tidak sesuai standar." },
    { icon: "fa-gift", title: "Free Gift", desc: "Hadiah spesial sebagai ungkapan terima kasih." },
    { icon: "fa-star", title: "Layanan Prima", desc: "Layanan cepat, tanggap, dan standar terbaik." },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Kenapa Memilih Kami?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Keunggulan Pelangi Aqiqah</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Kami berkomitmen memberikan layanan aqiqah terbaik yang mengutamakan syariat, kualitas, dan kebersihan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i className={`fa-solid ${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const packages = [
    {
      title: "Paket Aqiqah Anak Laki-Laki",
      desc: "2 Ekor Domba/Kambing + Biaya Masak & Pengemasan",
      price: "Mulai dari Rp 2.800.000",
      features: [
        "2 Ekor Kambing/Domba sehat",
        "Sate 400 tusuk & Gulai 100 porsi",
        "Sertifikat Aqiqah",
        "Free Ongkir Jabodetabek",
        "Dokumentasi Pemotongan"
      ],
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
      popular: true
    },
    {
      title: "Paket Aqiqah Anak Perempuan",
      desc: "1 Ekor Domba/Kambing + Biaya Masak & Pengemasan",
      price: "Mulai dari Rp 1.500.000",
      features: [
        "1 Ekor Kambing/Domba sehat",
        "Sate 200 tusuk & Gulai 50 porsi",
        "Sertifikat Aqiqah",
        "Free Ongkir Jabodetabek",
        "Dokumentasi Pemotongan"
      ],
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      popular: false
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Layanan & Paket</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Pilihan Paket Aqiqah</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Berbagai pilihan paket aqiqah lengkap, higienis, dan sesuai syariat untuk putra-putri tercinta.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-card rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 relative flex flex-col ${pkg.popular ? 'border-2 border-primary' : 'border border-card-border'}`}
            >
              {pkg.popular && (
                <div className="absolute top-6 right-6 z-20 bg-accent text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Terpopuler
                </div>
              )}
              <div className="relative h-64 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2 font-serif">{pkg.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{pkg.desc}</p>
                <div className="text-3xl font-bold text-primary mb-8">{pkg.price}</div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-muted-foreground">
                      <i className="fa-solid fa-check-circle text-primary"></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={`w-full text-center py-4 rounded-xl font-bold transition-colors ${pkg.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                  Pesan Paket Ini
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
           <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
              Lihat Menu Catering Lainnya (Prasmanan, Snack & Dessert) <i className="fa-solid fa-arrow-right"></i>
           </a>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const menus = [
    "Domba Guling", "Tongseng", "Domba Asam Pedas", "Krengseng", 
    "Gulai", "Sate Goreng", "Domba Bulgogi", "Domba Asam Manis"
  ];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Menu Spesial</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Menu Pelangi Aqiqah</h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
            <p className="text-muted-foreground text-lg">Diolah oleh koki profesional dengan rempah pilihan, menghasilkan hidangan daging domba yang lezat, empuk, dan tidak prengus.</p>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
            Pesan Menu
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {menus.map((menu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-secondary/20 p-6 rounded-2xl text-center hover:bg-secondary/50 transition-colors border border-border/50"
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-utensils"></i>
              </div>
              <h3 className="font-bold font-serif text-lg text-foreground">{menu}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi & Pemesanan",
      desc: "Hubungi Customer Service kami via WhatsApp untuk konsultasi paket aqiqah yang sesuai dengan kebutuhan."
    },
    {
      num: "02",
      title: "Pemilihan Hewan",
      desc: "Pilih hewan aqiqah sesuai syariat (tersedia foto & video pemotongan jika tidak bisa hadir langsung)."
    },
    {
      num: "03",
      title: "Proses Memasak",
      desc: "Daging diolah oleh koki profesional di dapur higienis menjadi hidangan lezat dan bebas bau prengus."
    },
    {
      num: "04",
      title: "Pengiriman",
      desc: "Pesanan diantar langsung ke rumah Anda atau disalurkan ke panti asuhan sesuai permintaan."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Cara Memesan</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">4 Langkah Mudah Aqiqah</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Proses pemesanan yang praktis, transparan, dan nyaman dari awal hingga pesanan tiba di rumah Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] border-t-2 border-dashed border-primary/20"></div>
              )}
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 bg-card border-4 border-background shadow-xl rounded-full flex items-center justify-center text-3xl font-bold text-primary font-serif mb-6 relative">
                  <div className="absolute inset-0 border border-primary/20 rounded-full scale-110"></div>
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-24 bg-foreground text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/arabesque.png')" }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Momen Penuh Berkah</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Kami bangga menjadi bagian dari momen bahagia keluarga Anda dalam menyambut kehadiran buah hati.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" alt="Happy family" className="w-full h-80 object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity" />
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80" alt="Delicious food" className="w-full h-80 object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity" />
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" alt="Feast" className="w-full h-80 object-cover rounded-2xl opacity-90 hover:opacity-100 transition-opacity md:col-span-2 lg:col-span-1" />
        </div>

        <div className="mt-16 text-center grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 border-y border-white/10 py-12">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4</div>
            <div className="text-white/70 font-medium">Tahun Melayani</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">4,381+</div>
            <div className="text-white/70 font-medium">Konsumen</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">6+</div>
            <div className="text-white/70 font-medium">Kunjungan/Hari</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">43+</div>
            <div className="text-white/70 font-medium">Test Food</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    {
      name: "Aldi Bragi & Ririn Dwi Ariyanti",
      role: "Artis",
      text: "Terima kasih untuk Pelangi Aqiqah proses aqiqah anak kami sudah berjalan dengan baik dan lancar.. makanannya enak banget.",
    },
    {
      name: "Fairuz A. Rafiq & Sonny Septian",
      role: "Artis",
      text: "Pelangi Aqiqah jasanya profesional banget, karena kita engga dibikin capek, kita tinggal duduk beres di rumah, cateringnya juga enak banget.",
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Testimonial</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Apa Kata Mereka?</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="bg-card p-10 rounded-3xl shadow-sm border border-card-border relative"
            >
              <i className="fa-solid fa-quote-left text-6xl text-primary/10 absolute top-8 left-8"></i>
              <div className="relative z-10">
                <div className="flex text-accent mb-6 text-lg">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p className="text-lg md:text-xl italic text-muted-foreground mb-8 leading-relaxed">"{testi.text}"</p>
                <div>
                  <h4 className="font-bold text-foreground font-serif text-xl">{testi.name}</h4>
                  <p className="text-primary font-medium">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="kontak" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-primary text-primary-foreground rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Hubungi Kami</h2>
              <p className="text-primary-foreground/80 text-lg mb-10">Siap melayani kebutuhan aqiqah keluarga Anda. Konsultasikan paket yang sesuai dengan customer service kami.</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-brands fa-whatsapp text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/70">WhatsApp</h4>
                    <p className="text-xl font-bold">0856-0606-0505 (Asiah)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-regular fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/70">Email</h4>
                    <p className="text-lg">pelangiaqiqah@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-regular fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/70">Jam Operasional</h4>
                    <p className="text-lg">Senin - Minggu (08.00 – 17.00)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/70">Alamat</h4>
                    <p className="text-lg leading-relaxed">Komplek Ruko Cimanggu Grande, RT.03/RW.15, Kedung Waringin, Tanah Sereal, Kota Bogor, Jawa Barat 16164</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i> Chat Customer Service
                </a>
              </div>
            </div>
            
            <div className="h-full min-h-[400px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.504958197779!2d106.78775421528657!3d-6.583963595238202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c4fa66f406ab%3A0xc3cf047242c7553f!2sPelangi%20Aqiqah!5e0!3m2!1sen!2sid!4v1645000000000!5m2!1sen!2sid" 
                className="absolute inset-0 w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white/70 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Logo className="text-white mb-6" />
            <p className="mb-6 max-w-md leading-relaxed">
              Jasa Katering Aqiqah dan Event Muslim dengan menu terlengkap yang akan menjadikan moment spesial si kecil menjadi moment yang tak terlupakan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-serif text-xl">Layanan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Paket Aqiqah</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Menu Sharing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Snack & Dessert</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Katering Prasmanan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hampers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-serif text-xl">Informasi</h4>
            <ul className="space-y-3">
              <li><a href="#keunggulan" className="hover:text-primary transition-colors">Keunggulan Kami</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Pilihan Menu</a></li>
              <li><a href="#testimoni" className="hover:text-primary transition-colors">Testimonial</a></li>
              <li><a href="#kontak" className="hover:text-primary transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Pelangi Aqiqah. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Dibuat dengan</span>
            <i className="fa-solid fa-heart text-primary"></i>
            <span>di Bogor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-lg transition-all hover:-translate-y-1 group"
      aria-label="Chat WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
      <span className="absolute right-full mr-4 bg-white text-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Butuh bantuan? Chat kami
      </span>
    </motion.a>
  );
}
