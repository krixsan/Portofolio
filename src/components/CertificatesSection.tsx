import { useState, type MouseEvent } from "react";
import { CERTIFICATES } from "../data";
import { Certificate, Language } from "../types";
import {
  Award,
  CheckCircle2,
  Copy,
  Check,
  Download,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Building2,
  Calendar,
  Hash
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { formatText } from "../utils/textFormatter";
import {
  CollaboratorCursor,
  CanvasCommentBubble,
  FloatingSquircleBadge,
  FigmaSelectionTitle,
  GridLitSquares
} from "./CanvasDecorations";

interface CertificatesSectionProps {
  lang: Language;
}

type FilterCategory = "all" | "instansi" | "qc_qa" | "food_safety";

export default function CertificatesSection({ lang }: CertificatesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [viewMode, setViewMode] = useState<"image" | "pdf">("image");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCerts =
    activeCategory === "all"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === activeCategory);

  const categories: { id: FilterCategory; label: { id: string; en: string }; count: number }[] = [
    {
      id: "all",
      label: { id: "Semua Sertifikat", en: "All Certificates" },
      count: CERTIFICATES.length
    },
    {
      id: "instansi",
      label: { id: "Magang / Instansi", en: "Gov. Internship" },
      count: CERTIFICATES.filter((c) => c.category === "instansi").length
    },
    {
      id: "qc_qa",
      label: { id: "QC & QA Industri", en: "Industrial QC & QA" },
      count: CERTIFICATES.filter((c) => c.category === "qc_qa").length
    },
    {
      id: "food_safety",
      label: { id: "Food Safety, ISO & GMP", en: "Food Safety, ISO & GMP" },
      count: CERTIFICATES.filter((c) => c.category === "food_safety").length
    }
  ];

  const handleCopyCredential = (credentialId: string, e?: MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(credentialId);
    setCopiedId(credentialId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleNavigateModal = (direction: "prev" | "next") => {
    if (!selectedCert) return;
    const currentIndex = CERTIFICATES.findIndex((c) => c.id === selectedCert.id);
    if (currentIndex === -1) return;
    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % CERTIFICATES.length
        : (currentIndex - 1 + CERTIFICATES.length) % CERTIFICATES.length;
    setSelectedCert(CERTIFICATES[nextIndex]);
  };

  return (
    <section
      id="sertifikasi"
      className="py-24 md:py-32 border-b border-line onlines-grid scroll-mt-20 relative overflow-hidden"
    >
      {/* Background Lit Grid Squares */}
      <GridLitSquares
        cells={[
          { top: "60px", right: "180px", count: "l-shape" },
          { top: "300px", left: "60px", count: "pair" },
          { bottom: "120px", right: "120px", count: "single" },
          { bottom: "60px", left: "180px", count: "l-shape" }
        ]}
      />

      {/* Floating Pernak-Pernik */}
      <FloatingSquircleBadge className="hidden xl:flex absolute top-14 left-12 text-[#00C471]" rotate={-7} delay={0.2}>
        BPOM
      </FloatingSquircleBadge>
      <FloatingSquircleBadge className="hidden xl:flex absolute top-28 right-12 text-[#FF5722]" rotate={8} delay={0.4}>
        HACCP
      </FloatingSquircleBadge>
      <FloatingSquircleBadge className="hidden xl:flex absolute bottom-16 right-14 text-[#007AFF]" rotate={-5} delay={0.6}>
        22000
      </FloatingSquircleBadge>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 border-b border-line/60 pb-8">
          <div className="max-w-2xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink-soft flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#00C471]" />
                <span>
                  {lang === "id"
                    ? "— KREDENSIAL & LISENSI RESMI"
                    : "— VERIFIED CREDENTIALS & LICENSES"}
                </span>
              </p>
              <CollaboratorCursor
                label={lang === "id" ? "7 Sertifikat Resmi" : "7 Official Licenses"}
                color="#FF5722"
                delay={0.2}
              />
            </div>

            <FigmaSelectionTitle badge="SECTION 02 • CREDENTIALS">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight gradient-text">
                {lang === "id"
                  ? "Sertifikasi & Standar Mutu"
                  : "Certifications & Quality Standards"}
              </h2>
            </FigmaSelectionTitle>

            <p className="text-xs md:text-sm text-ink-soft leading-relaxed text-justify pt-2">
              {lang === "id"
                ? "Koleksi sertifikat resmi dari Badan POM RI (BBPOM di Denpasar) serta lisensi pelatihan profesional di bidang Quality Control (QC), Quality Assurance (QA), ISO 22000:2018, FSSC 22000 v7.0, HACCP, dan GMP."
                : "Official internship certification from BPOM RI (National Agency of Drug and Food Control) alongside professional credentials in Quality Control (QC), Quality Assurance (QA), ISO 22000:2018, FSSC 22000 v7.0, HACCP, and GMP."}
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <CanvasCommentBubble
              author="BSrE / BSSN"
              time={lang === "id" ? "terverifikasi" : "verified"}
              text={
                lang === "id"
                  ? "Klik kartu untuk pratinjau HD & unduh dokumen PDF asli."
                  : "Click any card for HD preview & original PDF download."
              }
              className="hidden sm:flex"
            />
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 glass-card p-1.5 rounded-2xl self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-[11px] font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "btn-primary shadow-sm"
                    : "text-ink-soft hover:text-ink hover:bg-paper-soft/50"
                }`}
              >
                <span>{cat.label[lang]}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                    activeCategory === cat.id
                      ? "bg-white/20 text-white"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => {
              const isFeatured = cert.featured && activeCategory === "all";

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => {
                    setViewMode("image");
                    setSelectedCert(cert);
                  }}
                  className={`group cursor-pointer glass-card border border-line rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between card-hover ${
                    isFeatured
                      ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12 lg:items-stretch"
                      : ""
                  }`}
                >
                  {/* Certificate Image Preview */}
                  <div
                    className={`relative overflow-hidden bg-paper-soft border-b lg:border-b-0 border-line/60 flex items-center justify-center p-3 sm:p-4 ${
                      isFeatured
                        ? "lg:col-span-6 lg:border-r border-line/60"
                        : "aspect-[1.414/1] w-full border-b"
                    }`}
                  >
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm border border-line/60 bg-white flex items-center justify-center">
                      <img
                        src={cert.previewImage}
                        alt={cert.title[lang]}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <span className="glass-card text-ink font-mono text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                          <ZoomIn size={13} className="text-accent" />
                          {lang === "id" ? "Perbesar Sertifikat" : "Inspect Certificate"}
                        </span>
                      </div>
                    </div>

                    {/* Top Left Category Badge */}
                    <span className="absolute top-6 left-6 glass-card text-[9px] font-mono font-bold uppercase tracking-wider text-accent px-3 py-1 rounded-full shadow-sm border border-accent/20">
                      {cert.categoryLabel[lang]}
                    </span>

                    {/* Featured Ribbon */}
                    {cert.featured && (
                      <span className="absolute top-6 right-6 bg-accent text-on-accent text-[9px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Award size={11} />
                        {lang === "id" ? "Sertifikat Utama" : "Official Gov. Cert"}
                      </span>
                    )}
                  </div>

                  {/* Certificate Details */}
                  <div
                    className={`p-6 flex flex-col justify-between space-y-5 ${
                      isFeatured ? "lg:col-span-6 lg:p-8" : "flex-1"
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Issuer & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-ink-soft">
                        <span className="flex items-center gap-1.5 font-semibold text-accent">
                          <Building2 size={12} />
                          {cert.issuer}
                        </span>
                        <span className="flex items-center gap-1 bg-paper px-2 py-0.5 rounded border border-line">
                          <Calendar size={10} />
                          {cert.date[lang]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-serif font-bold text-ink group-hover:text-accent transition-colors leading-snug ${
                          isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                        }`}
                      >
                        {cert.title[lang]}
                      </h3>

                      {/* Credential Number Pill */}
                      <div className="flex items-center gap-2 pt-0.5">
                        <div className="inline-flex items-center gap-1.5 bg-paper px-2.5 py-1 rounded-lg border border-line text-[10px] font-mono text-ink-soft">
                          <Hash size={11} className="text-accent" />
                          <span>No:</span>
                          <span className="text-ink font-semibold select-all">
                            {cert.credentialId}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleCopyCredential(cert.credentialId, e)}
                            className="ml-1 text-ink-soft hover:text-accent transition-colors cursor-pointer"
                            title={lang === "id" ? "Salin Nomor Sertifikat" : "Copy Credential ID"}
                          >
                            {copiedId === cert.credentialId ? (
                              <Check size={11} className="text-emerald-500" />
                            ) : (
                              <Copy size={11} />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`text-xs text-ink-soft leading-relaxed text-justify ${
                          isFeatured ? "" : "line-clamp-3"
                        }`}
                      >
                        {formatText(cert.description[lang])}
                      </p>

                      {/* Signers if featured */}
                      {isFeatured && cert.signers && (
                        <div className="p-3 rounded-xl bg-accent/5 border border-accent/15 text-[11px] font-mono text-ink-soft flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-accent shrink-0" />
                          <span>
                            <strong className="text-ink">
                              {lang === "id" ? "Pengesahan: " : "Signed by: "}
                            </strong>
                            {cert.signers}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Skills & Action Footer */}
                    <div className="space-y-4 pt-3 border-t border-line/50">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-paper text-ink-soft font-mono text-[9px] px-2 py-0.5 rounded border border-line"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setViewMode("image");
                            setSelectedCert(cert);
                          }}
                          className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent hover:opacity-80 flex items-center gap-1.5 cursor-pointer"
                        >
                          <ZoomIn size={13} />
                          <span>
                            {lang === "id" ? "Lihat Sertifikat" : "View Certificate"}
                          </span>
                        </button>

                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-paper hover:bg-accent hover:text-on-accent text-ink-soft border border-line text-[10px] font-mono uppercase tracking-wider transition-all"
                          title={lang === "id" ? "Buka / Unduh PDF" : "Open / Download PDF"}
                        >
                          <Download size={12} />
                          <span>PDF</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Certificate Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center"
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card border border-line rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row bg-paper"
              >
                {/* Left Panel: Visual Certificate / PDF Viewer */}
                <div className="lg:w-7/12 bg-ink/95 relative flex flex-col justify-between p-4 md:p-6 min-h-[320px] lg:min-h-[520px]">
                  {/* Top Bar inside Viewer */}
                  <div className="flex items-center justify-between gap-2 z-10 mb-3">
                    <div className="flex items-center gap-1.5 bg-black/50 p-1 rounded-xl border border-white/10">
                      <button
                        type="button"
                        onClick={() => setViewMode("image")}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all ${
                          viewMode === "image"
                            ? "bg-accent text-white font-bold"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        <ImageIcon size={12} />
                        <span>{lang === "id" ? "Gambar HD" : "HD Image"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode("pdf")}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all ${
                          viewMode === "pdf"
                            ? "bg-accent text-white font-bold"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        <FileText size={12} />
                        <span>{lang === "id" ? "Dokumen PDF" : "PDF Viewer"}</span>
                      </button>
                    </div>

                    {/* Prev / Next Navigation */}
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleNavigateModal("prev")}
                        className="w-8 h-8 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center border border-white/10 cursor-pointer transition-all"
                        title={lang === "id" ? "Sertifikat Sebelumnya" : "Previous Certificate"}
                      >
                        <ChevronLeft size={15} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavigateModal("next")}
                        className="w-8 h-8 rounded-full bg-black/50 hover:bg-accent text-white flex items-center justify-center border border-white/10 cursor-pointer transition-all"
                        title={lang === "id" ? "Sertifikat Berikutnya" : "Next Certificate"}
                      >
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Main Preview Container */}
                  <div className="flex-1 flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-inner">
                    {viewMode === "image" ? (
                      <img
                        src={selectedCert.previewImage}
                        alt={selectedCert.title[lang]}
                        className="w-full h-full max-h-[65vh] object-contain"
                      />
                    ) : (
                      <iframe
                        src={`${selectedCert.pdfUrl}#toolbar=1&navpanes=0`}
                        title={selectedCert.title[lang]}
                        className="w-full h-[55vh] lg:h-[65vh] border-0"
                      />
                    )}
                  </div>

                  {/* Bottom Caption inside Viewer */}
                  <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-white/70">
                    <span>
                      {lang === "id" ? "No. Kredensial:" : "Credential ID:"}{" "}
                      <strong className="text-white">{selectedCert.credentialId}</strong>
                    </span>
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-soft hover:underline flex items-center gap-1"
                    >
                      <span>{lang === "id" ? "Buka Layar Penuh" : "Open Fullscreen"}</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                {/* Right Panel: Metadata & Actions */}
                <div className="lg:w-5/12 p-6 md:p-8 flex flex-col justify-between space-y-6 relative bg-paper">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-5 right-5 w-8 h-8 rounded-full bg-paper-soft border border-line text-ink-soft hover:bg-accent hover:text-on-accent flex items-center justify-center cursor-pointer transition-all shadow-sm"
                    aria-label="Close modal"
                  >
                    <X size={15} />
                  </button>

                  <div className="space-y-5">
                    <div className="space-y-2 pr-8">
                      <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full font-bold">
                        {selectedCert.categoryLabel[lang]}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight">
                        {selectedCert.title[lang]}
                      </h3>
                      <p className="font-mono text-xs text-ink-soft font-semibold">
                        {selectedCert.issuer}
                      </p>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 gap-3 bg-paper-soft p-4 rounded-2xl border border-line text-xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] uppercase text-ink-soft">
                          {lang === "id" ? "Nomor Sertifikat" : "Credential ID"}
                        </span>
                        <div className="flex items-center gap-1.5 font-mono font-bold text-accent">
                          <span>{selectedCert.credentialId}</span>
                          <button
                            type="button"
                            onClick={() => handleCopyCredential(selectedCert.credentialId)}
                            className="p-1 rounded hover:bg-accent/10 cursor-pointer"
                            title={lang === "id" ? "Salin" : "Copy"}
                          >
                            {copiedId === selectedCert.credentialId ? (
                              <Check size={12} className="text-emerald-500" />
                            ) : (
                              <Copy size={12} />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 border-t border-line/60 pt-2.5">
                        <span className="font-mono text-[10px] uppercase text-ink-soft">
                          {lang === "id" ? "Tanggal Terbit" : "Issue Date"}
                        </span>
                        <span className="font-mono text-[11px] text-ink font-medium">
                          {selectedCert.date[lang]}
                        </span>
                      </div>

                      {selectedCert.signers && (
                        <div className="border-t border-line/60 pt-2.5 space-y-1">
                          <span className="block font-mono text-[10px] uppercase text-ink-soft">
                            {lang === "id" ? "Pejabat Penandatangan" : "Authorized Signers"}
                          </span>
                          <span className="block font-mono text-[11px] text-ink leading-relaxed">
                            {selectedCert.signers}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] uppercase tracking-wider text-ink-soft font-bold">
                        {lang === "id" ? "Deskripsi Kompetensi" : "Competency Description"}
                      </h4>
                      <p className="text-xs text-ink-soft leading-relaxed text-justify">
                        {formatText(selectedCert.description[lang])}
                      </p>
                    </div>

                    {/* Skills Verified */}
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] uppercase tracking-wider text-ink-soft font-bold">
                        {lang === "id" ? "Keahlian Terverifikasi" : "Verified Skills"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-paper-soft text-ink font-mono text-[10px] px-2.5 py-1 rounded-lg border border-line"
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-line flex flex-col sm:flex-row gap-3">
                    <a
                      href={selectedCert.pdfUrl}
                      download
                      className="flex-1 btn-primary text-xs font-mono uppercase tracking-wider font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Download size={14} />
                      <span>{lang === "id" ? "Unduh PDF Asli" : "Download Original PDF"}</span>
                    </a>
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-xl border border-line hover:border-accent text-ink hover:text-accent font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ExternalLink size={14} />
                      <span>{lang === "id" ? "Tab Baru" : "New Tab"}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
