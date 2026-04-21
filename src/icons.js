// Infinitia — icons + small helpers
window.Icons = (() => {
  const I = (paths, extra = {}) => (props = {}) => React.createElement(
    "svg",
    {
      width: 16, height: 16, viewBox: "0 0 24 24",
      fill: "none", stroke: "currentColor",
      strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round",
      ...extra, ...props,
    },
    paths
  );

  return {
    Arrow: I([React.createElement("path", { key: "a", d: "M5 12h14M13 5l7 7-7 7" })]),
    Plus: I([React.createElement("path", { key: "a", d: "M12 5v14M5 12h14" })]),
    Check: I([React.createElement("path", { key: "a", d: "M20 6 9 17l-5-5" })]),
    Phone: I([React.createElement("path", { key: "a", d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2Z" })]),
    Mobile: I([
      React.createElement("rect", { key: "a", x: "7", y: "2", width: "10", height: "20", rx: "2" }),
      React.createElement("path", { key: "b", d: "M11 18h2" }),
    ]),
    Web: I([
      React.createElement("circle", { key: "a", cx: "12", cy: "12", r: "9" }),
      React.createElement("path", { key: "b", d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" }),
    ]),
    Cloud: I([
      React.createElement("path", { key: "a", d: "M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 6 19h11Z" }),
      React.createElement("path", { key: "b", d: "M12 13v5M10 15l2 2 2-2" }),
    ]),
    Code: I([
      React.createElement("path", { key: "a", d: "m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" }),
    ]),
    Server: I([
      React.createElement("rect", { key: "a", x: "3", y: "4", width: "18", height: "7", rx: "1.5" }),
      React.createElement("rect", { key: "b", x: "3", y: "13", width: "18", height: "7", rx: "1.5" }),
      React.createElement("circle", { key: "c", cx: "7", cy: "7.5", r: "0.6", fill: "currentColor" }),
      React.createElement("circle", { key: "d", cx: "7", cy: "16.5", r: "0.6", fill: "currentColor" }),
    ]),
    Compass: I([
      React.createElement("circle", { key: "a", cx: "12", cy: "12", r: "9" }),
      React.createElement("path", { key: "b", d: "m15 9-2 6-6 2 2-6 6-2Z" }),
    ]),
    Mail: I([
      React.createElement("rect", { key: "a", x: "3", y: "5", width: "18", height: "14", rx: "2" }),
      React.createElement("path", { key: "b", d: "m3 7 9 6 9-6" }),
    ]),
    Github: I([
      React.createElement("path", { key: "a", d: "M9 19c-4 1.5-4-2-6-2M15 22v-3.87a3.4 3.4 0 0 0-.94-2.6c3.14-.35 6.44-1.54 6.44-7a5.4 5.4 0 0 0-1.5-3.75 5 5 0 0 0-.1-3.77S17.73.7 15 2.5a13 13 0 0 0-7 0C5.27.7 3.91 1.01 3.91 1.01a5 5 0 0 0-.1 3.77A5.4 5.4 0 0 0 2.31 8.54c0 5.45 3.3 6.64 6.44 7A3.4 3.4 0 0 0 7.81 18.13V22" }),
    ]),
    Linkedin: I([
      React.createElement("path", { key: "a", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" }),
      React.createElement("rect", { key: "b", x: "2", y: "9", width: "4", height: "12" }),
      React.createElement("circle", { key: "c", cx: "4", cy: "4", r: "2" }),
    ]),
    Twitter: I([
      React.createElement("path", { key: "a", d: "M22 4.01a9.4 9.4 0 0 1-2.6.72 4.5 4.5 0 0 0 2-2.5 9 9 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 4.13A12.8 12.8 0 0 1 1.7 3a4.52 4.52 0 0 0 1.4 6.04 4.5 4.5 0 0 1-2-.56v.05a4.52 4.52 0 0 0 3.6 4.44 4.5 4.5 0 0 1-2 .08 4.52 4.52 0 0 0 4.2 3.13A9.06 9.06 0 0 1 0 18.1a12.8 12.8 0 0 0 6.92 2c8.3 0 12.84-6.88 12.84-12.84v-.58A9.2 9.2 0 0 0 22 4.01Z" }),
    ]),
    Instagram: I([
      React.createElement("rect", { key: "a", x: "2", y: "2", width: "20", height: "20", rx: "5" }),
      React.createElement("circle", { key: "b", cx: "12", cy: "12", r: "4" }),
      React.createElement("circle", { key: "c", cx: "17.5", cy: "6.5", r: "0.8", fill: "currentColor" }),
    ]),
  };
})();

// Infinitia logo
window.InfinitiaLogo = function InfinitiaLogo() {
  return React.createElement(
    "svg",
    { viewBox: "0 0 32 32", fill: "none" },
    React.createElement("path", {
      d: "M6 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6Zm14 0c0-3.3 2.7-6 6-6",
      stroke: "url(#ig)", strokeWidth: "2.4", strokeLinecap: "round"
    }),
    React.createElement("path", {
      d: "M20 16c0 3.3 2.7 6 6 6",
      stroke: "url(#ig2)", strokeWidth: "2.4", strokeLinecap: "round"
    }),
    React.createElement(
      "defs", null,
      React.createElement(
        "linearGradient", { id: "ig", x1: "6", y1: "10", x2: "26", y2: "22", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { stopColor: "#6C63FF" }),
        React.createElement("stop", { offset: "1", stopColor: "#00D4FF" })
      ),
      React.createElement(
        "linearGradient", { id: "ig2", x1: "20", y1: "16", x2: "26", y2: "22", gradientUnits: "userSpaceOnUse" },
        React.createElement("stop", { stopColor: "#00D4FF" }),
        React.createElement("stop", { offset: "1", stopColor: "#00E5A0" })
      )
    )
  );
};

// Initials from a full name
window.initials = function (name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
};

// Reveal-on-scroll hook
window.useReveal = function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};
