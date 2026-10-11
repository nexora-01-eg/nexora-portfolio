/* ============================================================
   NEXORA — Notifications Panel
   Handles read/unread toggling and "mark all read". No fetch
   logic here — feeding real notification data is a page concern.
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("click", (e) => {
    const panel = e.target.closest(".nx-notif-panel");
    if (!panel) return;

    const notif = e.target.closest(".nx-notif");
    if (notif) {
      notif.classList.remove("nx-notif--unread");
    }

    const markAll = e.target.closest(".nx-notif-panel__header .nx-btn");
    if (markAll) {
      panel.querySelectorAll(".nx-notif--unread").forEach((n) =>
        n.classList.remove("nx-notif--unread")
      );
    }
  });
})();
