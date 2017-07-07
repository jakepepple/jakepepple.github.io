/* global $ _ */

$(function () {
  $.getJSON('../product-project/data/product.json', function(product){
      console.log(product);
   // ALL YOUR CODE GOES BELOW HERE //
    $('<div>').addClass('main-div').
      append('<body>');
    
   // SEARCH BAR
    $('<div>').addClass('search-bar').
      append($('<section>').attr('id', 'sort-text').text('Sort')).
      prependTo('main');
    $('<form>').attr('id', 'filter').append($('<select>').
      append($('<option>').attr('value', 'all').text('All')).
      append($('<option>').attr('value', 'case').text('Case')).
      append($('<option>').attr('value', 'phone').text('Phone'))).appendTo('.search-bar');
    $('<section>').attr('id', 'search-text').text('Search').appendTo('.search-bar');
    $('<form>').css('padding-left', '25px').append($('<input>').attr('type', 'text')).
      appendTo('.search-bar');
    
    
    
    
    
   // PRODUCT LIST
    $('<div>').addClass('product-list-div').
      append($('<ul>').addClass('product-list')).appendTo('body');
    _.forEach(product, function(product, index, products){
      var $imgSrc = product.image;
      var $actualImg = '../product-project/img/product/thumbs/' + $imgSrc;
      $('<li>').attr('id', product.id).
        text(product.desc).
        addClass(product.type).
        appendTo('.product-list');
 
      $('<img>').attr('src', $actualImg).
        addClass('phone-image').
        prependTo('#' + product.id);
    });
    
    
  // SEARCH FUNCTIONALITY
    $('option').on('click', function(event){
      if($(event.currentTarget).value === 'case'){
        $('.Phone').hide();
      }
      
    });
    
  
  
  
  // ALL YOUR CODE GOES ABOVE HERE //
  });
});