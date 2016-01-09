const React = require('react');
const emailValidator = require('../validators/emailValidator.js');

module.exports = React.createClass({
  render: function() {
    const validation = emailValidator(this.props.email);
    const invalid = validation.length > 0;

    return (
      <div className={`form-group${invalid ? ' invalid' : ''}`}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' value={ this.props.email } onChange={ this.props.handler }/>
        {invalid ? <p className='message'>{ validation.join(', ') }</p> : null}
      </div>
    );
  }
});
