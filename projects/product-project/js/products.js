/* global $ _ */

$('document').ready(function () {
  $.getJSON('data/product.json', function(product){
      
   // ALL YOUR CODE GOES BELOW HERE //
    $('<div>').addClass('main-div').
      append('<body>');
    
   
   
   // PRODUCTS TABLE
   
    $('<table>').addClass('product-table').append($('<tbody>').attr('id', 'table-body')).appendTo('body');
    
    
    // DATA COLLECTION LOOP
    function dataCollection(product){
      _.forEach(product, function(product, index, products){
      
      var $imgSrc = product.image;
      var $imgThumb = '../product-project/img/product/thumbs/' + $imgSrc;
      var $modalImg = '../product-project/img/product/' + $imgSrc;
     
   
    
      
      $('#table-body').append($('<tr>').addClass(product.type).attr('id', product.id)).
      append($('<td>').addClass(product.type).attr('id', 'thumb' + product.id).attr('index', product.id).css('width', '25%').append($('<img>').css('left', '25px').attr('src', $imgThumb).addClass('phone-image'))).
      append($('<td>').addClass(product.type).attr('id', 'desc' + product.id).attr('index', product.id).css('width', '50%').text(product.desc)).
      append($('<td>').addClass(product.type).attr('id', 'price' + product.id).attr('index', product.id).css('padding-left', '25px').css('width', '25%').text(product.price.toFixed(2))).append
        ($('<div>').addClass('modal').attr('id', 'modal' + product.id).
        append($('<button>').addClass('close').text('Close')).
        append($('<header>').text(product.desc)).
        append($('<header>').text(product.price.toFixed(2)).css('font-style', 'italic')).
        append('<div>').addClass('modal-content').
        
        append($('<img>').addClass('modal-img').attr('src', $modalImg)).
        append($('<ul>').attr('id', 'features-list' + product.id)));
        
      _.forEach(product.specs, function(spec){
        var specli = $('<li>').text(spec);
        $('#features-list' + product.id).append(specli);
      });
      
    if(product.stock <= 10){
      $('<p>').text('Only ' + product.stock + ' left in stock!').css('color', 'red').css('font-weight', 'bold').appendTo('#price' + product.id);
    }
    
     $('td').click(function(event){
 
      $('#modal' + $(event.currentTarget).attr('index')).css('display', 'block');
      
    });
  
  $('.close').click(function(event){

      $('.modal').css('display', 'none');
      
    
  });
    
    });
    }
    dataCollection(product);

  
  
  // SEARCH BAR
    $('<div>').addClass('search-bar').
      append($('<section>').attr('id', 'filter-text').text('Filter')).
      prependTo('main');
      
    $('.search-bar').append($('<form>').attr('id', 'filter')).append($('<select>').attr('id', 'dropdown').attr('value', 'all').
      append($('<option>').attr('id', 'option-all').attr('value', 'all').text('All').click(function(event){
        $('#dropdown').attr('value', 'all');
      })));
      
    _.reduce(product, function(acc, curr){
      if(acc[curr.type]){
        return acc;
      } else {
        acc[curr.type] = curr.type;
        
        $('#dropdown').append($('<option>').attr('id', 'option-' + curr.type).
          attr('value', curr.type).text(curr.type.charAt(0).toUpperCase() + curr.type.substr(1))
          );
      }
      return acc;
    }, {});
      
    
    $('<section>').attr('id', 'search-text').text('Search').appendTo('.search-bar');
    
    $('<form>').css('padding-left', '5px').append($('<input>').attr('id', 'search-box').attr('type', 'text')).appendTo('.search-bar');
      $('<button>').attr('id', 'search-button').text('Search').
      appendTo('.search-bar');
      
    
        
    $('<section>').attr('id', 'sort-text').text('Sort').appendTo('.search-bar');
    $('<form>').css('padding-left', '5px').append($('<select>').attr('id', 'sort-select').
      append($('<option>').attr('id', 'no-sort').attr('value', 'no-sort').text('No Sort').click(function(event){
        $('#sort-select').attr('value', 'no-sort');
      })).
      append($('<option>').attr('id', 'cost-ascending').attr('value', 'cost-ascending').text('Cost Ascending').click(function(event){
        $('#sort-select').attr('value', 'cost-ascending');
      })).
      append($('<option>').attr('id', 'cost-descending').attr('value', 'cost-descending').text('Cost Descending').click(function(event){
        $('#sort-select').attr('value', 'cost-descending');
      }))).appendTo('.search-bar');
    
  
  
  // SEARCH FUNCTIONALITY
  
 var productCopy = product.slice();
  $('#dropdown').on('change', function(event){
    
    
    $('tr').hide();
    $('td').hide();
    
      if(event.currentTarget.value === 'all'){
        $('#dropdown').attr('value', 'all');
        $('tr').show();
        $('td').show();
      } else {
        $('#dropdown').attr('value', event.currentTarget.value);
        $('.' + event.currentTarget.value).show();
      }
    
  });
  
  $('#sort-select').on('change', function(event){
    if($('#search-box')[0].value !== ''){
      var getInput = $('#search-box')[0].value;
      var matches = search(product, getInput);
      productCopy = matches;
    }
     $('tr').remove();
     $('td').remove();
     $('.modal').remove();
      
      if(event.currentTarget.value === 'cost-ascending'){
        $('#sort-select').attr('value', event.currentTarget.value);
          
          productCopy.sort(function(a, b){
            return a.price - b.price;
          });
          dataCollection(productCopy);
          
      } else if (event.currentTarget.value === 'cost-descending'){
        $('#sort-select').attr('value', event.currentTarget.value);
          
          productCopy.sort(function(a, b){
            return b.price - a.price;
          });
          dataCollection(productCopy);
      } else if (event.currentTarget.value === 'no-sort'){
        $('#sort-select').attr('value', event.currentTarget.value);
        dataCollection(product);
      }
      
    if($('#dropdown').attr('value') !== 'all'){
      
      $('tr').hide();
      $('td').hide();
      $('.' + ($('#dropdown').attr('value'))).show();
    }
    
  });
  
  
  function search(collection, searchInput){
      var output = [];
      searchInput = searchInput.toLowerCase();
        _.each(collection, (function(e){
            if(isCollection(e)){
               if (search(e, searchInput).length){
                    output.push(e);
               }
            } else {
                if (typeof e === 'string'){
                    if (e.toLowerCase().indexOf(searchInput) > -1) {
                        output.push(e);
                    }
                }
            }
        }));
      
      return output;
  }
    
  function isCollection(element){
      if (element === null || element instanceof Date) return false;
      if (typeof element === 'object') return true;
      return false;
  }
    
    
  $('#search-button').click(function(event){
    $('td').hide();
    $('tr').hide();
    var getInput = $('#search-box')[0].value;
    var matches = search(product, getInput);
    
    if(matches.length === 0){
      alert('No items found for that search!');
      $('td').show();
      $('tr').show();
      
    } else {
      $('td').remove();
      $('tr').remove();
      $('.modal').remove();
    }
    if($('#sort-select').attr('value') !== 'no-sort'){
      matches = search(productCopy, getInput);
      
    } 
    
   dataCollection(matches);
    
    if ($('#dropdown').attr('value') !== 'all'){
     $('td').hide();
    $('tr').hide();
    $('.' + $('#dropdown').attr('value')).show();
    }
    
    
     
    
    
    
   
  });
  
    // MODAL FUNCTIONALITY
  
  $('td').click(function(event){
 console.log(event.currentTarget);
      $('#modal' + $(event.currentTarget).attr('index')).css('display', 'block');
      
    });
  
  $('.close').click(function(event){

      $('.modal').css('display', 'none');
      
    
  });
  
  // ALL YOUR CODE GOES ABOVE HERE //
  });
});