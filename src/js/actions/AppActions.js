var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	addNote: function(note){
	AppDispatcher.handleViewAction({
		actionType: AppConstants.ADD_NOTE,
		note: note
	});
	},
	receiveNotes: function(notes){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_NOTES,
			notes: notes
		});
	}
}

module.exports = AppActions;
