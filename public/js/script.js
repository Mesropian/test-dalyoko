document.getElementById("projectForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = document.getElementById("projectForm");
    const formData = new FormData(form);
    const typedData = {};
    formData.forEach((value, key) => {
        typedData[key] = value;
    });

    // Преобразование строк в числа
    typedData.budget_min = +typedData.budget_min;
    typedData.budget_max = +typedData.budget_max;

    try {
        const response = await fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(typedData), 
        });


        if (response.ok) {
            console.log("The project has been successfully submitted!");
        } else {
            console.log("Error sending data. Status:", response.status);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
});