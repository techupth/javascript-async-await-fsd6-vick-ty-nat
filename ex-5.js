// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function fetchJohnData() {
  try {
    let johnProfile = await getJohnProfile();
    console.log(johnProfile);
  } catch (errorMessage) {
    // console.log(errorMessage);
    console.error(errorMessage);
  }
}

fetchJohnData();
