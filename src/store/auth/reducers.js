import { SIGN_IN, SIGN_OUT } from './types';

const initState = {
	isSignedIn: false,
	userId: null,
};

export default (state = initState, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				isSignedIn: true,
				userId: action.userId,
			};
		case SIGN_OUT:
			return {
				...state,
				isSignedIn: false,
				userId: null,
			};
		default:
			return state;

	}
};
