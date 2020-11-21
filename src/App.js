import './App.css';
import { useState } from 'react'

function App() {

    const [ imc, setImc ] = useState({
        peso: '',
        altura: '',
        total: ''
    });

    function imcInformation( result ) {
        // Desafio: fazer uma estrutura melhor para essa decisão condicional
        // Obs. Esses IFs encadeados, apesar de funcional, é a pior solução possível para esse caso
        // Mas qual o problema dos IFs?
        // Apesar de ser uma solução rápida para vários casos, estruturas de longos ifs encadeadas fazem o
        // código ficar visualmente poluído e ser uma dor de cabeça na hora de fazer manutenção
        // Leitura complementar: https://dzone.com/articles/code-smells-if-statements

        if( result > 1 && result < 17 ) {
            return <span className="red-info">Muito abaixo do peso</span>
        }else if( result >= 17 && result <= 18.49 ){
            return <span className="orange-info">Abaixo do peso</span>
        }else if( result >= 18.50 && result <= 24.99 ){
            return <span className="green-info">Peso normal</span>
        }else if( result >= 25 && result <= 29.99 ){
            return <span className="yellow-info">Acima do peso</span>
        }else if( result >= 30 && result <= 34.99 ){
            return <span className="orange-info">Obesidade I</span>
        }else if( result >= 35 && result <= 39.99 ){
            return <span className="red-info">Obesidade II (severa)</span>
        }else if( result > 40 ){
            return <span className="ultra-red-info">Obesidade III (mórbida)</span>
        }else{
            return ''
        }
    }

    function calcImc() {
        setImc({peso: imc.peso, altura: imc.altura, total: (imc.peso / (imc.altura * imc.altura)).toFixed(1)})
    }

    return (
        <div className="App">
            <h1>Calculadora IMC</h1>
            <a
                href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal"
                rel="noreferrer"
                target="_blank"
            >
                    <small>Você não sabe o que é IMC?</small>
            </a>

            <div className="form">
                <div className="form-group">
                    <label>Qual é seu peso? (kg) </label>
                    <input className="form-control" type="number" step="1" name="peso" id="peso"
                        value={imc.peso}
                        onChange={ e => { setImc({peso: e.target.value, altura: imc.altura, total: imc.total } ) } }/>
                </div>
                <div className="form-group">
                    <label>Qual é a sua altura? (m) </label>
                    <input className="form-control" type="number" step="1" name="altura" id="altura"
                        value={imc.altura}
                        onChange={ e => { setImc({ peso: imc.peso, altura: e.target.value, total: imc.total } ) } } />
                </div>
            </div>
            <button onClick={calcImc} className="buttonSubmit">Calcular</button>
            <div className="result">
                <div className="resultCalculation">{imc.total}</div>
                <div className="resultInformation">{imcInformation(imc.total)}</div>
            </div>
            <a
                href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal#.C3.8Dndice_considerado_ideal"
                rel="noreferrer"
                target="_blank"
                >
                    <small>Entenda melhor o seu resultado</small>
                </a>
        </div>
    );
}

export default App;
