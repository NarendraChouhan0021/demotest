import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../Reducers';
// import { googleAnalytics } from '../reactGAMiddleware';
// import ReactGA from 'react-ga';
// import history from '../history';
// import { connectRouter, routerMiddleware } from 'connected-react-router';

// ReactGA.initialize('UA-125426168-1');

// export const store = createStore(
//   connectRouter(history)(reducers),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   compose(
//     applyMiddleware(reduxThunk),
//     applyMiddleware(routerMiddleware(history)),
//     applyMiddleware(googleAnalytics)
//   )
// );

export const store = createStore(reducers);
