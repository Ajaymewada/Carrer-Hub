$(document).ready(function () {
  fetchProjects();
});

async function fetchProjects() {
  $("#projectList").html(`<p>Loading...</p>`);

  try {
    const response = await fetch("/api/projects/getprojects");
    const data = await response.json();

    if (!data.success) {
      $("#projectList").html(`<p>Failed to load projects.</p>`);
      return;
    }

    const projects = data.data;

    if (projects.length === 0) {
      $("#projectList").html(`<p>No projects found.</p>`);
      return;
    }

    let html = "";

    projects.forEach((p) => {
  html += `
    <div class="project-card">

      <h3>${p.projectTitle || "Untitled Project"}</h3>

      <div class="project-desc">
        ${truncateHTML(p.description, 250)}
      </div>

      <p class="created"><strong>Created:</strong> ${new Date(
        p.createdAt
      ).toLocaleDateString()}</p>

      <div class="project-actions">
        ${
          p.projectPrototype
            ? `<a href="${p.projectPrototype}" class="download-link" download>⬇ Download Prototype</a>`
            : `<span class="no-file">No prototype uploaded</span>`
        }

        <button class="details-btn" onclick="viewProject('${p._id}')">
          View Details
        </button>
      </div>

    </div>
  `;
});


    $("#projectList").html(html);
  } catch (err) {
    console.error("Error:", err);
    $("#projectList").html(`<p>Error loading projects.</p>`);
  }
}

function viewProject(id) {
  window.location.href = `/projectview?id=${id}`;
}

/* ---------------------------
   FUNCTION: Truncate HTML safely
----------------------------*/
function truncateHTML(html, limit) {
  const div = document.createElement("div");
  div.innerHTML = html;

  let text = div.innerText;

  if (text.length > limit) {
    text = text.substring(0, limit) + "...";
  }

  return `<p>${text}</p>`;
}
