//import axios from 'axios'

export default{
    handleAddLineItem: (context) => {
        const emptyLineItem = {
            ID: null,
            Description: '',
            UnitPrice: 0,
            Quantity: 0,
            Total: 0
        }
        context.commit('UPDATE_LINE_ITEMS', emptyLineItem);
    },
    handleLineItemDescription: (context, payload) => {
        context.commit('UPDATE_LINE_ITEM_DESCRIPTION', payload);
    },
    handleLineItemUnitPrice: (context, payload) => {
        context.commit('UPDATE_LINE_ITEM_UNIT_PRICE', payload);
        context.dispatch('handleLineItemTotal', payload.index);
    },
    handleLineItemQuantity: (context, payload) => {
        context.commit('UPDATE_LINE_ITEM_QUANTITY', payload);
        context.dispatch('handleLineItemTotal', payload.index);
    },
    handleLineItemTotal: (context, payload) => {
        let unitPrice = context.state.lineItems[payload].UnitPrice;
        let quantity = context.state.lineItems[payload].Quantity;
        let total = unitPrice * quantity;  
        let totalDecimal = parseFloat(Math.round(total * 100) / 100).toFixed(2);
        context.commit('UPDATE_LINE_ITEM_TOTAL', {index: payload, value: totalDecimal});
    }
}
