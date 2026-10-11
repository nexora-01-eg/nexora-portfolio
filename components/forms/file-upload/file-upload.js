/* ============================================================
   NEXORA — File Upload
   Handles drag-and-drop visual state, file selection, listing,
   and removal. Actual upload transport (fetch/XHR to a backend)
   is a page-level concern outside this component's scope.
   ============================================================ */
(function () {
  "use strict";

  function formatSize(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  function initFileUpload(root) {
    const input = root.querySelector(".nx-file-upload__input");
    const dropzone = root.querySelector(".nx-file-upload__dropzone");
    const list = root.querySelector(".nx-file-upload__list");

    function renderFiles(files) {
      list.innerHTML = "";
      Array.from(files).forEach((file, index) => {
        const item = document.createElement("li");
        item.className = "nx-file-upload__item";
        item.innerHTML = `
          <span class="nx-truncate">${file.name} · ${formatSize(file.size)}</span>
          <button type="button" class="nx-file-upload__item-remove" aria-label="Remove ${file.name}">×</button>
        `;
        item.querySelector("button").addEventListener("click", () => item.remove());
        list.appendChild(item);
      });
    }

    input.addEventListener("change", () => renderFiles(input.files));

    ["dragenter", "dragover"].forEach((evt) =>
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        root.classList.add("nx-file-upload--dragover");
      })
    );

    ["dragleave", "drop"].forEach((evt) =>
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        root.classList.remove("nx-file-upload--dragover");
      })
    );

    dropzone.addEventListener("drop", (e) => {
      const files = e.dataTransfer.files;
      input.files = files;
      renderFiles(files);
    });
  }

  document.querySelectorAll("[data-nx-file-upload]").forEach(initFileUpload);
})();
