// export
let elementToHTML = {
    div: [
        {
            span: {
                textContent: "Teste 1"
            }
        },
        {
            span: {
                textContent: "Teste 2"
            }
        }
    ]
}

function createElementHTML(element) {
    return verification(element);
}

function verification(element, text) {
    console.log(element, text)
    if (Array.isArray(element)) {
        element.forEach(item => verification(item, "item"));
    }
    if (element.div) {
        verification (element.div, "div")
    }
    else {
        return element;
    }
}

console.log(createElementHTML(elementToHTML))
// console.log(Array.isArray(element.div))












// function createDivElement() {}
// function createSectionElement() {}
// function createSpanElement() {}
// function createLabelElement() {}
// function createh3Element() {}
// function createSelectElement() {}
// function createOptionElement() {}


// console.log( Array.isArray(teste) );



// <div>
//     <section></section>
//     <section></section>
// </div>


// section : [{}, {}]























function createSpanElement(textContent) {
    const span = document.createElement('span');
    span.textContent = textContent;

    return span;
};

function createDivElement() {
    const div = document.createElement('div');
    div.classList.add("config");

    defaultDiv.forEach(sectionObj => {
        div.appendChild( this.createSectionElement(sectionObj) )
    });

    div.addEventListener('change', event => {
        if (event.target.value != "") {
            this[event.target.name] = event.target.value;
        }
        else {
            event.target.value = this[event.target.name];
        }
    });

    return div;
};

function createSectionElement(sectionObj) {
    const section = document.createElement('section');
    section.classList.add(sectionObj.class);

    if (sectionObj.h3) section.appendChild( this.createH3Element(sectionObj.h3) );
    if (sectionObj.span) section.appendChild( this.createSpanElement(sectionObj.span) );

    if (sectionObj.label) {
        const labels = this.createLabelElement(sectionObj.label);
        labels.forEach(label => section.appendChild(label));
    }
    if (sectionObj.select) section.appendChild( this.createSelectElement(sectionObj.select) );
    if (sectionObj.textarea) section.appendChild( this.createTextAreaElement(sectionObj.textarea) );
    

    return section;
};

function createH3Element({textContent, class: className}) {
    const h3 = document.createElement('h3');
    h3.classList.add(className);
    h3.textContent = textContent;

    return h3;
};

function createLabelElement(labelArr) {
    const labelReturned = [];
    labelArr.forEach(([name, textContent, type]) => {
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.textContent = textContent + ": ";
        input.name = name;
        input.type = type;
        label.appendChild(input);
        labelReturned.push(label);
    });

    return labelReturned;
};

function createSelectElement({name, labelContent, options}) {
    const select = document.createElement('select');
    const label = document.createElement('label');

    label.appendChild(this.createSpanElement(labelContent + ": "))
    options.forEach(option => select.appendChild(this.createOptionElement(option)));
    label.appendChild(select);

    return label;
};

function createOptionElement({value, textContent}) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = textContent;
    
    return option;
};

function createTextAreaElement({name, rows, placeholder}) {
    const textarea = document.createElement('textarea');
    textarea.name = name;
    textarea.rows = rows;
    textarea.placeholder = placeholder;

    return textarea;
}