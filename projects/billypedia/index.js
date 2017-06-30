/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('background', 'rgb(46, 92, 132)');
        $('#section-bio').css('color', 'rgb(208, 220, 244)');
        $('#section-bio').css('font-family', 'trebuchet MS');
        $('#section-bio').css('padding', '10px');
        $('#section-bio').css('border-radius', '25px');
        $('#section-quotes').css('background', 'rgb(46, 92, 132)');
        $('#section-quotes').css('color', 'rgb(208, 220, 244)');
        $('#section-quotes').css('font-family', 'trebuchet MS');
        $('#section-quotes').css('padding', '10px');
        $('#section-quotes').css('border-radius', '25px');
        $('#header-top-rated').css('margin-top', '20px');


 
        
        //BILLY'S RIDER
        let $section = $('<section>').attr('id', 'section-rider');
        $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
        $('#section-rider').css('background', 'rgb(46, 92, 132)')
          .css('color', 'rgb(208, 220, 244)')
          .css('font-family', 'trebuchet MS')
          .css('padding', '10px')
          .css('border-radius', '25px')
          .css('margin-top', '20px');
        
        // TOP RATED LIST
        let topRated = data.discography.topRated;
        let $topRatedList = $('#list-top-rated');
        _.map(topRated, function(recording){
            $topRatedList.append($('<li>').text(recording.title).addClass('top-rated-li').data('src', recording.art));
        });
        
        // RECORDINGS LIST
        $('<section>').attr('id', 'section-recordings').append($('<h3>').text('Recordings')).appendTo($('#sidebar'));
        $('#section-recordings').append($('<ul>').attr('id', 'list-recordings'));
        var recordings = data.discography.recordings;
        _.map(recordings, function(recording){
            var $listItem = $('<li>').addClass('recording').data('src', recording.art);
            var $title = $('<div>').addClass('title').text('Title: ' + recording.title);
            var $artist = $('<div>').addClass('artist').text('Artist: ' + recording.artist);
            var $release = $('<div>').addClass('release').text('Release: ' + recording.release);
            var $year = $('<div>').addClass('year').text('Year: ' + recording.year);

            $listItem.append($title, $artist, $release, $year);
            $('#list-recordings').append($listItem);
        });
        $('.artist').css('margin-left', '15px')
          .css('font-size', '90%');
        $('.release').css('margin-left', '15px')
          .css('font-size', '90%');
        $('.year').css('margin-left', '15px')
          .css('font-size', '90%');
        
        // TR IMAGE
        $('<div>').attr('id', 'image-container-top-rated').attr('class', 'image-container').prependTo('#section-top-rated');
        $('<img>').attr('src', 'images/album/voice-in-the-night.jpg').attr('id', 'top-rated-image').appendTo('#image-container-top-rated'); 
        
        // RECORDING IMAGE
        $('<div>').attr('id', 'image-container-recording').attr('class', 'image-container').prependTo('#section-recordings');
        $('<img>').attr('src', 'images/album/eastern-rebellion.jpg').attr('id', 'recording-image').appendTo('#image-container-recording'); 
        
        
        // DYNAMIC BILLY IMAGE CLICK
        let billyImages = data.images.billy;
        $('#image-container-billy').on('click', function(){
            let i = $('#image-billy').attr('i');
            if(i >= billyImages.length - 1){
                $('#image-billy').fadeOut(50);
                $('#image-billy').attr('i', 0);
                $('#image-billy').attr('src', billyImages[0]);
                $('#image-billy').fadeIn();
            } else {
                $('#image-billy').fadeOut(50);
                i++;
                $('#image-billy').attr('i', i);
                $('#image-billy').attr('src', billyImages[i]);
                $('#image-billy').fadeIn();
            }
        });
        
        //DYNAMIC RECORDING IMAGE CLICK
        
        $('li').on('click', function(event){
            var $clickedImg = $(event.currentTarget);
            
            var $newImg = $clickedImg.data('src');
            if($clickedImg.attr('class') === 'recording'){
                $('#recording-image').fadeOut(50);
                $('#recording-image').attr('src', $newImg);
                $('#recording-image').fadeIn();
            } else {
                $('#top-rated-image').fadeOut(50);
                $('#top-rated-image').attr('src', $newImg);
                $('#top-rated-image').fadeIn();
            }
             
        });
        
        //TABLE 
        
        var createTable = function(data){
            var createRow = function(rider){
                var $row = $('<tr>');
                var $type = $('<td>').text(rider.type);
                var $description = $('<td>').text(rider.desc);
                $row.append($type);
                $row.append($description);
                return $row;
            };
           var $table = $('<table>');
           var $rows = data.map(createRow);
           $table.append($rows);
           return $table;
            
        };
        data = data.rider;
        createTable(data).appendTo('#section-rider');
        
        
        $('img').css('border-radius', '20px');
        $('a').css('font-size', '125%')
          .css('font-style', 'normal')
          .css('font-weight', 'bold')
          .css('font-family', 'trebuchet MS');
          
        $('td').css('border', '2px solid rgb(121, 134, 155)');
          
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


