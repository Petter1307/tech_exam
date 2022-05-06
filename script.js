function change_icon(x) {
    let newItems = JSON.parse(localStorage.getItem("items"));
    console.log(x.id)
    newItems[x.id].favourite = !newItems[x.id].favourite;
    localStorage.setItem("items", JSON.stringify(newItems));
    document.location.reload(true);
  }
  
  var card = `<div class="card">
  <div class="card-title">
    <p id="name"></p>
    <i
      class="fa-regular fa-star"
      class="not_fav"
      onclick="change_icon(this);"
    ></i>
  </div>
  <div class="card-row">
    <p class="card-property" id="first_value"></p>
    <p class="card-value" id="first_property"></p>
  </div>
  <div class="card-row">
    <p class="card-property" id="second_value"></p>
    <p class="card-value" id="second_property></p>
    <!-- <div class="circle"></div> -->
  </div>
  </div>`;
  
  $(window).on("load", function () {
    $.getJSON("https://swapi.dev/api/people/?format=json", function (data) {
      var arr = data.results;
      let obj = [];
      arr.map((res) =>
        obj.push({
          name: res.name,
          birthyear: res.birth_year,
          height_cm: res.height,
          favourite: false,
        })
      );
      if (localStorage.getItem('items') === null)
        localStorage.setItem("items", JSON.stringify(obj));
      JSON.parse(localStorage.getItem("items")).map((res, index) =>
        $("#cards-wrapper").append(
          `<div class="card ` + (((index + 1) % 2 === 0) ? 'even': '') + `">
      <div class="card-title">
        <p id="name">` +
            res.name +
            `</p>
        <i
          id="` +
            index +
            `"
          class="fa-regular fa-star `+ (res.favourite ? 'fa-solid' : '') + `"
          class="not_fav"
          onclick="change_icon(this);"
        ></i>
      </div>
      <div class="card-row">
        <p class="card-property" id="first_value">Birth:&nbsp</p>
        <p class="card-value" id="first_property">` +
            res.birthyear +
            `</p>
      </div>
      <div class="card-row">
        <p class="card-property" id="second_value">Height:&nbsp</p>
        <p class="card-value" id="second_property">` +
            res.height_cm +
            `</p>
      </div>
      </div>`
        )
      );
    });
  });
  