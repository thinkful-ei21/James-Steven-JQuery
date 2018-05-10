'use strict';

// $('.thumbnails').on('click', 'a', function(event) {
//   const image = event.target;
//   console.log(event.target);
//   if($(image).attr('src') !== $('.hero img').attr('src')) {
//     $('.hero img').attr('src', $(image).attr('src'));
//     $('.hero img').attr('alt', $(image).attr('alt'));
//   }
// });


function handleThumbnailClicks() {
  $('.thumbnail').on('click', function(event) {
      const imgSrc = $(this).find('img').attr('src');
      const imgAlt = $(this).find('img').attr('alt');

      $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  });
}

$(handleThumbnailClicks);

