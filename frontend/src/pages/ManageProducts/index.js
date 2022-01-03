import React from "react";

import Layout from "../../components/Layout";
import UsersPanelLayout from "../../components/UsersPanelLayout";
import FormForProduct from "../../components/FormForProduct";
import SingleExistingProduct from "../../components/SingleExistingProduct";

const AdminPage = () => {
  return (
    <Layout>
      <UsersPanelLayout>
        <div className="user-contents">
          <FormForProduct
            headerText="Dodaj nowy produkt: "
            btnText="Dodaj produkt"
          />
          <section className="tasks-container">
            <h2>Twoje produkty: </h2>

            <SingleExistingProduct />
            <SingleExistingProduct />
            <SingleExistingProduct />
            <SingleExistingProduct />
          </section>
        </div>
      </UsersPanelLayout>
    </Layout>
  );
};

export default AdminPage;
