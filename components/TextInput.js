import React, { useState } from 'react'
import { WindupChildren, OnChar } from 'windups';

export default function TextInput(props) {

	const [erros, setErros] = useState([]);
	const [notEditable, setNotEditable] = useState(false)
	const ref = React.createRef();

	function scrollToEnd() {
		window.dispatchEvent(new CustomEvent("scrollToEnd"))
	}

	function validate(event) {
		if (event.key === "Enter") {
			const value = event.target.value
			if (value === props.pass) {
				setNotEditable(true)
				props.addCounter();
			} else {

				erros.push(value)
				setErros([...erros]);
				ref.current.value = ""
			}
		}
	}

	return (
		<div>
			<div>
				{
					erros.map((value, idx) => {
						return (
							<div key={idx}>
								{props.children}<br />
								&gt;<span style={{ color: "red" }}>[ERROR]</span>Entrada inválida:{value}
							</div>
						)
					})
				}
				{props.counter >= props.target ?
					<div>
						<WindupChildren onFinished={() => ref.current.focus()}>
							<OnChar fn={scrollToEnd}>
								{props.children}
							</OnChar>
						</WindupChildren>
						<input type={"text"}
							ref={ref}
							spellCheck={false}
							onKeyPress={validate}
							readOnly={notEditable} />
					</div>
					:
					<></>
				}
			</div>
		</div>
	)
}
