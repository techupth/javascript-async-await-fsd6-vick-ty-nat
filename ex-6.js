// Exercise #6
let getJohnProfile = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = async () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
async function fetchJohnData() {
  try {
    const handleData = (data) => console.log(data);
    const johnProfile = await getJohnProfile();
    handleData(johnProfile);
    const johnOrders = await getJohnOrders();
    handleData(johnOrders);
  } catch (error) {
    console.log(error);
  }
}

fetchJohnData();
