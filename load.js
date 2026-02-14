const components = {
  "header": "header.html",
  "footer": "footer.html",
};

function loadHTML(divId, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error(`ไม่สามารถโหลด ${file} ได้`);
      return response.text();
    })
    .then(html => {
      document.getElementById(divId).innerHTML = html;
    })
    .catch(err => console.error(err));
}

for (const [divId, file] of Object.entries(components)) {
  loadHTML(divId, file);
}

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");
const downloadBtn = document.getElementById("lightbox-download");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        downloadBtn.href = img.src;
        lightbox.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg && e.target !== downloadBtn) {
        lightbox.classList.remove("active");
    }
});


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});
