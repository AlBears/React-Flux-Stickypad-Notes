var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');


var Note = React.createClass({
	render: function(){
		return(
        <div>
          {this.props.note.text}
        </div>
		)
	}
});

module.exports = Note;
