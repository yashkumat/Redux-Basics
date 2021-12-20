<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/yashkumat/redux-basics">
    <h3 align="center">Redux Basics</h3>
  </a>

  <p align="center">
    This is a guide to understand and use redux in your project in easiest way.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About Redux</a>
      <ul>
        <li><a href="#built-with">Lessons Learned</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About Redux

- Centralize your application's state and logic.

### Lessons Learned

  ** 1. Reducer - ** Function that takes current state and action (type of action + data) as an argument and return updated state.
  
  ** 2. Action - ** Object that has type of action (basically name) and data to be passed to a reducer function.
  
  ** 1. Store - ** Give us different methods to fetch or modify current state
  
      ** - getState() - ** Returns current state
      
      ** - dispatch() - ** call reducer function by passing action
      
      ** - subscribe() - ** listen to state change

### Built With

* [React.js](https://reactjs.org/)
* [Redux.js](https://reduxjs.org/)
* [Bootstrap](https://getbootstrap.com)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* react
  ```javascript
  npx create-react-app app-name
  ```
  
* redux
  ```javascript
  npm install redux
  ```

<!-- USAGE EXAMPLES -->
## Usage

This is how you can use redux in your application

1. Create reducer.js file and write function that takes state and action and retuns updated state.
```javascript
function reducer(state =[], action){
  if(action.type === "type){
    <!--  Some Logic    -->
    return updatedState
  }
}
```

2. Create store.js file and export store
```javascript
import { createStore } from 'redux'

const store = createStore(reducer);

export default store;
```

3. Now you can use store variable to getState or dispatch (take action) or subscribe (listen to state change), etc
  - getState
  ```javascript
  store.getState()
  ```
  
  - dispatch
  ```javascript
  store.dispatch({
      type: "type",
      payload:{
          data: "data"
      }
  })
  ```
  
  - subscribe
  ```javascript
  store.subscribe(()=>{})
  ```


<!-- CONTACT -->
## Contact

Email - [ykumat@gmail.com](mailto:ykumat@gmail.com)
Twitter - [@yashkumat](https://twitter.com/yashkumat)
Github Profile: [https://github.com/yashkumat/](https://github.com/yashkumat)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Redux Tutorial - Learn Redux from Scratch by Prgramming with Mosh](https://youtu.be/poQXNp9ItL4)

<p align="right">(<a href="#top">back to top</a>)</p>
