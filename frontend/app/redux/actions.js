import axios from 'axios'
import store from 'redux/store.js'
//import { Socket } from 'vendor/phoenix.js'

const Actions = {}

// SOCKET
Actions.initiateSocket = function initiateSocket() {
  return dispatch => {
    // TODO: Fix phoenix.js (babel freaking out)
    //let socket = new Socket("ws://localhost:4000/socket");
    //socket.connect();
    let socket = "nope"
    console.log("Connected..")
    dispatch({
      type: 'INITIATE_SOCKET',
      socket: socket
    });
  }
};

// USERS
Actions.logout = function logout() {
  delete localStorage.phoenix_auth_token;

  return {
    type: 'LOG_OUT'
  }
};

Actions.setCurrentUser = function setCurrentUser(user) {
  console.log("in setCurrentUser")
  return {
    type: "SET_CURRENT_USER",
    currentUser: {
      email: "joshfake@example.com",
      username: "joshfake@example.com"
    }
  }
}

export default Actions;
