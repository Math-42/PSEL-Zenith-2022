import React, { useState, useEffect } from 'react'

export default function Timer() {
	const [seconds, setSeconds] = useState(59)
	const [minutes, setMinutes] = useState(59)
	const [started, setStarted] = useState(false)
	const [error, setError] = useState(false)
	const [currID, setCurrID] = useState(0)

	const timer = () => {
		if (seconds === 0 && minutes === 0) {
			setStarted(false);
			window.dispatchEvent(new CustomEvent("timerFinished"))
			return;
		} else if (seconds === 0) {
			setMinutes(minutes - 1);
			setSeconds(59);
		} else {
			setSeconds(seconds - 1);
		}

	}

	const minus = () => {
		if (minutes - 3 < 0 || ((minutes - 3)==0 && seconds===0)) {
			clearTimeout(currID);
			setStarted(false);
			setSeconds(0);
			setMinutes(0);
			clearTimeout()
			window.dispatchEvent(new CustomEvent("timerFinished"));
		} else {
			setMinutes(minutes - 3);
		}
	}

	function pad(num) {
		const s = "00" + num;
		return s.substr(s.length - 2);
	}

	function startTimer() {
		setStarted(true)
	}

	function setErrorTrue() {
		setError(true)
	}

	useEffect(() => {

		let intervalID;
		if (started) {
			intervalID = setTimeout(() => {
				timer();

			}, 1000);
			setCurrID(intervalID);
		} else {
			clearTimeout(currID);
		}


	}, [seconds, started]);

	useEffect(() => {
		if (error && started) {
			minus();
		}
		if(error)setError(false);
	}, [error])

	useEffect(() => {
		window.addEventListener("startTimer", startTimer);
		window.addEventListener("error", setErrorTrue);
		return () => {
			window.removeEventListener("startTimer", startTimer);
			window.removeEventListener("error", setErrorTrue);
		}

	}, []);

	return (
		<div>
			00:{pad(minutes)}:{pad(seconds)}
		</div>
	)
}
