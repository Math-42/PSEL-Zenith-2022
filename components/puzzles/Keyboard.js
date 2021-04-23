import React, { useState } from 'react'
import styles from '../../styles/keyboard.module.css'
import TextInfo from '../TextInfo'
import TextInput from '../TextInput';

export default function Keyboard(props) {

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
					<div className={styles.keyboard}>
						<br />
						<TextInfo counter={counter} target={0} addCounter={addCounter}>
							<table>
								<tbody>
									<tr>
										<td >
											1
					</td>
										<td>
											2
					</td>
									</tr>
									<tr>
										<td>
											<img src="1.png" />

										</td>
										<td>
											<img src="2.png" />
										</td>
									</tr>
									<tr>
										<td>
											3
					</td>
										<td>
											4
					</td>
									</tr>
									<tr>
										<td>
											<img src="3.png" />

										</td>
										<td>
											<img src="4.png" />
										</td>
									</tr>
								</tbody>
							</table>
						</TextInfo>
						<br />
						<TextInfo counter={counter} target={1} addCounter={addCounter}>
							<span style={{ color: "blue" }}>[INFO]</span> Os comandos devem ser enviados da forma:<br />
						</TextInfo>
						<TextInfo counter={counter} target={2} addCounter={addCounter}>
							Ex.: 3-2-1-4<br />
						</TextInfo>
						<br />
					</div>
					<TextInput counter={counter} target={3} addCounter={addCounter} pass={"2-1-3-4"} >
						&gt; Sequência de comandos:
					</TextInput>
					<TextInfo counter={counter} target={4} addCounter={addCounter} >
						&gt; Testando combinação...
					</TextInfo>
					<TextInfo counter={counter} target={5} addCounter={props.addCounter} >
						&gt; Progresso: ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊ 100%
					</TextInfo>
				</>
				:
				<></>
			}
		</div>
	)
}
