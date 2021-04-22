import React from 'react'
import { WindupChildren, OnChar } from 'windups';

export default function TextInfo(props) {

	function scrollToEnd() {
		window.dispatchEvent(new CustomEvent("scrollToEnd"))
	}

	return (
		<div>
			{props.counter >= props.target ?
				<WindupChildren onFinished={props.addCounter} >
					<OnChar fn={scrollToEnd}>
						{props.children}
					</OnChar>
				</WindupChildren>
				:
				<></>
			}
		</div>
	)
}
