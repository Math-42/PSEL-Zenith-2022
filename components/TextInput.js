import React, { useEffect, useState } from 'react'
import { WindupChildren, OnChar } from 'windups';

export default function TextInput(props) {

	const [erros, setErros] = useState([]);
	const [notEditable, setNotEditable] = useState(false)
	const ref = React.createRef();
	const { Append } = props;
	function scrollToEnd() {
		window.dispatchEvent(new CustomEvent("scrollToEnd"))
	}

	function validate(event) {
		if (event.key === "Enter") {
			const value = event.target.value
			if (value === props.pass) {
				setNotEditable(true)
				props.addCounter();
				props?.onStart?.();
				ref.current.blur();
			} else {

				erros.push(value)
				setErros([...erros]);
				ref.current.value = ""
				window.dispatchEvent(new CustomEvent("error"));
			}
		}
	}

	useEffect(() => {
		scrollToEnd()

	}, [erros.length])

	return (
		<div>
			<div>
				{
					erros.map((value, idx) => {

						return (
							<div key={idx}>
								{props.children}{value}<br />
								{	Append ?
									<Append key={idx} value={value} /> :
									<>{'>'} <span style={{ color: "red" }}>[ERROR]</span>Entrada inválida:{value}</>
								}
							</div>
						)
					})

				}
				{props.counter >= props.target ?
					<div style={{display:"flex"}}>
						<WindupChildren onFinished={() => { ref.current.focus(); scrollToEnd() }}>
							<OnChar fn={scrollToEnd}>
								{props.children}
							</OnChar>
						</WindupChildren>
						<input type={"text"}
							ref={ref}
							spellCheck={false}
							onKeyPress={validate}
							readOnly={notEditable} 
							style={{flex:1}}
							/>
					</div>
					:
					<></>
				}
			</div>
		</div>
	)
}
