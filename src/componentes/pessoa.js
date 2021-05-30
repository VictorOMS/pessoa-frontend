import {useState} from "react";
import "./style.css"

function Pessoa() {

    const [form, setForm] = useState({})

    const [pessoas, setPessoas] = useState([

        {nome: 'Victor', telefone: '61 - 985779373'},
        {nome: 'Rafael', telefone: '61 - 999934412'},
        {nome: 'Diego',  telefone: '61 - 984243624'}

    ]);

    function adicionarPessoa() {
        const novaLista = [...pessoas];

        const novaPessoa ={nome:`Victor`, telefone:`61 - 985779373`};

        novaLista.push(form);

        setPessoas(novaLista);

        setForm({nome: '', telefone: ''})
    }

    function mudarValor(event){
        const campo = event.target.name;

        setForm({...form, [campo]: event.target.value})
    }

    return(
      <div className={'conteudo'}>
        <h4>Lista Pessoa</h4>
          <table>

              <tr>
                  <th>Nome</th>
                  <th>Telfone</th>
              </tr>

              {pessoas.map(pessoa => (

                  <tr>
                      <td>{pessoa.nome}</td>
                      <td>{pessoa.telefone}</td>

                  </tr>

              ))}
          </table>

            <hr/>

          <input type={'text'} placeholder={'nome'} value={form.nome} name={`nome`} onChange={mudarValor}/>

          <input type={'text'} placeholder={'telefone'} value={form.telefone} name={`telefone`} onChange={mudarValor}/>

          <input type={`button`} value={`Adicionar`} className={`botaoAdicionar`} onClick={adicionarPessoa}/>

          {/*<input type={`button`} value={`Remover`} className={`botaoRemover`} onClick={removerPessoa}/> */}

      </div>
    );
}

export default Pessoa;