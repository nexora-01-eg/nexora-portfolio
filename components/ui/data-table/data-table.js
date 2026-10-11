/* ============================================================
   NEXORA — Data Table
   Client-side column sorting (text or numeric via data-value).
   Pagination is a separate concern — pair with the Pagination
   component and slice rows at the page level for large datasets.
   ============================================================ */
(function () {
  "use strict";

  function initDataTable(table) {
    const headers = Array.from(table.querySelectorAll(".nx-data-table__sort"));
    const tbody = table.querySelector("tbody");

    headers.forEach((header, colIndex) => {
      header.addEventListener("click", () => {
        const th = header.closest("th");
        const currentSort = th.getAttribute("aria-sort");
        const nextSort = currentSort === "ascending" ? "descending" : "ascending";

        table.querySelectorAll("th[aria-sort]").forEach((t) => t.removeAttribute("aria-sort"));
        th.setAttribute("aria-sort", nextSort);

        const type = header.getAttribute("data-sort");
        const rows = Array.from(tbody.querySelectorAll("tr"));

        rows.sort((a, b) => {
          const cellA = a.children[colIndex];
          const cellB = b.children[colIndex];
          const valA = type === "number" ? Number(cellA.dataset.value ?? cellA.textContent) : cellA.textContent.trim();
          const valB = type === "number" ? Number(cellB.dataset.value ?? cellB.textContent) : cellB.textContent.trim();

          if (valA < valB) return nextSort === "ascending" ? -1 : 1;
          if (valA > valB) return nextSort === "ascending" ? 1 : -1;
          return 0;
        });

        rows.forEach((row) => tbody.appendChild(row));
      });
    });
  }

  document.querySelectorAll("[data-nx-data-table]").forEach(initDataTable);
})();
