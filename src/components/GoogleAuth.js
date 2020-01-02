import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../store/auth/actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
		const [auth, setAuth] = useState(null);

		const onAuthStatusChange = useCallback((isSignedIn, userId) => {
			if (isSignedIn) {
				signIn(userId);
			} else {
				signOut(userId);
			}
		}, [signIn, signOut]);

		useEffect(() => {
			window.gapi.load('client:auth2', () => {
				window.gapi.client.init({
					clientId: '1006980488075-3aaar31ebtn3n1lukmcnvaol9ho1h5hb.apps.googleusercontent.com',
					scope: 'email'
				}).then(() => {
					const auth = window.gapi.auth2.getAuthInstance();
					const userId = auth.currentUser.get().getId();
					setAuth(auth);

					onAuthStatusChange(auth.isSignedIn.get());
					auth.isSignedIn.listen((isSignedIn) => onAuthStatusChange(isSignedIn, userId));
				});
			});
		}, [onAuthStatusChange]);

		if (!auth) {
			return (
				<button className="ui white google button">
					Loading...
				</button>);
		}

		return (
			<div>
				{isSignedIn ? (
					<button className="ui red google button" onClick={() => auth.signOut()}>
						Sign Out
					</button>
				) : (
					<button className="ui green google button" onClick={() => auth.signIn()}><i
						className="google icon" />
						Sign In with Google
					</button>
				)}
			</div>
		);
	}
;

const mapStateToProps = (state) => ({
	isSignedIn: state.auth.isSignedIn
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
