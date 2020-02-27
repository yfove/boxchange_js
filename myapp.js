let elements = document.getElementsByName("cssProperty");
console.log(elements);

let div = docmument.getElementById("modify");

function set() {
  for (let index = 0; index < elements.length; index++) {
    let cssProperty = element[index].getAttribute("id");

    let cssValue = elements[index].value;

    // console.log(cssProperty, cssValue);

    document.getElementsById("modify");

    // set it equal to the value

    div.style[cssProperty] = cssValue;
  }
}

document.getElementById("set").addEventListener("click", set);
