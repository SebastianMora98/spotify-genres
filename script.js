$(document).ready(function () {
  $("#example").DataTable({
    pagingType: "full_numbers",
    scrollX: true,
  });
});
/*
$(document).ready(function () {
  alert("ready");
  $.ajax({
    type: "GET",
    url: "SpotifyFeatures_copy.csv",
    dataType: "text",
    success: function (data) {
      let tracks = [];
      tracks = csvToArray(data);

      console.log({ tracks });

      tracks.map((track) => {
        let tr = "<tr>";
        Object.keys(track).map((key) => {
          tr += `<td>${track[key]}</td>`;
        });
        tr += "</tr>";
        $("#mytable > tbody").append(tr);
      });
    },
  });
});

function csvToArray(str, delimiter = ",") {
  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  // Map the rows
  // split values from each row into an array
  // use headers.reduce to create an object
  // object properties derived from headers:values
  // the object passed as an element of the array
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
}
*/
