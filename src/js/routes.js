import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import Index from './pages/Index';
import SignIn from './pages/SignIn';
import App from './containers/App';
import NotFoundView from './pages/NotFoundView';
import UserSettings from './pages/UserSettings';
import RecipePage from './pages/Recipes';
import MealPage from './pages/Meals';
import LightPage from './pages/Lights';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="404" component={NotFoundView} />
    <Route path="signin" component={SignIn} />
    <Route path="settings" component={UserSettings} />
    <Route path="meals" component={MealPage} />
    <Route path="lights" component={LightPage} />
    <Route path="recipes(/:slug)(/:mode)" component={RecipePage} />
    <Redirect from="*" to="404" />
  </Route>
);
