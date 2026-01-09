/* Sri Portfolio — main.js
   - theme toggle (persisted)
   - smooth scrolling
   - scrollspy for nav
   - navbar search (sections + projects)
   - projects tabs + project search (if present)
*/

(function () {
  const root = document.documentElement;

  // ---------- Theme ----------
  const THEME_KEY = "sri_theme";
  const prefersDark = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    const icon = document.getElementById("themeIcon");
    if (icon) icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  const saved = localStorage.getItem(THEME_KEY);
  setTheme(saved || (prefersDark() ? "dark" : "light"));

  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }

  // ---------- Smooth scroll for in-page anchors ----------
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href*="#"]');
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href) return;

    const [path, hash] = href.split("#");
    if (!hash) return;

    // If link is to current page (or root), smooth scroll.
    const isSamePage = !path || path === "" || path === "/" || path === window.location.pathname || (path === window.location.origin);
    if (!isSamePage) return;

    const target = document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", "#" + hash);
  });

  // ---------- Scrollspy ----------
  const navLinks = Array.from(document.querySelectorAll(".nav__link"));
  const sections = ["home", "about", "experience", "projects", "skills", "contact"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach((l) => {
      const ident = l.getAttribute("data-nav-link");
      l.classList.toggle("is-active", ident === id);
    });
  }

  if (sections.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && visible.target && visible.target.id) {
          setActive(visible.target.id);
        }
      },
      { root: null, threshold: [0.22, 0.4, 0.6] }
    );
    sections.forEach((s) => obs.observe(s));
  }

  // ---------- Search (Navbar) ----------
  const searchInput = document.getElementById("siteSearch");
  const resultsEl = document.getElementById("searchResults");

  function slugify(str) {
    return (str || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function openResults(items) {
    if (!resultsEl) return;
    resultsEl.innerHTML = "";
    if (!items.length) {
      resultsEl.classList.remove("is-open");
      return;
    }
    items.slice(0, 8).forEach((it) => {
      const a = document.createElement("a");
      a.className = "search-item";
      a.href = it.href;
      a.textContent = it.label;
      resultsEl.appendChild(a);
    });
    resultsEl.classList.add("is-open");
  }

  function closeResults() {
    if (!resultsEl) return;
    resultsEl.classList.remove("is-open");
  }

  function buildIndex() {
    // Sections
    const items = [
      { label: "Home", href: "/#home" },
      { label: "About", href: "/#about" },
      { label: "Experience", href: "/#experience" },
      { label: "Projects", href: "/projects/" },
      { label: "Skills", href: "/#skills" },
      { label: "Contact", href: "/#contact" },
    ];

    // Projects (if present on the page via DOM)
    const projectEls = Array.from(document.querySelectorAll(".project-item"));
    projectEls.forEach((el) => {
      const title = el.querySelector(".project-item__title")?.textContent?.trim();
      if (!title) return;
      const id = el.id || slugify(title);
      const isProjectsPage = window.location.pathname.startsWith("/projects");
      const href = isProjectsPage ? `#${id}` : `/projects/#${id}`;
      items.push({ label: `Project: ${title}`, href });
    });

    return items;
  }

  const searchIndex = buildIndex();

  if (searchInput && resultsEl) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) return closeResults();
      const hits = searchIndex.filter((it) => it.label.toLowerCase().includes(q));
      openResults(hits);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeResults();
      if (e.key === "Enter") {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) return;
        const hit = searchIndex.find((it) => it.label.toLowerCase().includes(q));
        if (hit) window.location.href = hit.href;
      }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav__search")) closeResults();
    });
  }

  // ---------- Tabs filtering (home + projects page) ----------
  function setupTabs(tabsRoot) {
    const tabs = Array.from(tabsRoot.querySelectorAll(".tab"));
    const key = tabsRoot.getAttribute("data-tabs");
    const list = document.querySelector(`[data-project-list="${key}"]`);
    if (!tabs.length || !list) return;

    function applyFilter(trackId) {
      const items = Array.from(list.querySelectorAll(".project-item"));
      items.forEach((it) => {
        const tracks = (it.getAttribute("data-tracks") || "").split(/\s+/).filter(Boolean);
        const show = trackId === "all" || tracks.includes(trackId);
        it.style.display = show ? "" : "none";
      });
    }

    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        btn.classList.add("active");
        applyFilter(btn.getAttribute("data-track"));
      });
    });
  }

  document.querySelectorAll(".tabs[data-tabs]").forEach(setupTabs);

  // ---------- Project search (projects page) ----------
  const projectSearch = document.getElementById("projectSearch");
  if (projectSearch) {
    projectSearch.addEventListener("input", () => {
      const q = projectSearch.value.trim().toLowerCase();
      const items = Array.from(document.querySelectorAll(".project-item--page"));
      items.forEach((it) => {
        if (!q) { it.style.display = ""; return; }
        const title = it.getAttribute("data-title") || "";
        const summary = it.getAttribute("data-summary") || "";
        const tracks = it.getAttribute("data-tracks") || "";
        const show = title.includes(q) || summary.includes(q) || tracks.includes(q);
        it.style.display = show ? "" : "none";
      });
    });
  }
})();
