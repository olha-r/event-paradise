const form = document.querySelector("form");

validation(form);
submit(form);


function validation(form) {
    for (const element of form.elements) {
        const elHelpText = document.getElementById(`${element.name}Help`);
        const type = element.type;
        if (type != "submit") {
            onChange(element, elHelpText);
            invalid(element, elHelpText)
        }
    }
}

//Change behaviour on ':invalid' fields
function invalid(element, elHelpText, tooltip) {
    element.addEventListener("invalid", (event) => {
        event.preventDefault();
        element.classList.add("is-invalid");
        elHelpText.classList.add("text-danger");
        const firstInvalidField = form.querySelector('.is-invalid');
        const tooltip = new tooltipInitialize(element);
        element.setAttribute("data-bs-toggle", "tooltip");
        firstInvalidField.focus();
        tooltip.enable();
    });
}

function tooltipInitialize(element) {
    const opt = {
        placement: "top",
        trigger: "focus",
        title: "Ce champ est obligatoire."
    };
    const tooltip = bootstrap.Tooltip.getOrCreateInstance(element, opt);
    return tooltip;
}

// Add message to tooltip "error validation"
function tooltipMessage(element) {
    const tooltip = bootstrap.Tooltip.getInstance(element);
    if (element.name == "rate" && element.validity.valueMissing) {
        tooltip.setContent({ '.tooltip-inner': 'Ce champ est obligatoire.' });
    } else if (element.name == "rate" && element.validity.rangeUnderflow) {
        tooltip.setContent({ '.tooltip-inner': 'Doit être positif' });
    } else if (element.name == "date" && element.validity.rangeUnderflow) {
        tooltip.setContent({ '.tooltip-inner': 'Doit être égale ou supérieure à aujourd’hui' });
    }
}

//Change fields behaviour when we input the values in fields
function onChange(element, elHelpText, tooltip) {
    element.addEventListener("change", (event) => {
        event.preventDefault();
        const tooltip = bootstrap.Tooltip.getInstance(element);
        if (element.validity.valid) {
            if (tooltip) {
                tooltip.dispose();
            } else {
                console.log("There is no a tooltip to disable");
            }
            element.classList.remove("is-invalid");
            element.classList.add("is-valid");
            elHelpText.classList.remove("text-danger");
            elHelpText.classList.add("text-success");
        } else {
            element.classList.add("is-invalid");
            elHelpText.classList.add("text-danger");
            if (tooltip) {
                tooltip.enable();
            } else {
                const tooltip = new tooltipInitialize(element);
                tooltipMessage(element);
                tooltip.enable();
                console.log('Creation of tooltips');
            }
        }
    });

}


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


// Create toast of creating event success 
function toast() {
    const toastEl = document.getElementById('toast');
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}