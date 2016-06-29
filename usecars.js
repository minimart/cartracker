$(function() {
  var carsArray = [];
  function makeCar(make, model, year, color, rating, price){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.rating = rating;
    this.price = price;
  };
var totalPrice = 0;
var timesSubmitted = 0;
  $('#form').on('submit', function(event) {

    event.preventDefault();
    var make = $('#make').val();
    var model = $('#model').val();
    var year = $('#year').val();
    var color = $('#color').val();
    var rating = $('input:radio[name=rating]:checked').val();
    var price = $('#price').val();
    var newCar = new makeCar(make, model, year, color, rating, price);
    carsArray.push(newCar);
    var ratingColor = '';
    switch(rating) {
      case '1':
        ratingColor = 'red';
        break;
      case '2':
        ratingColor = 'orange';
        break;
      case '3':
        ratingColor = 'yellow'
        break;
      case '4':
        ratingColor = 'greenyellow'
        break;
      case '5':
        ratingColor = 'green'
        break;
    }
    $('.carListSection').append('<article class=' + ratingColor + '>' +
                                '<h3>Car: ' + (timesSubmitted+1) + "</h3>"+
                                '<li>Make: ' + carsArray[timesSubmitted].make + '</li>'+
                                '<li>Model: ' + carsArray[timesSubmitted].model + '</li>'+
                                '<li>Year: ' + carsArray[timesSubmitted].year + '</li>'+
                                '<li>Color: ' + carsArray[timesSubmitted].color + '</li>'+
                                '<li> Rating: ' + carsArray[timesSubmitted].rating + '</li>' +
                                '<li> Price: $' + carsArray[timesSubmitted].price + '</li>'+
                                '<button> Remove </button>');

    totalPrice += parseInt(carsArray[timesSubmitted].price);
    $('h2').html('<h2> Total Cost Of All Cars Is $' + totalPrice + '</h2>')
    timesSubmitted++;
    $("form").trigger("reset");




  });
$('.carListSection').on('click', 'button', function(event){
  event.preventDefault();
  $(this).parent().remove();
  //    totalPrice -= parseInt(carArray[].price);
  //  $('h2').html('<h2> Total Cost Of All Cars Is $' + totalPrice + '</h2>')
})
})
