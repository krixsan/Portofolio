import React, { useState } from "react";
import { 
  Users, Award, Music, Trophy, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  CollaboratorCursor,
  CanvasCommentBubble,
  FloatingSquircleBadge,
  FigmaSelectionTitle,
  GridLitSquares
} from "./CanvasDecorations";

interface ExtraCurricularProps {
  lang: "id" | "en";
}

export default function ExtraCurricular({ lang }: ExtraCurricularProps) {
  const [activeTab, setActiveTab] = useState<"org" | "hobby">("org");

  return (
    <section id="aktivitas" className="relative py-24 md:py-32 border-b border-line scroll-mt-20 onlines-grid overflow-hidden">
      <GridLitSquares
        cells={[
          { top: "60px", left: "60px", count: "pair" },
          { bottom: "60px", right: "180px", count: "l-shape" }
        ]}
      />
      <FloatingSquircleBadge className="hidden xl:flex absolute top-16 right-14 text-[#EC4899]" rotate={7} delay={0.2}>
        🏀
      </FloatingSquircleBadge>
      <FloatingSquircleBadge className="hidden xl:flex absolute bottom-14 left-12 text-[#007AFF]" rotate={-6} delay={0.4}>
        🎵
      </FloatingSquircleBadge>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header Section with Navigation Tabs */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 border-b border-line/60 pb-6">
          <div className="max-w-xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-ink-soft">
                {lang === "id" ? "KEPEMIMPINAN & AKTIVITAS KREATIF" : "LEADERSHIP & CREATIVE PURSUITS"}
              </p>
              <CollaboratorCursor
                label={activeTab === "org" ? "Wakil Ketua II HIMAKI" : "EDM Hipdut Producer"}
                color="#EC4899"
                delay={0.2}
              />
            </div>
            <FigmaSelectionTitle badge="SECTION 03 • LEADERSHIP & PASSIONS">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight gradient-text">
                {lang === "id" ? "Sisi Organisasi & Kreatif" : "Organizational & Creative Side"}
              </h2>
            </FigmaSelectionTitle>
            <p className="text-xs md:text-sm text-ink-soft leading-relaxed pt-2 text-justify">
              {lang === "id" 
                ? "Di samping dedikasi riset ilmiah dan ketelitian laboratorium, saya aktif berkontribusi dalam kepengurusan mahasiswa, mengukir prestasi olahraga basket, dan mengeksplorasi musik elektronik EDM."
                : "Parallel to scientific rigor and lab analytical work, I actively lead student organizations, compete on the basketball court, and experiment with EDM audio engineering."}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <CanvasCommentBubble
              author="HIMAKI & BEM FMIPA"
              time="2022–2024"
              text={
                lang === "id"
                  ? "Aktif memimpin organisasi mahasiswa & juara 3 basket PORSENI."
                  : "Student executive leadership & 3rd place PORSENI basketball."
              }
              className="hidden lg:flex"
            />
            {/* Elegant Custom Tabs */}
            <div className="flex items-center gap-1.5 glass-card p-1 rounded-2xl shrink-0">
            <button
              onClick={() => setActiveTab("org")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === "org" 
                  ? "btn-primary shadow-sm" 
                  : "text-ink-soft hover:text-ink hover:bg-paper-soft/40"
              }`}
            >
              💼 {lang === "id" ? "Organisasi & Kepemimpinan" : "Organizations & Leadership"}
            </button>
            <button
              onClick={() => setActiveTab("hobby")}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                activeTab === "hobby" 
                  ? "btn-primary shadow-sm" 
                  : "text-ink-soft hover:text-ink hover:bg-paper-soft/40"
              }`}
            >
              🏀 {lang === "id" ? "Hobi & Kreativitas" : "Hobbies & Passions"}
            </button>
            </div>
          </div>
        </div>

        {/* Dynamic Panel Content */}
        <AnimatePresence mode="wait">
          {activeTab === "org" ? (
            <motion.div
              key="organizations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* HIMAKI Card */}
              <div className="glass-card p-8 rounded-[2rem] transition-all card-hover relative overflow-hidden group flex flex-col justify-between">
                {/* Background watermarks */}
                <div className="absolute right-6 top-6 opacity-5 text-accent group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  <Users size={120} />
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="bg-accent/15 text-accent font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-accent/20">
                      2023 - 2024
                    </span>
                    <span className="text-ink-soft/60 font-mono text-xs">HIMAKI UNUD</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
                      {lang === "id" ? "Wakil Ketua II" : "Vice Chairman II"}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-accent/90">
                      Himpunan Mahasiswa Kimia (HIMAKI) Universitas Udayana
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-ink-soft leading-relaxed text-justify">
                    {lang === "id"
                      ? "Memimpin koordinasi eksekutif lintas 15 pengurus inti dan 3 divisi organisasi dalam menyelenggarakan program kerja akademik, seminar ilmiah, serta kegiatan kemahasiswaan bagi 200+ mahasiswa aktif Program Studi Kimia Fakultas MIPA Universitas Udayana."
                      : "Led executive coordination across 15 core board members and 3 organizational divisions to deliver academic work programs, scientific seminars, and student welfare initiatives for 200+ active Chemistry undergraduate students at Udayana University."}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-line/40 flex flex-wrap gap-2">
                  <span className="glass-card text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded">
                    Leadership
                  </span>
                  <span className="glass-card text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded">
                    Sinergi Internal
                  </span>
                  <span className="glass-card text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded">
                    Manajemen Konflik
                  </span>
                  <span className="glass-card text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded">
                    Coordination
                  </span>
                </div>
              </div>

              {/* BEM Card */}
              <div className="glass-card p-8 rounded-[2rem] transition-all card-hover relative overflow-hidden group flex flex-col justify-between">
                {/* Background watermark */}
                <div className="absolute right-6 top-6 opacity-5 text-accent group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  <Award size={120} />
                </div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="bg-accent/15 text-accent font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-accent/20">
                      2022 - 2023
                    </span>
                    <span className="text-ink-soft/60 font-mono text-xs">BEM FMIPA UNUD</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-ink leading-tight">
                      {lang === "id" ? "Staff Departemen Minat & Bakat" : "Staff of Talent & Interest Department"}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-accent/90">
                      Badan Eksekutif Mahasiswa (BEM) FMIPA Universitas Udayana
                    </p>
                  </div>

                  <p className="text-xs md:text-sm text-ink-soft leading-relaxed text-justify">
                    {lang === "id"
                      ? "Berperan aktif dalam mewadahi, memetakan, dan menyalurkan potensi non-akademik mahasiswa sains MIPA. Terlibat langsung sebagai steering committee dan panitia pelaksana dalam menyelenggarakan festival olahraga, pameran seni, kompetisi minat bakat fakultas, serta mengobarkan sportivitas civitas akademika."
                      : "Played an active role in discovering, mapping, and fostering non-academic interests and talents among FMIPA science students. Organized student sports festivals, art exhibitions, and talent tournaments to champion campus sportsmanship."}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-line/40 flex flex-wrap gap-2">
                  <span className="glass-card text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded">
                    Event Management
                  </span>
                  <span className="bg-paper text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded border border-line">
                    Public Relations
                  </span>
                  <span className="bg-paper text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded border border-line">
                    Teamwork
                  </span>
                  <span className="bg-paper text-ink-soft font-mono text-[9px] px-2.5 py-1 rounded border border-line">
                    Student Advocacy
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hobbies"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
            >
              {/* Basketball Bento Card (5 cols) */}
              <div className="lg:col-span-5 bg-paper-soft border border-line rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-accent/20 transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-44 h-44 bg-accent/5 rounded-bl-[10rem] group-hover:bg-accent/8- transition-colors pointer-events-none" />
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-accent/10 text-accent font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-accent/20 flex items-center gap-1">
                      <Trophy size={11} />
                      <span>{lang === "id" ? "Olahraga Tim" : "Team Sport"}</span>
                    </span>
                    <span className="text-[11px] font-mono text-ink-soft">Active</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl font-extrabold text-ink tracking-tight flex items-center gap-2">
                      <span>🏀</span>
                      <span>{lang === "id" ? "Hobi Bermain Basket" : "Basketball Hobby"}</span>
                    </h3>
                    <p className="text-xs md:text-sm text-ink-soft leading-relaxed text-justify">
                      {lang === "id"
                        ? "Bermain basket merupakan cara saya menjaga kebugaran fisik sekaligus sarana melatih kerja sama tim dan kedisiplinan di luar kesibukan akademik. Hobi ini juga pernah mengantarkan saya berpartisipasi dan meraih posisi ke-3 pada ajang PORSENI FMIPA Universitas Udayana 2024, sebagai pengalaman kompetitif yang berharga."
                        : "Basketball is my way to maintain physical fitness while practicing teamwork and discipline outside of academic activities. This hobby also led me to participate and secure 3rd place in the FMIPA Udayana Sports & Art Week (PORSENI) 2024, which was a valuable competitive experience."}
                    </p>
                  </div>
                </div>


              </div>

              {/* EDM Music "Hipdut" Production Hobby Card (7 cols) */}
              <div className="lg:col-span-7 bg-paper-soft border border-line rounded-[2.5rem] p-8 flex flex-col justify-between hover:border-accent/20 transition-all relative overflow-hidden">
                {/* Visualizer and decorative sparks */}
                <div className="absolute top-4 right-6 flex items-center gap-1.5 bg-paper/60 backdrop-blur border border-line py-1 px-3 rounded-full text-[9px] font-mono text-accent">
                  <Sparkles size={11} className="animate-pulse" />
                  <span>{lang === "id" ? "PRODUSER MUSIK" : "MUSIC PRODUCER"}</span>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-ink tracking-tight flex items-center gap-2">
                      <Music className="text-accent" size={24} />
                      <span>{lang === "id" ? "EDM Hipdut Music Production" : "EDM Hipdut Production"}</span>
                    </h3>
                    <p className="text-sm md:text-base text-ink-soft leading-relaxed text-justify mt-4">
                      {lang === "id"
                        ? "Selain dunia akademik, saya juga memiliki hobi dan passion di bidang produksi musik digital. Saya secara khusus bereksperimen menciptakan genre musik yang unik, yaitu penggabungan antara musik elektronik (EDM) dengan elemen ritme Dangdut Indonesia dan ketukan Hip-hop yang saya sebut sebagai 'Hipdut'."
                        : "Beyond academics, I have a deep passion for digital music production. I specifically experiment with creating a unique musical fusion, blending Electronic Dance Music (EDM) with Indonesian Dangdut rhythm elements and Hip-hop beats, which I affectionately call 'Hipdut'."}
                    </p>
                    <p className="text-sm md:text-base text-ink-soft leading-relaxed text-justify mt-4">
                      {lang === "id"
                        ? "Saya sangat menikmati proses mengeksplorasi sound design, drum sequencing, dan synthesizer. Hobi ini menjadi sarana saya menyalurkan kreativitas dan menyeimbangkan rutinitas analisis di laboratorium."
                        : "I thoroughly enjoy the process of exploring sound design, drum sequencing, and synthesizers. This hobby serves as a creative outlet and a great way to balance my analytical routines in the laboratory."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

