import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import ProductsPage from "./pages/Products";
import AdminPage from "./pages/AdminPage";
import ShowClientsPage from "./pages/ShowClients";
import ManageProductsPage from "./pages/ManageProducts";
import EditProductPage from "./pages/EditProduct";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

import "./styles/themes/default/theme.scss";

const App = () => (
  <div className="app__wrapper">
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/show-clients" component={ShowClientsPage} />
        <Route exact path="/admin-page" component={AdminPage} />
        <Route exact path="/manage-products" component={ManageProductsPage} />
        <Route exact path="/edit-product" component={EditProductPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="/*" component={Page404} />
      </Switch>
    </Router>
  </div>
);

export default App;
