import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import List from './pages/Listagem/ListUsers';
import Login from './pages/Login/Login';
import StoreProvider from './components/Store/Provider';
import StoreContext from './components/Store/Context';
import Include from './pages/Inclusão/Include';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() => (token ? <Component {...rest} /> : <Redirect to="/" />)}
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/list" component={List} />
        <PrivateRoute path="/include" component={Include} />
      </Switch>
    </StoreProvider>
  </BrowserRouter>
);

export default Routes;
