export function createElementHTML(type, args) {
    const elemTypes = ["section", "div", "h3", "span", "label", "input", "select", "option", "textarea", "p"];
    const propTypes = ["class", "rows", "id", "name", "type",  "placeholder"];
    const especialPropType = ["textContent", "value"];
    
    if (!type || type == "") return console.error("ERROR: You didn't specify the type");
    if (typeof type != 'string' || !elemTypes.includes(type)) return console.error("ERROR: You have specified an invalid type or that has not yet been deployed");
    let element = document.createElement(type);

    if (!args || args == "" || typeof args != 'object') console.warn("Alert: You don't added a valid argument!");
    else if (Array.isArray(args)) {
        args.forEach(arg => {

            if (typeof arg != 'object' || Array.isArray(arg)) console.warn("ALERT: Your array can contain only objects");
            let elemOfArr = createElementHTML(type, arg);
            if (elemOfArr || elemOfArr != "") element.appendChild(elemOfArr);
        });
    }
    else if (typeof args == 'object') {
        let objPropNames = Object.getOwnPropertyNames(args);
        objPropNames.forEach(prop => {
            if (elemTypes.includes(prop)) {
                if (Array.isArray(args[prop])) {
                    args[prop].forEach(argProp => {
                        let elemOfElem =  createElementHTML(prop, argProp);
                        if (elemOfElem || elemOfElem != "") { element.appendChild(elemOfElem) }
                        else (console.warn("ALERT: In your arguments have a error!"));
                    });
                } else {
                    let elemOfElem = createElementHTML(prop, args[prop]);
                    if (elemOfElem || elemOfElem != "") { element.appendChild(elemOfElem) }
                    else (console.warn("ALERT: In your arguments have a error!"));
                }
            }
            else if (propTypes.includes(prop)) {
                element.setAttribute(prop, args[prop]);
            }
            else if (especialPropType.includes(prop)) {
                element[prop] = args[prop];
            }
            else console.warn("ALERT: You type a invalid property")
        });
    }
    else { console.error("ERROR! Don't specified!"); }

    return element;
}