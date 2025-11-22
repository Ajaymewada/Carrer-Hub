async function loadProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    document.body.innerHTML = "<p>Invalid Project ID</p>";
    return;
  }

  try {
    const res = await fetch(`/api/projects/getprojects/${id}`);
    let project = await res.json();
    project = project.data;

    document.getElementById("loader").style.display = "none";
    document.getElementById("projectPage").style.display = "flex";

    // Title
    document.getElementById("title").innerText =
      project.projectTitle || "Untitled Project";

    // Rich Text Fields
    document.getElementById("description").innerHTML =
      project.description || "";
    document.getElementById("objective").innerHTML = project.objective || "";
    document.getElementById("dataAssignment").innerHTML =
      project.dataAssignment || "";
    document.getElementById("keyConcepts").innerHTML =
      project.keyConcepts || "";
    document.getElementById("projectAssets").innerHTML =
      project.projectAssets || "";
    document.getElementById("dataset").innerHTML = project.dataset || "";
    document.getElementById("deliverables").innerHTML =
      project.deliverables || "";
    document.getElementById("impactMetrics").innerHTML =
      project.impactMetrics || "";

    // Estimated Time
    document.getElementById("estTime").innerText = project.estimatedTime || "-";

    // Created At
    document.getElementById("createdAt").innerText = new Date(
      project.createdAt
    ).toLocaleDateString();

    // ⭐ FIXED: Tools Array
    document.getElementById("tools").innerHTML =
      project.tools && project.tools.length > 0
        ? project.tools.map((t) => `<span class="tag">${t}</span>`).join("")
        : "<span class='no-data'>No tools listed</span>";

    // ⭐ FIXED: Certifications Array
    document.getElementById("certifications").innerHTML =
      project.certifications && project.certifications.length > 0
        ? project.certifications
            .map((c) => `<span class="tag">${c}</span>`)
            .join("")
        : "<span class='no-data'>No certifications added</span>";

    // Prototype File
    if (project.projectPrototype) {
      document.getElementById("prototype").innerHTML = `
        <a href="${project.projectPrototype}" class="download-btn" download>
          <i class="ri-download-line"></i> Download File
        </a>
      `;
    } else {
      document.getElementById(
        "prototype"
      ).innerHTML = `<p>No file uploaded</p>`;
    }
  } catch (err) {
    console.error(err);
    document.body.innerHTML = "<p>Error loading project</p>";
  }
}

loadProject();
