import React from 'react';

export default function Dados(props){
    return(
        <div>
            <h1>Olá {props.remetente} - {props.destino} </h1>
            <p>Estou escrevendo essa carta por causa da atividade que os alunos vão fazer, okay.</p>
            <p>Não desiste, continue fazendo as atividades, treinando e praticando. Fé</p>
            <p>O céu é o limite!</p>
        </div>
    )
}