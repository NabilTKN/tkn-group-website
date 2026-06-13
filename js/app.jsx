/* TKN — App root + routing */
const { useState: useStateApp, useEffect: useEffectApp, useCallback } = React;

function scrollToAnchor(id) {
  if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (!el) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const y = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function App() {
  const [route, setRoute] = useStateApp("home");
  const [pending, setPending] = useStateApp(null);

  const navigate = useCallback((target) => {
    if (target.route && target.route !== route) {
      setRoute(target.route);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    if (target.route === "home" || (target.anchor && route === "home")) {
      if (target.anchor) scrollToAnchor(target.anchor);
      return;
    }
    if (target.anchor && route !== "home") {
      setRoute("home");
      setPending(target.anchor);
    }
  }, [route]);

  // after switching back to home, scroll to the pending anchor
  useEffectApp(() => {
    if (route === "home" && pending) {
      const id = pending; setPending(null);
      requestAnimationFrame(() => requestAnimationFrame(() => scrollToAnchor(id)));
    }
  }, [route, pending]);

  return (
    <React.Fragment>
      <Header navigate={navigate} route={route} />
      <main>
        {route === "home" ? (
          <React.Fragment>
            <Hero navigate={navigate} />
            <ServicesSection navigate={navigate} />
            <Coverage />
            <About />
            <TeamIntro />
            <Recruitment navigate={navigate} />
            <Contact />
          </React.Fragment>
        ) : (
          <ServicePage navigate={navigate} slug={route} />
        )}
      </main>
      <Footer navigate={navigate} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
