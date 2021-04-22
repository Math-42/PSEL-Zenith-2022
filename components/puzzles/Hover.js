import React from 'react'
import { useState } from 'react';
import TextInfo from '../TextInfo';

export default function Hover(props) {
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
					<TextInfo counter={counter} target={0} addCounter={addCounter}>
						<table>
							<tbody>
								<tr >
									<td>╔</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>╗</td>
								</tr>
								<tr>
									<td >║</td>
									<td>⚬</td>
									<td>⚬</td>
									<td style={{ color: "white" }}>■</td>
									<td>⚬</td>
									<td style={{ color: "blue" }}>◎</td>
									<td>⚬</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td style={{ color: "red" }}>▲</td>
									<td>⚬</td>
									<td>⚬</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td>⚬</td>
									<td>⚬</td>
									<td style={{ color: "blue" }}>◎</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td>⚬</td>
									<td >║</td>
								</tr>
								<tr >
									<td>╚</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>╝</td>
								</tr>
							</tbody>
						</table>
					</TextInfo>
					<TextInfo counter={counter} target={1} addCounter={addCounter}>
						Legenda: <span style={{ color: "white" }}>■</span> Sonda,
						<span style={{ color: "red" }}>▲</span> Base,
						<span style={{ color: "blue" }}>◎</span> Refêrencia

					</TextInfo>
				</div> :
				<></>
			}

		</div>
	)
}
