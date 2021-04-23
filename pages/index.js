import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect } from 'react';
import TextInfo from '../components/TextInfo';
import TextInput from '../components/TextInput';
import Wires from '../components/puzzles/Wires';
import Hover from '../components/puzzles/Hover';
import { WindupChildren } from 'windups';
import Keyboard from '../components/puzzles/Keyboard';


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

    const scroll = () => {
      ref.current.scrollIntoView();
    };

    window.addEventListener("scrollToEnd", scroll);


    return () => window.removeEventListener("scrollToEnd", scroll);

  }, []);


  return (
    <div>
      <div className={styles.header}>PSEL_2021.1 nadir_v_1.1.2</div>
      <div className={styles.container}>

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
          que mostra a seguinte mensagem"
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
          <span style={{ color: "white",display: 'flex',justifyContent: 'center'}}>
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

        <br />
        <TextInfo counter={counter} target={24} addCounter={addCounter} >
          &gt; [NARRADOR]:"Depois de alguns minutos o hover volta para a base"
        </TextInfo>
        <TextInfo counter={counter} target={25} addCounter={addCounter} >
          &gt; [NARRADOR]:"Para poder concertá-lo será necessário abrir sua carcaça"
        </TextInfo>
        <TextInfo counter={counter} target={26} addCounter={addCounter} >
          &gt; [NARRADOR]:"Não há outro jeito, forçar algo só causaria mais danos ao Hover, talvez as plantas do Hover possuam alguma explicação"
        </TextInfo>
        <TextInfo counter={counter} target={27} addCounter={addCounter} >
          &gt; [NARRADOR]:"Vocês olham por cima do Hover e percebem um teclado com simbolos estranhos, parece um tipo de senha, mas qual a ordem certa?"
        </TextInfo>
        <Keyboard counter={counter} target={28} addCounter={addCounter} />
        <TextInfo counter={counter} target={29} addCounter={addCounter} >
          &gt; [NARRADOR]:"A tampa do robo se levanta"
        </TextInfo>
        <TextInfo counter={counter} target={30} addCounter={addCounter} >
          &gt; [NARRADOR]:"Por sorte o Hover parece estar em um bom estado por dentro, mas logo outro problema surge"
        </TextInfo>
        <TextInfo counter={counter} target={31} addCounter={addCounter} >
          &gt; [NARRADOR]:"Existem fios cobrindo o painel de acesso ao filtro de radiação, resta saber qual se pode desconectar para alcança-la"
        </TextInfo>
        <TextInfo counter={counter} target={32} addCounter={addCounter} >
          &gt; [NARRADOR]:"Para as plantas novamente..."
        </TextInfo>
        <Wires counter={counter} target={33} addCounter={addCounter} />
        <TextInfo counter={counter} target={34} addCounter={addCounter} >
          &gt; [NARRADOR]:"O fio se solta e vocês finalmente tem acesso ao painel do filtro de radiação"
        </TextInfo>
        <TextInfo counter={counter} target={35} addCounter={addCounter} >
          &gt; [NARRADOR]:"O painel se abre e mostra algumas lentes que certamente não estão na ordem certa"
        </TextInfo>
        <TextInfo counter={counter} target={36} addCounter={addCounter} >
          &gt; [NARRADOR]:"Bom acho que dessa vez já sabem onde encontrar ajuda..."
        </TextInfo>
        <div ref={ref} style={{ marginTop: "1em", width: "100%", height: "10px" }} />
      </div >
    </div>
  )
}
