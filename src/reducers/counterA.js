import { INCREMENT_A, } from '../constants/constants';

const stateInit = {
    count: 0,
    step : 1
}

export default (state = stateInit, action = {}) => {

    let newCount;
    switch (action.type) {

        case INCREMENT_A:
            newCount = { count: state.count + state.step }

            return { ...state, ...newCount }

        default:
            return state
    }
}