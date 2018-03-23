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

// const GET_NAME = 'GET_NAME';
// const GET_ADDRESS = 'GET_ADDRESS';
// const GET_CITY = 'GET_CITY';
// const GET_STATE = 'GET_STATE';
// const GET_ZIPCODE = 'GET_ZIPCODE';


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_INFO:
        console.log(action.payload)
            return Object.assign({}, state, {info: Object.assign({}, action.payload)})
        case GET_IMG:
            return Object.assign({}, state, {img: action.payload});
        case GET_PRICE:
            return Object.assign({}, state, {price: Object.assign({}, action.payload)});



        // case GET_NAME:
        //     return Object.assign({}, state, {name: action.paylod})
        // case GET_ADDRESS:
        //     return Object.assign({}, state, {address: action.paylod})
        // case GET_CITY:
        //     return Object.assign({}, state, {city: action.paylod})
        // case GET_STATE:
        //     return Object.assign({}, state, {state: action.paylod})
        // case GET_ZIPCODE:
        //     return Object.assign({}, state, {zipcode: action.paylod})

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

// export const getRent = (rent) => {
//     return {
//         type: GET_RENT,
//         payload: rent
//     };
// };




//  export const getName = (name) => {
//     return {
//         type: GET_NAME,
//         paylod: name
//     };
// };

// export const getAddress = (address) => {
//     return {
//         type: GET_ADDRESS,
//         paylod: address
//     };
// };

// export const getCity = (city) => {
//     return {
//         type: GET_CITY,
//         paylod: city
//     };
// };

// export const getState = (state) => {
//     return {
//         type: GET_STATE,
//         paylod: state
//     };
// };

// export const getZipcode = (zip) => {
//     return {
//         type: GET_ZIPCODE,
//         paylod: zip
//     };
// };

export default reducer;

