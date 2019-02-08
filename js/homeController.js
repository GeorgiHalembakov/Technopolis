function homeController(){

  $.get('../home.htm').then(text =>{
      $('main').html(text);
  });
  

  $.get('prmotionsTemplate.htm').then(res => {
        var template = Handlebars.compile(res);
    var html = template();
    $('.products.row').html = html;
  });
  
  var templateStr = $('#tv').html; 
  var template = Handlebars.compile(templateStr);
  var html = template(promotions);
  $('.products.row').html = html;


}