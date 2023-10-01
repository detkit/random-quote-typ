import { useState } from 'react';
import './randomquos.css';
import reloadIcon from '/assets/reload.png';
import twitterIcon from '/assets/twitter-x.png';

const RandomQuos = () => {
	let quotes = [];

	const [quote, setQuote] = useState({
		text: 'Give thanks for the rain of life that propels us to reach new horizons',
		author: 'Byron Pulsifer',
	});

	async function loadQuotes() {
		const reponse = await fetch('https://type.fit/api/quotes');
		quotes = await reponse.json();
	}

	const random = () => {
		const select = quotes[Math.floor(Math.random() * quotes.length)];
		setQuote(select);
	};

	const twitter = () => {
		window.open(
			`https://twitter.com/intent/tweet?text=${quote.text} - ${
				quote.author.split(',')[0]
			}`
		);
	};

	loadQuotes();

	return (
		<div className='container'>
			<div className='quote'>{quote.text}</div>
			<div>
				<div className='line'></div>
				<div className='bottom'>
					<div className='author'>{quote.author.split(',')[0]}</div>
					<div className='icons'>
						<img
							src={reloadIcon}
							onClick={() => {
								random();
							}}
							alt=''
						/>
						<img
							src={twitterIcon}
							onClick={() => {
								twitter();
							}}
							alt=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RandomQuos;
