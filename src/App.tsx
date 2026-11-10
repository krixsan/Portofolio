import { useState, useEffect } from "react";
import { Language } from "./types";
import { TRANSLATIONS, WORK_HISTORY, CERTIFICATES, RELEVANT_COURSEWORK } from "./data";
import Navbar from "./components/Navbar";
import DockingSimulator from "./components/DockingSimulator";
import LabCalculator from "./components/LabCalculator";
import ResearchGallery from "./components/ResearchGallery";
import Guestbook from "./components/Guestbook";
import ContactForm from "./components/ContactForm";
import AiAssistant from "./components/AiAssistant";
import ExtraCurricular from "./components/ExtraCurricular";
import CertificatesSection from "./components/CertificatesSection";
import VibeCodingSection from "./components/VibeCodingSection";
import {
  CollaboratorCursor,
  CanvasCommentBubble,
  FloatingSquircleBadge,
  FigmaSelectionTitle,
  GridLitSquares,
  MiniWireframeCard
} from "./components/CanvasDecorations";
import {
  BookOpen,
  GraduationCap,
  Cpu,
  Beaker,
  ArrowRight,
  Download,
  FileCheck,
  ShieldCheck,
  FlaskConical,
  Microscope,
  Terminal,
  Atom
} from "lucide-react";
import { motion } from "motion/react";
import { formatText } from "./utils/textFormatter";

export default function App() {
  const [lang, setLang] = useState<Language>("id");
  const [darkMode, setDarkMode] = useState(false);
  const [heroLabMode, setHeroLabMode] = useState(true);
  const t = TRANSLATIONS[lang];

  // Default to crisp white canvas like Onlines on Minimal Gallery
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  const toggleThemeFromHero = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    setHeroLabMode(!heroLabMode);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="bg-paper text-ink font-sans antialiased overflow-x-hidden min-h-screen transition-colors duration-500">
      {/* 1. MINIMALIST ONLINES-STYLE HEADER */}
      <Navbar
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        {/* 2. ONLINES / MINIMAL GALLERY INTERACTIVE CANVAS HERO */}
        <section
          id="beranda"
          className="relative min-h-[92vh] pt-28 pb-20 md:pt-32 md:pb-28 flex items-center justify-center overflow-hidden onlines-grid border-b border-line scroll-mt-20"
        >
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 relative min-h-[640px] md:min-h-[700px] flex flex-col items-center justify-center">
            
            {/* TOP SWITCH PILL ("Modo IA" / "Modo In Silico & QC" from Onlines Hero) */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-20 mb-8 md:mb-10 flex flex-col items-center"
            >
              <button
                type="button"
                onClick={toggleThemeFromHero}
                className="onlines-floating-card px-4 py-2 rounded-full flex items-center gap-3 cursor-pointer hover:scale-[1.02] transition-transform"
                title={lang === "id" ? "Klik untuk beralih mode tampilan" : "Click to toggle canvas theme"}
              >
                <span className="text-xs font-semibold text-ink tracking-tight">
                  {lang === "id" ? "Mode In Silico & QC" : "In Silico & QC Mode"}
                </span>
                <span
                  className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 flex items-center ${
                    heroLabMode ? "bg-[#007AFF] justify-end" : "bg-ink/20 justify-start"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white shadow-xs block" />
                </span>
              </button>

              {/* Green Collaborator Pill right under the toggle */}
              <CollaboratorCursor
                label={lang === "id" ? "S.Si. Kimia UNUD • Cum Laude" : "B.Sc. Chemistry • Cum Laude"}
                color="#00C471"
                className="mt-1.5 -ml-28"
                delay={0.2}
              />
            </motion.div>

            {/* FLOATING WORKSPACE ARTIFACTS AROUND CANVAS (Desktop / Tablet) */}
            
            {/* Top-Left Tilted Wireframe Window (Chromatogram & 3ERT Receptor) */}
            <motion.div
              initial={{ opacity: 0, x: -25, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -5.5 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block absolute top-6 left-2 xl:left-6 w-60 onlines-floating-card rounded-xl p-3 z-10 pointer-events-none"
            >
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-line">
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="ml-auto font-mono text-[8px] text-ink-soft">HPLC_3ERT.chrom</span>
              </div>
              <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-4 space-y-1.5">
                  <div className="w-9 h-9 rounded-full bg-ink/8 mx-auto flex items-center justify-center text-ink/60">
                    <FlaskConical size={16} />
                  </div>
                  <div className="h-1.5 rounded bg-ink/10 w-full" />
                  <div className="h-1.5 rounded bg-ink/10 w-3/4" />
                </div>
                <div className="col-span-8 grid grid-cols-2 gap-1.5">
                  <div className="h-12 rounded-md bg-ink/6 p-1.5 flex flex-col justify-between">
                    <span className="font-mono text-[7px] text-ink-soft">HPLC UV-Vis</span>
                    <span className="font-mono text-[9px] font-bold text-ink">99.8% RSD</span>
                  </div>
                  <div className="h-12 rounded-md bg-ink/6 p-1.5 flex flex-col justify-between">
                    <span className="font-mono text-[7px] text-ink-soft">PDB Target</span>
                    <span className="font-mono text-[9px] font-bold text-ink">3ERT (ER-α)</span>
                  </div>
                  <div className="col-span-2 h-9 rounded-md bg-ink/6 px-2 flex items-center justify-between">
                    <span className="font-mono text-[8px] text-ink-soft">AAS Pb/Hg/Cd</span>
                    <span className="font-mono text-[8px] font-bold text-[#00C471]">PASSED</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Squircle Tool Icons (like VSCode / Figma / Notion / WP in Onlines) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25 }}
              className="hidden md:flex absolute top-8 left-[27%] w-12 h-12 rounded-2xl onlines-floating-card items-center justify-center text-[#007AFF] font-mono text-[10px] font-extrabold z-10"
              title="AutoDock Vina & PyMOL"
            >
              <Cpu size={20} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 }}
              className="hidden md:flex absolute top-8 right-[27%] w-12 h-12 rounded-2xl onlines-floating-card items-center justify-center text-[#FF5722] font-mono text-[10px] font-extrabold z-10"
              title="HPLC & AAS Analytical Lab"
            >
              <Microscope size={20} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:flex absolute top-[42%] left-[18%] w-11 h-11 rounded-2xl onlines-floating-card items-center justify-center font-mono text-[10px] font-black text-ink z-10"
            >
              QC
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
              className="hidden lg:flex absolute bottom-20 left-[17%] w-11 h-11 rounded-2xl onlines-floating-card items-center justify-center font-mono text-[10px] font-black text-ink z-10"
            >
              ISO
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex absolute bottom-6 left-[48%] w-11 h-11 rounded-2xl onlines-floating-card items-center justify-center text-ink z-10"
              title="7 Verified Certifications"
            >
              <ShieldCheck size={19} />
            </motion.div>

            {/* Top-Right Framed Certificate Preview Card (like the framed photo in Onlines) */}
            <motion.a
              href="#sertifikasi"
              initial={{ opacity: 0, x: 25, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 3.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block absolute top-4 right-2 xl:right-4 w-68 p-2 rounded-2xl border border-line bg-paper shadow-lg hover:scale-[1.03] transition-transform z-10 cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden border border-line aspect-[1.414/1] bg-white relative">
                <img
                  src="/certificates/previews/bpom-internship.png"
                  alt="Sertifikat Magang BPOM"
                  className="w-full h-full object-contain"
                />
                <span className="absolute bottom-2 right-2 bg-ink text-paper font-mono text-[8px] font-bold uppercase px-2 py-0.5 rounded-full">
                  7 Sertifikat Resmi →
                </span>
              </div>
            </motion.a>

            {/* Top-Right Onlines Comment Bubble #1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="hidden md:flex absolute top-[24%] right-[8%] xl:right-[14%] onlines-floating-card rounded-2xl px-4 py-3 items-start gap-3 max-w-[270px] z-20"
            >
              <div className="w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                •_
              </div>
              <div className="text-left">
                <p className="text-[11px] text-ink leading-none">
                  <strong className="font-bold">Mank Krisna</strong>{" "}
                  <span className="text-ink-soft font-normal">
                    {lang === "id" ? "baru saja" : "just now"}
                  </span>
                </p>
                <p className="text-xs text-ink font-medium mt-1 leading-snug">
                  {lang === "id"
                    ? "Siap riset In Silico & analisis QC/QA laboratorium."
                    : "Ready for In Silico research & QC/QA lab analysis."}
                </p>
              </div>
            </motion.div>

            {/* CENTER MONUMENTAL SELECTION BOX ("mank krisna." like "internet." in Onlines) */}
            <div className="relative z-10 my-2 md:my-6 px-5 sm:px-10 md:px-14 py-6 sm:py-8 md:py-10 figma-selection-box max-w-full">
              {/* 6 Figma Resize Handles */}
              <span className="figma-handle figma-handle--tl" />
              <span className="figma-handle figma-handle--tc" />
              <span className="figma-handle figma-handle--tr" />
              <span className="figma-handle figma-handle--bl" />
              <span className="figma-handle figma-handle--bc" />
              <span className="figma-handle figma-handle--br" />

              {/* Collaborator Cursors Anchored Around the Selection Box */}
              <CollaboratorCursor
                label="QC / QA Analyst"
                color="#7C3AED"
                className="hidden sm:flex absolute -left-24 top-4"
                delay={0.25}
              />
              <CollaboratorCursor
                label="In Silico Chemist"
                color="#00B8D9"
                className="absolute left-6 sm:left-16 top-2 sm:top-5"
                delay={0.4}
              />
              <CollaboratorCursor
                label={lang === "id" ? "Finalis ONMIPA Nasional" : "ONMIPA National Finalist"}
                color="#EC4899"
                className="absolute -left-2 sm:left-4 -bottom-7"
                delay={0.55}
              />
              <CollaboratorCursor
                label="BPOM Lab Intern"
                color="#FF5722"
                className="absolute right-4 sm:right-10 top-1 sm:top-3"
                delay={0.35}
              />
              <CollaboratorCursor
                label="ISO 22000 & FSSC 22000"
                color="#007AFF"
                className="hidden sm:flex absolute -right-28 bottom-3"
                delay={0.5}
              />

              {/* Giant Tight-Kerned Display Wordmark */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="font-sans font-extrabold text-[54px] sm:text-[88px] md:text-[120px] lg:text-[148px] leading-[0.92] tracking-[-0.055em] text-ink text-center select-none"
              >
                mank krisna.
              </motion.h1>
            </div>

            {/* SUBTITLE, CREDENTIAL PILLS & PRIMARY CTAs BELOW SELECTION BOX */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative z-20 max-w-2xl mx-auto text-center space-y-5 mt-4 px-2"
            >
              <div className="inline-flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono font-semibold text-ink-soft bg-paper-soft border border-line px-3.5 py-1.5 rounded-full">
                <span className="text-ink font-bold">{t.heroTitle}</span>
                <span>•</span>
                <span>S1 Kimia UNUD (IPK 3.77 Cum Laude)</span>
                <span>•</span>
                <span className="text-[#007AFF] font-bold">
                  {CERTIFICATES.length} {lang === "id" ? "Sertifikat Terverifikasi" : "Verified Certificates"}
                </span>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-ink-soft leading-relaxed max-w-xl mx-auto">
                {formatText(t.heroBio)}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                <a
                  href="#simulator"
                  className="btn-primary text-xs font-semibold px-6 py-3 rounded-full shadow-xs cursor-pointer flex items-center gap-2"
                >
                  <span>{t.heroBtnSim}</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  href="#sertifikasi"
                  className="bg-paper hover:bg-paper-soft text-ink border border-line hover:border-ink text-xs font-semibold px-5 py-3 rounded-full transition-all flex items-center gap-2"
                >
                  <ShieldCheck size={14} className="text-[#00C471]" />
                  <span>
                    {lang === "id" ? "Lihat 7 Sertifikat" : "View 7 Certificates"}
                  </span>
                </a>
                <a
                  href="#cv-resmi"
                  className="bg-paper hover:bg-paper-soft text-ink border border-line hover:border-[#007AFF] text-xs font-mono font-semibold px-4 py-3 rounded-full transition-all flex items-center gap-1.5"
                >
                  <Download size={13} className="text-[#007AFF]" />
                  <span>{(t as any).heroBtnCv} (ID / EN)</span>
                </a>
              </div>
            </motion.div>

            {/* Bottom-Left Tilted Analytical Card (Lead Compounds Window) */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 3.5 }}
              animate={{ opacity: 1, y: 0, rotate: 3.5 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block absolute bottom-4 left-6 xl:left-24 w-60 onlines-floating-card rounded-xl p-3.5 z-10 pointer-events-none"
            >
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-line">
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="ml-auto font-mono text-[8px] text-ink-soft">leads_LC_HRMS.csv</span>
              </div>
              <div className="space-y-2 text-[10px] font-mono">
                <div className="flex items-center justify-between bg-paper-soft px-2 py-1 rounded">
                  <span className="text-ink font-semibold">Naringenin</span>
                  <span className="text-[#00C471] font-bold">-8.4 kcal/mol</span>
                </div>
                <div className="flex items-center justify-between bg-paper-soft px-2 py-1 rounded">
                  <span className="text-ink font-semibold">Caryophyllene ox.</span>
                  <span className="text-[#007AFF] font-bold">-8.2 kcal/mol</span>
                </div>
                <div className="flex items-center justify-between bg-paper-soft px-2 py-1 rounded">
                  <span className="text-ink font-semibold">Ellagic acid</span>
                  <span className="text-[#7C3AED] font-bold">-8.1 kcal/mol</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom-Center Onlines Comment Bubble #2 */}
            <motion.a
              href="#sertifikasi"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="hidden xl:flex absolute bottom-6 right-[28%] onlines-floating-card rounded-2xl px-4 py-3 items-start gap-3 max-w-[290px] z-20 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center font-mono text-[10px] font-bold shrink-0 mt-0.5">
                •_
              </div>
              <div className="text-left">
                <p className="text-[11px] text-ink leading-none">
                  <strong className="font-bold">Lisensi Mutu</strong>{" "}
                  <span className="text-ink-soft font-normal">
                    {lang === "id" ? "terverifikasi" : "verified"}
                  </span>
                </p>
                <p className="text-xs text-ink font-medium mt-1 leading-snug">
                  BPOM • QC/QA • ISO 22000 • FSSC 22000 • HACCP • GMP
                </p>
              </div>
            </motion.a>

            {/* Bottom-Right Tilted Code / Docking Terminal Window (like HTML code card in Onlines) */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -4.5 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="hidden lg:block absolute bottom-4 right-4 xl:right-12 w-64 onlines-floating-card rounded-xl p-3.5 z-10 pointer-events-none"
            >
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-line">
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="w-2 h-2 rounded-full bg-line-hover" />
                <span className="ml-auto font-mono text-[8px] text-ink-soft flex items-center gap-1">
                  <Terminal size={9} /> vina_config.conf
                </span>
              </div>
              <pre className="font-mono text-[9px] leading-relaxed text-ink-soft overflow-hidden">
                <code>
                  {`receptor = 3ERT_ER_alpha.pdbqt\nligand   = naringenin.pdbqt\nexhaustiveness = 32\n# ΔG = -8.415 kcal/mol (Glu353)`}
                  <span className="inline-block w-1.5 h-3 bg-ink ml-1 align-middle animate-blink" />
                </code>
              </pre>
            </motion.div>

          </div>
        </section>

        {/* 3. DETAILED ABOUT & PROFESSIONAL BACKGROUND */}
        <section id="tentang" className="relative py-24 md:py-32 border-b border-line onlines-grid scroll-mt-20 overflow-hidden">
          {/* Decorative Lit Grid Squares in Background */}
          <GridLitSquares
            cells={[
              { top: "60px", left: "120px", count: "l-shape" },
              { top: "240px", right: "180px", count: "pair" },
              { bottom: "120px", left: "60px", count: "single" },
              { bottom: "180px", right: "60px", count: "l-shape" }
            ]}
          />

          {/* Floating Pernak-Pernik on About Section Margins */}
          <FloatingSquircleBadge className="hidden xl:flex absolute top-14 right-12 text-[#007AFF]" rotate={6} delay={0.2}>
            <Atom size={20} />
          </FloatingSquircleBadge>
          <FloatingSquircleBadge className="hidden xl:flex absolute bottom-20 left-10 text-[#00C471]" rotate={-8} delay={0.5}>
            3.77
          </FloatingSquircleBadge>
          <MiniWireframeCard
            title="academics_unud.json"
            rotate={4}
            className="hidden 2xl:block absolute top-44 right-8"
            lines={[
              { label: "GPA / IPK", value: "3.77 / 4.00", accent: "#00C471" },
              { label: "Total SKS", value: "146 SKS (8 Smt)" },
              { label: "ONMIPA-PT", value: "Finalis Nasional", accent: "#007AFF" }
            ]}
          />

          <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              
              {/* Heading Side Left */}
              <div className="lg:col-span-4 space-y-5 relative">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink-soft">
                  {formatText(t.aboutSubtitle)}
                </p>
                <FigmaSelectionTitle badge="SECTION 01 • PROFILE">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight gradient-text">
                    {t.aboutTitle}
                  </h2>
                </FigmaSelectionTitle>

                <div className="pt-2 flex items-center justify-between">
                  <CollaboratorCursor
                    label={lang === "id" ? "Analis Lab & Komputasi" : "Lab & In Silico Analyst"}
                    color="#007AFF"
                    delay={0.2}
                  />
                </div>
                
                {/* Education sub-card */}
                <div className="glass-card p-5 rounded-2xl space-y-4 mt-4 card-hover relative">
                  <span className="font-mono text-[10px] uppercase text-ink tracking-widest font-bold flex items-center gap-1.5 border-b border-line pb-1.5">
                    <GraduationCap size={13} />
                    <span>Education Timeline</span>
                  </span>
                  
                  <div className="space-y-4">
                    {/* Universitas Udayana */}
                    <div className="relative pl-4 border-l-2 border-ink space-y-1">
                      <div className="absolute w-2.5 h-2.5 bg-ink rounded-full -left-[6px] top-1.5 shadow-sm" />
                      <span className="text-[9px] font-mono text-ink bg-paper-soft px-1.5 py-0.5 rounded border border-line font-bold">
                        Agu 2022 – Jun 2026 (IPK 3.77 / 4.00 Cum Laude)
                      </span>
                      <h4 className="font-serif text-sm font-bold text-ink pt-1">
                        Universitas Udayana (UNUD), Bali
                      </h4>
                      <p className="text-[10px] font-mono text-ink-soft">
                        {lang === "id"
                          ? "Sarjana Kimia (S.Si.) • 146 SKS (8 Semester) • Lulus 30 Juni 2026"
                          : "B.Sc. in Chemistry (S.Si.) • 146 Credits (8 Semesters) • Graduated June 30, 2026"}
                      </p>
                      <div className="pt-2 mt-1.5 border-t border-line/40 space-y-1.5">
                        <span className="block font-mono text-[8px] uppercase tracking-wider text-[#00C471] font-bold">
                          {lang === "id"
                            ? "✓ Mata Kuliah Relevan (Seluruhnya Nilai A / 4.00):"
                            : "✓ Relevant Coursework (All Grade A / 4.00):"}
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {RELEVANT_COURSEWORK[lang].map((course) => (
                            <span
                              key={course}
                              className="bg-paper text-ink font-mono text-[8px] px-1.5 py-0.5 rounded border border-line"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-line/40">
                        <div className="flex items-center gap-2 glass-card p-2 rounded-lg transition-all">
                          <span className="text-sm bg-paper p-1 rounded shadow-xs border border-line">🏆</span>
                          <span className="font-semibold text-[9px] font-mono text-ink">
                            {lang === "id" 
                              ? "Finalis Tingkat Nasional ONMIPA-PT 2025 (Bidang Kimia)" 
                              : "National ONMIPA-PT Finalist 2025 (Chemistry)"}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 glass-card p-2 rounded-lg transition-all">
                          <span className="text-sm bg-paper p-1 rounded shadow-xs border border-line">🔬</span>
                          <span className="font-semibold text-[9px] font-mono text-ink">
                            {lang === "id" 
                              ? "Asisten Dosen Lab Kimia Organik I & II (100+ Mahasiswa)" 
                              : "Organic Chemistry I & II TA (100+ Undergrads)"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* SMA Negeri 1 Sukawati */}
                    <div className="relative pl-4 border-l-2 border-line space-y-1">
                      <div className="absolute w-2.5 h-2.5 bg-ink-soft/40 rounded-full -left-[6px] top-1.5" />
                      <span className="text-[9px] font-mono text-ink-soft bg-paper px-1.5 py-0.5 rounded border border-line">2019 - 2022</span>
                      <h4 className="font-serif text-sm font-bold text-ink pt-1">
                        SMA Negeri 1 Sukawati
                      </h4>
                      <p className="text-[10px] font-mono text-ink-soft">
                        {lang === "id" ? "Peminatan MIPA (Matematika & IPA)" : "Mathematics & Natural Sciences Major"}
                      </p>
                    </div>

                    {/* SMP Negeri 1 Ubud */}
                    <div className="relative pl-4 border-l-2 border-line space-y-1">
                      <div className="absolute w-2.5 h-2.5 bg-ink-soft/40 rounded-full -left-[6px] top-1.5" />
                      <span className="text-[9px] font-mono text-ink-soft bg-paper px-1.5 py-0.5 rounded border border-line">2016 - 2019</span>
                      <h4 className="font-serif text-sm font-bold text-ink pt-1">
                        SMP Negeri 1 Ubud
                      </h4>
                      <p className="text-[10px] font-mono text-ink-soft">
                        {lang === "id" ? "Sekolah Menengah Pertama" : "Junior High School"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Professional Experience Bento Cards Right */}
              <div className="lg:col-span-8 space-y-10">
                <div className="space-y-6 text-sm md:text-base leading-relaxed text-ink-soft">
                  <p className="text-justify">{formatText(t.aboutBio1)}</p>
                  <p className="text-justify">{formatText(t.aboutBio2)}</p>
                </div>

                {/* Stints Timeline */}
                <div className="space-y-4 relative">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-ink-soft">
                      💼 Career & Research Milestones
                    </span>
                    <CanvasCommentBubble
                      author="UNUD • Cum Laude"
                      time="2026"
                      text={
                        lang === "id"
                          ? "Kombinasi riset basah (HPLC/AAS) & komputasi molekuler."
                          : "Dual track in wet-lab (HPLC/AAS) & molecular computation."
                      }
                      className="hidden sm:flex"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {WORK_HISTORY.map((work) => (
                      <div
                        key={work.id}
                        className="glass-card p-6 rounded-2xl transition-all card-hover flex flex-col sm:flex-row justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="bg-ink text-paper font-mono text-[9px] font-bold uppercase px-2.5 py-1 rounded">
                              {work.period}
                            </span>
                            <span className="text-ink-soft font-mono text-[10px]">
                              {work.institution[lang]}
                            </span>
                          </div>
                          <h4 className="font-serif text-lg font-bold text-ink">
                            {work.role[lang]}
                          </h4>
                          <p className="text-xs text-ink-soft leading-relaxed max-w-xl text-justify">
                            {formatText(work.description[lang])}
                          </p>
                          {(work as any).certificateUrl && (
                            <div className="pt-1">
                              <a
                                href="#sertifikasi"
                                className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#007AFF] hover:underline"
                              >
                                <FileCheck size={12} />
                                <span>
                                  {lang === "id"
                                    ? "Lihat Sertifikat Magang BPOM →"
                                    : "View Official BPOM Certificate →"}
                                </span>
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Skills badges */}
                        <div className="flex flex-wrap gap-1.5 max-w-[180px] self-start sm:self-center">
                          {work.skills.map((skill) => (
                            <span
                              key={skill}
                              className="bg-paper text-ink-soft font-mono text-[9px] px-2 py-0.5 rounded border border-line"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Matrix (All 6 CV Categories) */}
                <div className="space-y-4 pt-4 border-t border-line/40">
                  <span className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-ink-soft">
                    <Cpu size={12} /> {t.aboutSkillsTitle}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="glass-card p-4 rounded-xl space-y-3 card-hover">
                      <h5 className="font-mono text-[9px] uppercase text-ink font-bold">
                        {lang === "id" ? "Instrumen & Analisis Lab" : "Lab Instruments & Analytics"}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "HPLC",
                          "AAS (Flame/Furnace)",
                          "Spektrofotometri UV-Vis",
                          "Titrimetri & Gravimetri",
                          "Destruksi Asam",
                          "Ekstraksi Pelarut",
                          "Kurva Kalibrasi"
                        ].map((s) => (
                          <span key={s} className="bg-paper text-ink font-mono text-[9px] px-2 py-0.5 rounded border border-line">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-4 rounded-xl space-y-3 card-hover">
                      <h5 className="font-mono text-[9px] uppercase text-ink font-bold">
                        {lang === "id" ? "Sistem Mutu & Keamanan Pangan" : "QMS & Food Safety"}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "ISO/IEC 17025",
                          "ISO 22000:2018",
                          "FSSC 22000 v7.0",
                          "GMP / CPPOB",
                          "HACCP",
                          "SSOP",
                          "Manajemen K3 Lab"
                        ].map((s) => (
                          <span key={s} className="bg-paper text-ink font-mono text-[9px] px-2 py-0.5 rounded border border-line">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-4 rounded-xl space-y-3 card-hover">
                      <h5 className="font-mono text-[9px] uppercase text-ink font-bold">
                        {lang === "id" ? "Kimia Komputasi (In Silico)" : "Computational Chemistry"}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "AutoDock Vina",
                          "PyMOL",
                          "BIOVIA Discovery Studio",
                          "PyRx",
                          "OpenBabel",
                          "GROMACS",
                          "ProTox 3.0",
                          "SwissADME"
                        ].map((s) => (
                          <span key={s} className="bg-paper text-ink font-mono text-[9px] px-2 py-0.5 rounded border border-line">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-4 rounded-xl space-y-3 card-hover">
                      <h5 className="font-mono text-[9px] uppercase text-ink font-bold">
                        {lang === "id" ? "Pengolahan Data & Dokumen QC" : "QC Data & Documentation"}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Excel Statistik Analitis",
                          "Regresi Kurva Kalibrasi",
                          "Automasi Laporan QC",
                          "Penyusunan SOP & CoA",
                          "Laporan NCR / CAPA"
                        ].map((s) => (
                          <span key={s} className="bg-paper text-ink font-mono text-[9px] px-2 py-0.5 rounded border border-line">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-4 rounded-xl space-y-3 card-hover">
                      <h5 className="font-mono text-[9px] uppercase text-ink font-bold">
                        {lang === "id" ? "Vibe Coding, Web & Game Porting" : "Vibe Coding, Web & Game Porting"}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "React 19 & Next.js 15",
                          "TypeScript & Tailwind",
                          "Laravel 13 & Prisma",
                          "C++ & C# (.NET)",
                          "Vulkan 1.3 & SDL3",
                          "Python & Electron"
                        ].map((s) => (
                          <span key={s} className="bg-paper text-ink font-mono text-[9px] px-2 py-0.5 rounded border border-line">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="glass-card p-4 rounded-xl space-y-3 card-hover">
                      <h5 className="font-mono text-[9px] uppercase text-ink font-bold">
                        {lang === "id" ? "Bahasa & Komunikasi Ilmiah" : "Languages & Scientific Comm"}
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          lang === "id" ? "Bahasa Indonesia (Penutur Asli / Fasih)" : "Indonesian (Native / Fluent)",
                          lang === "id" ? "Bahasa Inggris (Profesional / Literatur Ilmiah & ISO)" : "English (Professional / Scientific & ISO Standards)"
                        ].map((s) => (
                          <span key={s} className="bg-paper text-ink font-mono text-[9px] px-2 py-0.5 rounded border border-line">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 3.2 SCIENTIFIC PUBLICATIONS & ABSTRACTS */}
        <section className="relative py-20 md:py-28 onlines-grid border-b border-line overflow-hidden">
          <GridLitSquares
            cells={[
              { top: "0px", left: "240px", count: "pair" },
              { bottom: "60px", right: "120px", count: "l-shape" }
            ]}
          />
          <FloatingSquircleBadge className="hidden lg:flex absolute top-10 right-16 text-[#7C3AED]" rotate={-6} delay={0.3}>
            3ERT
          </FloatingSquircleBadge>
          <FloatingSquircleBadge className="hidden lg:flex absolute bottom-10 left-16 text-[#00B8D9]" rotate={8} delay={0.5}>
            LC-MS
          </FloatingSquircleBadge>

          <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-4 space-y-5">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink-soft">
                  {(t as any).pubSubtitle}
                </p>
                <FigmaSelectionTitle badge="IN SILICO THESIS">
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight gradient-text">
                    {(t as any).pubTitle}
                  </h2>
                </FigmaSelectionTitle>
                <CollaboratorCursor
                  label="ER-α Breast Cancer Target"
                  color="#7C3AED"
                  delay={0.25}
                />
              </div>
              <div className="lg:col-span-8">
                <div className="glass-card p-6 md:p-8 rounded-2xl shadow-xs relative overflow-hidden group card-hover figma-selection-box">
                  <span className="figma-handle figma-handle--tl" />
                  <span className="figma-handle figma-handle--tr" />
                  <span className="figma-handle figma-handle--bl" />
                  <span className="figma-handle figma-handle--br" />
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-ink" />
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft flex items-center gap-2">
                        <BookOpen size={13} /> {lang === "id" ? "Abstrak Skripsi (Nilai A / 4.00)" : "Thesis Abstract (Grade A / 4.00)"}
                      </span>
                      <span className="font-mono text-[9px] bg-paper-soft border border-line px-2 py-0.5 rounded text-[#00C471] font-bold">
                        ΔG Best: -8.415 kcal/mol
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">
                      {(t as any).pubThesisTitle}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-ink-soft text-justify">
                      "{formatText((t as any).pubThesisAbstract)}"
                    </p>
                    <div className="pt-4 flex items-center justify-between flex-wrap gap-3">
                      <a href="#simulator" className="text-xs font-mono font-bold tracking-wider uppercase text-ink hover:opacity-75 border-b border-ink pb-1 transition-all flex items-center gap-1">
                        {(t as any).pubRepoLink} <ArrowRight size={12} />
                      </a>
                      <span className="font-mono text-[10px] text-ink-soft">
                        44 LC-HRMS/MS Compounds • AutoDock Vina • ProTox 3.0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3.25 VIBE CODING PROJECTS & INTERACTIVE DUAL-LANGUAGE CV SHOWCASE */}
        <VibeCodingSection lang={lang} />

        {/* 3.3 PROFESSIONAL CERTIFICATIONS & LICENSES */}
        <CertificatesSection lang={lang} />

        {/* 3.5 ORGANIZATIONAL & CREATIVE PURSUITS */}
        <ExtraCurricular lang={lang} />

        {/* 4. INTERACTIVE MOLECULAR DOCKING SIMULATOR */}
        <DockingSimulator lang={lang} />

        {/* WORKFLOW TRANSITION BREAK */}
        <div className="onlines-grid border-y border-line py-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-5">
            <div className="flex items-center justify-center gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-2xl onlines-floating-card flex items-center justify-center text-ink"
              >
                <Cpu size={20} />
              </motion.div>
              <div className="flex items-center gap-2 text-ink-soft">
                <div className="h-[1px] w-12 bg-line-hover" />
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={14} className="text-ink" />
                </motion.div>
                <div className="h-[1px] w-12 bg-line-hover" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-2xl onlines-floating-card flex items-center justify-center text-ink"
              >
                <Beaker size={20} />
              </motion.div>
            </div>
            
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase text-ink-soft tracking-[0.2em] font-bold block">
                {lang === "id" ? "TRANSISI ALUR KERJA RISET" : "RESEARCH WORKFLOW TRANSITION"}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold gradient-text">
                {lang === "id" 
                  ? "Menghubungkan Pemodelan Virtual dengan Pengujian Fisik" 
                  : "Bridging Virtual Screening with Wet-Lab Analytics"}
              </h3>
              <p className="max-w-2xl mx-auto text-xs text-ink-soft leading-relaxed font-sans text-justify">
                {lang === "id"
                  ? "Setelah memprediksi afinitas senyawa aktif secara komputasi (In Silico), tahap berikutnya dalam Quality Control (QC) adalah formulasi nyata dan analisis kadar kualitas fisik di laboratorium basah. Gunakan alat bantu QC di bawah ini untuk kalkulasi preparasi lab."
                  : "After predicting compound affinity computationally (In Silico), the subsequent stage in Quality Control (QC) requires physical formulation and chemical assaying in a wet laboratory. Use the QC tools in the section below to calculate dilution and molarity."}
              </p>
            </div>
          </div>
        </div>

        {/* 5. INTERACTIVE LABORATORY TOOLKIT */}
        <LabCalculator lang={lang} />

        {/* 6. INTERACTIVE PORTFOLIO RESEARCH GALLERY */}
        <ResearchGallery lang={lang} />

        {/* 7. DYNAMIC ENDORSEMENT GUESTBOOK */}
        <Guestbook lang={lang} />

        {/* 8. CONTACT FORM & OUTREACH PLUGINS */}
        <ContactForm lang={lang} />
      </main>

      {/* 9. MINIMALIST SYSTEM FOOTER */}
      <footer className="border-t border-line py-10 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-soft font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-ink text-paper font-mono text-[9px] font-bold">
              •_
            </span>
            <p>© {new Date().getFullYear()} I Komang Bayu Kresna, S.Si.</p>
          </div>
          <a
            href="#beranda"
            className="hover:text-ink border-b border-transparent hover:border-ink pb-0.5 transition-all"
          >
            {lang === "id" ? "Kembali ke Atas ↑" : "Back to Top ↑"}
          </a>
        </div>
      </footer>

      {/* 10. FLOATING AI ASSISTANT CHATBOT */}
      <AiAssistant lang={lang} />
    </div>
  );
}
