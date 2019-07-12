import { INCREMENT_A, } from '../constants/constants';

// source de véritié unique
const stateInit = {
    count: 0,
    step : 1
}

// c'est dans cette partie que le "state" est modifié sans faire muter le stateInit
export default (state = stateInit, action = {}) => {

    let newCount;

    switch (action.type) {

        case INCREMENT_A:
            newCount = { count: state.count + state.step }

            // la source de véritié qui est utilisé pour retourner
            // un store modifié en copie
            return { ...state, ...newCount }

        default:
            return state
    }
}