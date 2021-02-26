import React from 'react';
import Nav from '../../components/Navbar/Nav';
import './Include.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from '../../schemaInclude';
import Axios from 'axios';

const Include = () => {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
    Axios.post('http://localhost:5000/usuarios', {
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
    });

    actions.resetForm();
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
      <Nav />
      <div id="include">
        <div className="container__include">
          <h1>Inclusão de novo Usuário</h1>
          <div className="form">
            <Formik
              validationSchema={schema}
              onSubmit={onSubmit}
              initialValues={{
                name: '',
                cpf: '',
                email: '',
                cep: '',
                rua: '',
                numero: '',
                bairro: '',
                cidade: '',
              }}
              render={({ values, errors, touched, isValid, setFieldValue }) => (
                <Form className="form__formik">
                  <div className="form__field">
                    <label>Nome</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />
                  </div>
                  <div className="form__field">
                    <label>CPF</label>
                    <Field name="cpf" type="text" />
                    <ErrorMessage name="cpf" />
                  </div>
                  <div className="form__field">
                    <label>Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="endereco__text">
                    <h3>Endereço</h3>
                  </div>
                  <div className="form__field">
                    <label>CEP</label>
                    <Field
                      name="cep"
                      type="text"
                      onBlur={(ev) => onBlurCep(ev, setFieldValue)}
                    />
                    <ErrorMessage name="cep" />
                  </div>
                  <div className="form__field">
                    <label>Rua</label>
                    <Field name="rua" type="text" />
                    <ErrorMessage name="rua" />
                  </div>
                  <div className="form__field">
                    <label>Número</label>
                    <Field name="numero" type="number" />
                    <ErrorMessage name="numero" />
                  </div>
                  <div className="form__field">
                    <label>Bairro</label>
                    <Field name="bairro" type="text" />
                    <ErrorMessage name="bairro" />
                  </div>
                  <div className="form__field">
                    <label>Cidade</label>
                    <Field name="cidade" type="text" />
                    <ErrorMessage name="cidade" />
                  </div>
                  <button className="btn" type="submit" disabled={!isValid}>
                    Cadastrar Novo Usuário
                  </button>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Include;
