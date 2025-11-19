const useruid = "USER123"; // Replace with actual UID
const educationList = document.getElementById("educationList");
const eduModal = document.getElementById("educationModal");
const eduModalTitle = document.getElementById("eduModalTitle");

document
  .getElementById("addEducationBtn")
  .addEventListener("click", () => openEduModal());
document
  .getElementById("closeEduModal")
  .addEventListener("click", closeEduModal);

// Load education list
async function fetchEducation() {
  const res = await fetch(`/api/education/list/${useruid}`);
  const data = await res.json();
  if (data.success) renderEducation(data.education);
}

// Render UI
function renderEducation(list) {
  educationList.innerHTML = "";
  list.forEach((edu) => {
    educationList.innerHTML += `
      <div class="education-item border-bottom-light pb-20 mb-20">
        <div class="d-flex justify-between align-center">
          <h6 class="text-17 fw-600 text-dark-1">${edu.instituteName}</h6>
          <button class="button -xs bg-purple-1 text-light1" style="padding:10px;" onclick="editEducation('${
            edu._id
          }')">
            <i class="fa fa-pencil"></i> Edit
          </button>
        </div>

        <p class="text-15 text-dark-2">${edu.degree || ""}, ${
      edu.fieldOfStudy || ""
    }</p>
        <p class="text-15 text-dark-2">${edu.startYear || ""} – ${
      edu.endYear || ""
    }</p>
        <p class="text-15 text-dark-2">Grade: ${edu.grade || ""}</p>
      </div>
    `;
  });
}

// open modal (add or edit)
function openEduModal(edu = null) {
  eduModal.style.display = "flex";

  if (edu) {
    eduModalTitle.textContent = "Edit Education";
    document.getElementById("educationId").value = edu._id;
    document.getElementById("instituteName").value = edu.instituteName;
    document.getElementById("degreeName").value = edu.degree;
    document.getElementById("fieldOfStudy").value = edu.fieldOfStudy;
    document.getElementById("startYear").value = edu.startYear;
    document.getElementById("endYear").value = edu.endYear;
    document.getElementById("grade").value = edu.grade;
  } else {
    eduModalTitle.textContent = "Add Education";
    document.getElementById("educationForm").reset();
    document.getElementById("educationId").value = "";
  }
}

function closeEduModal() {
  eduModal.style.display = "none";
}

// Edit existing education
async function editEducation(id) {
  const res = await fetch(`/api/education/${id}`);
  const data = await res.json();
  if (data.success) openEduModal(data.education);
}

// Add or update
document
  .getElementById("educationForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const eduId = document.getElementById("educationId").value;
    const payload = {
      useruid,
      instituteName: document.getElementById("instituteName").value,
      degree: document.getElementById("degreeName").value,
      fieldOfStudy: document.getElementById("fieldOfStudy").value,
      startYear: document.getElementById("startYear").value,
      endYear: document.getElementById("endYear").value,
      grade: document.getElementById("grade").value,
    };

    const method = eduId ? "PUT" : "POST";
    const url = eduId ? `/api/education/${eduId}` : `/api/education/add`;

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (data.success) {
      closeEduModal();
      fetchEducation();
    }
  });

fetchEducation();
