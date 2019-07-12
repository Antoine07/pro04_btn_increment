import {
    INCREMENT_A, 
    INCREMENT_B
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