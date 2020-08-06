import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/formField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  //vai atualizar o estado do componente
  //caso o segundo parâmetro (array) estiver vazio, ele atualizará uma única vez, que será na primeira chamada.
  //Caso não passe um segundo parâmetro, irá atualizar sempre que houver uma mudança de estado. Isso não é bom
  //Caso especifique algo dentro do array(como uma variável receber valores através de um input), ele atualizará sempre essa condição for verdadeira
  useEffect(() =>{

    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
    .then(async (respostaDoServidor) =>{
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
    });

    setTimeout(() =>{
      setCategorias([
        ...categorias,
      ]);

    }, 4000)
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <button>
          Cadastrar
        </button>
      </form>
      
      {categorias.length === 0 &&(
        <div>
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.nome}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;