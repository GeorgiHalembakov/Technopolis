function homeController(){

  $.get('../home.htm').then(text =>{
      $('main').html(text);
  });


  $.get('js/promotionsTemplate.htm').then(res => {
    var template = Handlebars.compile(res);
    var html = template({ promotions });
    $('.promotions').html(html);
  });

  $.get('js/newItemsTemplate.htm').then(res => {
    var template = Handlebars.compile(res);
    var html = template({ newProducts });
    $('.new').html(html);
  });

  
  // var templateStr = $('#tv').html; 
  // var template = Handlebars.compile(templateStr);
  // var html = template(promotions);
  // $('.products.row').html = html;



};