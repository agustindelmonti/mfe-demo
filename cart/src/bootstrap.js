import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 10; i++) {
    products += `<div>${faker.name.firstName()}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#cart");
  if (el) {
    mount(el);
  }
}

export { mount };
