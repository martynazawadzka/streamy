import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => ({
	type: SIGN_IN,
	userId,
});

export const signOut = (userId) => ({
	type: SIGN_OUT,
	userId,
});
