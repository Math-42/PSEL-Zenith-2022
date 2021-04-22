import React from 'react'
import { useState } from 'react';
import TextInfo from '../TextInfo';
import TextInput from '../TextInput';

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
					<div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
						<TextInfo counter={counter} target={0} addCounter={addCounter} scroll={props.scroll}>
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
						<TextInfo counter={counter} target={1} addCounter={addCounter} scroll={props.scroll}>
							Legenda: <span style={{ color: "white" }}>■</span> Hover,
						<span style={{ color: "red" }}>▲</span> Base,
						<span style={{ color: "blue" }}>◎</span> Refêrencia
						</TextInfo>
						<TextInfo counter={counter} target={2} addCounter={addCounter} scroll={props.scroll}>
							Comandos:
							1-subir,
							2-direita,
							3-esquerda,
							4-descer
						</TextInfo>
						<TextInfo counter={counter} target={3} addCounter={addCounter} scroll={props.scroll}>
							<span style={{ color: "blue" }}>[INFO]</span> Os comandos devem ser enviados da forma:
						</TextInfo>
						<TextInfo counter={counter} target={4} addCounter={addCounter} scroll={props.scroll}>
							Ex.: 1-1-2-2-3-4-2-2<br />
						</TextInfo>
					</div>
					<TextInput counter={counter} target={5} addCounter={addCounter} pass={"1-2-3-4-5"}>
						<br />
					&gt; Sequência de comandos:
					</TextInput>
					<TextInfo counter={counter} target={6} addCounter={props.addCounter} scroll={props.scroll}>
						&gt; Hover recuperado com sucesso
					</TextInfo>
				</div> :
				<></>
			}

		</div>
	)
}
