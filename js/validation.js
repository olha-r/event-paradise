const form = document.querySelector("form");

for (let element of form.elements) {
    const type = element.type;
    if (type != "submit") {
        const elHelpText = document.getElementById(`${element.name}Help`);
        element.addEventListener("invalid", (event) => {
            event.preventDefault();
            element.classList.add("is-invalid");
            // const elHelpText = document.getElementById(`${element.name}Help`);
            elHelpText.classList.add("text-danger");
            const firstInvalidField = form.querySelector(":invalid");
            firstInvalidField.focus();

            tooltipMessage(element);

            if (element.name == firstInvalidField.name) {
                tooltip(firstInvalidField);
            }
        });
        onChangeSuccess(element, elHelpText);
    }
}

submit(form);


// Reset of page after submit
function submit(form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        toast();
        event.target.reset();
        for (let element of form.elements) {
            const type = element.type;
            if (type != "submit") {
                element.classList.remove("is-valid");
                const idHelpText = `${element.name}Help`;
                const elHelpText = document.getElementById(idHelpText);
                elHelpText.classList.remove("text-success");
            }
        }
    });
}

// Create tooltip of error validation
function tooltip(element) {
    element.setAttribute("data-bs-toggle", "tooltip");
    const opt = {
        trigger: "focus"
    };
    const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, opt);
    tooltip.show();
}

// Add message to tooltip "error validation"
function tooltipMessage(element) {
    if (element.validity.valueMissing) {
        element.setAttribute("data-bs-title", "Ce champ est obligatoire.");
    } else if (element.name == "date" && element.validity.rangeUnderflow) {
        element.setAttribute("data-bs-title", "Doit être égale ou supérieure à aujourd’hui");
    } else if (element.name == "rate" && element.validity.rangeUnderflow) {
        element.setAttribute("data-bs-title", "Doit être positif");
    } else {
        console.log("On n'est pas dans la condition");
    }
}

// Create toast of creating event success 
function toast() {
    const toastEl = document.getElementById('toast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

// Change color of success validation
function onChangeSuccess(element, elHelpText) {
    element.addEventListener("change", (event) => {
        if (element.validity.valid) {
            event.preventDefault();
            element.classList.remove("is-invalid");
            element.classList.add("is-valid");
            elHelpText.classList.remove("text-danger");
            elHelpText.classList.add("text-success");
        }
    });

}