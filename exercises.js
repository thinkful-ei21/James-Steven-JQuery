'use strict';

$('.thumbnails').on('click', 'a', function(event) {
  const image = event.target;
  console.log(event.target);
  if($(image).attr('src') !== $('.hero img').attr('src')) {
    $('.hero img').attr('src', $(image).attr('src'));
    $('.hero img').attr('alt', $(image).attr('alt'));
  }
});


