function homeController(){

  $.get('home.htm').then(text =>{
      $('main').html(text);
  });
}