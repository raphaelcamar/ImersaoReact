import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/formField';

function CadastroCategoria(){
    const [categorias, setCategoria] = useState([]);
    
    const valoresIniciais ={
      nome : '',
      descricao : '',
      cor : '',
    }
    const [valores, setvalores] = useState(valoresIniciais);
    function setvalor(chave, valor){
        setvalores({
          ...valores,
          [chave] : valor,
        });
    }

    function funcaoHandler(info){
      const { getAttribute, value } = info.target;
      setvalor(info.target.getAttribute('name'),
               info.target.value);
    }
    return (
      <PageDefault>
          <h1>Cadastro de categoria : {valores.nome}</h1>

        <form onSubmit={function handleSubmit(info){
          info.preventDefault();
          setCategoria([
            ...categorias,
            valores
          ]);
          setvalor(valoresIniciais)
        }}>
        <FormField
          label=" Nome"
          type="text"
          name="cor"
          valores={valores}
          onChange={funcaoHandler}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          valores={valores}
          onChange={funcaoHandler}
        />
          <div>
        <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={valores.descricao}
              onChange={ funcaoHandler}/>
          </label>
          </div>
          <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={valores.cor}
              onChange={ funcaoHandler}/>
          </label>
          </div>

          <button>Cadastrar</button>
        </form>
              <ul>
                {categorias.map((categoria, indice) =>{
                  return (
                    <li key={`${categoria}${indice}`}>
                      {categoria.nome}
                    </li>
                   
                  )
                })}
              </ul>

          <Link to="/">
              Ir para home
          </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;