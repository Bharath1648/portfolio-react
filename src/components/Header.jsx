import React, { useEffect, useState, useRef } from "react";
import "./Header.css";

const navList = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const headerRef = useRef(null);

  // Update CSS variable for scroll offset
  const updateHeaderHeightVar = () => {
    const headerEl = headerRef.current;
    const height = headerEl ? headerEl.offsetHeight : 80;
    document.documentElement.style.setProperty("--header-height", `${height}px`);
  };

  useEffect(() => {
    updateHeaderHeightVar();
    window.addEventListener("resize", updateHeaderHeightVar);
    return () => window.removeEventListener("resize", updateHeaderHeightVar);
  }, []);

  // Highlight active section while scrolling
  useEffect(() => {
    const sections = navList
      .map((n) => document.getElementById(n.href.replace("#", "")))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: `-${(headerRef.current?.offsetHeight ?? 80)}px 0px -40% 0px`,
        threshold: [0.15, 0.5, 0.9],
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Smooth scroll with offset
  const scrollToSection = (e, href) => {
    e.preventDefault();

    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      headerHeight -
      10;

    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header-inner">

        {/* left blank space to push nav to right */}
        <div className="logo-spacer"></div>

        {/* Pill Nav Bar (right side) */}
        <div className="nav-pill-wrap">
          <nav className="nav-pill">
            {navList.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${active === item.href ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile menu button */}
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger" />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {navList.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href ? "mobile-active" : ""}
            onClick={(e) => scrollToSection(e, item.href)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
