import React, { useState } from 'react'
import TextInfo from '../TextInfo'
import TextInput from '../TextInput';

export default function Colors(props) {
	const [counter, setCounter] = useState(0);
	const [inputCounter, setInputCounter] = useState(0);

	const addCounter = () => {
		setTimeout(() => {
			setCounter(counter + 1)
		}, 500);
	}

	const addInputCounter = () => {
		setTimeout(() => {
			setInputCounter(inputCounter + 1)
		}, 500);
	}

	const addBothCounter = () => { addCounter(); addInputCounter() };

	return (
		<div>
			{props.counter >= props.target ?
				<div>
					<div style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
						<TextInfo counter={counter} target={0} addCounter={addCounter}>
							<br />
							{
								(inputCounter === 0) ?
									<>
										<>1º módulo: <br/><br/></>
										<span style={{ color: "blue" }}>▒▒▒&nbsp;</span>
										<span style={{ color: "red" }}>▒▒▒&nbsp;</span>
										<span style={{ color: "green" }}>▒▒▒</span>
									</>
									: inputCounter === 1 ?
										<>
											<> 2º módulo: <br/><br/></>
											<span style={{ color: "red" }}>▒▒▒&nbsp;</span>
											<span style={{ color: "yellow" }}>▒▒▒&nbsp;</span>
											<span style={{ color: "yellow" }}>▒▒▒&nbsp;</span>
											<span style={{ color: "blue" }}>▒▒▒</span>
										</>
										: <>
											<> 3º módulo: <br/><br/></>
											<span style={{ color: "green" }}>▒▒▒&nbsp;</span>
											<span style={{ color: "blue" }}>▒▒▒&nbsp;</span>
											<span style={{ color: "green" }}>▒▒▒&nbsp;</span>
											<span style={{ color: "red" }}>▒▒▒&nbsp;</span>
											<span style={{ color: "yellow" }}>▒▒▒</span>
										</>
							}


						</TextInfo>
						<br />
						<TextInfo counter={counter} target={1} addCounter={addCounter}>
								<> Comandos: <br/><br/></>
								1-<span style={{ color: "blue" }}>▒▒▒</span> &nbsp;
								2-<span style={{ color: "red" }}>▒▒▒</span> &nbsp;
								3-<span style={{ color: "yellow" }}>▒▒▒</span> &nbsp;
								4-<span style={{ color: "green" }}>▒▒▒</span>
						</TextInfo>
						<TextInfo counter={counter} target={2} addCounter={addCounter}>
							<br />
							<span style={{ color: "blue" }}>[INFO]</span> Os comandos devem ser enviados da forma:
							<br />
						</TextInfo>
						<TextInfo counter={counter} target={3} addCounter={addCounter}>
							Ex.: 1-1-2-2<br /><br />
						</TextInfo>
					</div>
					<TextInput counter={counter} target={4} addCounter={addBothCounter} pass={"2-1-3"}>
						&gt; Sequência do 1º módulo:
					</TextInput>
					<TextInfo counter={counter} target={5} addCounter={addCounter} >
						&gt; Testando combinação...
					</TextInfo>
					<TextInfo counter={counter} target={6} addCounter={addCounter} >
						&gt; Combinação aceita com sucesso!
					</TextInfo>
					<TextInfo counter={counter} target={7} addCounter={addCounter} >
						&gt; Progresso: ▊▊▊▊▊▊▊▊25%
					</TextInfo>
					<TextInput counter={counter} target={8} addCounter={addBothCounter} pass={"3-2-2-4"}>
						&gt; Sequência do 2º módulo:
					</TextInput>
					<TextInfo counter={counter} target={9} addCounter={addCounter} >
						&gt; Testando combinação...
					</TextInfo>
					<TextInfo counter={counter} target={10} addCounter={addCounter} >
						&gt; Combinação aceita com sucesso!
					</TextInfo>
					<TextInfo counter={counter} target={11} addCounter={addCounter} >
						&gt; Progresso: ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊ 58%
					</TextInfo>
					<TextInput counter={counter} target={12} addCounter={addBothCounter} pass={"3-2-3-4-1"}>
						&gt; Sequência do 3º módulo:
					</TextInput>
					<TextInfo counter={counter} target={13} addCounter={addCounter} >
						&gt; Testando combinação...
					</TextInfo>
					<TextInfo counter={counter} target={14} addCounter={addCounter} >
						&gt; Combinação aceita com sucesso!
					</TextInfo>
					<TextInfo counter={counter} target={15} addCounter={addCounter} >
						&gt; Progresso: ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊ 100%
					</TextInfo>
					<TextInfo counter={counter} target={16} addCounter={addCounter} >
						&gt; Reconfigurando filtro...
					</TextInfo>
					<TextInfo counter={counter} target={17} addCounter={addCounter} >
						&gt; Filtro reconfigurado com sucesso!
					</TextInfo>
					<TextInfo counter={counter} target={18} addCounter={props.addCounter} >
						&gt; Estado atual: <a>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</a>
					</TextInfo>
				</div>
				:
				<></>
			}
		</div>
	)
}
