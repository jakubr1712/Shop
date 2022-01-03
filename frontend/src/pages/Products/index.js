import * as React from "react";
import Layout from "../../components/Layout";

import { AppProvider } from "../../context";

import PurchaseSummary from "../../components/PurchaseSummary";
import SectionWithProducts from "../../components/SectionWithProducts";

const ProductsPage = () => {
  return (
    <AppProvider>
      <Layout>
        <div className="container">
          <SectionWithProducts />
          <PurchaseSummary />
        </div>
      </Layout>
    </AppProvider>
  );
};

export default ProductsPage;
