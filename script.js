$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const page = urlParams.get("page");
  console.log(page);

  if (page == null) {
    window.location.href = "/index.html?page=1";
  }

  if (isNaN(page)) {
    window.location.href = "/index.html?page=1";
  }

  if (page < 1) {
    window.location.href = "/index.html?page=1";
  }

  let table = $("#example").DataTable({
    pagingType: "full_numbers",
    scrollX: true,
    drawCallback: function () {
      $(
        ".paginate_button.next:not(.disabled)",
        this.api().table().container()
      ).on("click", function () {
        window.location.href = "/index.html?page=" + (parseInt(page) + 1);
      });
    },
    initComplete: function () {
      this.api()
        .page(parseInt(page) - 1)
        .draw("page");
    },
  });

  table.on("buttons-action", function (e, buttonApi, dataTable, node, config) {
    console.log("Button " + buttonApi.text() + " was activated");
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
