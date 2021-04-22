import React from 'react'
import { useState } from 'react';
import TextInfo from '../TextInfo';

export default function Wires(props) {
	const [counter, setCounter] = useState(0);

	const addCounter = () => {
		setTimeout(() => {
			setCounter(counter + 1)
		}, 500);

	}

	return (
		<div>
				{props.counter >= props.target ?
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
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>╗</td>
								</tr>
								<tr >
									<td >1</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>╗</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td style={{ color: "red" }}>╔</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td style={{ color: "red" }}>╚</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>═</td>
									<td style={{ color: "red" }}>╝</td>
									<td style={{ color: "yellow" }}>╔</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>╗</td>
									<td style={{ color: "yellow" }}> </td>
									<td style={{ color: "yellow" }}>╔</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td >║</td>
								</tr>
								<tr>
									<td >2</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>╝</td>
									<td style={{ color: "yellow" }}> </td>
									<td style={{ color: "yellow" }}>╚</td>
									<td style={{ color: "yellow" }}>═</td>
									<td style={{ color: "yellow" }}>╝</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td style={{ color: "blue" }}>╔</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>╗</td>
									<td> </td>
									<td> </td>
									<td >║</td>
								</tr>
								<tr>
									<td >3</td>
									<td style={{ color: "blue" }}>╝</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td style={{ color: "blue" }}>╚</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td style={{ color: "white" }}>╔</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>╗</td>
									<td> </td>
									<td> </td>
									<td >║</td>
								</tr>
								<tr>
									<td >4</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>╗</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td style={{ color: "white" }}>║</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td style={{ color: "white" }}>╚</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td >║</td>
								</tr>
								<tr>
									<td >║</td>
									<td> </td>
									<td style={{ color: "white" }}>╚</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>═</td>
									<td style={{ color: "white" }}>╝</td>
									<td style={{ color: "blue" }}> </td>
									<td style={{ color: "blue" }}> </td>
									<td style={{ color: "blue" }}> </td>
									<td style={{ color: "blue" }}> </td>
									<td style={{ color: "blue" }}>╔</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td style={{ color: "blue" }}>═</td>
									<td >║</td>
								</tr>
								<tr >
									<td >5</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >═</td>
									<td style={{ color: "blue" }} >╝</td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
									<td> </td>
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
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
									<td>═</td>
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

					:
					<></>
				}
		</div>
	)
}
