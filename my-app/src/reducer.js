import React from 'react';

const Reducer = (state, action) => {
    switch(action.type){
        case 'REFRESH-JOKE':
            return {
                ...state,
                isJokeLame: true
            }
        default:
            return state;
    }
};

export default Reducer;