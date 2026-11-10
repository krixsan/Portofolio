import { useState, useEffect } from "react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";
import { Sun, Moon, Menu, X, Globe, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Navbar({ lang, setLang, darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const sectionIds = [
      "beranda",
      "tentang",
      "vibe-coding",
      "sertifikasi",
      "aktivitas",
      "simulator",
      "kalkulator",
      "dokumentasi",
      "guestbook",
      "kontak"
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      let current = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            current = id;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection("beranda");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newVal = !darkMode;
    setDarkMode(newVal);
    if (newVal) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { href: "#beranda", label: t.navHome },
    { href: "#tentang", label: t.navAbout },
    { href: "#vibe-coding", label: lang === "id" ? "Proyek & CV" : "Projects & CV" },
    { href: "#sertifikasi", label: (t as any).navCertificates },
    { href: "#aktivitas", label: t.navActivities },
    { href: "#simulator", label: t.navSimulator.replace(/\*/g, "") },
    { href: "#kalkulator", label: t.navCalculator },
    { href: "#dokumentasi", label: t.navGallery },
    { href: "#guestbook", label: t.navGuestbook },
  ];

  return (
    <header
      id="site-nav"
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-line py-3.5"
          : "bg-paper/70 backdrop-blur-sm py-5"
      }`}
    >
      {/* Subtle Top Scroll Progress */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] bg-ink transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
        {/* Onlines-style Bold Lowercase Wordmark */}
        <a
          href="#beranda"
          className="flex items-center gap-2.5 text-xl md:text-2xl font-extrabold tracking-[-0.05em] text-ink hover:opacity-75 transition-opacity shrink-0"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-ink text-paper font-mono text-[10px] font-bold">
            •_
          </span>
          <span>mankkrisna</span>
        </a>

        {/* Minimal Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 bg-paper-soft/80 border border-line rounded-full px-2 py-1 text-[12px] font-medium text-ink-soft">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-ink text-paper font-semibold shadow-xs"
                    : "hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls + Solid Pill CTA ("Hablemos" / "Hubungi Saya") */}
        <div className="flex items-center gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line text-ink-soft hover:border-ink hover:text-ink transition-all font-mono text-[11px] font-semibold bg-paper cursor-pointer"
            title={lang === "id" ? "Switch to English" : "Ubah ke Bahasa Indonesia"}
          >
            <Globe size={12} />
            <span>{lang === "id" ? "EN" : "ID"}</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-line text-ink hover:border-ink transition-all duration-300 bg-paper cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Solid Pill CTA Button (Onlines "Hablemos" style) */}
          <a
            href="#kontak"
            className="hidden sm:inline-flex items-center gap-1.5 bg-ink text-paper text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-85 transition-all shadow-xs"
          >
            <span>{lang === "id" ? "Mari Diskusi" : "Let's Talk"}</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded-full border border-line text-ink bg-paper cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-line bg-paper/95 backdrop-blur-xl animate-fade-in absolute top-full inset-x-0 shadow-xl">
          <nav className="flex flex-col px-6 py-5 gap-2 text-sm font-semibold text-ink-soft">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-xl transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "bg-ink text-paper font-bold"
                    : "text-ink hover:bg-paper-soft"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-3 px-4 rounded-full bg-ink text-paper text-center font-bold flex items-center justify-center gap-1.5"
            >
              <span>{lang === "id" ? "Mari Diskusi" : "Let's Talk"}</span>
              <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
