//import axios from 'axios'

export default{
    addLineItem: (context) => {
        const emptyLineItem = {
            ID: null,
            Description: '',
            UnitPrice: 0,
            Quantity: 0,
            Total: 0
        }
        context.commit('UPDATE_LINE_ITEMS', emptyLineItem);
    },
    removeLineItem: (context, payload) => {
        context.commit('REMOVE_LINE_ITEM', payload);
        context.dispatch('calculateInvoiceTotalBar');
    },
    handleLineItemDescription: (context, payload) => {
        context.commit('UPDATE_LINE_ITEM_DESCRIPTION', payload);
    },
    handleLineItemUnitPrice: (context, payload) => {
        context.commit('UPDATE_LINE_ITEM_UNIT_PRICE', payload);
        context.dispatch('calculateLineItemTotal', payload.index);
        context.dispatch('calculateInvoiceTotalBar');
    },
    handleLineItemQuantity: (context, payload) => {
        context.commit('UPDATE_LINE_ITEM_QUANTITY', payload);
        context.dispatch('calculateLineItemTotal', payload.index);
        context.dispatch('calculateInvoiceTotalBar');
    },
    calculateLineItemTotal: (context, payload) => {
        let unitPrice = context.state.lineItems[payload].UnitPrice;
        let quantity = context.state.lineItems[payload].Quantity;
        let total = unitPrice * quantity;  
        let totalDecimal = parseFloat(Math.round(total * 100) / 100).toFixed(2);
        context.commit('UPDATE_LINE_ITEM_TOTAL', {index: payload, value: totalDecimal});
    },
    calculateInvoiceTotalBar: (context) => {
        context.dispatch('calculateSubTotal');
        context.dispatch('calculateTax');
        context.dispatch('calculateTotal');
    },
    calculateSubTotal: (context) => {
        const state = context.state;
        const total = state.lineItems.reduce((tot, lineItem) => {
            return tot + parseFloat(lineItem.Total);
        }, 0);
        
        context.commit('UPDATE_INVOICE_SUBTOTAL', parseFloat(total).toFixed(2));
    },
    calculateTax: (context) => {
        const state = context.state;
        const subTotal = parseFloat(state.subTotal);
        const taxPercentage = state.taxPercentage;
        const tax = subTotal * taxPercentage;

        context.commit('UPDATE_INVOICE_TAX', parseFloat(tax).toFixed(2));
    },
    handleInvoiceDeductions: (context, payload) => {
        context.commit('UPDATE_INVOICE_DEDUCTIONS', payload);
        context.dispatch('calculateInvoiceTotalBar');
    },
    calculateTotal: (context) => {
        const state = context.state;
        const subTotal = parseFloat(state.subTotal);
        const tax = parseFloat(state.tax);
        let deductions;
        if(isNaN(state.deductions) || !state.deductions.length){         
            deductions = 0;
        }
        else{           
            deductions = parseFloat(state.deductions);
        }
        const total = subTotal + tax - deductions;
        context.commit('UPDATE_INVOICE_TOTAL', parseFloat(total).toFixed(2));
    }
}
