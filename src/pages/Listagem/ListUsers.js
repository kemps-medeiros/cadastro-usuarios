import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import { useHistory } from 'react-router-dom';
import Nav from '../../components/Navbar/Nav';
import './List.css';
import Axios from 'axios';

const List = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userFilter, setUserFilter] = useState('');

  let allUsersArray = [];

  const { setToken } = useContext(StoreContext);

  // const getTable = () => {
  //   Axios.get('http://localhost:5000/usuarios', {}).then((response) => {
  //     console.log(response);
  //     usuarios = response;
  //     // return setTable(response);
  //   });
  //   // console.log(usuarios);
  // };

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('http://localhost:5000/usuarios');
      let table = await res.json();
      allUsersArray = table.map((user) => {
        return {
          id: user.id,
          nome: user.nome,
          filterName: user.nome.toLowerCase(),
          cpf: user.cpf,
          email: user.email,
          cep: user.endereço.cep,
          rua: user.endereço.rua,
          numero: user.endereço.numero,
          bairro: user.endereço.bairro,
          cidade: user.endereço.cidade,
        };
      });

      console.log(allUsersArray);

      setAllUsers(allUsersArray);
      setFilteredUsers(Object.assign([], allUsersArray));
      console.log(userFilter);
    };

    getUsers();
  }, []);

  const handleInputChange = (event) => {
    let userFiltered = event.target.value;

    setUserFilter(userFiltered);
    console.log(userFilter);
    const filterLowerCase = userFilter.toLowerCase();
    const a_filteredUsers = allUsers.filter((user) => {
      return user.filterName.includes(filterLowerCase);
    });

    setFilteredUsers(a_filteredUsers);
  };

  return (
    <div id="listUsers">
      <Nav />
      <div className="container__list">
        <section>
          <h1>Lista de Usuários Cadastrados</h1>

          <div className="filter">
            <input
              className="input_search"
              autoFocus={true}
              type="text"
              value={userFilter}
              onChange={handleInputChange}
            />
          </div>
          {allUsers.length === 0 && (
            <span>Carregando dados dos Usuários...</span>
          )}
          <div className="table__users">
            <table className="users__list">
              <thead>
                <tr>
                  <td>Nome</td>
                  <td>CPF</td>
                  <td>Email</td>
                  <td>Cidade</td>
                  <td>Excluir</td>
                  <td>Alterar</td>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.nome}</td>
                      <td>{user.cpf}</td>
                      <td>{user.email}</td>
                      <td>{user.cidade}</td>
                      <td>X</td>
                      <td>Alterar</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default List;
