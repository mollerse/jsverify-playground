const React = require('react');

const emailInput = React.createClass({
  render: function() {
    const {messages, validate} = this.props.validation;
    const invalid = messages.email && messages.email.length > 0;

    return (
      <div className={`form-group${invalid ? ' invalid' : ''}`}>
        <label htmlFor='email'>Email</label>
        <input id='email' type='text' value={ this.props.email } onChange={ this.props.handler } onBlur={ validate.bind(this, 'email') }/>
        {invalid ? <p className='message'>{ messages.email.join(', ') }</p> : null}
      </div>
    );
  }
});

module.exports = emailInput;
