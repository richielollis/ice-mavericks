var getWalkScore = function () {
  fetch(
    `http://api.positionstack.com/v1/forward?access_key=4b09d51135b8018bd74426bb08f42b39&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC`
  )
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (data) {
      console.log(data[0].latitude);
      return fetch(
        `https:api.walkscore.com/score?format=json&lat=${data[0].latitude}&lon=${data[0].longitude}&transit=1&bike=1&wsapikey=eacaa7cb7ff629e395db7df723293f0b`
      );
    })
    .then(function (res) {
      return res.json();
    })
    .catch(function (error) {
      console.log(error);
    });
};

getUserInput = function (event) {
  event.preventDefault();
  var userInput = $("#user-input").val();
  console.log(userInput);
  getWalkScore(userInput);
};

// example to attempt to make api work -- it failed lol
var address = "1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC";

var button = $("#form-button");
button.on("click", getUserInput);
