/* ============================================================
   NEXORA — Image Preview (lightbox)
   Opens the shared .nx-lightbox with the clicked image, traps
   focus, and closes on Escape/backdrop/close-button click.
   ============================================================ */
(function () {
  "use strict";

  const lightbox = document.querySelector(".nx-lightbox");
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector(".nx-lightbox__img");
  const closeBtn = lightbox.querySelector(".nx-lightbox__close");
  let lastFocused = null;

  function open(src, alt) {
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    closeBtn.focus();
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
    lastFocused?.focus();
  }

  document.querySelectorAll("[data-nx-image-preview]").forEach((preview) => {
    const img = preview.querySelector(".nx-image-preview__img");
    const trigger = preview.querySelector(".nx-image-preview__expand");
    trigger.addEventListener("click", () => open(img.src, img.alt));
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
})();
