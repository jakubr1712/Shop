import * as React from "react";

import Layout from "../../components/Layout";
import FormForProduct from "../../components/FormForProduct";
import UsersPanelLayout from "../../components/UsersPanelLayout";

const EditProduct = () => {
  return (
    <Layout>
      <UsersPanelLayout>
        <div className="user-contents">
          <FormForProduct
            headerText="Edytuj produkt: "
            btnText="Edytuj produkt"
          />
        </div>
      </UsersPanelLayout>
    </Layout>
  );
};

export default EditProduct;
