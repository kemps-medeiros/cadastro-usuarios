import React, { useEffect, useContext, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import StoreContext from '../../components/Store/Context';
import Nav from '../../components/Navbar/Nav';
import './List.css';
import Axios from 'axios';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import ModalUser from '../../components/Modal/ModalUser';

const List = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userFilter, setUserFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  let allUsersArray = [];

  const { setToken } = useContext(StoreContext);

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
    // console.log(userFilter);
  };

  useEffect(() => {
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

  const handleDeleteIcon = (id) => {
    console.log(id);
    Axios.delete(`http://localhost:5000/usuarios/${id}`).then((response) => {
      console.log(response);
      getUsers();
    });
  };

  const handleEditIcon = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = () => {};

  const handleClose = () => {
    setIsModalOpen(false);
    getUsers();
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
              placeholder="Filtro por nome..."
              autoFocus={true}
              type="text"
              value={userFilter}
              onChange={handleInputChange}
            />
          </div>
          {allUsers.length === 0 && (
            <span className="span__text">
              <h1>Carregando dados dos Usuários...</h1>
            </span>
          )}
          {allUsers.length > 0 && (
            <div className="table__users">
              <table className="users__list">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Email</th>
                    <th>Cidade</th>
                    <th>Excluir</th>
                    <th>Alterar</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => {
                    let id = user.id;
                    return (
                      <tr key={user.id}>
                        <td>{user.nome}</td>
                        <td>{user.cpf}</td>
                        <td>{user.email}</td>
                        <td>{user.cidade}</td>
                        <td>
                          <FaTrash
                            id={id}
                            className="delete__icon"
                            onClick={() => handleDeleteIcon(id)}
                          />
                        </td>
                        <td>
                          <FaPencilAlt
                            className="edit__icon"
                            id={id}
                            onClick={() => handleEditIcon(user)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
      {isModalOpen && (
        <ModalUser
          onSave={handleSave}
          onClose={handleClose}
          selectedUser={selectedUser}
        />
      )}
    </div>
  );
};

export default List;
