import * as React from "react";

import Layout from "../../components/Layout";
import UsersPanelLayout from "../../components/UsersPanelLayout";
import ClientInTable from "../../components/ClientInTable";

const EditProduct = () => {
  return (
    <Layout>
      <UsersPanelLayout>
        <div className="user-contents">
          <h2>Twoi klienci:</h2>
          <table className="table">
            <thead className="table-header">
              <tr>
                <th className="header__item">Lp</th>
                <th className="header__item">Nazwa użytkownika</th>
                <th className="header__item">Email</th>
              </tr>
            </thead>
            <tbody className="table-content">
              <ClientInTable />
              <ClientInTable />
              <ClientInTable />
              <ClientInTable />
            </tbody>
          </table>
        </div>
      </UsersPanelLayout>
    </Layout>
  );
};

export default EditProduct;
