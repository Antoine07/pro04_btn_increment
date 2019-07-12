import {
    INCREMENT_A, 
    INCREMENT_B,
    DECREMENT_A
} from '../constants/constants';

export const incrementA = () => {
    return {
        type: INCREMENT_A
    }
};

export const incrementB = () => {
    return {
        type: INCREMENT_B
    }
};

export const decrementA = () => {
    return {
        type: DECREMENT_A
    }
};