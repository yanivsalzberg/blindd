//single click funtion for no button
$('#nope').on('click', function () {
  var sound = 'assets/fart.mp3';
  var audio = new Audio(sound);
  audio.play();
});


//single click funtion for sound button
$('#sound').on('click', function () {
  //eventually I'll select from through a randomized array
  var sound = 'assets/tzahov.mp3';
  var audio = new Audio(sound);
  audio.play();
});

//single click funtion for yes button
$('#yeah').on('click', function () {
  var sound = 'assets/yeah.mp3';
  var audio = new Audio(sound);
  audio.play();
});
