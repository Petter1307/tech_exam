function change_icon(x) {
    x.classList.toggle("fa-solid");
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

$(window).on('load',function(){
    $.getJSON('https://swapi.dev/api/people/?format=json', function(data) {
        var arr = data.results;
        console.log(arr);
        arr.map(res=>res.name);
        // $.each(arr,function(){
        //     jQuery('.cards-wrapper').append(function(){
        //         $(".name").text(this.name);
        //     })
        // });
    });
});
