import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect } from 'react';
import TextInfo from '../components/TextInfo';
import TextInput from '../components/TextInput';
import Wires from '../components/puzzles/Wires';
import Hover from '../components/puzzles/Hover';
import { WindupChildren } from 'windups';


export default function Home() {
  const [counter, setCounter] = useState(-1);
  const ref = useRef();
  const addCounter = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);
  };

  const scroll = 10;

  useEffect(() => {

    const scroll = ()=>{
      ref.current.scrollIntoView()
      console.log("RODANDO");
    };

		window.addEventListener("scrollToEnd", scroll);


		return () => window.removeEventListener("scrollToEnd", scroll);

	}, []);


  return (
    <div className={styles.container}>
      <div className={styles.header}>PSEL_2021.1 nadir_v_1.1.2</div>
      <TextInfo counter={counter} target={-1} >
        &gt; OBSERVÇÕES E REGRAS<br />
        - O objetivo é avaliar os jogadores;<br />
        - As falhas diminuem o tempo restante da atividade;<br />
        - Falhar não influencia na avaliação;<br />
        - Mais alguma coisa?<br />
        <TextInput counter={counter} target={-1} pass={"start"} addCounter={addCounter}>
          &gt; Insira a senha para começar:
          </TextInput>
      </TextInfo>

      <TextInfo counter={counter} target={0} addCounter={addCounter} >
        &gt; [NARRADOR]:"O ano é 2050, e o zenith está enviando seus primeiros astronautas para marte, o objetivo?
        criar a primeira colônia humana no planeta vermelho e vocês foram os encarregados para tal tarefa.
        Vocês chegam em marte, e já iniciam seus trabalhos.<br />
      </TextInfo>
      <TextInfo counter={counter} target={1} addCounter={addCounter} >
        &gt; [NARRADOR]:"Tudo ocorre bem nos primeiros dias, até que em uma
        determinada manhã marciana percebem que não receberam nenhuma mensagem da base terráquea, como era de costume,
        e, ao investigar isso, notam que nenhuma telemetria está funcionando e a única pista é o terminal de controle,
        que mostra a seguinte mensagem:"
      </TextInfo>
      <br />
      <TextInfo counter={counter} target={2} addCounter={addCounter} >
        &gt; Iniciando sitema <br />
        &gt; Iniciando leitura do log de dados <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Tempestade solar detectada <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Altos níveis de radiação detectado <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Sistemas comprometidos <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Entrando em modo de segurança<br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Desativando serviços não essenciais<br />
        &gt; Um erro ocorreu, chave de comunicação inválida, valor recebido:
      </TextInfo>
      <TextInfo counter={counter} target={3} addCounter={addCounter} >
        <br />
        <span style={{ color: "white" }}>
          01111011 &nbsp; 01011010 &nbsp; 01000101 &nbsp; 01001110 &nbsp; 01010011 <br />
          01000101 &nbsp; 01001110 &nbsp; 01001000 &nbsp; 01000001 &nbsp; 01011111 <br />
          00110010 &nbsp; 00110000 &nbsp; 00110010 &nbsp; 00110001 &nbsp; 01111101  <br />
        </span>
        <br />
          &gt; [NARRADOR]:"Pelo visto o sistema está executando de forma minima, ou seja, as coisas vão ser manuais daqui pra frente, como nos velhos tempos"<br />
      </TextInfo>
      <br />
      <TextInput counter={counter} target={4} pass={"{Z3NS3NH4_2021}"} addCounter={addCounter}>
        &gt; Insira uma chave válida:
      </TextInput>
      <TextInfo counter={counter} target={5} addCounter={addCounter} >
        &gt; Processando...
      </TextInfo>
      <TextInfo counter={counter} target={6} addCounter={addCounter} >
        &gt; Chave aceita com sucesso!
      </TextInfo>
      <TextInfo counter={counter} target={7} addCounter={addCounter} >
        &gt; Módulo de comunicação inicializado
      </TextInfo>
      <TextInfo counter={counter} target={8} addCounter={addCounter} >
        &gt; Fazendo varredura do sistema
      </TextInfo>
      <TextInfo counter={counter} target={9} addCounter={addCounter} >
        &gt; Nenhum subsistema foi comprometido
      </TextInfo>
      <TextInfo counter={counter} target={10} addCounter={addCounter} >
        &gt; Sincronizando configurações e software
      </TextInfo>
      <TextInfo counter={counter} target={11} addCounter={addCounter} >
        &gt; Checando módulo hover
      </TextInfo>
      <TextInfo counter={counter} target={12} addCounter={addCounter} >
        <span style={{ color: "red" }}>[ERRO]</span> Problemas detectados
      </TextInfo>
      <TextInfo counter={counter} target={13} addCounter={addCounter} >
        <span style={{ color: "red" }}>[ERRO]</span> Sistema operacional do hover comprometido
      </TextInfo>
      <TextInfo counter={counter} target={14} addCounter={addCounter} >
        <span style={{ color: "red" }}>[ERRO]</span> Filtro de radiação comprometido
      </TextInfo>
      <TextInfo counter={counter} target={15} addCounter={addCounter} >
        <span style={{ color: "yellow" }}>[AVISO]</span> Ativando modo de segurança do hover
      </TextInfo>
      <TextInfo counter={counter} target={16} addCounter={addCounter} >
        &gt; Calculando riscos ...
      </TextInfo>
      <TextInfo counter={counter} target={17} addCounter={addCounter} >
        <span style={{ color: "purple" }}>[PERIGO]</span> Tempestade solar se aproximando
      </TextInfo>
      <TextInfo counter={counter} target={18} addCounter={addCounter} >
        <span style={{ color: "yellow" }}>[AVISO]</span> O hover deve ser recuperado imediatamente
      </TextInfo>
      <TextInfo counter={counter} target={19} addCounter={addCounter} >
        &gt; [NARRADOR]:"Pelo visto uma tempestade solar ocorreu durante a noite e bagunçou um pouco os sistemas, ainda bem que vocês possuem um backup de tudo"
      </TextInfo>
      <TextInfo counter={counter} target={20} addCounter={addCounter} >
        &gt; [NARRADOR]:"Entretanto outra tempestade está vindo e o hover não tem a mesma sorte, caso ele não seja recuperado e concertado a tempo {`\${InserirAlgoTerrível}`} pode acontecer"
      </TextInfo>
      <TextInfo counter={counter} target={21} addCounter={addCounter} >
        &gt; [NARRADOR]:"Um painel se abre diante de vocês indicando a posição de onde o hover estava quando começou a falhar"
      </TextInfo>
      <TextInfo counter={counter} target={22} addCounter={addCounter} >
        &gt; [NARRADOR]:"O modo de segurança parece ser bem simplista mesmo, talvez alguem na central ainda saiba como utilizar isso"
        <br />
        <br />
      </TextInfo>
      <Hover counter={counter} target={23} addCounter={addCounter} />
      <Wires counter={counter} target={24} addCounter={addCounter} />
      <div ref={ref} style={{ marginTop: "1em", width: "100%", height: "10px" }} />
    </div >
  )
}
