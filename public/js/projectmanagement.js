let editors = {};

function loadEditor(id) {
  ClassicEditor.create(document.querySelector(`#${id}`), {})
    .then((editor) => {
      editors[id] = editor;
    })
    .catch((error) => console.error(error));
}

// Initialize all CKEditor fields
loadEditor("descEditor");
loadEditor("objectiveEditor");
loadEditor("dataAssignEditor");
loadEditor("keyConceptEditor");
loadEditor("assetsEditor");
loadEditor("datasetEditor");
loadEditor("deliverEditor");
loadEditor("impactEditor");

// Tagify for tools & certifications
new Tagify(document.getElementById("toolsInput"));
new Tagify(document.getElementById("certInput"));

// SAVE HANDLER (Send to backend using jQuery + fetch)
// $("#saveProjectBtn").click(async function () {
//   const payload = {
//     description: editors["descEditor"].getData(),
//     objective: editors["objectiveEditor"].getData(),
//     tools: $("#toolsInput").val(),
//     dataAssignment: editors["dataAssignEditor"].getData(),
//     keyConcepts: editors["keyConceptEditor"].getData(),
//     projectAssets: editors["assetsEditor"].getData(),
//     dataset: editors["datasetEditor"].getData(),
//     deliverables: editors["deliverEditor"].getData(),
//     estimatedTime: $("#estTime").val(),
//     impactMetrics: editors["impactEditor"].getData(),
//     certifications: $("#certInput").val(),
//   };

//   console.log("Payload to backend:", payload);
//   alert("Project captured successfully (check console)");
// });

$("#saveProjectBtn").click(async function () {

  function getTags(id) {
    try {
      const raw = $(`#${id}`).val();
      const arr = JSON.parse(raw);
      return arr.map(t => t.value);
    } catch {
      return [];
    }
  }

  const formData = new FormData();

  formData.append("projectTitle", $("#projectTitle").val());
  formData.append("description", editors["descEditor"].getData());
  formData.append("objective", editors["objectiveEditor"].getData());

  formData.append("tools", getTags("toolsInput"));
  formData.append("dataAssignment", editors["dataAssignEditor"].getData());
  formData.append("keyConcepts", editors["keyConceptEditor"].getData());
  formData.append("projectAssets", editors["assetsEditor"].getData());
  formData.append("dataset", editors["datasetEditor"].getData());
  formData.append("deliverables", editors["deliverEditor"].getData());
  formData.append("estimatedTime", $("#estTime").val());
  formData.append("impactMetrics", editors["impactEditor"].getData());
  formData.append("certifications", getTags("certInput"));

  // File append
  const file = $("#projectPrototype")[0].files[0];
  if (file) formData.append("projectFile", file);

  try {
    const res = await $.ajax({
      url: "/api/projects/create",
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
    });

    // console.log(res);
    // alert("Project saved successfully!");
    window.location.href = "/businessprojects";
  } catch (err) {
    console.error(err);
    alert("Error saving project");
  }
});

$("#projectPrototype").change(function () {
  const file = this.files[0];
  $("#fileName").text(file ? file.name : "No file selected");
});
