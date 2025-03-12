
  async function loadProjects() {
    try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
            throw new Error("Error loading projects");
        }
        const projects = await response.json();
        displayProjects(projects);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

// Print Projects
function displayProjects(projects) {
    const projectsList = document.getElementById("projectsList");
    projectsList.innerHTML = ""; 

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `
            <h2>${project.name}</h2>
            <p><strong>Project type:</strong> ${project.project_type}</p>
            <p><strong>Description:</strong> ${project.project_description}</p>
            <p><strong>Budjet:</strong> от ${project.budget_min} до ${project.budget_max}</p>
        `;
        projectsList.appendChild(projectDiv);
    });
}


window.onload = loadProjects;