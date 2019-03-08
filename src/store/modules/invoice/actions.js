//import axios from 'axios'

export default{
    handleAddLineItem: (context, payload) => {
        context.commit('UPDATE_LINE_ITEMS', payload);
    }
}
