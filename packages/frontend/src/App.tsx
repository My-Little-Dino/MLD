import React from 'react';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import Header  from './components/Header';
import InfoContract from './components/InfoContract';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';
import './styles/header.css';

const App = () => {
	return (
		<Wrapper>
			<Container>
				
				<Header />
				<Content>
					{/* <InfoContract /> */}
				</Content>
			</Container>
			<ToastContainer
				position="bottom-right"
				newestOnTop={false}
				pauseOnFocusLoss={false}
				pauseOnHover={false}
				rtl={false}
			/>
		</Wrapper>
	);
};

const Flex = styled.div`
	display: flex;
	align-items: center;
`;

const Topbar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 74px;
	width: 100%;
`;

const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	padding: 0px 24px;
	max-width: 1200px;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	background-color: #0093e9;
	background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
	font-size: 1rem;
	color: white;
`;

export default App;
