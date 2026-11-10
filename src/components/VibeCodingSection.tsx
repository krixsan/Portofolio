import { useState } from "react";
import { Language } from "../types";
import { VIBE_CODING_PROJECTS } from "../data";
import {
  Code2,
  Gamepad2,
  Cpu,
  Globe,
  Github,
  ExternalLink,
  Download,
  FileText,
  Eye,
  X,
  CheckCircle2,
  Sparkles,
  Terminal
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { formatText } from "../utils/textFormatter";
import {
  CollaboratorCursor,
  CanvasCommentBubble,
  FloatingSquircleBadge,
  FigmaSelectionTitle,
  GridLitSquares,
  MiniWireframeCard
} from "./CanvasDecorations";

interface VibeCodingSectionProps {
  lang: Language;
}

export default function VibeCodingSection({ lang }: VibeCodingSectionProps) {
  const [cvLang, setCvLang] = useState<"id" | "en">(lang);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [cvViewMode, setCvViewMode] = useState<"pages" | "pdf">("pages");
  const [activePage, setActivePage] = useState<1 | 2>(1);

  const currentPdfUrl =
    cvLang === "id" ? "/CV_Mank_Krisna_ID.pdf" : "/CV_Mank_Krisna_EN.pdf";
  const page1Preview =
    cvLang === "id"
      ? "/cv/previews/cv-id-page1.png"
      : "/cv/previews/cv-en-page1.png";
  const page2Preview =
    cvLang === "id"
      ? "/cv/previews/cv-id-page2.png"
      : "/cv/previews/cv-en-page2.png";

  const getProjectIcon = (id: string) => {
    if (id === "ps4-native-pc-port") return <Gamepad2 size={18} className="text-[#FF5722]" />;
    if (id === "dockvista-chemia") return <Cpu size={18} className="text-[#007AFF]" />;
    return <Globe size={18} className="text-[#00C471]" />;
  };

  return (
    <section
      id="vibe-coding"
      className="relative py-24 md:py-32 border-b border-line onlines-grid scroll-mt-20 overflow-hidden"
    >
      {/* Subtle Lit Grid Squares */}
      <GridLitSquares
        cells={[
          { top: "60px", left: "180px", count: "l-shape" },
          { top: "300px", right: "120px", count: "pair" },
          { bottom: "120px", left: "60px", count: "pair" }
        ]}
      />

      {/* Floating Onlines Squircle Badges */}
      <FloatingSquircleBadge
        className="hidden xl:flex absolute top-16 right-14 text-[#FF5722]"
        rotate={7}
        delay={0.2}
      >
        C++
      </FloatingSquircleBadge>
      <FloatingSquircleBadge
        className="hidden xl:flex absolute top-[45%] left-10 text-[#007AFF]"
        rotate={-6}
        delay={0.4}
      >
        <Terminal size={18} />
      </FloatingSquircleBadge>
      <FloatingSquircleBadge
        className="hidden xl:flex absolute bottom-20 right-12 text-[#00C471]"
        rotate={-5}
        delay={0.5}
      >
        CV
      </FloatingSquircleBadge>

      <MiniWireframeCard
        title="ps4_vulkan_runtime.cpp"
        rotate={-4}
        className="hidden 2xl:block absolute top-32 left-8"
        lines={[
          { label: "Target", value: "x86_64 Native PC", accent: "#00C471" },
          { label: "Renderer", value: "Vulkan 1.3 API", accent: "#007AFF" },
          { label: "Framerate", value: "120+ FPS Unlocked" }
        ]}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 space-y-20">
        {/* PART 1: VIBE CODING & SOFTWARE ENGINEERING PROJECTS FROM CV */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-line pb-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink bg-paper-soft border border-line px-3 py-1.5 rounded-full font-bold">
                  <Code2 size={13} className="text-[#007AFF]" />
                  <span>
                    {lang === "id"
                      ? "REKAYASA PERANGKAT LUNAK • VIBE CODING"
                      : "AI-ASSISTED SOFTWARE ENGINEERING • VIBE CODING"}
                  </span>
                </span>
                <CollaboratorCursor
                  label="github.com/krixsan"
                  color="#FF5722"
                  delay={0.2}
                />
              </div>

              <FigmaSelectionTitle badge="CV SECTION • VIBE CODING & PORTING">
                <h2 className="font-serif text-3xl md:text-5xl font-extrabold tracking-tight text-ink leading-[1.08]">
                  {lang === "id"
                    ? "Proyek Vibe Coding, Komputasi Sains & Porting Game PS4"
                    : "Vibe Coding, Scientific Tools & Native PS4 Game Porting"}
                </h2>
              </FigmaSelectionTitle>

              <p className="text-xs md:text-sm text-ink-soft leading-relaxed pt-2 text-justify">
                {lang === "id"
                  ? "Selain keahlian analisis laboratorium basah (HPLC, AAS, UV-Vis), saya aktif memanfaatkan rekayasa perangkat lunak berbasis AI (Vibe Coding) untuk membangun aplikasi desktop automasi kimia komputasi, ekosistem web full-stack, hingga mem-porting game konsol PlayStation 4 (PS4) agar berjalan secara native di Windows PC."
                  : "Complementing wet-lab analytical precision (HPLC, AAS, UV-Vis), I leverage AI-assisted software engineering (Vibe Coding) to build computational chemistry desktop automation suites, full-stack web applications, and native PlayStation 4 (PS4) to Windows PC game ports."}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              <CanvasCommentBubble
                author="GitHub @krixsan"
                time="2026"
                text={
                  lang === "id"
                    ? "C++, Vulkan 1.3, Python, Electron, Next.js 15 & React 19."
                    : "C++, Vulkan 1.3, Python, Electron, Next.js 15 & React 19."
                }
              />
              <a
                href="https://github.com/krixsan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-paper font-mono text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                <Github size={14} />
                <span>github.com/krixsan</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* 3 Flagship Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {VIBE_CODING_PROJECTS.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 flex flex-col justify-between card-hover relative overflow-hidden group"
              >
                <div className="space-y-4">
                  {/* Top Badge & Year */}
                  <div className="flex items-center justify-between gap-2 border-b border-line pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-paper-soft border border-line flex items-center justify-center">
                        {getProjectIcon(project.id)}
                      </div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-ink-soft">
                        {project.badge}
                      </span>
                    </div>
                    <span className="bg-ink text-paper font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                      {project.title[lang]}
                    </h3>
                    <p className="font-mono text-[10px] text-[#007AFF] font-semibold">
                      {project.subtitle[lang]}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-ink-soft leading-relaxed text-justify">
                    {formatText(project.description[lang])}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-paper-soft border border-line rounded-xl p-2 text-center"
                      >
                        <span className="block font-mono text-[8px] uppercase text-ink-soft truncate">
                          {m.label}
                        </span>
                        <span className="font-mono text-[9px] font-bold text-ink truncate block mt-0.5">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Stack & Repo Pills */}
                <div className="pt-5 mt-5 border-t border-line/60 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tItem) => (
                      <span
                        key={tItem}
                        className="bg-paper text-ink font-mono text-[9px] px-2 py-0.5 rounded border border-line"
                      >
                        {tItem}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-wrap gap-1.5">
                      {project.repoNames.slice(0, 2).map((repo) => (
                        <span
                          key={repo}
                          className="font-mono text-[9px] text-ink-soft bg-paper-soft px-2 py-0.5 rounded border border-line"
                        >
                          /{repo}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-ink hover:text-[#007AFF] transition-colors shrink-0"
                    >
                      <Github size={12} />
                      <span>GitHub →</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* PART 2: INTERACTIVE CURRICULUM VITAE (CV) DUAL-LANGUAGE SHOWCASE & DOWNLOAD */}
        <div
          id="cv-resmi"
          className="glass-card rounded-3xl p-6 sm:p-8 md:p-10 border border-line relative overflow-hidden scroll-mt-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Info & Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-[#00C471]/15 text-[#00C471] font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    <CheckCircle2 size={12} />
                    <span>
                      {lang === "id"
                        ? "CV Resmi Terbaru (2 Halaman)"
                        : "Official Updated CV (2 Pages)"}
                    </span>
                  </span>
                  <CollaboratorCursor
                    label={cvLang === "id" ? "Versi Bahasa Indonesia" : "English Version"}
                    color="#007AFF"
                  />
                </div>

                <FigmaSelectionTitle badge="CURRICULUM VITAE • ID & EN">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                    {lang === "id"
                      ? "I Komang Bayu Kresna, S.Si. — Curriculum Vitae"
                      : "I Komang Bayu Kresna, S.Si. — Curriculum Vitae"}
                  </h3>
                </FigmaSelectionTitle>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed text-justify">
                  {lang === "id"
                    ? "Pratinjau langsung atau unduh dokumen Curriculum Vitae (CV) resmi saya dalam format PDF resolusi tinggi. Tersedia dalam 2 bahasa (Bahasa Indonesia & Bahasa Inggris) yang merangkum pendidikan Cum Laude, pengalaman QC BPOM & BASIL, 7 sertifikasi kompetensi, publikasi in silico, serta proyek Vibe Coding."
                    : "Preview directly or download my official Curriculum Vitae (CV) in high-resolution PDF format. Available in both Indonesian and English, summarizing my Cum Laude chemistry degree, BPOM & BASIL QC experience, 7 competency certifications, in silico thesis, and Vibe Coding projects."}
                </p>
              </div>

              {/* Language Switcher for CV Preview */}
              <div className="space-y-2">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-soft font-bold">
                  {lang === "id" ? "Pilih Bahasa Dokumen CV:" : "Select CV Document Language:"}
                </span>
                <div className="inline-flex p-1 rounded-xl bg-paper-soft border border-line gap-1">
                  <button
                    type="button"
                    onClick={() => setCvLang("id")}
                    className={`px-3.5 py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      cvLang === "id"
                        ? "bg-ink text-paper shadow-xs"
                        : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span>🇮🇩 CV Bahasa Indonesia</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCvLang("en")}
                    className={`px-3.5 py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      cvLang === "en"
                        ? "bg-ink text-paper shadow-xs"
                        : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    <span>🇬🇧 CV English Version</span>
                  </button>
                </div>
              </div>

              {/* Quick Highlights inside CV */}
              <div className="grid grid-cols-2 gap-2.5 text-[11px] font-mono">
                <div className="bg-paper-soft border border-line rounded-xl p-3">
                  <span className="text-[9px] text-ink-soft block uppercase">IPK / GPA</span>
                  <span className="font-bold text-ink">3.77 / 4.00 (Cum Laude)</span>
                </div>
                <div className="bg-paper-soft border border-line rounded-xl p-3">
                  <span className="text-[9px] text-ink-soft block uppercase">Pengalaman Lab</span>
                  <span className="font-bold text-ink">BPOM + BASIL + Asdos</span>
                </div>
                <div className="bg-paper-soft border border-line rounded-xl p-3">
                  <span className="text-[9px] text-ink-soft block uppercase">Sertifikasi Resmi</span>
                  <span className="font-bold text-[#00C471]">7 Lisensi QC/QA & ISO</span>
                </div>
                <div className="bg-paper-soft border border-line rounded-xl p-3">
                  <span className="text-[9px] text-ink-soft block uppercase">Vibe Coding</span>
                  <span className="font-bold text-[#007AFF]">PS4 Port, Web & Desktop</span>
                </div>
              </div>

              {/* Action Buttons: Interactive Modal + Direct Downloads */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setActivePage(1);
                    setCvViewMode("pages");
                    setCvModalOpen(true);
                  }}
                  className="btn-primary text-xs font-mono font-bold uppercase tracking-wider px-5 py-3 rounded-xl cursor-pointer flex items-center gap-2 shadow-xs"
                >
                  <Eye size={14} />
                  <span>
                    {lang === "id" ? "Buka Pratinjau Penuh" : "Open Full CV Preview"}
                  </span>
                </button>

                <a
                  href="/CV_Mank_Krisna_ID.pdf"
                  download="I Komang Bayu Kresna, S.Si. — Curriculum Vitae (ID).pdf"
                  className="bg-paper hover:bg-paper-soft text-ink border border-line hover:border-ink text-xs font-mono font-bold px-4 py-3 rounded-xl transition-all flex items-center gap-1.5"
                >
                  <Download size={13} />
                  <span>Unduh CV (ID)</span>
                </a>

                <a
                  href="/CV_Mank_Krisna_EN.pdf"
                  download="I Komang Bayu Kresna, S.Si. — Curriculum Vitae (EN).pdf"
                  className="bg-paper hover:bg-paper-soft text-ink border border-line hover:border-ink text-xs font-mono font-bold px-4 py-3 rounded-xl transition-all flex items-center gap-1.5"
                >
                  <Download size={13} />
                  <span>Download CV (EN)</span>
                </a>
              </div>
            </div>

            {/* Right 2-Page Side-by-Side Interactive Preview (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { page: 1 as const, img: page1Preview, label: lang === "id" ? "Halaman 1 • Profil, Pendidikan, Lab & Sertifikasi" : "Page 1 • Profile, Education, Lab & Certifications" },
                { page: 2 as const, img: page2Preview, label: lang === "id" ? "Halaman 2 • Skripsi, Proyek Vibe Coding & Keahlian" : "Page 2 • Thesis, Vibe Coding Projects & Skills" }
              ].map((item) => (
                <div
                  key={item.page}
                  onClick={() => {
                    setActivePage(item.page);
                    setCvViewMode("pages");
                    setCvModalOpen(true);
                  }}
                  className="group cursor-pointer rounded-2xl border border-line bg-paper p-2.5 shadow-sm hover:border-[#007AFF] transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-line px-1">
                    <span className="font-mono text-[9px] font-bold text-ink uppercase">
                      {cvLang === "id" ? `CV (ID) • Hal. ${item.page}/2` : `CV (EN) • Page ${item.page}/2`}
                    </span>
                    <span className="font-mono text-[9px] text-[#007AFF] font-bold group-hover:underline flex items-center gap-1">
                      <Sparkles size={10} />
                      {lang === "id" ? "Perbesar" : "Zoom"}
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden border border-line bg-white aspect-[1/1.414]">
                    <img
                      src={item.img}
                      alt={item.label}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>

                  <p className="font-mono text-[9px] text-ink-soft truncate pt-2 px-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN INTERACTIVE CV MODAL (HD Pages + Embedded PDF + Download ID/EN) */}
      <AnimatePresence>
        {cvModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCvModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper border border-line rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Top Toolbar */}
              <div className="p-4 sm:px-6 border-b border-line flex flex-wrap items-center justify-between gap-3 bg-paper-soft">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-ink text-paper flex items-center justify-center">
                    <FileText size={17} />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-ink">
                      I Komang Bayu Kresna, S.Si. — Curriculum Vitae ({cvLang.toUpperCase()})
                    </h4>
                    <p className="font-mono text-[10px] text-ink-soft">
                      {cvLang === "id"
                        ? "Dokumen CV Resmi Bahasa Indonesia • 2 Halaman"
                        : "Official English Curriculum Vitae • 2 Pages"}
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-2">
                  {/* Language Toggle */}
                  <div className="flex items-center bg-paper border border-line rounded-xl p-0.5">
                    <button
                      type="button"
                      onClick={() => setCvLang("id")}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold cursor-pointer transition-all ${
                        cvLang === "id" ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      🇮🇩 ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setCvLang("en")}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold cursor-pointer transition-all ${
                        cvLang === "en" ? "bg-ink text-paper" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      🇬🇧 EN
                    </button>
                  </div>

                  {/* Page / PDF Mode Toggle */}
                  <div className="flex items-center bg-paper border border-line rounded-xl p-0.5">
                    <button
                      type="button"
                      onClick={() => {
                        setCvViewMode("pages");
                        setActivePage(1);
                      }}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold cursor-pointer transition-all ${
                        cvViewMode === "pages" && activePage === 1
                          ? "bg-[#007AFF] text-white"
                          : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      Hal 1
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setCvViewMode("pages");
                        setActivePage(2);
                      }}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold cursor-pointer transition-all ${
                        cvViewMode === "pages" && activePage === 2
                          ? "bg-[#007AFF] text-white"
                          : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      Hal 2
                    </button>
                    <button
                      type="button"
                      onClick={() => setCvViewMode("pdf")}
                      className={`px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold cursor-pointer transition-all ${
                        cvViewMode === "pdf"
                          ? "bg-[#007AFF] text-white"
                          : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      PDF Viewer
                    </button>
                  </div>

                  {/* Download Button */}
                  <a
                    href={currentPdfUrl}
                    download={
                      cvLang === "id"
                        ? "I Komang Bayu Kresna, S.Si. — Curriculum Vitae (ID).pdf"
                        : "I Komang Bayu Kresna, S.Si. — Curriculum Vitae (EN).pdf"
                    }
                    className="btn-primary px-3.5 py-1.5 rounded-xl font-mono text-[10px] font-bold uppercase flex items-center gap-1.5"
                  >
                    <Download size={12} />
                    <span>Download PDF</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setCvModalOpen(false)}
                    className="w-8 h-8 rounded-xl bg-paper border border-line flex items-center justify-center text-ink-soft hover:text-ink cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-neutral-900/95 flex flex-col items-center">
                {cvViewMode === "pages" ? (
                  <div className="max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-white/15">
                    <img
                      src={activePage === 1 ? page1Preview : page2Preview}
                      alt={`CV Page ${activePage}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ) : (
                  <iframe
                    src={`${currentPdfUrl}#toolbar=1&navpanes=0`}
                    title="Curriculum Vitae PDF"
                    className="w-full h-[72vh] rounded-xl bg-white border border-white/15"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

