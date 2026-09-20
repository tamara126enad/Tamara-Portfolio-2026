import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  ChevronDown,
  ExternalLink,
  FileText,
  Headphones,
  Image as ImageIcon,
  Linkedin,
  Play,
  Radio,
  Sparkles,
  Trophy,
  Video,
  Volume2,
  X,
} from "lucide-react";

const ASSET = (file: string) => `${import.meta.env.BASE_URL}media/${file}`;
const INTERACTIVE = (file: string) => `${import.meta.env.BASE_URL}interactive/${file}`;

const palette = {
  butter: "#F2E6C9",
  sand: "#E2C9A6",
  sage: "#A6B89A",
  taupe: "#A0907E",
  rose: "#C47F6B",
  coral: "#C58A5F",
  teal: "#147D7E",
};

const driveThumbs = {
  aqaba: ASSET("aqaba.jpeg"),
  facebook: ASSET("facebook.jpeg"),
  cards: ASSET("cards.jpg"),
  crochet: ASSET("crochet.jpg"),
  design: ASSET("design.jpg"),
  tamara: ASSET("tamara-aqaba.png"),
  trainer: ASSET("facebook.jpeg"),
};

const liveLinks = {
  interview: "https://tamara126enad.github.io/interview-coach/",
  kobo: "https://ee.kobotoolbox.org/x/11PJXge9",
  research: "https://www.jatit.org/volumes/Vol95No12/19Vol95No12.pdf",
  scholar: "https://scholar.google.com/citations?user=RzQPv7QAAAAJ&hl=en&oi=ao",
  linkedin: "https://jo.linkedin.com/in/tamara-al-shabatat-060452123",
};

const videoData = [
  { title: "Child safety monitor — teaser", desc: "A short-form media edit from the Drive collection.", duration: "00:08", id: "1rPy9ZIG72fBi357EMnmZsxSSOdbHU2j1", thumb: ASSET("child-safety.jpg"), src: ASSET("child-safety.mp4") },
  { title: "Monitor reveal & mother's relief", desc: "Narrative pacing, emotional beats, and reveal edit.", duration: "00:10", id: "1X5Cr4vlFec9pnRS5lU9eewy7R3zWGKzM", thumb: ASSET("monitor-reveal.jpg"), src: ASSET("monitor-reveal.mp4") },
  { title: "Toddler finds photograph", desc: "A vertical story cut with a warm visual rhythm.", duration: "00:06", id: "1gP0Lbd-SyiK9WYpUPXUjkduB0C0IkPT0", thumb: ASSET("toddler-photo.jpg"), src: ASSET("toddler-photo.mp4") },
  { title: "Field edit / visual diary", desc: "A compact video study from Tamara's edited footage.", duration: "00:10", id: "1EAiJgPm2rat8gXjbEmssithJUKM3M_ew", thumb: ASSET("field-edit.jpg"), src: ASSET("field-edit.mp4") },
  { title: "Whale of Aqaba — selected cut", desc: "A concise marine-life edit; the original cut is intentionally omitted.", duration: "00:10", id: "1q6MzjtC34KgNpjB816F6Rqt-2J93pmzd", thumb: ASSET("whale-selected.jpg"), src: ASSET("whale-selected.mp4") },
  { title: "Thank you, trainer", desc: "A polished appreciation video from the portfolio source.", duration: "00:19", id: "1QtXrsQZbwklVRkSvOx5HL42FVFfDLmyr", thumb: ASSET("trainer-thanks.jpg"), src: ASSET("trainer-thanks.mp4") },
];

const interactiveProjects = [
  { title: "Interview Coach", label: "Live website", desc: "A focused digital experience for practicing interview confidence.", href: liveLinks.interview, thumb: ASSET("interview-coach.webp"), iframe: liveLinks.interview, tone: "teal" },
  { title: "قرارات تحت الضغط", label: "KoboToolbox · نموذج Enketo تفاعلي", desc: "An interactive decision-making form built for real-world use.", href: liveLinks.kobo, thumb: ASSET("kobo-enketo.webp"), iframe: liveLinks.kobo, tone: "rose" },
  { title: "تجربة كن باريستا", label: "Drive HTML · تجربة تعليمية", desc: "A playful, source-preserved learning experience for becoming a barista.", href: INTERACTIVE("barista.html"), iframe: INTERACTIVE("barista.html"), tone: "berry" },
  { title: "Computer from 1999", label: "Drive HTML · تجربة شخصية", desc: "Tamara's retro personal web world, preserved as a living interactive artifact.", href: INTERACTIVE("computer-1999.html"), iframe: INTERACTIVE("computer-1999.html"), tone: "sand" },
  { title: "Maze Runner", label: "Drive HTML · لعبة تفاعلية", desc: "A five-stage maze game from the source folder, playable directly in the exhibition.", href: INTERACTIVE("maza-game.html"), iframe: INTERACTIVE("maza-game.html"), tone: "coral" },
  { title: "مختبر قانون أوم", label: "Drive HTML · مختبر تفاعلي", desc: "An interactive Ohm's law laboratory for visual, hands-on learning.", href: INTERACTIVE("ohms-law.html"), iframe: INTERACTIVE("ohms-law.html"), tone: "olive" },
];

const imageWorks = [
  { title: "Aqaba visitors / marine story", category: "AI visual narrative", image: driveThumbs.aqaba },
  { title: "Social campaign study", category: "Digital communications", image: driveThumbs.facebook },
  { title: "A set of visual cards", category: "Creative technology", image: driveThumbs.cards },
  { title: "Crochet learning map", category: "AI-assisted education", image: driveThumbs.crochet },
  { title: "Craft / design exploration", category: "Visual direction", image: driveThumbs.design },
  { title: "Tamara / Aqaba", category: "Portfolio portrait", image: driveThumbs.tamara },
];

const pdfWorks = [
  { title: "tima book.pdf", desc: "A story-led PDF from the portfolio source.", href: "https://drive.google.com/file/d/1Lle3ihnYUd-F8TvPVEhd8MRtsJIhzPjp/view?usp=drivesdk", thumb: ASSET("tima-book.png") },
  { title: "مغامرة كنان ويمان في عالم الحروف والأرقام.pdf", desc: "An Arabic educational storybook from the Drive source.", href: "https://drive.google.com/file/d/15hXf3TM1VuBQ1WMGAVikQvzZZ7YqaOPT/view?usp=drivesdk", thumb: ASSET("kenan-yaman.png") },
  { title: "علم التشريح by Z.ai_ Human Anatomy.pptx", desc: "A presentation artifact retained with its original Arabic title.", href: "https://docs.google.com/presentation/d/1NMtQxiEgmB5sDSFq9J83BR_GKf97v0rJ/edit?usp=drivesdk", thumb: ASSET("anatomy.png") },
];

function ExternalButton({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  return <a className={`pill-button ${filled ? "filled" : ""}`} href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={15} /></a>;
}

function SectionHeading({ index, eyebrow, title, subtitle }: { index: string; eyebrow: string; title: string; subtitle: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p className="subtitle">{subtitle}</p></div></div>;
}

function BrowserMockup({ title, label, desc, href, thumb, iframe, tone }: (typeof interactiveProjects)[number]) {
  return <article className={`browser-card ${tone} reveal`}>
    <div className="browser-top"><span className="browser-dots"><i /><i /><i /></span><span className="address">{new URL(href, window.location.origin).hostname}</span><ExternalLink size={15} /></div>
    <a href={href} target="_blank" rel="noopener noreferrer" className="browser-screen">{iframe ? <iframe src={iframe} title={`${title} live preview`} loading="lazy" /> : <img src={thumb} alt={`${title} preview`} loading="lazy" />}<span className="screen-overlay"><span>Open live experience</span><ArrowUpRight size={18} /></span></a>
    <div className="browser-copy"><span className="mini-label">{label}</span><h3>{title}</h3><p>{desc}</p><ExternalButton href={href} filled>OPEN LIVE PROJECT</ExternalButton></div>
  </article>;
}

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [lang, setLang] = useState<"en" | "ar">("en");
  const tx = (en: string, ar: string) => lang === "ar" ? ar : en;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    const items = Array.from(document.querySelectorAll("section, .browser-card, .video-card, .doc-card"));
    items.forEach((item) => item.classList.add("reveal"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onMove = (event: MouseEvent) => { if (!reduced) { document.documentElement.style.setProperty("--mx", `${event.clientX}px`); document.documentElement.style.setProperty("--my", `${event.clientY}px`); } };
    const onScroll = () => { if (!reduced) document.documentElement.style.setProperty("--scroll-depth", `${window.scrollY}px`); };
    window.addEventListener("mousemove", onMove, { passive: true }); window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("mousemove", onMove); window.removeEventListener("scroll", onScroll); };
  }, [lang]);

  return <div className="portfolio-shell" data-lang={lang}>
    <div className="neon-frame" aria-hidden="true" />
    <header className="topbar"><a href="#top" className="brand-mark">TA<span>·</span>26</a><nav><a href="#interactive">{tx("Interactive", "تفاعلي")}</a><a href="#research">{tx("Research", "الأبحاث")}</a><a href="#contact">{tx("Contact", "تواصل")}</a></nav><button className="lang-toggle" type="button" aria-label={tx("Switch to Arabic", "التبديل إلى الإنجليزية")} onClick={() => setLang(lang === "en" ? "ar" : "en")}>{lang === "en" ? "عربي" : "EN"}</button><a className="nav-cta" href={liveLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ArrowUpRight size={14} /></a></header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy"><div className="kicker"><Sparkles size={14} /> {tx("DIGITAL EXHIBITION / 2026", "معرض رقمي / ٢٠٢٦")}</div><h1>Tamara<br /><em>Al‑Shabatat</em></h1><p className="hero-lede">{tx("Digital work with a human signal — training, storytelling, communication, and interactive experiences shaped into one living archive.", "أعمال رقمية تجمع التدريب والسرد والتواصل والتجارب التفاعلية في أرشيف حي واحد.")}</p><div className="role-row"><span>{tx("Digital Skills Trainer", "مدرب مهارات رقمية")}</span><span>{tx("Media & Communications Officer", "مسؤول إعلام واتصال")}</span><span>{tx("Trainee Affairs Officer", "مسؤول شؤون متدربين")}</span></div><div className="hero-actions"><a className="pill-button filled" href="#interactive">{tx("Enter the exhibition", "ادخل إلى المعرض")} <ArrowDownRight size={17} /></a><a className="text-link" href="#about">{tx("Read the story", "اقرأ القصة")} <ArrowDownRight size={15} /></a></div></div>
        <div className="hero-stage"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-sticker sticker-a">WORK<br /><strong>WITH<br />PURPOSE</strong></div><div className="hero-art"><img src={driveThumbs.tamara} alt="Tamara portfolio visual" /><span className="art-caption">01 / portrait study<br />Aqaba, Jordan</span></div><div className="retro-pc"><div className="pc-screen">C:\&gt; TAMARA_OS<br />&gt; LOADING SKILLS...<br />&gt; READY <b>_</b></div><div className="pc-base"><i /><span /><i /></div></div><div className="floating-tag">SHE BUILDS<br /><b>USEFUL MAGIC</b></div></div>
      </section>

      <section className="marquee-strip"><div>REAL WORK <span>✦</span> REAL STORIES <span>✦</span> DIGITAL SKILLS <span>✦</span> MEDIA & COMMUNICATIONS <span>✦</span> INTERACTIVE EXPERIENCES <span>✦</span></div></section>

      <section id="interactive" className="section-pad section-block interactive-final"><SectionHeading index="01" eyebrow={tx("Interactive Projects", "مشاريع تفاعلية")} title={tx("Click into the work.", "ادخل إلى التجربة.")} subtitle={tx("Real interfaces, real destinations, and browser frames that make the experience immediately tangible.", "واجهات حقيقية ووجهات فعلية وإطارات متصفح تجعل التجربة ملموسة فورًا.")} /><div className="browser-grid">{interactiveProjects.map(project => <BrowserMockup key={project.title} {...project} />)}</div></section>

      <section id="achievement" className="achievement-section section-pad"><div className="award-graphic"><Trophy size={48} /><span>01</span></div><div><p className="eyebrow">Major achievement</p><h2>1st Place</h2><p className="award-title">University Graduation Project</p><p className="award-project">University Announcement System</p><p className="award-note">A clear, useful communication idea — recognized at the moment where education, technology, and public service meet.</p></div><Award className="award-icon" size={44} /></section>
      <section className="section-pad section-block video-section"><SectionHeading index="04" eyebrow="Media studies" title={tx("Videos, in motion.", "فيديوهات تتحرك.")} subtitle="Six real edits from the Drive archive, visible at once — with the original whale cut intentionally kept out of the interface." /><div className="video-grid">{videoData.map(video => <article className="video-card" key={video.id}><button className="video-thumb" onClick={() => setActiveVideo(video.src)}><img src={video.thumb} alt={video.title} loading="lazy" /><span className="play-button"><Play size={18} fill="currentColor" /></span><span className="video-duration">{video.duration}</span></button><div className="video-copy"><span>VIDEO / {video.duration}</span><h3>{video.title}</h3><p>{video.desc}</p></div></article>)}</div></section>

      <section className="section-pad section-block audio-section"><SectionHeading index="05" eyebrow="Audio & sound" title="Listen to the texture." subtitle="Two original audio tracks from the source archive, given a proper listening surface." /><div className="audio-grid">{[{ title: "الاطفال", id: "1Ilcwtn4DFuMn5lk8vYraSurO1K7zgA4n", color: palette.teal, src: ASSET("children.mp3") }, { title: "شكر للاستاذ حمزة", id: "11BCgj4PAQjrI29uTwXfOi0FUYsoDzuPp", color: palette.rose, src: ASSET("thanks-hamza.mp3") }].map(track => <article className="audio-card" key={track.id}><div className="audio-disc" style={{ "--disc": track.color } as React.CSSProperties}><Headphones size={24} /></div><div className="audio-info"><span>ORIGINAL TRACK</span><h3>{track.title}</h3><p>Audio archive / Tamara's Drive collection</p><audio controls preload="none" src={track.src} /></div><Volume2 size={19} /></article>)}</div></section>

      <section className="section-pad section-block"><SectionHeading index="06" eyebrow="Creative visual work" title={tx("Images that think in color.", "صور تفكر بالألوان.")} subtitle="AI-assisted visual explorations, communication studies, and personal creative work from the source folder." /><div className="image-mosaic">{imageWorks.map(work => <article key={work.title} className="mosaic-item" onClick={() => setLightbox(work.image)}><img src={work.image} alt={work.title} loading="lazy" /><div><span>{work.category}</span><h3>{work.title}</h3></div></article>)}</div></section>

      <section className="section-pad section-block docs-section"><SectionHeading index="07" eyebrow="Documents & certificates" title={tx("The archive, opened.", "الأرشيف مفتوح.")} subtitle="Source PDFs and presentations retain their original titles and open in their complete viewer." /><div className="doc-grid">{pdfWorks.map(doc => <article className="doc-card" key={doc.title}><div className="doc-preview"><img src={doc.thumb} alt={doc.title} loading="lazy" /><span><FileText size={18} /> PDF / DECK</span></div><h3>{doc.title}</h3><p>{doc.desc}</p><div className="doc-actions"><ExternalButton href={doc.href}>OPEN</ExternalButton><a href={doc.href} target="_blank" rel="noreferrer" download className="download-link">DOWNLOAD</a></div></article>)}</div></section>
      <section id="research" className="section-pad section-block research-minimal reveal"><div><p className="eyebrow">Research & Publications</p><h2>Curiosity, published.</h2><p>Published research on pair programming and programming-language learning.</p></div><ExternalButton href={liveLinks.research} filled>VIEW RESEARCH</ExternalButton></section>

      <section className="section-pad skills-section"><div className="skills-intro"><p className="eyebrow">08 / Skills</p><h2>A generous toolkit.</h2><p>Organized around the kinds of work Tamara actually brings to a project: practical, visual, and deeply human.</p></div><div className="skills-orbit"><div className="skill-chip chip-one">C++ / Java</div><div className="skill-chip chip-two">HTML / CSS / JS</div><div className="skill-chip chip-three">SQL / Oracle</div><div className="skill-chip chip-four">Digital tools</div><div className="skill-chip chip-five">AI / Multimedia</div><div className="skill-core">T<br /><span>TOOLS</span></div></div></section>

      <section className="section-pad section-block about-grid"><div id="about"><p className="eyebrow">09 / Experience</p><h2>Roles with range.</h2><div className="timeline"><div><span>01</span><h3>Digital Skills Trainer</h3><p>Making digital tools feel approachable, useful, and ready for everyday work.</p></div><div><span>02</span><h3>Media & Communications Officer</h3><p>Connecting message, medium, and audience with clarity.</p></div><div><span>03</span><h3>Trainee Affairs Officer</h3><p>Supporting people through the details that make learning move.</p></div></div></div><div className="about-note"><span className="quote-mark">“</span><p>Tamara's work sits at the intersection of learning, communication, and creative technology — a place where useful ideas become memorable experiences.</p><div className="signature">TAMARA / AL-SHABATAT</div></div></section>

      <section id="contact" className="contact-section section-pad"><div><p className="eyebrow">10 / Contact</p><h2>{tx("Let’s create", "لنصنع")}<br /><em>{tx("something digital.", "شيئًا رقميًا.")}</em></h2></div><div className="contact-actions"><a className="contact-link" href={liveLinks.linkedin} target="_blank" rel="noreferrer"><Linkedin size={21} /> LinkedIn <ArrowUpRight size={18} /></a></div></section>

          </main>

    <footer><span>© 2026 Tamara Al‑Shabatat</span><span>Built as a living exhibition</span><span>Amman / Aqaba / Everywhere</span></footer>
    {lightbox && <div className="modal" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}><button className="modal-close" onClick={() => setLightbox(null)}><X size={22} /></button><img src={lightbox} alt="Expanded portfolio work" onClick={e => e.stopPropagation()} /></div>}
    {activeVideo && <div className="modal" role="dialog" aria-modal="true" onClick={() => setActiveVideo(null)}><button className="modal-close" onClick={() => setActiveVideo(null)}><X size={22} /></button><video controls autoPlay src={activeVideo} onClick={e => e.stopPropagation()} /></div>}
  </div>;
}

export { palette };

// Keep the imported icon names intentionally visible in the source as part of the exhibition's semantic vocabulary.
export const semanticIcons = { BadgeCheck, ImageIcon, Radio, Video };
