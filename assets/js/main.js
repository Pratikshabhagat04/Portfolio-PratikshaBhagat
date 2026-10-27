/**
 * PRATIKSHA BHAGAT - AI/ML ENGINEER PORTFOLIO
 * Core Interactive Logic & Dynamic Features
 */

// --- 1. All 12 GitHub Repositories Data ---
const GITHUB_REPOSITORIES = [
  {
    name: "AI-Interior-Design-Studio",
    category: "agent",
    url: "https://github.com/Pratikshabhagat04/AI-Interior-Design-Studio",
    language: "Python",
    langClass: "python",
    desc: "AI-powered interior design suite utilizing LLMs, FastAPI, and Streamlit. Delivers personalized room layouts, furniture recommendations, and color palette suggestions through visual space analysis.",
    tags: ["LLMs", "FastAPI", "Streamlit", "Vision Analysis", "Python"],
    featured: true
  },
  {
    name: "AI-Email-Agent",
    category: "agent",
    url: "https://github.com/Pratikshabhagat04/AI-Email-Agent",
    language: "Python",
    langClass: "python",
    desc: "Autonomous email assistant with LangChain/LangGraph agent workflows. Automates email categorization, priority detection, tool-augmented verification, and draft generation.",
    tags: ["AI Agent", "LangChain", "Tool Calling", "Prompt Eng", "Python"],
    featured: true
  },
  {
    name: "AI-Blog-Generator",
    category: "agent",
    url: "https://github.com/Pratikshabhagat04/AI-Blog-Generator",
    language: "Python",
    langClass: "python",
    desc: "Automated end-to-end technical content creation platform driven by generative AI models. Produces SEO-optimized, highly structured articles with intelligent outline expansion.",
    tags: ["Generative AI", "LLMs", "Content AI", "Python"],
    featured: false
  },
  {
    name: "AI-Powered-Task-Manager-",
    category: "agent",
    url: "https://github.com/Pratikshabhagat04/AI-Powered-Task-Manager-",
    language: "Python",
    langClass: "python",
    desc: "Intelligent productivity scheduler leveraging NLP to extract action items, classify urgency, and dynamically organize tasks into prioritized execution queues.",
    tags: ["NLP", "Task Automation", "Python", "Productivity"],
    featured: false
  },
  {
    name: "Ai-Search-Weather-Agent",
    category: "agent",
    url: "https://github.com/Pratikshabhagat04/Ai-Search-Weather-Agent",
    language: "Python",
    langClass: "python",
    desc: "Agentic tool-use implementation combining live web search APIs and real-time meteorology data for natural language weather inquiries and forecast synthesis.",
    tags: ["Tool Calling", "Agents", "APIs", "Weather Data", "Python"],
    featured: false
  },
  {
    name: "mini_rag_app",
    category: "rag",
    url: "https://github.com/Pratikshabhagat04/mini_rag_app",
    language: "Python",
    langClass: "python",
    desc: "Production-oriented lightweight Retrieval-Augmented Generation application. Demonstrates chunking strategies, vector embeddings, similarity search, and context-grounded response generation.",
    tags: ["RAG", "Embeddings", "Vector Search", "LangChain", "Python"],
    featured: true
  },
  {
    name: "Q-A-Bot-",
    category: "rag",
    url: "https://github.com/Pratikshabhagat04/Q-A-Bot-",
    language: "Python",
    langClass: "python",
    desc: "Conversational question-answering system equipped with context retrieval and hallucination mitigation guards for reliable knowledge extraction.",
    tags: ["LLM", "Q&A", "Semantic Retrieval", "Python"],
    featured: false
  },
  {
    name: "Dibetes-Prediction-System",
    category: "ml",
    url: "https://github.com/Pratikshabhagat04/Dibetes-Prediction-System",
    language: "Python",
    langClass: "python",
    desc: "Supervised machine learning diagnostic classifier evaluating patient clinical metrics to predict diabetes risk probability with model explainability.",
    tags: ["Machine Learning", "Scikit-Learn", "Healthcare", "Classification", "Python"],
    featured: true
  },
  {
    name: "House-Price-Pridiction",
    category: "ml",
    url: "https://github.com/Pratikshabhagat04/House-Price-Pridiction",
    language: "Python",
    langClass: "python",
    desc: "Real estate property valuation engine based on multivariate regression modeling, feature correlation matrices, and predictive pricing algorithms.",
    tags: ["Regression", "Data Analysis", "Feature Eng", "ML"],
    featured: false
  },
  {
    name: "fastbox-delivery",
    category: "tools",
    url: "https://github.com/Pratikshabhagat04/fastbox-delivery",
    language: "Python",
    langClass: "python",
    desc: "Logistics routing and delivery timeframe computation service with cost-optimization algorithms and delivery fulfillment management.",
    tags: ["Algorithms", "Python", "Logistics", "Optimization"],
    featured: false
  },
  {
    name: "To-Do-List",
    category: "tools",
    url: "https://github.com/Pratikshabhagat04/To-Do-List",
    language: "Python",
    langClass: "python",
    desc: "Modular state-driven task tracking application focusing on clean code architecture and persistent data storage.",
    tags: ["Python", "State Management", "Data Persistence"],
    featured: false
  },
  {
    name: "portfolio-main1",
    category: "tools",
    url: "https://github.com/Pratikshabhagat04/portfolio-main1",
    language: "HTML",
    langClass: "html",
    desc: "Responsive web portfolio showcase template designed to present technical achievements and data science competencies.",
    tags: ["Web Design", "HTML5", "CSS3", "JavaScript"],
    featured: false
  }
];

// --- 2. Initial Setup & DOM Content Loaded ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypingEffect();
  initNavbarScroll();
  initMobileMenu();
  initRepositories(GITHUB_REPOSITORIES);
  initRepoFilters();
  initPhotoCustomizer();
  initCopyButtons();
});

// --- 3. Dark / Light Theme Toggle ---
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("pb_theme") || "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = activeTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("pb_theme", newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("themeToggle");
  if (!themeToggle) return;
  themeToggle.innerHTML = theme === "light" 
    ? '<i class="fas fa-moon"></i>' 
    : '<i class="fas fa-sun"></i>';
}

// --- 4. Typing Effect in Hero ---
function initTypingEffect() {
  const typingElement = document.getElementById("typingRole");
  if (!typingElement) return;

  const roles = [
    "AI/ML Engineer",
    "LLM & Agentic Workflows Specialist",
    "RAG & Hybrid Retrieval Developer",
    "Real-Time Speech AI Architect",
    "Department Academic Topper (8.79 CGPA)"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingDelay = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400; // Pause before new word
    }

    setTimeout(type, typingDelay);
  }

  type();
}

// --- 5. Navbar Sticky & Active Link ---
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // ScrollSpy
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

// --- 6. Mobile Navigation Menu ---
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-toggle");
  const links = document.querySelector(".nav-links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
    toggle.innerHTML = links.classList.contains("active") 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("active");
      toggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// --- 7. Render GitHub Repositories Grid ---
function initRepositories(repos) {
  const grid = document.getElementById("reposGrid");
  if (!grid) return;

  grid.innerHTML = "";

  if (repos.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent-cyan);"></i>
        <p>No repositories match your search query.</p>
      </div>
    `;
    return;
  }

  repos.forEach(repo => {
    const card = document.createElement("div");
    card.className = "repo-card";
    card.innerHTML = `
      <div>
        <div class="repo-top">
          <i class="far fa-folder-open repo-folder-icon"></i>
          <div class="repo-external-links">
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer" title="View GitHub Repository">
              <i class="fab fa-github"></i>
            </a>
            <a href="${repo.url}" target="_blank" rel="noopener noreferrer" title="Direct Link">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <h4 class="repo-name">
          <a href="${repo.url}" target="_blank" rel="noopener noreferrer">${repo.name}</a>
        </h4>
        <p class="repo-desc">${repo.desc}</p>
        <div class="skill-tags" style="margin-bottom: 1.25rem;">
          ${repo.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
      <div class="repo-bottom">
        <span class="repo-lang">
          <span class="repo-lang-dot ${repo.langClass}"></span>
          ${repo.language}
        </span>
        <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="repo-github-btn">
          <span>GitHub Code</span>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- 8. Repositories Filter & Search ---
function initRepoFilters() {
  const filterBtns = document.querySelectorAll(".repo-filter-btn");
  const searchInput = document.getElementById("repoSearchInput");

  let currentCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    const filtered = GITHUB_REPOSITORIES.filter(repo => {
      const matchCategory = (currentCategory === "all") || (repo.category === currentCategory);
      const matchSearch = repo.name.toLowerCase().includes(searchQuery) ||
                          repo.desc.toLowerCase().includes(searchQuery) ||
                          repo.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      return matchCategory && matchSearch;
    });

    initRepositories(filtered);
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}

// --- 9. Interactive Photo Customizer (Instant Upload, Resize & Sizing Studio) ---
function initPhotoCustomizer() {
  const photoModal = document.getElementById("photoModal");
  const openModalBtn = document.getElementById("openPhotoModalBtn");
  const closeModalBtn = document.getElementById("closePhotoModalBtn");
  const fileInput = document.getElementById("photoFileInput");
  const dropzone = document.getElementById("photoDropzone");
  const resetPhotoBtn = document.getElementById("resetPhotoBtn");
  const savePhotoSettingsBtn = document.getElementById("savePhotoSettingsBtn");
  const uploadStatusWrap = document.getElementById("uploadStatusWrap");
  const allProfileImgs = document.querySelectorAll(".profile-img-target");

  // Dimension & Zoom Elements
  const photoSizeSlider = document.getElementById("photoSizeSlider");
  const photoSizeBadge = document.getElementById("photoSizeBadge");
  const tagPhotoSize = document.getElementById("tagPhotoSize");
  const sizePresets = document.querySelectorAll("#sizePresets .preset-pill");

  const photoZoomSlider = document.getElementById("photoZoomSlider");
  const photoZoomBadge = document.getElementById("photoZoomBadge");
  const tagPhotoZoom = document.getElementById("tagPhotoZoom");
  const zoomPresets = document.querySelectorAll("#zoomPresets .preset-pill");

  const photoPosBadge = document.getElementById("photoPosBadge");
  const tagPhotoPos = document.getElementById("tagPhotoPos");
  const posPresets = document.querySelectorAll("#posPresets .preset-pill");

  // 1. Clear any previous test image in localStorage so new profile.jpg displays immediately
  if (!localStorage.getItem("pb_official_photo_v1")) {
    localStorage.removeItem("pb_custom_profile_image");
    localStorage.setItem("pb_official_photo_v1", "true");
  }

  const savedImage = localStorage.getItem("pb_custom_profile_image");
  if (savedImage) {
    allProfileImgs.forEach(img => {
      img.src = savedImage;
    });
  } else {
    allProfileImgs.forEach(img => {
      img.src = "assets/images/profile.jpg";
    });
  }

  // 2. Restore Display Size from localStorage (Default: 350px)
  const savedSize = localStorage.getItem("pb_photo_size") || "350";
  applyPhotoSize(savedSize, false);

  // 3. Restore Zoom from localStorage (Default: 1.0)
  const savedZoom = localStorage.getItem("pb_photo_zoom") || "1";
  applyPhotoZoom(savedZoom, false);

  // 4. Restore Position/Framing from localStorage (Default: center 15%)
  const savedPos = localStorage.getItem("pb_photo_pos") || "center 15%";
  applyPhotoPos(savedPos, false);

  if (!photoModal) return;

  function openModal() {
    photoModal.classList.add("active");
  }

  function closeModal() {
    photoModal.classList.remove("active");
  }

  if (openModalBtn) openModalBtn.addEventListener("click", openModal);
  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (savePhotoSettingsBtn) {
    savePhotoSettingsBtn.addEventListener("click", () => {
      closeModal();
      showToast("Photo display & size settings saved!");
    });
  }

  photoModal.addEventListener("click", (e) => {
    if (e.target === photoModal) closeModal();
  });

  // Size Handler
  function applyPhotoSize(sizeVal, save = true) {
    const sizePx = parseInt(sizeVal, 10);
    document.documentElement.style.setProperty("--photo-size", `${sizePx}px`);

    if (photoSizeSlider) photoSizeSlider.value = sizePx;
    if (photoSizeBadge) photoSizeBadge.textContent = `${sizePx}px`;
    if (tagPhotoSize) tagPhotoSize.textContent = `Size: ${sizePx}px`;

    sizePresets.forEach(btn => {
      const btnSize = parseInt(btn.getAttribute("data-size"), 10);
      btn.classList.toggle("active", btnSize === sizePx);
    });

    if (save) {
      localStorage.setItem("pb_photo_size", sizePx);
    }
  }

  if (photoSizeSlider) {
    photoSizeSlider.addEventListener("input", (e) => {
      applyPhotoSize(e.target.value, true);
    });
  }

  sizePresets.forEach(btn => {
    btn.addEventListener("click", () => {
      const sizeVal = btn.getAttribute("data-size");
      if (sizeVal) applyPhotoSize(sizeVal, true);
    });
  });

  // Zoom Handler
  function applyPhotoZoom(zoomVal, save = true) {
    const zoomFloat = parseFloat(zoomVal);
    document.documentElement.style.setProperty("--photo-zoom", zoomFloat);

    if (photoZoomSlider) photoZoomSlider.value = zoomFloat;
    const pct = Math.round(zoomFloat * 100);
    if (photoZoomBadge) photoZoomBadge.textContent = `${pct}%`;
    if (tagPhotoZoom) tagPhotoZoom.textContent = `Zoom: ${pct}%`;

    zoomPresets.forEach(btn => {
      const btnZoom = parseFloat(btn.getAttribute("data-zoom"));
      btn.classList.toggle("active", Math.abs(btnZoom - zoomFloat) < 0.05);
    });

    if (save) {
      localStorage.setItem("pb_photo_zoom", zoomFloat);
    }
  }

  if (photoZoomSlider) {
    photoZoomSlider.addEventListener("input", (e) => {
      applyPhotoZoom(e.target.value, true);
    });
  }

  zoomPresets.forEach(btn => {
    btn.addEventListener("click", () => {
      const zoomVal = btn.getAttribute("data-zoom");
      if (zoomVal) applyPhotoZoom(zoomVal, true);
    });
  });

  // Position Handler
  function applyPhotoPos(posVal, save = true) {
    document.documentElement.style.setProperty("--photo-pos", posVal);

    let label = "Top (15%)";
    if (posVal.includes("30%")) label = "Upper (30%)";
    else if (posVal.includes("50%")) label = "Center (50%)";

    if (photoPosBadge) photoPosBadge.textContent = label;
    if (tagPhotoPos) tagPhotoPos.textContent = `Focus: ${label}`;

    posPresets.forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-pos") === posVal);
    });

    if (save) {
      localStorage.setItem("pb_photo_pos", posVal);
    }
  }

  posPresets.forEach(btn => {
    btn.addEventListener("click", () => {
      const posVal = btn.getAttribute("data-pos");
      if (posVal) applyPhotoPos(posVal, true);
    });
  });

  // Handle Drag & Drop & Upload with Automatic Resizing & Compression
  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        processUploadedImage(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        processUploadedImage(e.target.files[0]);
      }
    });
  }

  function processUploadedImage(file) {
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (JPG, PNG, or WebP).");
      return;
    }

    const origKb = Math.round(file.size / 1024);
    const origText = origKb > 1024 ? `${(origKb / 1024).toFixed(1)} MB` : `${origKb} KB`;

    // Smart canvas resize & compression to ensure ultra-sharp profile rendering and avoid LocalStorage quota limits
    resizeAndCompressImage(file, 800, 800, 0.88, (compressedDataUrl, outW, outH) => {
      allProfileImgs.forEach(img => {
        img.src = compressedDataUrl;
      });

      const compKb = Math.round((compressedDataUrl.length * 0.75) / 1024);
      const compText = `${compKb} KB`;

      try {
        localStorage.setItem("pb_custom_profile_image", compressedDataUrl);
      } catch (err) {
        console.warn("Could not save to localStorage:", err);
      }

      if (uploadStatusWrap) {
        uploadStatusWrap.innerHTML = `
          <div class="upload-status-badge">
            <i class="fas fa-check-circle"></i>
            <span>Photo Uploaded &amp; Optimized: <strong>${origText} &rarr; ${compText}</strong> (${outW}&times;${outH}px)</span>
          </div>
        `;
      }

      showToast("Profile photo uploaded & optimized successfully!");
    });
  }

  function resizeAndCompressImage(file, maxW, maxH, quality, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxW) {
            height = Math.round((height * maxW) / width);
            width = maxW;
          }
        } else {
          if (height > maxH) {
            width = Math.round((width * maxH) / height);
            height = maxH;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
        callback(compressedDataUrl, width, height);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Reset Button
  if (resetPhotoBtn) {
    resetPhotoBtn.addEventListener("click", () => {
      localStorage.removeItem("pb_custom_profile_image");
      localStorage.removeItem("pb_photo_size");
      localStorage.removeItem("pb_photo_zoom");
      localStorage.removeItem("pb_photo_pos");

      allProfileImgs.forEach(img => {
        img.src = "assets/images/profile.jpg";
      });

      applyPhotoSize("350", false);
      applyPhotoZoom("1.0", false);
      applyPhotoPos("center 15%", false);

      if (uploadStatusWrap) uploadStatusWrap.innerHTML = "";

      showToast("Reset photo and sizing back to defaults.");
    });
  }
}

// --- 10. Copy to Clipboard Utility ---
function initCopyButtons() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(err => {
          console.error("Copy failed:", err);
        });
      }
    });
  });
}

// --- 13. Toast Notification Helper ---
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}
