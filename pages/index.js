import styles from '../styles/Home.module.css'
import React, { useState, useRef, useEffect } from 'react';
import TextInfo from '../components/TextInfo';
import TextInput from '../components/TextInput';
import Wires from '../components/puzzles/Wires';
import Hover from '../components/puzzles/Hover';
import Keyboard from '../components/puzzles/Keyboard';
import { Howl, Howler } from 'howler';
import Colors from '../components/puzzles/Colors';
import Timer from '../components/Timer';
import Logo from '../components/Logo';

export default function Home() {
  const [counter, setCounter] = useState(-1);
  const [finalScreen, setFinalScreen] = useState(false);
  const ref = useRef();
  const addCounter = () => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 500);
  };

  let sound1;
  let sound2;

  function showFinalScreen() {
    if (counter < 38) {
      setFinalScreen(true);
    }
  }

  function onStart() {
    window.dispatchEvent(new CustomEvent("startTimer"))
    sound1 = new Howl({
      src: ['1.wav'],
      loop: true,
      volume: 0.4
    });

    sound2 = new Howl({
      src: ['2.wav'],
      loop: true,
      volume: 0.4,
    });

    sound1.play();
    sound2.play();
    Howler.volume(0.1);
  }


  useEffect(() => {

    const scroll = () => {
      ref.current.scrollIntoView();
    };

    window.addEventListener("scrollToEnd", scroll);
    window.addEventListener("timerFinished", showFinalScreen);
    return () => {
      window.removeEventListener("scrollToEnd", scroll);
      sound1?.stop?.();
      sound2?.stop?.();

    }

  }, []);


  return (
    <div>
      <div className={styles.header}>PSEL_2024.1 SERIE:Z3N4DIR</div>
      <section className={styles.scanline} />
      {finalScreen ?
        <div className={styles.finalScreen}>
          <TextInfo counter={0} target={0} >
            O tempo acabou.
          </TextInfo>
          <TextInfo counter={0} target={0} >
            Infelizmente não foi possivel salvar o hover :(
          </TextInfo>
        </div> :
        <></>
      }
      <Timer />
      <Logo />
      <div className={styles.container}>

        <TextInfo counter={counter} target={-1} >
          &gt; OBSERVAÇÕES E REGRAS<br />
        - O objetivo é avaliar a integração entre os jogadores durante a dinâmica;<br />
        - As falhas diminuem o tempo restante da atividade;<br />
        - Falhar não influencia na sua avaliação no Processo Seletivo;<br />
        - Mais alguma dúvida? Pergunte ao seu avaliador.<br />
          <TextInput counter={counter} target={-1} pass={"PSEL_2024"} addCounter={addCounter} onStart={onStart} >
            &gt; Insira a senha para começar:
          </TextInput>
        </TextInfo>
        <TextInfo counter={counter} target={0} addCounter={addCounter} >
          &gt; [NARRADOR]:"O ano é 2050 e o Zenith está enviando seus primeiros astronautas para Marte. Objetivo?
          Criar a primeira colônia humana no planeta vermelho. Vocês foram os encarregados para tal tarefa.
          Vocês chegam em Marte e já iniciam seus trabalhos.<br />
        </TextInfo>
        <TextInfo counter={counter} target={1} addCounter={addCounter} >
          &gt; [NARRADOR]:"Tudo ocorre bem nos primeiros dias... Até que, em uma
          determinada manhã marciana, vocês percebem que não receberam nenhuma mensagem do hover, como era de costume,
          e, ao investigar isso, notam que a telemetria não está funcionando e a única pista é o terminal de controle,
          que mostra a seguinte mensagem"
          <br />
        </TextInfo>
        <TextInfo counter={counter} target={2} addCounter={addCounter} >
          &gt; Iniciando sistema <br />
        &gt; Iniciando leitura do log de dados <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Tempestade solar detectada <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Altos níveis de radiação detectados <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Sistemas da base podem estar comprometidos <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Entrando em modo de segurança <br />
        &gt;<span style={{ color: "yellow" }}> [AVISO]</span> Desativando serviços não essenciais <br />
        &gt; Um erro ocorreu: chave de comunicação do hover inválida. Valor recebido:
      </TextInfo>
        <TextInfo counter={counter} target={3} addCounter={addCounter} >
          <br />
          <span style={{ color: "white", display: 'flex', justifyContent: 'center' }}>
            00100011&nbsp; 01011010&nbsp; 00110011&nbsp; 01001110&nbsp; 01010011 <br />
            00110011&nbsp; 01001110&nbsp; 01001000&nbsp; 00110100&nbsp; 01011111 <br />
            00110010&nbsp; 00110000&nbsp; 00110010&nbsp; 00110100&nbsp; 00100011 <br />
          </span>
          <br />
          &gt; [NARRADOR]:"Pelo visto a tempestade atingiu o hover e seu sistema está executando de forma mínima, ou seja, as coisas vão ser manuais daqui pra frente, como nos velhos tempos"<br />
          <br />
        </TextInfo>
        <TextInput counter={counter} target={4} pass={"#Z3NS3NH4_2024#"} addCounter={addCounter}>
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
          &gt; Nenhum subsistema da base foi comprometido
      </TextInfo>
        <TextInfo counter={counter} target={10} addCounter={addCounter} >
          &gt; Sincronizando configurações e software
      </TextInfo>
        <TextInfo counter={counter} target={11} addCounter={addCounter} >
          &gt; Checando módulo Hover
      </TextInfo>
        <TextInfo counter={counter} target={12} addCounter={addCounter} >
          <span style={{ color: "red" }}>[ERRO]</span> Problemas detectados
      </TextInfo>
        <TextInfo counter={counter} target={13} addCounter={addCounter} >
          <span style={{ color: "red" }}>[ERRO]</span> Sistema operacional do Hover comprometido
      </TextInfo>
        <TextInfo counter={counter} target={14} addCounter={addCounter} >
          <span style={{ color: "red" }}>[ERRO]</span> Filtro de radiação comprometido
      </TextInfo>
        <TextInfo counter={counter} target={15} addCounter={addCounter} >
          <span style={{ color: "yellow" }}>[AVISO]</span> Ativando modo de segurança do Hover
      </TextInfo>
        <TextInfo counter={counter} target={16} addCounter={addCounter} >
          &gt; Calculando riscos...
      </TextInfo>
        <TextInfo counter={counter} target={17} addCounter={addCounter} >
          <span style={{ color: "purple" }}>[PERIGO]</span> Tempestade solar se aproximando
        </TextInfo>
        <TextInfo counter={counter} target={18} addCounter={addCounter} >
          <span style={{ color: "yellow" }}>[AVISO]</span> O Hover deve ser recuperado imediatamente
        </TextInfo>
        <TextInfo counter={counter} target={19} addCounter={addCounter} >
          &gt; [NARRADOR]:"Uma tempestade solar ocorreu durante a noite e bagunçou um pouco os sistemas, ainda bem que vocês possuem um backup de tudo."
        </TextInfo>
        <TextInfo counter={counter} target={20} addCounter={addCounter} >
          &gt; [NARRADOR]:"Entretanto outra tempestade está vindo e o Hover não tem a mesma sorte, caso ele não seja recuperado e consertado a tempo {`\${InserirAlgoTerrível}`} pode acontecer"
        </TextInfo>
        <TextInfo counter={counter} target={21} addCounter={addCounter} >
          &gt; [NARRADOR]:"Um painel se abre diante de vocês indicando a posição de onde o hover estava quando começou a falhar."
        </TextInfo>
        <TextInfo counter={counter} target={22} addCounter={addCounter} >
          &gt; [NARRADOR]:"O modo de segurança parece ser bem simplista mesmo, talvez alguém na central ainda saiba como utilizar isso."
          <br />
          <br />
        </TextInfo>
        <Hover counter={counter} target={23} addCounter={addCounter} />
        <TextInfo counter={counter} target={24} addCounter={addCounter} >
          <br />
          &gt; [NARRADOR]:"Depois de alguns minutos, o hover volta para a base."
        </TextInfo>
        <TextInfo counter={counter} target={25} addCounter={addCounter} >
          &gt; [NARRADOR]:"Para poder consertá-lo, será necessário abrir sua carcaça."
        </TextInfo>
        <TextInfo counter={counter} target={26} addCounter={addCounter} >
          &gt; [NARRADOR]:"Não há outro jeito. Forçar algo só causaria mais danos ao Hover, talvez as plantas do Hover possuam alguma explicação."
        </TextInfo>
        <TextInfo counter={counter} target={27} addCounter={addCounter} >
          &gt; [NARRADOR]:"Vocês olham por cima do Hover e percebem um teclado com símbolos estranhos, parece um tipo de senha, mas qual a ordem certa?"
        </TextInfo>
        <Keyboard counter={counter} target={28} addCounter={addCounter} />
        <TextInfo counter={counter} target={29} addCounter={addCounter} >
          &gt; [NARRADOR]:"A tampa do robô se levanta."
        </TextInfo>
        <TextInfo counter={counter} target={30} addCounter={addCounter} >
          &gt; [NARRADOR]:"Por sorte, o Hover parece estar em um bom estado por dentro, mas logo outro problema surge."
        </TextInfo>
        <TextInfo counter={counter} target={31} addCounter={addCounter} >
          &gt; [NARRADOR]:"Existem fios cobrindo o painel de acesso ao filtro de radiação. Resta saber qual se pode desconectar para alcançá-la."
        </TextInfo>
        <TextInfo counter={counter} target={32} addCounter={addCounter} >
          &gt; [NARRADOR]:"Para as plantas novamente..."
        </TextInfo>
        <Wires counter={counter} target={33} addCounter={addCounter} />
        <TextInfo counter={counter} target={34} addCounter={addCounter} >
          &gt; [NARRADOR]:"O fio se solta e vocês finalmente têm acesso ao painel do filtro de radiação."
        </TextInfo>
        <TextInfo counter={counter} target={35} addCounter={addCounter} >
          &gt; [NARRADOR]:"O painel se abre e mostra 3 módulos de cores que deveriam formar um espectro perfeito, mas está uma bagunça. É preciso correr para reorganizar."
        </TextInfo>
        <TextInfo counter={counter} target={36} addCounter={addCounter} >
          &gt; [NARRADOR]:"Bom acho que dessa vez já sabem onde encontrar ajuda..."
        </TextInfo>
        <Colors counter={counter} target={37} addCounter={addCounter} />
        <TextInfo counter={counter} target={38} addCounter={addCounter} >
          &gt; Iniciando diagnóstico do hover...
        </TextInfo>
        <TextInfo counter={counter} target={39} addCounter={addCounter} >
          &gt; Progresso: ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊ 100%
        </TextInfo>
        <TextInfo counter={counter} target={40} addCounter={addCounter} >
          &gt;<span style={{ color: "blue" }}>[INFO]</span> Status atual: OPERANTE
        </TextInfo>
        <TextInfo counter={counter} target={41} addCounter={addCounter} >
          &gt; [NARRADOR]:"Vocês escutam alguns bips, enquanto conectam os fios retirados e fecham sua carcaça."
        </TextInfo>
        <TextInfo counter={counter} target={42} addCounter={addCounter} >
          &gt; [NARRADOR]:"O hover foi consertado <del>até a próxima tempestade</del> com sucesso!"
        </TextInfo>
        <TextInfo counter={counter} target={43} addCounter={addCounter} >
          &gt; [NARRADOR]:"Missão cumprida!"
        </TextInfo>
        <div ref={ref} style={{ marginTop: "1em", width: "100%", height: "10px" }} />
      </div >
    </div>
  )
}
