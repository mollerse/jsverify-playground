const React = require('react');
const nameValidator = require('../validators/nameValidator.js');

module.exports = React.createClass({
  render: function() {
    const validation = nameValidator(this.props.name);
    const invalid = validation.length > 0;

    return (
      <div className={`form-group${invalid ? ' invalid' : ''}`}>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' value={ this.props.name } onChange={ this.props.handler } />
        {invalid ? <p className='message'>{ validation.join(', ') }</p> : null}
      </div>
    );
  }
});
