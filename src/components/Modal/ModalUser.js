import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from '../../schemaInclude';
import Axios from 'axios';
import './ModalUser.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
  },
};

Modal.setAppElement('#root');

const ModalUser = ({ onClose, selectedUser, refresh }) => {
  const [editUser, setEditUser] = useState(selectedUser);
  // const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    console.log(editUser);
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    console.log(event);
    if (event.key === 'Escape') {
      onClose(null);
    }
  };

  const closeModal = () => {
    onClose(null);
  };

  function onSubmit(values, actions, setFieldValue) {
    Axios.put(`http://localhost:5000/usuarios/${values.id}`, {
      nome: values.name,
      cpf: values.cpf,
      email: values.email,
      endereço: {
        cep: values.cep,
        rua: values.rua,
        numero: values.numero,
        bairro: values.bairro,
        cidade: values.cidade,
      },
    }).then((response) => {
      console.log(response);
      closeModal();
    });
  }

  function onBlurCep(ev, setFieldValue) {
    const { value } = ev.target;

    const v_cep = value?.replace(/[^0-9]/g, '');

    if (v_cep?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${v_cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('rua', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
        console.log(data);
      });
  }

  return (
    <div>
      <Modal isOpen={true} style={customStyles} onRequestClose={closeModal}>
        <div>
          <button className="btn__x" onClick={closeModal}>
            X
          </button>
        </div>
        <div id="modalUser">
          <div className="container__modal">
            <h1>Alterar Dados</h1>
            <div className="form__modal">
              <Formik
                validationSchema={schema}
                onSubmit={onSubmit}
                initialValues={{
                  id: editUser.id,
                  name: editUser.nome,
                  cpf: editUser.cpf,
                  email: editUser.email,
                  cep: editUser.cep,
                  rua: editUser.rua,
                  numero: editUser.numero,
                  bairro: editUser.bairro,
                  cidade: editUser.cidade,
                }}
                render={({
                  values,
                  errors,
                  touched,
                  isValid,
                  setFieldValue,
                }) => (
                  <Form className="form__formik__modal">
                    <div className="form__field__modal">
                      <label>Nome</label>
                      <Field name="name" type="text" />
                      <ErrorMessage name="name" />
                    </div>
                    <div className="form__field__modal">
                      <label>CPF</label>
                      <Field name="cpf" type="text" />
                      <ErrorMessage name="cpf" />
                    </div>
                    <div className="form__field__modal">
                      <label>Email</label>
                      <Field name="email" type="email" />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="endereco__text">
                      <h3>Endereço</h3>
                    </div>
                    <div className="form__field__modal">
                      <label>CEP</label>
                      <Field
                        name="cep"
                        type="text"
                        onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                      />
                      <ErrorMessage name="cep" />
                    </div>
                    <div className="form__field__modal">
                      <label>Rua</label>
                      <Field name="rua" type="text" />
                      <ErrorMessage name="rua" />
                    </div>
                    <div className="form__field__modal">
                      <label>Número</label>
                      <Field name="numero" type="number" />
                      <ErrorMessage name="numero" />
                    </div>
                    <div className="form__field__modal">
                      <label>Bairro</label>
                      <Field name="bairro" type="text" />
                      <ErrorMessage name="bairro" />
                    </div>
                    <div className="form__field__modal">
                      <label>Cidade</label>
                      <Field name="cidade" type="text" />
                      <ErrorMessage name="cidade" />
                    </div>
                    <button
                      className="btn__edit"
                      type="submit"
                      disabled={!isValid}
                    >
                      Salvar
                    </button>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalUser;
