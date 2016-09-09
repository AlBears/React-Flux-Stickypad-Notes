var AppActions = require('../actions/AppActions');
var key = require('./appUrl.js');

var url = "https://api.mlab.com/api/1/databases/styckypad/collections/notes";

module.exports = {
		addNote: function(note){
			$.ajax({
				url: url+key,
				data: JSON.stringify(note),
				type: "POST",
				contentType: "application/json"
			});
		},
		getNotes: function(){
			$.ajax({
				url: url+key,
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
		},
		removeNote: function(noteId){
			$.ajax({
				url: url + "/" + noteId + key,
				type: "DELETE",
				async: true,
				timeout: 300000,
				success: function(data){
					console.log('Note Deleted...');
				}.bind(this),
				error: function(xhr, status, err){
					console.log(err);
				}.bind(this)
		});
	}
	}
