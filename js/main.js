(() => {
  "use strict";

  // ---------- Menu mobile ----------
  const toggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.querySelector("[data-nav-mobile]");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.hasAttribute("data-open");
      if (open) {
        mobileNav.removeAttribute("data-open");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        mobileNav.setAttribute("data-open", "");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.removeAttribute("data-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Link ativo no scroll ----------
  const navLinks = Array.from(document.querySelectorAll("[data-navlink]"));
  const sections = navLinks
    .map((link) => ({
      link,
      el: document.getElementById(link.getAttribute("data-navlink")),
    }))
    .filter((s) => s.el);

  if (sections.length) {
    let raf = null;
    const paint = () => {
      raf = null;
      let active = sections[0];
      sections.forEach((s) => {
        if (s.el.getBoundingClientRect().top <= 150) active = s;
      });
      sections.forEach((s) => {
        s.link.classList.toggle("active", s === active);
      });
    };
    window.addEventListener(
      "scroll",
      () => {
        if (raf == null) raf = requestAnimationFrame(paint);
      },
      { passive: true }
    );
    paint();
  }

  // ---------- Animação de entrada ao rolar ----------
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- Ano do rodapé ----------
  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
