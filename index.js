const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const { Provider } = require('react-redux');

const userReducer = require('./src/reducers/user.js');
const UserForm = require('./src/containers/userForm.js');

const store = createStore(userReducer);

if(module.hot) {
  module.hot.accept('./src/reducers/user.js', function() {
    const newUserReducer = require('./src/reducers/user.js');
    store.replaceReducer(newUserReducer);
  });
}

var mount = document.createElement('div');
document.body.appendChild(mount);

ReactDOM.render(
  <Provider store={ store }>
    <UserForm />
  </Provider>,
  mount
);
