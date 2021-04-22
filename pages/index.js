import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import TextInfo from '../components/TextInfo';
import TextInput from '../components/TextInput';
import Wires from '../components/puzzles/Wires';
import Hover from '../components/puzzles/Hover';

export default function Home() {
  const [counter, setCounter] = useState(-1);
  const ref = React.createRef();
  const addCounter = () => {
    setTimeout(() => {
      setCounter(counter + 1)
    }, 500);
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>PSEL_2021.1 nadir_v_1.1.2</div>
      <TextInfo counter={counter} target={-1} >
        &gt;OBSERVÇÕES E REGRAS<br />
        - O objetivo é avaliar os jogadores;<br />
        - As falhas diminuem o tempo restante da atividade;<br />
        - Falhar não influência na avalianção;<br />
        - Mais alguma coisa?<br />
        <TextInput counter={counter} target={-1} pass={"start"} addCounter={addCounter}>
          &gt;Insira a senha para começar:
        </TextInput>
      </TextInfo>

      <TextInfo counter={counter} target={0} addCounter={addCounter}>
        [NARRADOR]:"O ano é 2050, e o zenith está enviando seus primeiros astronautas para marte, o objetivo? 
        criar a primeira colônia humana no planeta vermelho e vocês foram os encarregados para tal tarefa.
        Vocês chegam em marte, e já iniciam seus trabalhos. Tudo ocorre bem nos primeiros dias, até que em uma
        determinada manhã marciana percebem que não receberam nenhuma mensagem da base terráque, como era de costume,
        e ,ao investigar isso, notam que nenhuma telemetria está funcionando e a única pista é o terminal de controle,
        que mostra a seguinte mensagem:"
      </TextInfo>
      <br />
      <TextInfo counter={counter} target={1} addCounter={addCounter}>
        &gt;Um erro ocorreu, chave de comunicação inválida, valor recebido:
          <br />
        <br />
          01111011 &nbsp; 01011010 &nbsp; 01000101 &nbsp; 01001110 &nbsp; 01010011 <br />
          01000101 &nbsp; 01001110 &nbsp; 01001000 &nbsp; 01000001 &nbsp; 01011111 <br />
          00110010 &nbsp; 00110000 &nbsp; 00110010 &nbsp; 00110001 &nbsp; 01111101
      </TextInfo>
      <br />
      <TextInput counter={counter} target={2} pass={"{Z3NS3NH4_2021}"} addCounter={addCounter}>
        &gt;Insira uma chave válida:
      </TextInput>
      <TextInfo counter={counter} target={3} addCounter={addCounter}>
        &gt;Processando...
      </TextInfo>
      <TextInfo counter={counter} target={4} addCounter={addCounter}>
        &gt;Chave aceita com sucesso!
      </TextInfo>
      <TextInfo counter={counter} target={5} addCounter={addCounter}>
        &gt;Módulo de comunicação inicializado
      </TextInfo>
      <TextInfo counter={counter} target={6} addCounter={addCounter}>
        &gt;Fazendo varredura do sistema
      </TextInfo>
      <TextInfo counter={counter} target={7} addCounter={addCounter}>
        &gt;Gerando relatório de erros:
      </TextInfo>
      <TextInfo counter={counter} target={8} addCounter={addCounter}>
        Erro detectado: senha secreta da base foi resetada para o padrão, reconfigure
      </TextInfo>
      <TextInfo counter={counter} target={9} addCounter={addCounter}>
        Erro detectado: módulo de registradores desconfigurado
      </TextInfo>
      <TextInfo counter={counter} target={10} addCounter={addCounter}>
        Erro detectado: sensores de leitura de radiação desconfigurados
      </TextInfo>
      <TextInfo counter={counter} target={11} addCounter={addCounter}>
        Erro detectado: visão de satélite perdida, retornar com o hover para base
      </TextInfo >
      <Hover counter={counter} target={12} addCounter={addCounter} />
      <div ref={ref} />
    </div >
  )
}
