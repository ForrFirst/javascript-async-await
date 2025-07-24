//Exercise #2
let getJohnProfile = () => {
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
function showJohnProfile(johnProfile){
  console.log(johnProfile)
}

function displayerror(error){
  console.log(error)
}

getJohnProfile()
  .then(showJohnProfile)
  .catch(displayerror)