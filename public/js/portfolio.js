document.getElementById("addEducationBtn").addEventListener("click", function() {
  document.getElementById("educationModal").style.display = "flex";
});

document.getElementById("closeModalBtn").addEventListener("click", function() {
  document.getElementById("educationModal").style.display = "none";
});

document.getElementById("educationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Example: Add new education entry dynamically
  const institute = document.getElementById("instituteName").value;
  const degree = document.getElementById("degreeName").value;
  const field = document.getElementById("fieldOfStudy").value;
  const start = document.getElementById("startYear").value;
  const end = document.getElementById("endYear").value;
  const grade = document.getElementById("grade").value;

  const newEntry = `
    <div class="education-item border-bottom-light pb-20 mb-20">
      <h6 class="text-17 fw-600 text-dark-1">${institute}</h6>
      <p class="text-15 text-dark-2">${degree}${field ? `, ${field}` : ''}</p>
      <p class="text-15 text-dark-2">${start} – ${end}</p>
      <p class="text-15 text-dark-2">Grade: ${grade}</p>
    </div>
  `;

  document.querySelector(".education-list").insertAdjacentHTML("beforeend", newEntry);
  document.getElementById("educationModal").style.display = "none";
  e.target.reset();
});

// Utility: open & close modal
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// ===== Skills =====
document.getElementById("addSkillBtn").onclick = () => openModal("skillsModal");
document.getElementById("closeSkillModal").onclick = () => closeModal("skillsModal");
document.getElementById("skillsForm").onsubmit = e => {
  e.preventDefault();
  const name = document.getElementById("skillName").value.trim();
  if (!name) return;
  const tag = document.createElement("span");
  tag.classList.add("skill-tag");
  tag.textContent = name;
  document.querySelector(".skills-list").appendChild(tag);
  e.target.reset();
  closeModal("skillsModal");
};

// ===== Certifications =====
document.getElementById("addCertBtn").onclick = () => openModal("certModal");
document.getElementById("closeCertModal").onclick = () => closeModal("certModal");
document.getElementById("certForm").onsubmit = e => {
  e.preventDefault();
  const name = certName.value, org = certOrg.value, year = certYear.value;
  const html = `
    <div class="cert-item border-bottom-light pb-20 mb-20">
      <h6 class="text-17 fw-600 text-dark-1">${name}</h6>
      <p class="text-15 text-dark-2">${org}</p>
      <p class="text-15 text-dark-2">Issued: ${year}</p>
    </div>`;
  document.querySelector(".cert-list").insertAdjacentHTML("beforeend", html);
  e.target.reset(); closeModal("certModal");
};

// ===== Projects =====
// document.getElementById("addProjectBtn").onclick = () => openModal("projectModal");
// document.getElementById("closeProjectModal").onclick = () => closeModal("projectModal");
// document.getElementById("projectForm").onsubmit = async (e) => {
//   e.preventDefault();
//   const t = projectTitle.value, d = projectDesc.value, du = projectDuration.value;
//   const res = await fetch("/api/users/loginuser", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//   });
//   const html = `
//     <div class="project-item border-bottom-light pb-20 mb-20">
//       <h6 class="text-17 fw-600 text-dark-1">${t}</h6>
//       <p class="text-15 text-dark-2">${d}</p>
//       <p class="text-15 text-dark-2">Duration: ${du}</p>
//     </div>`;
//   document.querySelector(".project-list").insertAdjacentHTML("beforeend", html);
//   e.target.reset(); closeModal("projectModal");
// };

// ===== Experience =====
document.getElementById("addExpBtn").onclick = () => openModal("expModal");
document.getElementById("closeExpModal").onclick = () => closeModal("expModal");
document.getElementById("expForm").onsubmit = e => {
  e.preventDefault();
  const title = jobTitle.value, comp = companyName.value, dur = jobDuration.value, desc = jobDesc.value;
  const html = `
    <div class="exp-item border-bottom-light pb-20 mb-20">
      <h6 class="text-17 fw-600 text-dark-1">${title}</h6>
      <p class="text-15 text-dark-2">${comp}</p>
      <p class="text-15 text-dark-2">${dur}</p>
      <p class="text-15 text-dark-2">${desc}</p>
    </div>`;
  document.querySelector(".exp-list").insertAdjacentHTML("beforeend", html);
  e.target.reset(); closeModal("expModal");
};


// Resume upload
const resumeBox = document.getElementById("resumeUploadBox");
const resumeInput = document.getElementById("resumeFile");
const resumeFileName = document.getElementById("resumeFileName");

resumeBox.addEventListener("click", () => resumeInput.click());
resumeInput.addEventListener("change", () => {
  resumeFileName.textContent = resumeInput.files[0]?.name || "";
});

resumeBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  resumeBox.style.background = "#f0edff";
});
resumeBox.addEventListener("dragleave", () => {
  resumeBox.style.background = "#f6f6f8";
});
resumeBox.addEventListener("drop", (e) => {
  e.preventDefault();
  resumeInput.files = e.dataTransfer.files;
  resumeFileName.textContent = resumeInput.files[0]?.name || "";
  resumeBox.style.background = "#f6f6f8";
});

// Portfolio upload
const portfolioBox = document.getElementById("portfolioUploadBox");
const portfolioInput = document.getElementById("portfolioFile");
const portfolioFileName = document.getElementById("portfolioFileName");

portfolioBox.addEventListener("click", () => portfolioInput.click());
portfolioInput.addEventListener("change", () => {
  portfolioFileName.textContent = portfolioInput.files[0]?.name || "";
});

portfolioBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  portfolioBox.style.background = "#f0edff";
});
portfolioBox.addEventListener("dragleave", () => {
  portfolioBox.style.background = "#f6f6f8";
});
portfolioBox.addEventListener("drop", (e) => {
  e.preventDefault();
  portfolioInput.files = e.dataTransfer.files;
  portfolioFileName.textContent = portfolioInput.files[0]?.name || "";
  portfolioBox.style.background = "#f6f6f8";
});
