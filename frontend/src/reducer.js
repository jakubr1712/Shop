import { InitialReducerType } from "./initialReducer";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case InitialReducerType.ADD_PRODUCT:
      const { productId } = payload;

      state.selectedItems.map((item) => {
        if (item.id === productId) {
          if (item.count === 0) {
            const theHighestOrder = Math.max.apply(
              Math,
              state.selectedItems.map((item) => {
                return item.order;
              })
            );

            item.order = theHighestOrder + 1;
          }

          item.count = item.count + 1;
        }

        return item;
      });

      state.selectedItems.sort((a, b) => a.order - b.order);

      return {
        ...state,
      };

    case InitialReducerType.GET_TOTALS:
      let { totalMoney, totalItems } = state.selectedItems.reduce(
        (productsTotal, productItem) => {
          const { price, count } = productItem;
          const itemTotal = price * count;

          productsTotal.totalMoney += itemTotal;
          productsTotal.totalItems += count;

          return productsTotal;
        },
        {
          totalMoney: 0,
          totalItems: 0,
        }
      );

      return {
        ...state,
        totalAmount: totalMoney,
        totalCount: totalItems,
      };
    case InitialReducerType.FILTER_PRODUCTS:
      const filterData = payload?.productsData?.filter(({ name }) =>
        name.toLowerCase().includes(payload.searchTerm.toLowerCase())
      );

      return {
        ...state,
        data: filterData,
      };
    case InitialReducerType.REMOVE_ITEM:
      state.selectedItems.map((item) => {
        if (item.id === payload.productId) {
          item.count = item.count - 1;

          if (payload.removeAllItems) item.count = 0;
        }

        return item;
      });

      return {
        ...state,
      };

    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
