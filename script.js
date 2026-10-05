@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');


/* ================= ROOT ================= */

:root {
    --bg: #080d1a;
    --bg-soft: #0d1424;
    --card: #111827;
    --card-hover: #172033;

    --primary: #38bdf8;
    --secondary: #8b5cf6;

    --text: #f8fafc;
    --muted: #94a3b8;
    --border: rgba(148, 163, 184, 0.14);

    --radius: 20px;
    --max-width: 1180px;
}


/* ================= RESET ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: "DM Sans", sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font: inherit;
}


/* ================= NAVBAR ================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 76px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 5%;

    background: rgba(8, 13, 26, 0.78);
    backdrop-filter: blur(18px);

    border-bottom: 1px solid transparent;

    z-index: 1000;

    transition: 0.3s ease;
}

.navbar.scrolled {
    border-color: var(--border);
}

.logo {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.08em;
}

.logo span {
    color: var(--primary);
}

.nav-links {
    display: flex;
    gap: 28px;
}

.nav-links a {
    color: var(--muted);
    font-size: 0.9rem;
    transition: 0.25s ease;
}

.nav-links a:hover {
    color: var(--text);
}

.menu-toggle {
    display: none;
    border: none;
    background: transparent;
    color: var(--text);
    cursor: pointer;
    font-size: 1.4rem;
}


/* ================= GENERAL ================= */

.section {
    width: min(var(--max-width), 90%);
    margin: auto;
    padding: 120px 0;
}

.eyebrow {
    color: var(--primary);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
}

.section-heading {
    max-width: 700px;
    margin-bottom: 55px;
}

.section-heading h2 {
    margin-top: 12px;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2.3rem, 5vw, 4rem);
    line-height: 1.05;
}

.section-heading h2 span {
    color: var(--primary);
}

.section-heading > p:last-child {
    margin-top: 18px;
    color: var(--muted);
}

.section-heading.small {
    margin-bottom: 30px;
}

.section-heading.small h2 {
    font-size: 2rem;
}


/* ================= BUTTONS ================= */

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 13px 21px;

    border-radius: 999px;

    font-size: 0.9rem;
    font-weight: 600;

    transition: 0.3s ease;
}

.btn-primary {
    background: var(--primary);
    color: #04111b;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(56, 189, 248, 0.2);
}

.btn-secondary {
    border: 1px solid var(--border);
    color: var(--text);
}

.btn-secondary:hover {
    background: var(--card);
    transform: translateY(-3px);
}


/* ================= HERO ================= */

.hero {
    min-height: 100vh;

    display: grid;
    grid-template-columns: 1.15fr 0.85fr;

    align-items: center;
    gap: 70px;

    padding-top: 150px;
}

.hero-content {
    max-width: 720px;
}

.hero h1 {
    margin-top: 20px;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(3.3rem, 7vw, 6.8rem);
    line-height: 0.98;
    letter-spacing: -0.055em;
}

.hero h1 span {
    display: block;
    color: var(--primary);
}

.hero-description {
    max-width: 620px;

    margin-top: 30px;

    color: var(--muted);
    font-size: 1.05rem;
}

.hero-buttons {
    display: flex;
    gap: 14px;
    margin-top: 35px;
    flex-wrap: wrap;
}


/* HERO VISUAL */

.hero-visual {
    position: relative;

    height: 480px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-card {
    width: 250px;
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid rgba(56, 189, 248, 0.3);
    border-radius: 50%;

    background:
        radial-gradient(
            circle at center,
            rgba(56, 189, 248, 0.12),
            rgba(17, 24, 39, 0.95) 65%
        );

    box-shadow:
        0 0 80px rgba(56, 189, 248, 0.08),
        inset 0 0 50px rgba(139, 92, 246, 0.08);
}

.card-number {
    font-family: "Space Grotesk", sans-serif;
    font-size: 5rem;
    font-weight: 700;
    color: var(--text);
}

.card-label {
    color: var(--muted);
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.orbit {
    position: absolute;

    border: 1px solid rgba(56, 189, 248, 0.14);
    border-radius: 50%;
}

.orbit-one {
    width: 390px;
    height: 390px;
    transform: rotate(25deg);
}

.orbit-two {
    width: 500px;
    height: 260px;
    transform: rotate(-35deg);
    border-color: rgba(139, 92, 246, 0.14);
}


/* ================= PROJECTS ================= */

.featured-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.project-card {
    overflow: hidden;

    background: var(--card);

    border: 1px solid var(--border);
    border-radius: var(--radius);

    transition: 0.35s ease;
}

.project-card:hover {
    transform: translateY(-8px);
    background: var(--card-hover);
    border-color: rgba(56, 189, 248, 0.3);
}

.project-image {
    height: 230px;
    position: relative;
    overflow: hidden;
}

.project-image span {
    position: absolute;
    top: 18px;
    right: 18px;

    padding: 7px 10px;

    background: rgba(8, 13, 26, 0.65);
    backdrop-filter: blur(8px);

    border: 1px solid var(--border);
    border-radius: 999px;

    font-size: 0.75rem;
}

.space-project {
    background:
        radial-gradient(circle at 65% 35%, rgba(56, 189, 248, 0.35), transparent 15%),
        radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.3), transparent 25%),
        linear-gradient(135deg, #030712, #111827);
}

.phonepe-project {
    background:
        radial-gradient(circle at 30% 40%, rgba(56, 189, 248, 0.32), transparent 20%),
        radial-gradient(circle at 75% 65%, rgba(139, 92, 246, 0.3), transparent 25%),
        linear-gradient(135deg, #07111f, #111827);
}

.customer-project {
    background:
        radial-gradient(circle at 65% 35%, rgba(34, 211, 238, 0.3), transparent 20%),
        radial-gradient(circle at 30% 70%, rgba(56, 189, 248, 0.25), transparent 25%),
        linear-gradient(135deg, #071018, #111827);
}

.project-content {
    padding: 27px;
}

.project-type {
    color: var(--primary);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
}

.project-content h3 {
    margin-top: 10px;

    font-family: "Space Grotesk", sans-serif;
    font-size: 1.5rem;
}

.project-content > p:not(.project-type) {
    margin-top: 13px;
    color: var(--muted);
    font-size: 0.92rem;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 20px;
}

.project-tags span {
    padding: 5px 9px;

    border: 1px solid var(--border);
    border-radius: 999px;

    color: var(--muted);
    font-size: 0.72rem;
}

.project-link {
    display: inline-block;

    margin-top: 23px;

    color: var(--text);
    font-size: 0.85rem;
    font-weight: 600;

    transition: 0.25s ease;
}

.project-link:hover {
    color: var(--primary);
}


/* ================= MORE WORK ================= */

.more-work {
    margin-top: 120px;
}

.project-list {
    border-top: 1px solid var(--border);
}

.mini-project {
    display: grid;
    grid-template-columns: 55px 1fr 230px 30px;
    align-items: center;

    gap: 20px;

    padding: 23px 5px;

    border-bottom: 1px solid var(--border);

    transition: 0.25s ease;
}

.mini-project:hover {
    padding-left: 14px;
    color: var(--primary);
}

.mini-project > span {
    color: var(--muted);
    font-size: 0.75rem;
}

.mini-project strong {
    font-family: "Space Grotesk", sans-serif;
}

.mini-project small {
    color: var(--muted);
}

.mini-project b {
    font-weight: 400;
}


/* ================= LEARNING ================= */

.learning {
    margin-top: 120px;
}

.learning-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
}

.learning-grid span {
    padding: 25px;

    border: 1px solid var(--border);
    border-radius: 15px;

    background: var(--card);

    color: var(--muted);
    text-align: center;

    transition: 0.25s ease;
}

.learning-grid span:hover {
    color: var(--text);
    border-color: rgba(56, 189, 248, 0.3);
    transform: translateY(-4px);
}


/* ================= ABOUT ================= */

.about-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
    gap: 90px;
}

.about-main {
    max-width: 720px;
}

.large-text {
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.8rem;
    line-height: 1.35;
    color: var(--text);
}

.about-main p:not(.large-text) {
    margin-top: 25px;
    color: var(--muted);
}

.about-side {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.stat-card {
    padding: 22px;

    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 15px;
}

.stat-card strong {
    display: block;
    color: var(--primary);
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.5rem;
}

.stat-card span {
    color: var(--muted);
}


/* ================= EXPERIENCE ================= */

.timeline {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
}

.timeline-item {
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 35px;

    padding: 35px 0;

    border-top: 1px solid var(--border);
}

.timeline-date {
    color: var(--primary);
    font-family: "Space Grotesk", sans-serif;
    font-weight: 600;
}

.timeline-content h3 {
    margin-top: 8px;
    font-family: "Space Grotesk", sans-serif;
    font-size: 1.5rem;
}

.timeline-content p:last-child {
    margin-top: 12px;
    color: var(--muted);
}


/* ================= SKILLS ================= */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.skill-group {
    padding: 30px;

    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
}

.skill-group h3 {
    margin-bottom: 20px;
    font-family: "Space Grotesk", sans-serif;
}

.skill-group span {
    display: block;
    padding: 10px 0;

    color: var(--muted);

    border-bottom: 1px solid var(--border);
}


/* ================= CONTACT ================= */

.contact-section {
    padding-bottom: 150px;
}

.contact-box {
    max-width: 850px;
    margin: auto;
    padding: 75px 40px;

    text-align: center;

    background:
        radial-gradient(
            circle at center,
            rgba(56, 189, 248, 0.08),
            transparent 55%
        ),
        var(--card);

    border: 1px solid var(--border);
    border-radius: 30px;
}

.contact-box h2 {
    margin-top: 14px;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1;
}

.contact-box h2 span {
    display: block;
    color: var(--primary);
}

.contact-box p:not(.eyebrow) {
    max-width: 560px;
    margin: 20px auto 30px;
    color: var(--muted);
}


/* ================= FOOTER ================= */

.footer {
    width: 90%;
    max-width: var(--max-width);

    margin: auto;
    padding: 30px 0 45px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 1px solid var(--border);

    color: var(--muted);
    font-size: 0.8rem;
}

.footer strong {
    display: block;
    color: var(--text);
    letter-spacing: 0.08em;
}

.footer span {
    display: block;
    margin-top: 4px;
}


/* ================= REVEAL ANIMATION ================= */

.reveal {
    opacity: 0;
    transform: translateY(25px);

    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}


/* ================= RESPONSIVE ================= */

@media (max-width: 900px) {

    .nav-links {
        display: none;

        position: absolute;
        top: 76px;
        right: 5%;

        flex-direction: column;

        padding: 20px;

        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 15px;
    }

    .nav-links.active {
        display: flex;
    }

    .menu-toggle {
        display: block;
    }

    .hero {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-visual {
        height: 350px;
    }

    .featured-grid {
        grid-template-columns: 1fr;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .learning-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}


@media (max-width: 600px) {

    .section {
        padding: 85px 0;
    }

    .hero {
        padding-top: 125px;
    }

    .hero h1 {
        font-size: 3rem;
    }

    .hero-visual {
        transform: scale(0.8);
    }

    .mini-project {
        grid-template-columns: 35px 1fr 25px;
    }

    .mini-project small {
        display: none;
    }

    .timeline-item {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .learning-grid {
        grid-template-columns: 1fr;
    }

    .footer {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }

    .contact-box {
        padding: 55px 22px;
    }
}
