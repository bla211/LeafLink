export default{
    UPDATE_LINE_ITEMS: (state, payload) => {
        state.lineItems.push(payload);
    },
    REMOVE_LINE_ITEM: (state, payload) => {
        state.lineItems.splice(payload, 1);
    },
    UPDATE_LINE_ITEM_DESCRIPTION: (state, {index, value}) => {
        state.lineItems[index].Description = value;
    },
    UPDATE_LINE_ITEM_UNIT_PRICE: (state, {index, value}) => {
        state.lineItems[index].UnitPrice = value;
    },
    UPDATE_LINE_ITEM_QUANTITY: (state, {index, value}) => {
        state.lineItems[index].Quantity = value;
    },
    UPDATE_LINE_ITEM_TOTAL: (state, {index, value}) => {
        state.lineItems[index].Total = value;
    }
}
