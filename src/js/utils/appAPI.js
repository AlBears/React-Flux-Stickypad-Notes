var AppActions = require('../actions/AppActions');
var url = require('./appUrl.js');

module.exports = {
		addNote: function(note){
			$.ajax({
				url: url,
				data: JSON.stringify(note),
				type: "POST",
				contentType: "application/json"
			});
		},
		getNotes: function(){
			$.ajax({
				url: url,
				dataType: 'json',
				cache: false,
				success: function(data){
					console.log(data);
					AppActions.receiveNotes(data);
				}.bind(this),
				error: function (xhr, status, err){
					console.log(err);
				}.bind(this)
			});
		}
	}
