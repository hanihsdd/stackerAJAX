.ajax(url, settingsObject)


		var url = "http://api.stackexchange.com/2.2/tags/" + answerers + "/top-answerers/all_time";
		var parameters = {
			tag: tag,
			site: 'stackoverflow'
		}

		$.getJSON(url, parameters, function(response){
			console.log(response);
		});



		USER STUFF is located in an object called "items" with a value of an array
		which features a "user" object containing "reputation", "user_id", "display_name", "link"

		items.user.reputation
		items.user.display_name
		items.user.link

		items.score
		items.post_count