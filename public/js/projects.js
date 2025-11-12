document.addEventListener('DOMContentLoaded', () => {
  const projectModal = document.getElementById('projectModal');
  const addProjectBtn = document.getElementById('addProjectBtn');
  const closeProjectModal = document.getElementById('closeProjectModal');
  const projectForm = document.getElementById('projectForm');
  const projectList = document.getElementById('projectList');

  // Show modal
  document.getElementById("addProjectBtn")?.addEventListener("click", () => openProjectModal());

  // Close modal
  closeProjectModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
  });

  // Add Project
  projectForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const projectId = document.getElementById("projectId").value;
    const project = {
      title: document.getElementById('projectTitle').value.trim(),
      description: document.getElementById('projectDesc').value.trim(),
      duration: document.getElementById('projectDuration').value.trim(),
      role: document.getElementById('projectRole').value.trim(),
      technologies: document.getElementById('projectTech').value.trim(),
      teamSize: document.getElementById('projectTeam').value.trim(),
      projectURL: document.getElementById('projectURL').value.trim(),
    };
    let user = JSON.parse(localStorage.getItem("user"))

    if(user && user._id){
        project.useruid = user._id; 
    } else {
        return;
    }

    if (!project.title) {
      alert('Please enter project title');
      return;
    }

    try {
      const method = projectId ? "PUT" : "POST"; 
      const endpoint = projectId ? `/api/projects/updateProject/${projectId}` : `/api/projects/addproject`; 
      const res = await fetch(endpoint, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });

      const data = await res.json();

      if (data.success) {
        // alert('✅ Project added successfully!');
        projectForm.reset();
        projectModal.style.display = 'none';
        fetchUserProjects();
      } else {
        alert('❌ ' + data.message);
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Server error while saving project.');
    }
  });
  fetchUserProjects();
  async function fetchUserProjects() {
  try {
    let user = JSON.parse(localStorage.getItem("user"))
    let useruid = ""
    if(user && user._id){
        useruid = user._id; 
    } else {
        return;
    }
    const res = await fetch(`/api/projects/myprojects/${useruid}`);
    const data = await res.json();

    if (data.success) {
      const projectList = document.getElementById('projectList');
      projectList.innerHTML = '';

      data.projects.forEach((p) => {
        projectList.innerHTML += `
            <div class="education-item border-bottom-light pb-20 mb-20">
                <div class="d-flex justify-between align-center">
                <h6 class="text-17 fw-600 text-dark-1">${p.title}</h6>
                <button class="button -xs bg-purple-1 text-light1" style="padding:10px;" onclick="editProject('${p._id}')">
                    <i class="fa fa-pencil" style="margin-right:7px;"></i> Edit
                </button>
                </div>
                <p class="text-15 text-dark-2" style="width:70%;">${p.description || ""}</p>
                <p class="text-15 text-dark-2"><b>Duration:</b> ${p.duration || ""}</p>
                <p class="text-15 text-dark-2"><b>Role:</b> ${p.role || ""}</p>
                <p class="text-15 text-dark-2"><b>Technologies:</b> ${p.technologies || ""}</p>
                <p class="text-15 text-dark-2"><b>Team Size:</b> ${p.teamSize || ""}</p>
            </div>`;
      });
    } else {
      console.log('No projects found:', data.message);
    }
  } catch (error) {
    console.error('Error fetching user projects:', error);
  }
  }
});

async function editProject(id) {
    const res = await fetch(`/api/projects/getProjectById/${id}`);
    const data = await res.json();
    if (data.success) openProjectModal(data.project);
}

function openProjectModal(project = null) {
  projectModal.style.display = "flex";
  modalTitle.textContent = project ? "Edit Project" : "Add Project";

  if (project) {
    document.getElementById("projectId").value = project._id;
    document.getElementById("projectTitle").value = project.title || "";
    document.getElementById("projectDesc").value = project.description || "";
    document.getElementById("projectDuration").value = project.duration || "";
    document.getElementById("projectRole").value = project.role || "";
    document.getElementById("projectTech").value = project.technologies || "";
    document.getElementById("projectTeam").value = project.teamSize || "";
    document.getElementById("projectURL").value = project.projectURL || "";
  } else {
    projectForm.reset();
    document.getElementById("projectId").value = "";
  }
}
