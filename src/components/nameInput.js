const React = require('react');

module.exports = React.createClass({
  render: function() {
    const {messages, validate} = this.props.validation;
    const invalid = messages.name && messages.name.length > 0;

    return (
      <div className={`form-group${invalid ? ' invalid' : ''}`}>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' value={ this.props.name } onChange={ this.props.handler } onBlur={ validate.bind(this, 'name') } />
        {invalid ? <p className='message'>{ messages.name.join(', ') }</p> : null}
      </div>
    );
  }
});
