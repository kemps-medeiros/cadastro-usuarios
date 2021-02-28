import React, { useContext } from 'react';
import './Login.css';
import Axios from 'axios';
import StoreContext from '../../components/Store/Context';
import { useHistory } from 'react-router-dom';

import schemaRegister from '../../schemaRegister';
import schemaLogin from '../../schemaLogin';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Login = () => {
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function register(values, actions) {
    Axios.post('http://localhost:5000/administradores', {
      username: values.emailRegister,
      password: values.passwordRegister,
    }).then((response) => {
      console.log(response);
      alert('Usuário Cadastrado com Sucesso');
    });
    actions.resetForm();
  }

  function login(values, actions) {
    Axios.get('http://localhost:5000/administradores', {
      username: values.emaillogin,
      password: values.password,
    }).then((response) => {
      let admins = response.data;
      let adminLocalizated = admins.filter(
        (admin) => admin.username === values.emaillogin
      );
      if (adminLocalizated.length === 0) {
        alert('Usuário ou senha incorreta');
        console.log('Usuário não encontrado');
      } else if (adminLocalizated.length > 0) {
        if (
          adminLocalizated[0].username === values.emaillogin &&
          adminLocalizated[0].password === values.password
        ) {
          setToken('1234');
          // console.log('admin Encontrado');
          history.push('/list');
        } else {
          alert('Usuário ou senha incorreta');
        }
      }
      Array.from(document.querySelectorAll('input')).forEach(
        (input) => (input.value = '')
      );
    });
  }

  return (
    <div className="loginAndRegister">
      <div className="col-4 center">
        <div className="login__area">
          <h1>VINGADORES</h1>
          <h2>CADASTRO DE USUÁRIOS</h2>
          <div className="login">
            <h3>Login</h3>
            <Formik
              validationSchema={schemaLogin}
              onSubmit={login}
              initialValues={{
                emaillogin: '',
                password: '',
              }}
              render={({ values, errors, touched, isValid, setFieldValue }) => (
                <Form className="formik__login">
                  <label>Email</label>
                  <Field type="email" autoFocus={true} name="emaillogin" />
                  <ErrorMessage name="emaillogin" />
                  <label>Senha</label>
                  <Field type="password" name="password" />
                  <div className="btn">
                    <button className="btn__enter" type="submit">
                      {' '}
                      Entrar{' '}
                    </button>
                  </div>
                </Form>
              )}
            />
          </div>
          <div className="registration">
            <h3>Registrar</h3>
            <Formik
              validationSchema={schemaRegister}
              onSubmit={register}
              initialValues={{
                emailRegister: '',
                passwordRegister: '',
              }}
              render={({ values, errors, touched, isValid, setFieldValue }) => (
                <Form className="formik__register">
                  <div className="form__register__fields">
                    <label>Email</label>
                    <Field type="text" name="emailRegister" />
                    <ErrorMessage name="emailRegister" />
                  </div>
                  <div className="form__register__fields">
                    <label>Senha</label>
                    <Field type="password" name="passwordRegister" />
                    <ErrorMessage name="passwordRegister" />
                  </div>
                  <div className="btn">
                    <button className="btn__register" type="submit">
                      Registrar
                    </button>
                  </div>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
