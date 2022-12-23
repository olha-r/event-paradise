let data = {
    name: null,
    date: null,
    placeId: null,
    themeId: null,
    rate: null,
    description: null
};

handleSubmit(form);
render(data);

// Send data to the API
async function send(data) {
    console.log(data);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (data != null) {
        options.body = JSON.stringify(data);
    }
    return response = await fetch('http://localhost:8080/events', options);
}

// Get the input values from form
function render(data) {
    const properties = Object.keys(data);
    properties.forEach((property) => {
        const element = form.elements[property];
        element.addEventListener("change", (event) => {
            console.log(`${data.name} changed`);
            data[property] = element.value;
            console.log(data, data[property]);
        });
    });
}


// Reset of page after submit
function handleSubmit(form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const response = await send(data);
        console.log(response);
        if (response.status == 400) {
            form.checkValidity();
            console.log("Error 400");
        } else if (response.status == 200) {
            for (let element of form.elements) {
                const type = element.type;
                if (type != "submit") {
                    element.classList.remove("is-valid");
                    const idHelpText = `${element.id}Help`;
                    const elHelpText = document.getElementById(idHelpText);
                    elHelpText.classList.remove("text-success");
                }
            }
            data = {};
            event.target.reset();
            toast();
        }

    });
}


// Create toast of creating event success 
function toast() {
    const toastEl = document.getElementById('toast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}