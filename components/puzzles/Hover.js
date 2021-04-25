import React from 'react'
import { useState } from 'react';
import TextInfo from '../TextInfo';
import TextInput from '../TextInput';

function Percurso(props) {
	const dangers = [
		"Colinas",
		"Crateras",
		"Desfiladeiro",
	]
	const regex = /^[1-4]+(-[1-4]+)+$/;
	if (regex.test(props.value)) {
		return (
			<div>
				&gt; Iniciando percurso:{props.value} <br />
				&gt; <span style={{ color: "red" }}>[ERROR]</span>Perigo(s) encontrado(s): {dangers[Math.floor((Math.random() * 100)) % 3]}<br />
				&gt; <span style={{ color: "blue" }}>[INFO]</span>Retornando para última posição segura
			</div>
		)
	} else {
		return (
			<div>
				&gt; <span style={{ color: "red" }}>[ERROR]</span>Formato não compativel<br />
			</div>
		)
	}

}

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
							Legenda: <span style={{ color: "white" }}>■</span> Hover,
						<span style={{ color: "red" }}>▲</span> Base,
						<span style={{ color: "blue" }}>◎</span> Refêrencia
						</TextInfo>
						<TextInfo counter={counter} target={2} addCounter={addCounter}>
							Comandos:
							1-subir,
							2-direita,
							3-esquerda,
							4-descer
						</TextInfo>
						<TextInfo counter={counter} target={3} addCounter={addCounter}>
							<span style={{ color: "blue" }}>[INFO]</span> Os comandos devem ser enviados da forma:
						</TextInfo>
						<TextInfo counter={counter} target={4} addCounter={addCounter}>
							Ex.: 1-1-2-2-3-4-2-2<br />
						</TextInfo>
					</div>
					<TextInput counter={counter} target={5} addCounter={addCounter} pass={"3-4-4-3-4-2-4-3-4-2-2-2-1-1"} Append={Percurso}>
						&gt; Sequência de comandos:
					</TextInput>
					<TextInfo counter={counter} target={6} addCounter={addCounter} >
						&gt; Iniciando percurso...
					</TextInfo>
					<TextInfo counter={counter} target={7} addCounter={addCounter} >
						&gt; Progresso: ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊ 100%
					</TextInfo>
					<TextInfo counter={counter} target={8} addCounter={props.addCounter} >
						&gt; Hover recuperado com sucesso!
					</TextInfo>
				</div> :
				<></>
			}

		</div>
	)
}
