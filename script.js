const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const storySections = document.querySelectorAll("[data-chapter]");
const navLinks = document.querySelectorAll("[data-nav]");

if ("IntersectionObserver" in window) {
  const chapterObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      const activeChapter = visible.target.dataset.chapter;

      navLinks.forEach((link) => {
        const isActive = link.dataset.nav === activeChapter;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-18% 0px -62%", threshold: [0, 0.15, 0.35] },
  );

  storySections.forEach((section) => chapterObserver.observe(section));
}

const indexDialog = document.querySelector("#chapter-index");
const openIndexButton = document.querySelector(".index-button");
const closeIndexButton = document.querySelector(".chapter-index__close");

const closeIndex = () => {
  if (indexDialog?.open) indexDialog.close();
};

openIndexButton?.addEventListener("click", () => indexDialog?.showModal());
closeIndexButton?.addEventListener("click", closeIndex);
indexDialog?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeIndex));

indexDialog?.addEventListener("click", (event) => {
  const bounds = indexDialog.getBoundingClientRect();
  const clickedOutside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (clickedOutside) closeIndex();
});
