const initialState = {
    info: {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
    },
    img: '',
    price: {
        mortgage: 0,
        rent: 0
    }
}

const GET_INFO = 'GET_INFO';
const GET_IMG = 'GET_IMG';
const GET_PRICE = 'GET_PRICE';
const CANCEL = 'CANCEL';

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_INFO:
            return Object.assign({}, state, {info: action.payload})
        case GET_IMG:
            return Object.assign({}, state, {img: action.payload});
        case GET_PRICE:
            return Object.assign({}, state, {price: action.payload});
        case CANCEL:
            return action.payload;
        default:
            return state;
    }
};

//actions step1
 export const getInfo = (info) => {
    return {
        type: GET_INFO,
        payload: info
    };
};


export const getImage = (img) => {
    return {
        type: GET_IMG,
        payload: img
    };
};

export const getPrice = (price) => {
    return {
        type: GET_PRICE,
        payload: price
    };
};

export const getCancel = () => {
    return {
        type: CANCEL,
        payload: initialState
    };
}

export default reducer;

