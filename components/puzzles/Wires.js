import React from 'react'
import { useState } from 'react';
import TextInfo from '../TextInfo';
import TextInput from '../TextInput';

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
				<>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column' }}>
						<br/>
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
						<TextInfo counter={counter} target={1} addCounter={addCounter}>
							<span style={{ color: "blue" }}>[INFO]</span> Insira apenas o número do fio que será desconectado
						</TextInfo>
						<br/>
					</div>
					<TextInput counter={counter} target={2} addCounter={props.addCounter} pass={"2"} >
						&gt; Fio a ser desconectado:
					</TextInput>
				</>
				:
				<></>
			}
		</div>
	)
}
