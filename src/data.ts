import { Protein, Compound, Certificate } from "./types";

export const PROTEINS: Protein[] = [
  {
    id: "er_alpha",
    name: "Estrogen Receptor Alpha (ER-α)",
    code: "3ERT",
    description: {
      id: "Reseptor hormon nuklir utama pada kanker payudara ER-positif. Menjadi target penapisan virtual senyawa metabolit sekunder daun cengkeh dalam riset skripsi Mank Krisna.",
      en: "The primary nuclear hormone receptor in ER-positive breast cancer. Studied as the target for virtual screening of clove leaf secondary metabolites in Mank Krisna's thesis."
    },
    targetPathology: {
      id: "Kanker Payudara ER-Positif (*Breast Cancer*)",
      en: "ER-Positive Breast Cancer"
    },
    activeSite: ["Glu353", "Arg394", "His524", "Ile424", "Leu428", "Phe404", "Gly521"]
  },
  {
    id: "3clpro",
    name: "SARS-CoV-2 Main Protease",
    code: "6LU7",
    description: {
      id: "Enzim kunci yang memediasi replikasi dan transkripsi virus SARS-CoV-2. Target utama pengembangan obat antivirus.",
      en: "A key enzyme mediating the replication and transcription of the SARS-CoV-2 virus. A primary target for antiviral drug discovery."
    },
    targetPathology: {
      id: "Infeksi COVID-19 / Gangguan Pernapasan",
      en: "COVID-19 Infection / Respiratory Pathology"
    },
    activeSite: ["His41", "Cys145", "Gly143", "Glu166", "Gln189", "Met49"]
  },
  {
    id: "egfr",
    name: "Epidermal Growth Factor Receptor",
    code: "1M17",
    description: {
      id: "Reseptor tirosin kinase yang sering kali mengalami overekspresi pada berbagai kanker sel epitel. Target terapi antikanker.",
      en: "A receptor tyrosine kinase that is frequently overexpressed in various epithelial cancers. A critical target for anticancer therapies."
    },
    targetPathology: {
      id: "Kanker Paru-paru & Tumor Epitelial",
      en: "Lung Cancer & Epithelial Tumors"
    },
    activeSite: ["Met793", "Lys745", "Thr854", "Cys797", "Leu718", "Asp855"]
  },
  {
    id: "neuraminidase",
    name: "Influenza Neuraminidase (H5N1)",
    code: "2HU4",
    description: {
      id: "Glikoprotein pada permukaan virus influenza yang memotong asam sialat untuk melepaskan virion baru. Target obat flu seperti Oseltamivir.",
      en: "A glycoprotein on the influenza virus surface that cleans sialic acid to release newly formed virions. Target of anti-flu drugs like Oseltamivir."
    },
    targetPathology: {
      id: "Flu Burung / Influenza A",
      en: "Avian Flu / Influenza A"
    },
    activeSite: ["Arg118", "Asp151", "Glu276", "Arg292", "Arg371", "Tyr406"]
  }
];

export const COMPOUNDS: Compound[] = [
  {
    id: "naringenin",
    name: "Naringenin",
    source: {
      id: "Daun Cengkeh (Syzygium aromaticum) / Ekstrak",
      en: "Clove Leaves (Syzygium aromaticum) / Extract"
    },
    formula: "C15H12O5",
    molecularWeight: 272.07,
    baseAffinity: -8.4,
    atomsCount: 32,
    bondsCount: 34,
    description: {
      id: "Senyawa flavonoid dengan afinitas *docking* terbaik (-8.4 kcal/mol). Berinteraksi kuat via ikatan hidrogen dengan residu kunci Glu353 dan Arg394.",
      en: "Flavonoid compound with the best binding affinity (-8.4 kcal/mol). Interacts strongly via hydrogen bonding with key residues Glu353 and Arg394."
    }
  },
  {
    id: "caryophyllene_oxide",
    name: "(-)-Caryophyllene oxide",
    source: {
      id: "Daun Cengkeh (Syzygium aromaticum) / Ekstrak",
      en: "Clove Leaves (Syzygium aromaticum) / Extract"
    },
    formula: "C15H24O",
    molecularWeight: 220.18,
    baseAffinity: -8.2,
    atomsCount: 40,
    bondsCount: 42,
    description: {
      id: "Senyawa seskuiterpenoid oksida melimpah pada minyak cengkeh dengan afinitas -8.2 kcal/mol, didominasi oleh interaksi hidrofobik stabil pada kantong ER-α.",
      en: "Abundant sesquiterpenoid oxide in clove oil with -8.2 kcal/mol affinity, dominated by stable hydrophobic interactions inside the ER-α pocket."
    }
  },
  {
    id: "ellagic_acid",
    name: "Ellagic acid",
    source: {
      id: "Daun Cengkeh (Syzygium aromaticum) / Ekstrak",
      en: "Clove Leaves (Syzygium aromaticum) / Extract"
    },
    formula: "C14H6O8",
    molecularWeight: 302.01,
    baseAffinity: -8.1,
    atomsCount: 28,
    bondsCount: 30,
    description: {
      id: "Senyawa polifenol dengan afinitas -8.1 kcal/mol. Membentuk ikatan hidrogen mapan dengan Arg394 dan Leu387 pada saku aktif ER-α.",
      en: "Polyphenol compound with -8.1 kcal/mol affinity. Forms established hydrogen bonds with Arg394 and Leu387 on the ER-α active pocket."
    }
  },
  {
    id: "quercetin",
    name: "Quercetin",
    source: {
      id: "Daun Cengkeh (Syzygium aromaticum) / Ekstrak",
      en: "Clove Leaves (Syzygium aromaticum) / Extract"
    },
    formula: "C15H10O7",
    molecularWeight: 302.04,
    baseAffinity: -7.6,
    atomsCount: 32,
    bondsCount: 34,
    description: {
      id: "Senyawa flavonoid dengan aktivitas multimodal yang terbukti menghambat ekspresi berlebih reseptor ER-α dengan nilai afinitas -7.6 kcal/mol.",
      en: "Flavonoid compound with multimodal activity proven to inhibit overexpression of the ER-α receptor with -7.6 kcal/mol affinity."
    }
  },
  {
    id: "kaempferol",
    name: "Kaempferol",
    source: {
      id: "Daun Cengkeh (Syzygium aromaticum) / Ekstrak",
      en: "Clove Leaves (Syzygium aromaticum) / Extract"
    },
    formula: "C15H10O6",
    molecularWeight: 286.05,
    baseAffinity: -7.6,
    atomsCount: 31,
    bondsCount: 33,
    description: {
      id: "Senyawa flavonoid fitoestrogen potensial dengan afinitas -7.6 kcal/mol yang berinteraksi dalam saku pengikatan ligan ER-α.",
      en: "Potential phytoestrogen flavonoid compound with -7.6 kcal/mol affinity interacting inside the ER-α ligand-binding domain."
    }
  },
  {
    id: "curcumin",
    name: "Curcumin",
    source: {
      id: "Kunyit (Curcuma longa)",
      en: "Turmeric (Curcuma longa)"
    },
    formula: "C21H20O6",
    molecularWeight: 368.38,
    baseAffinity: -7.8,
    atomsCount: 47,
    bondsCount: 49,
    description: {
      id: "Polifenol alami dengan sifat antiinflamasi, antioksidan, dan antiviral yang kuat. Memiliki afinitas pengikatan yang fleksibel.",
      en: "A natural polyphenol with potent anti-inflammatory, antioxidant, and antiviral properties. Exhibits flexible binding affinity across multiple active sites."
    }
  },
  {
    id: "eugenol",
    name: "Eugenol",
    source: {
      id: "Cengkeh (Syzygium aromaticum)",
      en: "Cloves (Syzygium aromaticum)"
    },
    formula: "C10H12O2",
    molecularWeight: 164.2,
    baseAffinity: -5.9,
    atomsCount: 24,
    bondsCount: 24,
    description: {
      id: "Senyawa fenolik volatil utama minyak cengkeh. Terbukti memiliki efek antiseptik, anestetik lokal, dan penghambatan enzim.",
      en: "The primary volatile phenolic constituent of clove oil. Clinically proven to exhibit antiseptic, local anesthetic, and enzyme-inhibiting effects."
    }
  }
];

export const WORK_HISTORY = [
  {
    id: "bpom",
    period: "4 Mar 2025 - 4 Jul 2025",
    role: {
      id: "Analis Laboratorium Magang — QC/QA Farmasi, Kosmetik & Pangan",
      en: "Laboratory Analyst Intern — Pharma, Cosmetic & Food QC/QA"
    },
    institution: {
      id: "Balai Besar POM di Denpasar (Badan POM RI) • Lab Terakreditasi ISO/IEC 17025",
      en: "BPOM Denpasar (Indonesian FDA) • ISO/IEC 17025 Accredited Lab"
    },
    description: {
      id: "Melakukan pengujian mutu fisikokimia pada **200+ sampel obat, kosmetik, dan produk pangan** menggunakan instrumen HPLC dan Spektrofotometri UV-Vis sesuai standar ketat **GMP dan ISO/IEC 17025**. Mengelola log kalibrasi instrumen, dokumentasi analitis harian, pembuatan kurva kalibrasi, serta preparasi larutan standar volumetrik pada 3 sistem instrumen analitis dengan **nol temuan ketidaksesuaian (zero non-conformance)**. Lulus dengan **Predikat BAIK** (No. HM.03.04.13A.07.25.544) & evaluasi akademik **Nilai A (4.00 / 4.00)**.",
      en: "Performed physicochemical quality testing on **200+ pharmaceutical, cosmetic, and food samples** using HPLC and UV-Vis Spectrophotometry under strict **GMP and ISO/IEC 17025** standards. Managed instrument calibration logs, daily analytical documentation, calibration curves, and volumetric standard preparation across 3 analytical instrument systems with **zero non-conformance findings**. Awarded **GOOD (BAIK) Predicate** (Cert No. HM.03.04.13A.07.25.544) and **Academic Grade A (4.00 / 4.00)**."
    },
    skills: ["200+ Sampel Uji", "HPLC & UV-Vis", "ISO/IEC 17025", "GMP Compliance", "Zero Non-Conformance"],
    certificateUrl: "/certificates/bpom-internship.pdf"
  },
  {
    id: "seafood",
    period: "Feb 2025 - Mar 2025",
    role: {
      id: "Analis Quality Control (QC) — Cemaran Logam Berat (AAS) & Mutu Pangan",
      en: "Quality Control (QC) Analyst — Heavy Metals (AAS) & Food Safety"
    },
    institution: {
      id: "Bali Seafood Inspection Laboratory (BASIL) • Fasilitas Bersertifikasi HACCP",
      en: "Bali Seafood Inspection Laboratory (BASIL) • HACCP Certified Facility"
    },
    description: {
      id: "Menguji secara kuantitatif cemaran logam berat (Pb, Hg, Cd) dan parameter histamin pada **50+ batch ekspor** tuna sirip kuning serta bahan pangan untuk hotel, restoran, dan maskapai menggunakan **Atomic Absorption Spectroscopy (AAS)**, memastikan kepatuhan **100% terhadap batas regulasi Uni Eropa dan US FDA**. Melaksanakan destruksi asam sampel pangan, pembuatan kurva kalibrasi standar, dan verifikasi kontrol kualitas mutu berbasis protokol keamanan pangan **HACCP**.",
      en: "Quantitatively tested heavy metal contaminants (Pb, Hg, Cd) and histamine parameters across **50+ export batches** of yellowfin tuna and food products for hotels, restaurants, and airline catering using **Atomic Absorption Spectroscopy (AAS)**, ensuring **100% compliance with EU and US FDA** regulatory limits. Executed acid digestion, standard calibration curve modeling, and **HACCP** quality control verification."
    },
    skills: ["AAS (Pb, Hg, Cd)", "Uji Histamin", "50+ Batch Ekspor", "HACCP Protocol", "EU & US FDA Std"]
  },
  {
    id: "asdos",
    period: "Agu 2025 - Jun 2026",
    role: {
      id: "Asisten Dosen — Laboratorium Kimia Organik I & II",
      en: "Teaching Assistant — Organic Chemistry Laboratory I & II"
    },
    institution: {
      id: "Program Studi Kimia, Fakultas MIPA, Universitas Udayana",
      en: "Department of Chemistry, Faculty of Mathematics & Natural Sciences, Udayana University"
    },
    description: {
      id: "Membimbing dan mengawasi **100+ mahasiswa sarjana** dalam praktikum sintesis organik, distilasi fraksinasi, rekristalisasi, ekstraksi senyawa bahan alam, serta identifikasi gugus fungsi. Menegakkan kepatuhan protokol K3 laboratorium secara ketat sehingga mencapai **nol insiden kecelakaan kerja (zero safety incident)** selama lebih dari 30 sesi praktikum sepanjang 2 semester, serta mengevaluasi **200+ laporan praktikum** dan memimpin *pre-lab safety briefing*.",
      en: "Supervised and mentored **100+ undergraduate students** in organic synthesis, fractional distillation, recrystallization, natural product extraction, and functional group identification. Enforced strict laboratory OHS/K3 protocols achieving **zero safety incidents** across 30+ practicum sessions over 2 semesters, while evaluating **200+ lab reports** and leading pre-lab safety briefings."
    },
    skills: ["100+ Mahasiswa", "Sintesis & Pemurnian", "Zero Safety Incident", "K3 Laboratorium", "200+ Laporan Lab"]
  },
  {
    id: "computational",
    period: "2025 - 2026",
    role: {
      id: "Peneliti Kimia Komputasi & Pengembang Perangkat Lunak Ilmiah (Vibe Coding)",
      en: "Computational Chemistry Researcher & Scientific Software Developer (Vibe Coding)"
    },
    institution: {
      id: "Universitas Udayana & Open-Source Developer (github.com/krixsan)",
      en: "Udayana University & Open-Source Developer (github.com/krixsan)"
    },
    description: {
      id: "Melakukan penapisan virtual (*molecular docking*) **44 senyawa fitokimia LC-HRMS/MS** daun cengkeh terhadap reseptor kanker payudara ER-α (PDB: 3ERT, Nilai Skripsi **A / 4.00**), serta mengembangkan ekosistem perangkat lunak berbasis *Vibe Coding*: aplikasi desktop otomasi *docking* **DockVista PRO (v2.4)** & **CHEMIA (v1.5)**, web full-stack (**KasirKu Smart POS, KostMonitor, SocialFeed**), hingga *native porting* game PS4 ke PC berbasis **C++ & Vulkan 1.3**.",
      en: "Conducted virtual screening (*molecular docking*) of **44 LC-HRMS/MS phytochemicals** from clove leaves against breast cancer receptor ER-α (PDB: 3ERT, Thesis Grade **A / 4.00**), and engineered AI-assisted (*Vibe Coding*) software: desktop docking automation suite **DockVista PRO (v2.4)** & **CHEMIA (v1.5)**, full-stack web apps (**KasirKu Smart POS, KostMonitor, SocialFeed**), and native PS4-to-PC game ports in **C++ & Vulkan 1.3**."
    },
    skills: ["AutoDock Vina & PyMOL", "DockVista PRO v2.4", "React 19 & Next.js 15", "C++ & Vulkan 1.3", "ProTox 3.0"]
  }
];

export const RELEVANT_COURSEWORK = {
  id: [
    "Kimia Analitik Kuantitatif (A)",
    "Analisis Kimia Bahan Pangan (A)",
    "Metode Pemisahan (A)",
    "Manajemen & K3 Laboratorium (A)",
    "Praktik Kerja Lapangan / BPOM (A)",
    "Toksikologi Kimia (A)",
    "Uji Bioaktivitas (A)",
    "Fitokimia (A)",
    "Biomolekul & Enzim (A)",
    "Kimia Forensik (A)",
    "Metodologi Penelitian Ilmiah (A)"
  ],
  en: [
    "Quantitative Analytical Chemistry (A)",
    "Food Chemical Analysis (A)",
    "Separation Methods (A)",
    "Lab Management & OHS/K3 (A)",
    "BPOM Field Internship (A)",
    "Chemical Toxicology (A)",
    "Bioactivity Assay (A)",
    "Phytochemistry (A)",
    "Biomolecules & Enzymes (A)",
    "Forensic Chemistry (A)",
    "Scientific Research Methodology (A)"
  ]
};

export const VIBE_CODING_PROJECTS = [
  {
    id: "ps4-native-pc-port",
    year: "2026",
    badge: "NATIVE GAME PORTING • C++ / VULKAN 1.3",
    title: {
      id: "Porting Game PlayStation 4 (PS4) ke Native PC — Sengoku Basara 4 Sumeragi & J-Stars Victory VS+",
      en: "PlayStation 4 (PS4) to Native PC Game Porting — Sengoku Basara 4 Sumeragi & J-Stars Victory VS+"
    },
    subtitle: {
      id: "Clean-Room Reverse Engineering & x86_64 Native Execution Runtime Tanpa Emulator",
      en: "Clean-Room Reverse Engineering & Emulator-Free x86_64 Native Execution Runtime"
    },
    description: {
      id: "Membangun *runtime* eksekusi *native* x86_64 dan *presentation engine* **Vulkan 1.3** melalui *vibe coding* dan *clean-room reverse engineering* untuk mem-*porting* game konsol PS4 (*Basara-4-Sumeragi-Native-PC* & *J-Stars-Victory-VS-PC*) agar berjalan secara *native* di Windows PC tanpa emulator. Dilengkapi fitur *unlocked framerate* (**120+ FPS**), *supersampling* resolusi tinggi, input **SDL3** *zero-latency*, serta *custom game launcher*.",
      en: "Engineered a native x86_64 execution runtime and **Vulkan 1.3** presentation engine via vibe coding and clean-room reverse engineering to port PS4 console titles (*Basara-4-Sumeragi-Native-PC* & *J-Stars-Victory-VS-PC*) to run natively on Windows PC without an emulator. Features unlocked framerate (**120+ FPS**), high-resolution supersampling, zero-latency **SDL3** gamepad input, and a custom .NET launcher."
    },
    tech: ["C++", "C# (.NET)", "Vulkan 1.3 API", "SDL3", "x86_64 Native Runtime", "CMake / Ninja"],
    metrics: [
      { label: "Framerate", value: "120+ FPS Unlocked" },
      { label: "Graphics API", value: "Vulkan 1.3 Native" },
      { label: "Architecture", value: "x86_64 No-Emulator" }
    ],
    githubUrl: "https://github.com/krixsan",
    repoNames: ["Basara-4-Sumeragi-Native-PC", "J-Stars-Victory-VS-PC"]
  },
  {
    id: "dockvista-chemia",
    year: "2026",
    badge: "SCIENTIFIC DESKTOP APPS • PYTHON & ELECTRON",
    title: {
      id: "DockVista PRO (v2.4) & CHEMIA (v1.5) — Perangkat Lunak Desktop Automasi Komputasi Kimia",
      en: "DockVista PRO (v2.4) & CHEMIA (v1.5) — Computational Chemistry Automation Desktop Suite"
    },
    subtitle: {
      id: "Otomatisasi Alur Molecular Docking Batch & Platform Simulasi Kimia Interaktif",
      en: "Batch Molecular Docking Pipeline Automation & Interactive Chemistry Simulation Platform"
    },
    description: {
      id: "Mengembangkan aplikasi desktop GUI **DockVista PRO (v2.4)** yang mengotomasikan alur *molecular docking* (preparasi ligan batch, konversi PDBQT, kalkulasi AutoDock Vina, hingga ekspor laporan Excel otomatis yang mempercepat riset **>70%**) serta platform simulasi kimia **CHEMIA (v1.5)** yang mencakup **8 modul pembelajaran interaktif** dan kalkulator preparasi larutan analitis yang teruji dengan **50+ unit test suites**.",
      en: "Developed the **DockVista PRO (v2.4)** desktop GUI application automating batch molecular docking workflows (batch ligand preparation, PDBQT conversion, AutoDock Vina execution, and automated Excel reporting that accelerates research by **>70%**) alongside **CHEMIA (v1.5)** featuring **8 interactive chemistry modules** and analytical solution calculators backed by **50+ Vitest unit test suites**."
    },
    tech: ["Python", "CustomTkinter GUI", "Electron", "React", "TypeScript", "AutoDock Vina", "OpenBabel", "Vitest (50+ Suites)"],
    metrics: [
      { label: "Time Saved", value: ">70% Faster Docking" },
      { label: "CHEMIA Modules", value: "8 Interactive Labs" },
      { label: "Automated Tests", value: "50+ Unit Test Suites" }
    ],
    githubUrl: "https://github.com/krixsan",
    repoNames: ["DockVista-PRO-v2.4", "CHEMIA-v1.5"]
  },
  {
    id: "fullstack-web-suite",
    year: "2026",
    badge: "FULL-STACK WEB APPS • NEXT.JS 15 & REACT 19",
    title: {
      id: "Pengembangan Website Full-Stack Modern (Portofolio Ilmiah 3D, KasirKu POS, KostMonitor, SocialFeed)",
      en: "Modern Full-Stack Web Applications (3D Scientific Portfolio, KasirKu POS, KostMonitor, SocialFeed)"
    },
    subtitle: {
      id: "Aplikasi Web Interaktif untuk Riset Laboratorium, Kasir UMKM 3-in-1, ERP Properti & Komunitas",
      en: "Interactive Web Apps for Lab Research, 3-in-1 Retail POS, Property ERP & Social PWA"
    },
    description: {
      id: "Merancang dan men-*deploy* berbagai aplikasi web interaktif menggunakan metode *vibe coding*: website portofolio riset dengan visualisasi molekul 3D & kalkulator pengenceran laboratorium QC, sistem kasir UMKM 3-in-1 (**KasirKu Smart POS**) dengan pemindai barcode & kontrol masa kedaluwarsa **FIFO/FEFO**, sistem ERP manajemen properti (**KostMonitor**), serta PWA komunitas sosial (**SocialFeed**).",
      en: "Designed and deployed full-stack web applications via vibe coding: a scientific research portfolio with 3D molecular visualization & QC dilution calculators, a 3-in-1 SME point-of-sale system (**KasirKu Smart POS**) with barcode scanning and **FIFO/FEFO** expiration control, a property management ERP (**KostMonitor**), and a social community PWA (**SocialFeed**)."
    },
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Laravel 13", "Prisma ORM", "SQLite"],
    metrics: [
      { label: "KasirKu POS", value: "3-in-1 + FIFO/FEFO" },
      { label: "KostMonitor", value: "Property ERP System" },
      { label: "Live Deployment", value: "Vercel Edge Cloud" }
    ],
    githubUrl: "https://github.com/krixsan",
    liveUrl: "https://portofolio-mank-krisna.vercel.app",
    repoNames: ["Portofolio-Mank-Krisna", "KasirKu-Smart-POS", "KostMonitor", "SocialFeed"]
  }
];

export const GALLERY_ITEMS = [
  {
    id: "thesis-clove-er",
    title: {
      id: "Riset Skripsi: Potensi Daun Cengkeh terhadap ER-α",
      en: "Thesis Research: Clove Leaf Bioactives vs ER-α"
    },
    category: "Riset / Skripsi",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=800&q=80",
    description: {
      id: "Riset skripsi meneliti 44 senyawa terdeteksi LC-HRMS/MS pada ekstrak etanol daun cengkeh sebagai inhibitor *Estrogen Receptor Alpha* (ER-α, PDB: 3ERT). Naringenin, (-)-caryophyllene oxide, dan ellagic acid diprioritaskan sebagai kandidat terbaik.",
      en: "Undergraduate thesis screening 44 LC-HRMS/MS detected compounds from clove leaves as Estrogen Receptor Alpha (ER-α, PDB: 3ERT) inhibitors. Naringenin, (-)-caryophyllene oxide, and ellagic acid were prioritized as top leads."
    },
    stats: { target: "ER-α (PDB: 3ERT)", metode: "LC-HRMS/MS & Docking", affinity: "-8.4 to -8.1 kcal/mol" }
  },
  {
    id: "onmipa-nasional",
    title: {
      id: "Lolos & Finalis ONMIPA Tingkat Nasional 2025",
      en: "National Level ONMIPA Finalist & Qualifier (2025)"
    },
    category: "Prestasi / Award",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    description: {
      id: "Berhasil lolos seleksi wilayah tingkat tinggi dan melaju sebagai Finalis Tingkat Nasional dalam Olimpiade Nasional Matematika dan Ilmu Pengetahuan Alam Perguruan Tinggi (ONMIPA-PT) bidang Kimia tahun 2025 mewakili Universitas Udayana.",
      en: "Successfully qualified through highly competitive regional selection to compete as a National Finalist in the National Olympiad in Mathematics and Natural Sciences (ONMIPA-PT) in the Chemistry division in 2025 representing Udayana University."
    },
    stats: { bidang: "Kimia / Chemistry", tingkat: "Nasional / National", penyelenggara: "Puspresnas (2025)" }
  },
  {
    id: "asdos-organik",
    title: {
      id: "Asisten Dosen Praktikum Kimia Organik",
      en: "Organic Chemistry Practicum Teaching Assistant"
    },
    category: "Akademik",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    description: {
      id: "Membimbing ratusan mahasiswa dalam melaksanakan praktikum Kimia Organik I & II di lab Universitas Udayana, membekali mereka dengan keahlian sintesis, isolasi bahan alam, serta kepatuhan K3.",
      en: "Instructed hundreds of undergraduate chemistry students in Organic Chemistry I & II laboratory courses at Udayana University, guiding them on synthesis, natural product isolation, and biosafety protocols."
    },
    stats: { peran: "Asisten Dosen (Asdos)", lab: "Kimia Organik I & II", instansi: "Univ. Udayana" }
  },
  {
    id: "lab-bpom",
    title: {
      id: "Analisis Kadar Bahan Aktif Sediaan Obat & Kosmetik",
      en: "HPLC Assay of Active Ingredients in Pharmaceuticals & Cosmetics"
    },
    category: "BPOM QC",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=800&q=80",
    description: {
      id: "Dokumentasi preparasi sampel dan pengujian kadar zat aktif obat atau bahan pengawet kosmetik menggunakan kromatografi cair kinerja tinggi (HPLC). Dilakukan di laboratorium terakreditasi BPOM.",
      en: "Documentation of sample preparation and assay of active pharmaceutical ingredients or cosmetic preservatives using High-Performance Liquid Chromatography (HPLC). Executed in BPOM certified testing facilities."
    },
    stats: { instrument: "HPLC / UV-Vis", accuracy: "99.8%", standard: "ISO 17025" }
  },
  {
    id: "seafood-testing",
    title: {
      id: "Analisis Spektrometri Serapan Atom (AAS)",
      en: "Atomic Absorption Spectroscopy (AAS) Analysis"
    },
    category: "QC Seafood",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: {
      id: "Analisis residu logam berat Pb dan Hg pada sampel tuna sirip kuning untuk sertifikasi ekspor Uni Eropa dan Amerika Serikat di Bali Seafood Inspection Lab.",
      en: "Trace analysis of heavy metals Pb and Hg on yellowfin tuna tissue for EU and US export clearance certifications at Bali Seafood Inspection Lab."
    },
    stats: { detectionLimit: "0.01 ppm", matrix: "Tuna Fish Tissue", method: "AAS Flame/Vapor" }
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "bpom-internship",
    title: {
      id: "Sertifikat Kerja Praktek / Magang — Balai Besar POM di Denpasar",
      en: "Internship Completion Certificate — BPOM (National Agency of Drug and Food Control)"
    },
    issuer: "Badan POM RI — Balai Besar POM di Denpasar",
    credentialId: "HM.03.04.13A.07.25.544",
    date: {
      id: "14 Juli 2025 (Periode: 4 Mar – 4 Jul 2025)",
      en: "July 14, 2025 (Period: Mar 4 – Jul 4, 2025)"
    },
    category: "instansi",
    categoryLabel: {
      id: "Magang / Instansi",
      en: "Government Internship"
    },
    description: {
      id: "Sertifikat resmi penyelesaian program Kerja Praktek/Magang dengan predikat BAIK di Balai Besar Pengawas Obat dan Makanan (BBPOM) di Denpasar. Meliputi pengujian mutu fisiko-kimia sediaan obat, makanan, dan kosmetik menggunakan instrumen HPLC dan Spektrofotometri UV-Vis sesuai standar ISO/IEC 17025.",
      en: "Official internship completion certificate awarded with a GOOD (BAIK) predicate at the National Agency of Drug and Food Control (BBPOM) in Denpasar. Covered physicochemical quality testing of pharmaceuticals, food, and cosmetics using HPLC and UV-Vis Spectrophotometry under ISO/IEC 17025 standards."
    },
    skills: ["ISO/IEC 17025", "HPLC", "UV-Vis Spectrophotometry", "Pharmaceutical & Food QC", "GMP Compliance"],
    previewImage: "/certificates/previews/bpom-internship.png",
    pdfUrl: "/certificates/bpom-internship.pdf",
    featured: true,
    signers: "Dra. I Gusti Ayu Adhi Aryapatni, Apt (Kepala BBPOM di Denpasar — TTE BSrE/BSSN)"
  },
  {
    id: "qc-food-industry",
    title: {
      id: "Quality Control (QC) in Food Industry",
      en: "Quality Control (QC) in Food Industry"
    },
    issuer: "PT Makin Ahli Indonesia",
    credentialId: "2596/AP-0P6/MA/XI-2026",
    date: {
      id: "1 November 2026",
      en: "November 1, 2026"
    },
    category: "qc_qa",
    categoryLabel: {
      id: "QC & QA Industri",
      en: "Industrial QC & QA"
    },
    description: {
      id: "Sertifikasi kompetensi pengendalian mutu (Quality Control) pada industri pangan, mencakup inspeksi bahan baku (incoming material), pengawasan proses produksi (in-process control), pengujian produk akhir (finished product), serta penanganan ketidaksesuaian mutu.",
      en: "Professional training certification in Food Industry Quality Control (QC), covering raw material inspection, in-process monitoring, finished product analytical testing, and non-conformance handling."
    },
    skills: ["Quality Control (QC)", "In-Process Inspection", "Food Analysis", "Sampling Plan", "Organoleptic & Physicochemical"],
    previewImage: "/certificates/previews/qc-food-industry.png",
    pdfUrl: "/certificates/qc-food-industry.pdf",
    signers: "Ariyani Wastika Mukti, S.Si (Head of L&D) & Dini Puteri Khairani, S.T.P (Trainer)"
  },
  {
    id: "qa-food-industry",
    title: {
      id: "Quality Assurance (QA) in Food Industry",
      en: "Quality Assurance (QA) in Food Industry"
    },
    issuer: "PT Makin Ahli Indonesia",
    credentialId: "2236/AP-0P5/MA/X-2026",
    date: {
      id: "31 Oktober 2026",
      en: "October 31, 2026"
    },
    category: "qc_qa",
    categoryLabel: {
      id: "QC & QA Industri",
      en: "Industrial QC & QA"
    },
    description: {
      id: "Sertifikasi penjaminan mutu (Quality Assurance) industri pangan yang berfokus pada perancangan sistem manajemen mutu, penyusunan dokumen SOP, kepatuhan regulasi keamanan pangan, audit mutu internal, dan tindakan korektif/preventif (CAPA).",
      en: "Food Industry Quality Assurance (QA) certification focusing on quality management system design, SOP documentation, regulatory compliance, internal quality auditing, and CAPA (Corrective and Preventive Action)."
    },
    skills: ["Quality Assurance (QA)", "SOP Documentation", "Internal Quality Audit", "CAPA", "Regulatory Compliance"],
    previewImage: "/certificates/previews/qa-food-industry.png",
    pdfUrl: "/certificates/qa-food-industry.pdf",
    signers: "Ariyani Wastika Mukti, S.Si (Head of L&D) & Rizka Amalia, S.Gz (Trainer)"
  },
  {
    id: "iso-22000",
    title: {
      id: "ISO 22000:2018 (Food Safety Management System)",
      en: "ISO 22000:2018 (Food Safety Management System)"
    },
    issuer: "PT Makin Ahli Indonesia",
    credentialId: "5639/AP-0P3/MA/X-2026",
    date: {
      id: "1 November 2026",
      en: "November 1, 2026"
    },
    category: "food_safety",
    categoryLabel: {
      id: "Food Safety, ISO & GMP",
      en: "Food Safety, ISO & GMP"
    },
    description: {
      id: "Sertifikasi pemahaman dan penerapan Sistem Manajemen Keamanan Pangan berstandar internasional ISO 22000:2018, mengintegrasikan komunikasi interaktif, manajemen sistem berbasis siklus PDCA, Program Prasyarat (PRP), dan prinsip HACCP.",
      en: "Certification in implementing the international ISO 22000:2018 Food Safety Management System (FSMS), integrating interactive communication, PDCA system management, Prerequisite Programs (PRPs), and HACCP principles."
    },
    skills: ["ISO 22000:2018", "FSMS", "PDCA Cycle", "Prerequisite Programs (PRP)", "Food Safety Audit"],
    previewImage: "/certificates/previews/iso-22000.png",
    pdfUrl: "/certificates/iso-22000.pdf",
    signers: "Ariyani Wastika Mukti, S.Si (Head of L&D) & Sanjaya, B.Sc. (Trainer)"
  },
  {
    id: "fssc-22000",
    title: {
      id: "FSSC 22000 Version 7.0 (Food Safety System Certification)",
      en: "FSSC 22000 Version 7.0 (Food Safety System Certification)"
    },
    issuer: "PT Makin Ahli Indonesia",
    credentialId: "5639/AP-0P4/MA/X-2026",
    date: {
      id: "1 November 2026",
      en: "November 1, 2026"
    },
    category: "food_safety",
    categoryLabel: {
      id: "Food Safety, ISO & GMP",
      en: "Food Safety, ISO & GMP"
    },
    description: {
      id: "Sertifikasi skema keamanan pangan global FSSC 22000 versi 7.0 (diakui GFSI) yang menggabungkan ISO 22000, ISO/TS 22002-1 (PRP spesifik industri), serta persyaratan tambahan seperti Food Defense (TACCP), Food Fraud Mitigation (VACCP), dan Food Safety Culture.",
      en: "Certification in the GFSI-recognized FSSC 22000 Version 7.0 global food safety scheme, combining ISO 22000, ISO/TS 22002-1 PRPs, and additional requirements including Food Defense (TACCP), Food Fraud Mitigation (VACCP), and Food Safety Culture."
    },
    skills: ["FSSC 22000 v7.0", "GFSI Standard", "Food Defense (TACCP)", "Food Fraud (VACCP)", "ISO/TS 22002-1"],
    previewImage: "/certificates/previews/fssc-22000.png",
    pdfUrl: "/certificates/fssc-22000.pdf",
    signers: "Ariyani Wastika Mukti, S.Si (Head of L&D) & Sanjaya, B.Sc. (Trainer)"
  },
  {
    id: "haccp",
    title: {
      id: "HACCP (Hazard Analysis and Critical Control Point)",
      en: "HACCP (Hazard Analysis and Critical Control Point)"
    },
    issuer: "PT Makin Ahli Indonesia",
    credentialId: "5639/AP-0P2/MA/X-2026",
    date: {
      id: "31 Oktober 2026",
      en: "October 31, 2026"
    },
    category: "food_safety",
    categoryLabel: {
      id: "Food Safety, ISO & GMP",
      en: "Food Safety, ISO & GMP"
    },
    description: {
      id: "Sertifikasi kompetensi analisis bahaya dan pengendalian titik kritis (HACCP), mencakup 7 prinsip HACCP, identifikasi bahaya biologis, kimia, dan fisik pada rantai produksi pangan, serta penetapan batas kritis (critical limit) dan tindakan korektif.",
      en: "Competency certification in Hazard Analysis and Critical Control Points (HACCP), covering the 7 HACCP principles, biological/chemical/physical hazard identification across food production chains, critical limits, and corrective actions."
    },
    skills: ["HACCP Plan", "CCP Identification", "Hazard Analysis", "Food Safety", "Risk Assessment"],
    previewImage: "/certificates/previews/haccp.png",
    pdfUrl: "/certificates/haccp.pdf",
    signers: "Ariyani Wastika Mukti, S.Si (Head of L&D) & Sanjaya, B.Sc. (Trainer)"
  },
  {
    id: "gmp",
    title: {
      id: "GMP (Good Manufacturing Practices)",
      en: "GMP (Good Manufacturing Practices)"
    },
    issuer: "PT Makin Ahli Indonesia",
    credentialId: "5639/AP-0P1/MA/X-2026",
    date: {
      id: "31 Oktober 2026",
      en: "October 31, 2026"
    },
    category: "food_safety",
    categoryLabel: {
      id: "Food Safety, ISO & GMP",
      en: "Food Safety, ISO & GMP"
    },
    description: {
      id: "Sertifikasi Cara Produksi yang Baik (GMP / CPPOB), mencakup desain higienis fasilitas produksi, sanitasi & higiene personel (SSOP), pengendalian kontaminasi silang, pemeliharaan peralatan, serta ketertelusuran (traceability) batch produksi.",
      en: "Good Manufacturing Practices (GMP) certification covering hygienic facility design, sanitation & personnel hygiene (SSOP), cross-contamination control, equipment maintenance, and production batch traceability."
    },
    skills: ["GMP / CPPOB", "Sanitation & Hygiene (SSOP)", "Cross-Contamination Control", "Batch Traceability"],
    previewImage: "/certificates/previews/gmp.png",
    pdfUrl: "/certificates/gmp.pdf",
    signers: "Ariyani Wastika Mukti, S.Si (Head of L&D) & Sanjaya, B.Sc. (Trainer)"
  }
];

export const TRANSLATIONS = {
  id: {
    navHome: "Beranda",
    navAbout: "Tentang",
    navCertificates: "Sertifikasi",
    navActivities: "Aktivitas",
    navSimulator: "Simulator *In Silico*",
    navCalculator: "Alat Lab QC",
    navGallery: "Dokumentasi",
    navGuestbook: "Buku Tamu",
    navContact: "Kontak",
    heroGreeting: "Halo! Perkenalkan, saya",
    heroName: "Mank Krisna",
    heroTitle: "I Komang Bayu Kresna, S.Si.",
    heroSubtitle: "Analis Quality Control (QC/QA) • Kimiawan Komputasi (*In Silico*) • Pengembang Web & Perangkat Lunak (*Vibe Coding*)",
    heroBio: "Finalis Nasional ONMIPA-PT Kimia 2025 & Sarjana Kimia Universitas Udayana (IPK 3.77/4.00 — *Cum Laude*). Mengintegrasikan presisi analisis laboratorium QC/QA industri pangan & farmasi (HPLC, AAS, UV-Vis), kimia komputasi *in silico*, serta rekayasa perangkat lunak berbasis AI (*Vibe Coding*) untuk aplikasi web modern, desktop ilmiah, hingga *native porting* game PS4 ke PC.",
    heroBtnSim: "Mulai Simulasi Docking",
    heroBtnContact: "Hubungi Saya",
    heroBtnCv: "Lihat & Unduh CV",
    
    skillsInSilico: "Komputasi & *In Silico*",
    skillsLab: "Laboratorium (QC/QA)",
    skillsOther: "Sertifikasi & Standar Mutu",

    aboutTitle: "Dedikasi & Riset Laboratorium",
    aboutSubtitle: "— Menjembatani Eksperimen Riil, Komputasi & Rekayasa Perangkat Lunak",
    aboutBio1: "Saya adalah Finalis Nasional ONMIPA-PT Bidang Kimia 2025 dan lulusan Sarjana Kimia (S.Si.) Universitas Udayana dengan predikat Dengan Pujian (*Cum Laude*, IPK 3.77 / 4.00, 146 SKS selesai dalam 8 semester). Selama masa studi, saya meraih Nilai A (4.00) pada seluruh mata kuliah inti analitik & pangan, serta dipercaya menjadi Asisten Dosen Laboratorium Kimia Organik I & II yang membimbing 100+ mahasiswa sarjana dengan capaian nol insiden kecelakaan kerja (*zero safety incident*).",
    aboutBio2: "Kompetensi profesional saya diperkuat melalui pengalaman menguji 200+ sampel obat, kosmetik, dan pangan di Balai Besar POM Denpasar (HPLC & UV-Vis berstandar ISO/IEC 17025 & GMP, Predikat BAIK) serta menguji 50+ batch ekspor tuna sirip kuning dan pangan hotel/maskapai di *Bali Seafood Inspection Laboratory* (AAS & protokol HACCP). Selain itu, saya aktif mengembangkan perangkat lunak ilmiah (**DockVista PRO v2.4** & **CHEMIA v1.5**), aplikasi web *full-stack* (**KasirKu Smart POS, KostMonitor, SocialFeed**), serta *porting* game PlayStation 4 ke PC secara *native* (`github.com/krixsan`).",
    aboutSkillsTitle: "Matriks Keahlian Profesional & Teknis (Sesuai CV)",
    
    pubTitle: "Publikasi Ilmiah & Abstrak",
    pubSubtitle: "— Dokumentasi Karya Tulis Riset Skripsi (Nilai A / 4.00 • 6 SKS)",
    pubThesisTitle: "Potensi Senyawa Ekstrak Etanol Daun Cengkeh (Syzygium aromaticum L.) sebagai Inhibitor Reseptor Estrogen Alfa (ER-α) Secara In Silico",
    pubThesisAbstract: "Melakukan penapisan virtual (*molecular docking*) terhadap 44 senyawa fitokimia teridentifikasi LC-HRMS/MS pada ekstrak etanol 70% daun cengkeh terhadap reseptor target kanker payudara ER-alfa (PDB ID: 3ERT) menggunakan AutoDock Vina. Mengidentifikasi 3 senyawa kandidat terbaik dengan afinitas pengikatan melampaui ligan alami estradiol (-7.88 kkal/mol): **Naringenin (-8.415 kkal/mol)**, **(-)-Caryophyllene oxide (-8.161 kkal/mol)**, dan **Asam Elagat (-8.134 kkal/mol)**. Memverifikasi stabilitas interaksi ikatan hidrogen pada residu aktif kunci (Glu353 dan Arg394) menggunakan PyMOL & BIOVIA Discovery Studio, serta mengonfirmasi profil farmakokinetik dan keamanan toksisitas oral (Kelas IV–V) melalui ProTox 3.0.",
    pubRepoLink: "Uji Langsung di Simulator Docking",

    simTitle: "Simulator *Molecular Docking* *In Silico*",
    simSubtitle: "— Pengujian Afinitas Ikatan Senyawa Aktif Secara *Real-Time*",
    simIntro: "Gunakan simulator interaktif ini untuk mempelajari metode penapisan virtual (*virtual screening*). Anda dapat memilih target protein dan senyawa aktif bahan alam yang ingin diuji, lalu jalankan simulasi untuk melihat nilai energi bebas pengikatan (ΔG), konstanta inhibisi (Ki), serta visualisasi interaksi residu asam aminonya secara langsung.",
    simSelectProtein: "Pilih Reseptor Protein (*Target*)",
    simSelectCompound: "Pilih Senyawa Ligan (Bahan Alam)",
    simBtnRun: "Jalankan Simulasi *Docking*",
    simRunning: "Menghitung medan gaya molekul & kalkulasi energi kisi...",
    simPdbCode: "Kode PDB",
    simTargetPath: "Patologi Target",
    simActiveSite: "Saku Aktif (Residu)",
    simFormula: "Formula Kimia",
    simMw: "Berat Molekul",
    simSource: "Sumber Alam",
    simResultTitle: "Laporan Hasil *Docking* Komputasi",
    simEnergy: "Energi Bebas Pengikatan (ΔG)",
    simInhibition: "Konstanta Inhibisi (Ki) Terhitung",
    simLogs: "Log Konsol Komputasi",
    simInteractions: "Interaksi Pengikatan Residu Kunci",
    simTypeHbond: "Ikatan Hidrogen",
    simTypeHydrophobic: "Interaksi Hidrofobik",
    simTypeElectrostatic: "Interaksi Elektrostatik",

    calcTitle: "Alat Bantu Kalkulator Laboratorium QC",
    calcSubtitle: "— Otomatisasi Perhitungan Kimia Analitis Presisi",
    calcIntro: "Berikut adalah beberapa kalkulator praktis yang digunakan dalam mempermudah perhitungan pengenceran larutan dan molaritas harian pada analisis laboratorium.",
    calcTabDilution: "Pengenceran Larutan (C1.V1 = C2.V2)",
    calcTabMolarity: "Kalkulator Molaritas",
    calcConcentration: "Konsentrasi",
    calcVolume: "Volume",
    calcInitial: "Larutan Pekat (Induk - 1)",
    calcTarget: "Larutan Target (Hasil - 2)",
    calcCalculate: "Hitung Hasil",
    calcDilResult: "Volume larutan pekat yang perlu dipipet adalah",
    calcMolarityResult: "Massa zat yang diperlukan adalah",
    calcSoluteMass: "Massa Zat Terlarut",
    calcVolumeLiters: "Volume Larutan",

    galleryTitle: "Dokumentasi & Riset Portofolio",
    gallerySubtitle: "— Galeri Kerja Laboratorium dan Visualisasi *In Silico*",
    galleryIntro: "Dokumentasi kegiatan laboratorium di BPOM, pengujian mutu ekspor komoditas laut, serta hasil visualisasi 3D dari riset kimia komputasi.",
    galleryStats: "Detail Teknis",

    chatTitle: "Asisten Lab Virtual Mank Krisna AI",
    chatSubtitle: "Tanyakan apa saja tentang Mank Krisna, *molecular docking*, instrumen laboratorium, atau kimia secara umum.",
    chatPlaceholder: "Tanyakan tentang *docking*, BPOM, atau riset laboratorium...",
    chatSend: "Kirim",
    chatInitMessage: "Halo! Saya adalah Asisten *Lab* Virtual Mank Krisna. Anda dapat mengajukan pertanyaan seputar riset *in silico* (*docking* molekuler), instrumen analisis laboratorium (AAS/HPLC), pengalaman kerja di BPOM & *Bali Seafood*, atau topik diskusi menarik lainnya seputar ilmu kimia. Apa yang ingin Anda diskusikan hari ini?",

    guestTitle: "Buku Tamu Rekan & Kolega",
    guestSubtitle: "Tinggalkan pesan, dukungan, atau umpan balik profesional untuk Mank Krisna.",
    guestPlaceholderName: "Nama Anda",
    guestPlaceholderRole: "Instansi / Jabatan (misal: Peneliti, *QC Supervisor*)",
    guestPlaceholderMessage: "Tulis pesan atau umpan balik Anda...",
    guestBtnSubmit: "Tandatangani Buku Tamu",
    guestEmpty: "Belum ada tanda tangan. Silakan menjadi yang pertama meninggalkan pesan di sini!",

    contactTitle: "Hubungi & Mulai Kolaborasi",
    contactSubtitle: "Tertarik untuk berkolaborasi dalam riset, membutuhkan analis QC/QA laboratorium, atau ingin berdiskusi mengenai visualisasi kimia 3D? Silakan hubungi saya secara langsung. Saya siap berdiskusi secara profesional!",
    contactViaEmail: "Kirim Email Langsung",
    contactViaWa: "Hubungi via WhatsApp",
    contactLocation: "Singakerta, Ubud, Gianyar, Bali (Siap Relokasi)"
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navCertificates: "Certifications",
    navActivities: "Activities",
    navSimulator: "In Silico Simulator",
    navCalculator: "QC Lab Tools",
    navGallery: "Documentation",
    navGuestbook: "Guestbook",
    navContact: "Contact",

    heroGreeting: "Hello, meet",
    heroName: "Mank Krisna",
    heroTitle: "I Komang Bayu Kresna, S.Si.",
    heroSubtitle: "Quality Control (QC/QA) Analyst • Computational Chemist (*In Silico*) • Web & Software Developer (*Vibe Coding*)",
    heroBio: "ONMIPA-PT National Chemistry Finalist 2025 & B.Sc. in Chemistry from Udayana University (GPA 3.77/4.00 — *Cum Laude*). Integrating high-precision food & pharmaceutical QC/QA lab analytics (HPLC, AAS, UV-Vis) with *in silico* molecular docking and AI-assisted software engineering (*Vibe Coding*) for web apps, scientific desktop suites, and native PS4-to-PC game ports.",
    heroBtnSim: "Start Docking Simulation",
    heroBtnContact: "Contact Me",
    heroBtnCv: "Preview & Download CV",

    skillsInSilico: "Computational & *In Silico*",
    skillsLab: "Wet Lab (QC/QA)",
    skillsOther: "Certifications & Standards",

    aboutTitle: "Laboratory Dedication & Research",
    aboutSubtitle: "— Bridging Wet-Lab Experiments, Computation & Software Engineering",
    aboutBio1: "I am a 2025 National Finalist in the ONMIPA-PT Chemistry Olympiad and a Bachelor of Science in Chemistry (S.Si.) graduate from Udayana University with *Cum Laude* honors (GPA 3.77 / 4.00, 146 credits completed in 8 semesters). Throughout my degree, I achieved straight A (4.00) grades across all core analytical and food chemistry courses, and served as Teaching Assistant for Organic Chemistry Laboratories I & II supervising 100+ undergraduates with zero safety incidents.",
    aboutBio2: "My laboratory career includes testing 200+ pharmaceutical, cosmetic, and food samples at BPOM Denpasar (HPLC & UV-Vis under ISO/IEC 17025 & GMP, GOOD Predicate) and analyzing heavy metals & histamine across 50+ yellowfin tuna export and hospitality batches at the *Bali Seafood Inspection Laboratory* (AAS & HACCP). Beyond the lab, I build scientific desktop software (**DockVista PRO v2.4** & **CHEMIA v1.5**), full-stack web applications (**KasirKu Smart POS, KostMonitor, SocialFeed**), and native PlayStation 4 to PC game ports (`github.com/krixsan`).",
    aboutSkillsTitle: "Professional & Technical Skills Matrix (CV Verified)",

    pubTitle: "Scientific Publications & Abstracts",
    pubSubtitle: "— Undergraduate Thesis Research (Grade A / 4.00 • 6 Credits)",
    pubThesisTitle: "In Silico Potential of Clove Leaf Ethanol Extract (Syzygium aromaticum L.) Compounds as Estrogen Receptor Alpha (ER-α) Inhibitors",
    pubThesisAbstract: "Conducted virtual screening (*molecular docking*) of 44 LC-HRMS/MS-identified phytochemicals from 70% ethanol extract of clove leaves against breast cancer target receptor ER-alpha (PDB ID: 3ERT) using AutoDock Vina. Identified 3 top lead candidates surpassing the native estradiol ligand (-7.88 kcal/mol): **Naringenin (-8.415 kcal/mol)**, **(-)-Caryophyllene oxide (-8.161 kcal/mol)**, and **Ellagic acid (-8.134 kcal/mol)**. Verified hydrogen-bond stability at key active residues (Glu353 and Arg394) via PyMOL & BIOVIA Discovery Studio, and confirmed oral toxicity safety (Class IV–V) via ProTox 3.0.",
    pubRepoLink: "Test Live in Docking Simulator",

    simTitle: "In Silico Molecular Docking Simulator",
    simSubtitle: "— Real-Time Compound Affinity Screening",
    simIntro: "Use this simulator to explore the virtual screening methodologies used by Mank Krisna. Select a protein receptor (disease target) and an active natural compound ligand, then execute the docking algorithm to calculate binding free energy (ΔG), inhibition constants (Ki), and map residue interactions.",
    simSelectProtein: "Select Protein Receptor (Target)",
    simSelectCompound: "Select Ligand Compound (Natural)",
    simBtnRun: "Run Docking Simulation",
    simRunning: "Computing molecular force fields and grid energy calculations...",
    simPdbCode: "PDB ID",
    simTargetPath: "Target Pathology",
    simActiveSite: "Active Pocket (Residues)",
    simFormula: "Chemical Formula",
    simMw: "Molecular Weight",
    simSource: "Natural Source",
    simResultTitle: "Computational Docking Report",
    simEnergy: "Binding Free Energy (ΔG)",
    simInhibition: "Calculated Inhibition Constant (Ki)",
    simLogs: "Computational Console Logs",
    simInteractions: "Key Amino Acid Binding Interactions",
    simTypeHbond: "Hydrogen Bond",
    simTypeHydrophobic: "Hydrophobic Interaction",
    simTypeElectrostatic: "Electrostatic Interaction",

    calcTitle: "QC Laboratory Calculator Tools",
    calcSubtitle: "— Automating High-Precision Chemical Calculations",
    calcIntro: "Daily mathematical tools routinely utilized by Mank Krisna in BPOM and seafood inspection labs for standard preparation dilutions and analytical calibration curve modeling.",
    calcTabDilution: "Solution Dilution (C1.V1 = C2.V2)",
    calcTabMolarity: "Molarity Calculator",
    calcConcentration: "Concentration",
    calcVolume: "Volume",
    calcInitial: "Stock Solution (Initial - 1)",
    calcTarget: "Target Solution (Final - 2)",
    calcCalculate: "Calculate Values",
    calcDilResult: "The volume of stock solution to pipette is",
    calcMolarityResult: "The mass of solute required is",
    calcSoluteMass: "Solute Mass",
    calcVolumeLiters: "Solution Volume",

    galleryTitle: "Documentation & Portfolio Research",
    gallerySubtitle: "— Gallery of Analytical Testing and In Silico Imagery",
    galleryIntro: "A collection of authentic laboratory records, 3D molecular renders, and technical charts compiled during Mank Krisna's professional career at BPOM, seafood export audits, and computational docking.",
    galleryStats: "Technical Details",

    chatTitle: "Mank Krisna AI Virtual Lab Assistant",
    chatSubtitle: "Ask anything about Mank Krisna, molecular docking, laboratory instrumentation, or general chemistry.",
    chatPlaceholder: "Ask about docking, BPOM, AAS, or research...",
    chatSend: "Send",
    chatInitMessage: "Hello! I am Mank Krisna's AI Virtual Lab Assistant. I am ready to answer your questions about computational chemistry (In Silico), analytical testing (AAS/HPLC), my work experiences at BPOM & Bali Seafood, or any general chemistry concepts. What's on your mind?",

    guestTitle: "Colleague & Guest Registry",
    guestSubtitle: "Leave a professional note, feedback, or a word of support for Mank Krisna.",
    guestPlaceholderName: "Your Name",
    guestPlaceholderRole: "Institution / Designation (e.g. Researcher, QC Supervisor)",
    guestPlaceholderMessage: "Write your message or feedback here...",
    guestBtnSubmit: "Sign Guestbook",
    guestEmpty: "No entries yet. Be the first to leave a message!",

    contactTitle: "Get in Touch & Collaborate",
    contactSubtitle: "Open to academic research collaborations, professional lab analyst vacancies (QC/QA), and 3D molecular visualization projects.",
    contactViaEmail: "Send Direct Email",
    contactViaWa: "Contact on WhatsApp",
    contactLocation: "Singakerta, Ubud, Gianyar, Bali / Open to Relocation"
  }
};
