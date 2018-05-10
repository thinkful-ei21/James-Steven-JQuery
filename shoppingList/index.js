function handleSubmit() {
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		const shoppingItem = $('input.js-shopping-list-entry').val();
		const addedHtml = `<li>
	        <span class="shopping-item">${shoppingItem}</span>
	        <div class="shopping-item-controls">
	          <button class="shopping-item-toggle">
	            <span class="button-label">check</span>
	          </button>
	          <button class="shopping-item-delete">
	            <span class="button-label">delete</span>
	          </button>
        	</div>
      	</li>`;
      	$('ul.shopping-list').append(addedHtml);
      	event.target.reset();
      	// $('input.js-shopping-list-entry').val('');		// this line does the same thing as the line above
	});
	
}

$(handleSubmit);