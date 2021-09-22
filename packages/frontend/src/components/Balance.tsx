import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import { toBech32 } from '@harmony-js/crypto'

function Balance() {
	const { account, library, chainId } = useWeb3React()
	const isHmyLibrary = (library?.messenger?.chainType === 'hmy')
  
	const [balance, setBalance] = React.useState()
	React.useEffect((): any => {
	  if (!!account && !!library) {
		let stale = false
		const accountArgs = isHmyLibrary ? { address: toBech32(account) } : account
  
		library
		  .getBalance(accountArgs)
		  .then((balance: any) => {
			if (isHmyLibrary) {
			  balance = balance.result;
			}
			if (!stale) {
			  balance =  (balance / 1000000000000000000).toFixed(2);
			  setBalance(balance)
			}
		  })
		  .catch(() => {
			if (!stale) {
			  setBalance(undefined)
			}
		  })
  
		return () => {
		  stale = true
		  setBalance(undefined)
		}
	  }
	}, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds
  
	return (
	  <BalanceComponent>
		<span>Balance</span>
		<span role="img" aria-label="gold">
		  💰
		</span>
		<span>{balance === null ? 'Error' : balance ? (isHmyLibrary ? balance : `${balance} ONE`) : ''}</span>
	  </BalanceComponent>
	)
  }

const BalanceComponent = styled.div`
	padding: 10px 20px;
	border-radius: 25px;
	background-color: white;
	color: black;

	& > span {
		margin-left: 4px;
	}
`;

export default Balance;
