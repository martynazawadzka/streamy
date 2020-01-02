import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamCreate from './views/StreamCreate';
import StreamDelete from './views/StreamDelete';
import StreamEdit from './views/StreamEdit';
import StreamList from './views/StreamList';
import StreamShow from './views/StreamShow';
import Header from './components/Header';

const App = () => (
	<div className="ui container">
		<BrowserRouter>
			<Header />
			<Route path='/' exact component={StreamList} />
			<Route path='/streams/new' exact component={StreamCreate} />
			<Route path='/streams/edit' exact component={StreamEdit} />
			<Route path='/streams/delete' exact component={StreamDelete} />
			<Route path='/streams/show' exact component={StreamShow} />
		</BrowserRouter>
	</div>
);

export default App;
