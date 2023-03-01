import faker from "faker";

let products = "";

for (let i = 0; i < 10; i++) {
  products += `<div>${faker.name.firstName()}</div>`;
}

document.querySelector("#cart").innerHTML = products;
