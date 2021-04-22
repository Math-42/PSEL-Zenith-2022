import React from 'react'
import { WindupChildren } from 'windups';

export default function TextInfo(props) {
	return (
		<div>
			{props.counter >= props.target ?
				<div>
					<WindupChildren onFinished={props.addCounter} >
						{props.children}
					</WindupChildren>
				</div>
				:
				<></>
			}
		</div>
	)
}
