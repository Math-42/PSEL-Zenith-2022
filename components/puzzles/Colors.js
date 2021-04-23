import React, { useState } from 'react'
import TextInfo from '../TextInfo'

export default function Colors(props) {
	const [counter, setCounter] = useState(0);

	const addCounter = () => {
		setTimeout(() => {
			setCounter(counter + 1)
		}, 500);
	}
	return (
		<div>
			{props.counter >= props.target ?
				<div>
					<div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
						<TextInfo counter={counter} target={0} addCounter={addCounter}>
							<br />
							<span style={{ color: "blue" }}>▒▒▒</span> &nbsp;
							<span style={{ color: "blue" }}>▒▒▒</span> &nbsp;
							<span style={{ color: "blue" }}>▒▒▒</span>

							<br />
							<br />
							1-<span style={{ color: "blue" }}>▒▒▒</span> &nbsp;
							2-<span style={{ color: "red" }}>▒▒▒</span> &nbsp;
							3-<span style={{ color: "yellow" }}>▒▒▒</span> &nbsp;
							4-<span style={{ color: "green" }}>▒▒▒</span>
							<br />
							<br />
							<h1 >▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</h1>
							<br />
							<br />
						</TextInfo>
					</div>
				</div>
				:
				<></>
			}
		</div>
	)
}
