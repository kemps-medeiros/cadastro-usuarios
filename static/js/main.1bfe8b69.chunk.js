(this["webpackJsonpcadastro-usuarios"]=this["webpackJsonpcadastro-usuarios"]||[]).push([[0],{104:function(e,t,n){},106:function(e,t,n){},112:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){},240:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(53),c=n.n(a),i=(n(104),n(41)),o=n(99),l=n(4),d=n(24),m=n(54),j=n.n(m),u=n(93),b=n(6),O=Object(s.createContext)({token:null,setToken:function(){}}),x=n(30),h=(n(106),n(0)),v=function(){var e=Object(s.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(s.useContext)(O).setToken;return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"navbar__container",children:[Object(h.jsx)("ul",{className:"navbar__left",children:Object(h.jsxs)("div",{className:"navbar__left-logo",children:[Object(h.jsx)(x.a,{className:"toglle",onClick:function(){return r(!n)}}),Object(h.jsx)("div",{className:"logo",children:"CADASTRO - VINGADORES"})]})}),Object(h.jsx)("div",{className:"links",id:n?"hidden":"",children:Object(h.jsxs)("ul",{className:"navbar__right",children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/list",onClick:function(){return r(!n)},children:"Usu\xe1rios"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/include",onClick:function(){return r(!n)},children:"Inclus\xe3o"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"#",onClick:function(){a(null),r(!n)},children:"Logout"})})]})})]})})})},f=(n(112),n(15)),p=n.n(f),_=n(57),g=n.n(_),N=n(2),y=n(3);y.c({mixed:{default:"\xe9 inv\xe1lido",required:"*Campo obrigat\xf3rio",oneOf:"deve ser um dos seguintes valores: ${values}",notOneOf:"n\xe3o pode ser um dos seguintes valores: ${values}",typeError:"deve ser um n\xfamero"},string:{length:"deve ter exatamente ${length} caracteres",min:"deve ter pelo menos ${min} caracteres",max:"deve ter no m\xe1ximo ${max} caracteres",email:"*Formato de email inv\xe1lido",url:"deve ter um formato de URL v\xe1lida",trim:"n\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"deve estar em mai\xfasculo",uppercase:"deve estar em min\xfasculo"},number:{min:"deve ser no m\xednimo ${min}",max:"deve ser no m\xe1ximo ${max}",lessThan:"deve ser menor que ${less}",moreThan:"deve ser maior que ${more}",notEqual:"n\xe3o pode ser igual \xe0 ${notEqual}",positive:"deve ser um n\xfamero pos\xedtivo",negative:"deve ser um n\xfamero negativo",integer:"deve ser um n\xfamero inteiro"}});var C=y.b().shape({name:y.d().required(),email:y.d().email().required(),emaillogin:y.d().email(),emailRegister:y.d().email(),cpf:y.a().typeError("*Deve ser um numero").required(),cep:y.d().required(),rua:y.d().required(),bairro:y.d().required(),numero:y.a().required(),cidade:y.d().required(),passwordRegister:y.d().min(4)}),S=(n(238),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"60%"}});g.a.setAppElement("#root");var E=function(e){var t=e.onClose,n=e.selectedUser,r=Object(s.useState)(n),a=Object(b.a)(r,2),c=a[0];a[1];Object(s.useEffect)((function(){console.log(c)}),[]),Object(s.useEffect)((function(){return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}}));var i=function(e){console.log(e),"Escape"===e.key&&t(null)},o=function(){t(null)};return Object(h.jsx)("div",{children:Object(h.jsxs)(g.a,{isOpen:!0,style:S,onRequestClose:o,children:[Object(h.jsx)("div",{className:"btn__modal",children:Object(h.jsx)("button",{className:"btn__x",onClick:o,children:"X"})}),Object(h.jsx)("div",{id:"modalUser",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Alterar Dados"}),Object(h.jsx)("div",{className:"form__modal",children:Object(h.jsx)(N.d,{className:"formik",validationSchema:C,onSubmit:function(e,t,n){p.a.put("https://my-json-server.typicode.com/kemps-medeiros/db-vingadores/usuarios/".concat(e.id),{nome:e.name,cpf:e.cpf,email:e.email,"endere\xe7o":{cep:e.cep,rua:e.rua,numero:e.numero,bairro:e.bairro,cidade:e.cidade}}).then((function(e){console.log(e),o()}))},initialValues:{id:c.id,name:c.nome,cpf:c.cpf,email:c.email,cep:c.cep,rua:c.rua,numero:c.numero,bairro:c.bairro,cidade:c.cidade},render:function(e){e.values,e.errors,e.touched;var t=e.isValid,n=e.setFieldValue;return Object(h.jsxs)(N.c,{className:"form__modal",children:[Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsx)("label",{children:"Nome"}),Object(h.jsx)(N.b,{name:"name",type:"text"}),Object(h.jsx)(N.a,{name:"name"})]}),Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsx)("label",{children:"CPF"}),Object(h.jsx)(N.b,{name:"cpf",type:"text"}),Object(h.jsx)(N.a,{name:"cpf"})]}),Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)(N.b,{name:"email",type:"email"}),Object(h.jsx)(N.a,{name:"email"})]}),Object(h.jsx)("div",{className:"endereco__text",children:Object(h.jsx)("h3",{children:"Endere\xe7o"})}),Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsxs)("div",{className:"cep__search",children:[Object(h.jsx)("label",{children:"CEP"}),Object(h.jsx)("div",{className:"div__search",children:Object(h.jsx)("button",{className:"search",children:"Buscar CEP: "})})]}),Object(h.jsx)(N.b,{name:"cep",type:"text",onBlur:function(e){return function(e,t){var n=e.target.value,s=null===n||void 0===n?void 0:n.replace(/[^0-9]/g,"");8===(null===s||void 0===s?void 0:s.length)&&fetch("https://viacep.com.br/ws/".concat(s,"/json/")).then((function(e){return e.json()})).then((function(e){t("rua",e.logradouro),t("bairro",e.bairro),t("cidade",e.localidade),console.log(e)}))}(e,n)}}),Object(h.jsx)(N.a,{name:"cep"})]}),Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsx)("label",{children:"Rua"}),Object(h.jsx)(N.b,{name:"rua",type:"text"}),Object(h.jsx)(N.a,{name:"rua"})]}),Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsx)("label",{children:"N\xfamero"}),Object(h.jsx)(N.b,{name:"numero",type:"number"}),Object(h.jsx)(N.a,{name:"numero"})]}),Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsx)("label",{children:"Bairro"}),Object(h.jsx)(N.b,{name:"bairro",type:"text"}),Object(h.jsx)(N.a,{name:"bairro"})]}),Object(h.jsxs)("div",{className:"form__field__modal",children:[Object(h.jsx)("label",{children:"Cidade"}),Object(h.jsx)(N.b,{name:"cidade",type:"text"}),Object(h.jsx)(N.a,{name:"cidade"})]}),Object(h.jsx)("div",{className:"btn__div",children:Object(h.jsx)("button",{className:"btn__include",type:"submit",disabled:!t,children:"Salvar"})})]})}})})]})})]})})},k=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)([]),c=Object(b.a)(a,2),i=c[0],o=c[1],l=Object(s.useState)(""),d=Object(b.a)(l,2),m=d[0],f=d[1],_=Object(s.useState)(!1),g=Object(b.a)(_,2),N=g[0],y=g[1],C=Object(s.useState)({}),S=Object(b.a)(C,2),k=S[0],w=S[1],$=[],R=(Object(s.useContext)(O).setToken,function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/usuarios");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,$=n.map((function(e){return{id:e.id,nome:e.nome,filterName:e.nome.toLowerCase(),cpf:e.cpf,email:e.email,cep:e.endere\u00e7o.cep,rua:e.endere\u00e7o.rua,numero:e.endere\u00e7o.numero,bairro:e.endere\u00e7o.bairro,cidade:e.endere\u00e7o.cidade}})),console.log($),r($),o(Object.assign([],$));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(s.useEffect)((function(){R()}),[]);return Object(h.jsxs)("div",{id:"listUsers",children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{className:"container__list",children:Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Lista de Usu\xe1rios Cadastrados"}),Object(h.jsx)("div",{className:"filter",children:Object(h.jsx)("input",{className:"input_search",placeholder:"Filtro por nome...",autoFocus:!0,type:"text",value:m,onChange:function(e){var t=e.target.value;f(t),console.log(m);var s=m.toLowerCase(),r=n.filter((function(e){return e.filterName.includes(s)}));o(r)}})}),0===n.length&&Object(h.jsx)("span",{className:"span__text",children:Object(h.jsx)("h1",{children:"Carregando dados dos Usu\xe1rios..."})}),n.length>0&&Object(h.jsx)("div",{className:"table__users",children:Object(h.jsxs)("table",{className:"users__list",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Nome"}),Object(h.jsx)("th",{children:"CPF"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Cidade"}),Object(h.jsx)("th",{children:"Excluir"}),Object(h.jsx)("th",{children:"Alterar"})]})}),Object(h.jsx)("tbody",{children:i.map((function(e){var t=e.id;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.nome}),Object(h.jsx)("td",{children:e.cpf}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.cidade}),Object(h.jsx)("td",{children:Object(h.jsx)(x.c,{id:t,className:"delete__icon",onClick:function(){return function(e){console.log(e),p.a.delete("http://localhost:5000/usuarios/".concat(e)).then((function(e){console.log(e),R()}))}(t)}})}),Object(h.jsx)("td",{children:Object(h.jsx)(x.b,{className:"edit__icon",id:t,onClick:function(){return function(e){w(e),y(!0)}(e)}})})]},e.id)}))})]})})]})}),N&&Object(h.jsx)(E,{onSave:function(){},onClose:function(){y(!1),R()},selectedUser:k})]})};n(239);y.c({mixed:{default:"\xe9 inv\xe1lido",required:"*Campo obrigat\xf3rio",oneOf:"deve ser um dos seguintes valores: ${values}",notOneOf:"n\xe3o pode ser um dos seguintes valores: ${values}"},string:{length:"deve ter exatamente ${length} caracteres",min:"deve ter pelo menos ${min} caracteres",max:"deve ter no m\xe1ximo ${max} caracteres",email:"*Formato de email inv\xe1lido",url:"deve ter um formato de URL v\xe1lida",trim:"n\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"deve estar em mai\xfasculo",uppercase:"deve estar em min\xfasculo"},number:{min:"deve ser no m\xednimo ${min}",max:"deve ser no m\xe1ximo ${max}",lessThan:"deve ser menor que ${less}",moreThan:"deve ser maior que ${more}",notEqual:"n\xe3o pode ser igual \xe0 ${notEqual}",positive:"deve ser um n\xfamero pos\xedtivo",negative:"deve ser um n\xfamero negativo",integer:"deve ser um n\xfamero inteiro"}});var w=y.b().shape({emailRegister:y.d().email().required(),passwordRegister:y.d().min(4).required()});y.c({mixed:{default:"\xe9 inv\xe1lido",required:"*Campo obrigat\xf3rio",oneOf:"deve ser um dos seguintes valores: ${values}",notOneOf:"n\xe3o pode ser um dos seguintes valores: ${values}"},string:{length:"deve ter exatamente ${length} caracteres",min:"deve ter pelo menos ${min} caracteres",max:"deve ter no m\xe1ximo ${max} caracteres",email:"*Formato de email inv\xe1lido",url:"deve ter um formato de URL v\xe1lida",trim:"n\xe3o deve conter espa\xe7os no in\xedcio ou no fim.",lowercase:"deve estar em mai\xfasculo",uppercase:"deve estar em min\xfasculo"},number:{min:"deve ser no m\xednimo ${min}",max:"deve ser no m\xe1ximo ${max}",lessThan:"deve ser menor que ${less}",moreThan:"deve ser maior que ${more}",notEqual:"n\xe3o pode ser igual \xe0 ${notEqual}",positive:"deve ser um n\xfamero pos\xedtivo",negative:"deve ser um n\xfamero negativo",integer:"deve ser um n\xfamero inteiro"}});var $=y.b().shape({emaillogin:y.d().email()}),R=function(){var e=Object(s.useContext)(O).setToken,t=Object(l.g)();return Object(h.jsx)("div",{className:"loginAndRegister",children:Object(h.jsx)("div",{className:"col-4 center",children:Object(h.jsxs)("div",{className:"login__area",children:[Object(h.jsx)("h1",{children:"VINGADORES"}),Object(h.jsx)("h2",{children:"CADASTRO DE USU\xc1RIOS"}),Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("h3",{children:"Login"}),Object(h.jsx)(N.d,{validationSchema:$,onSubmit:function(n,s){p.a.get("https://my-json-server.typicode.com/kemps-medeiros/db-vingadores/administradores",{username:n.emaillogin,password:n.password}).then((function(s){var r=s.data.filter((function(e){return e.username===n.emaillogin}));0===r.length?(alert("Usu\xe1rio ou senha incorreta"),console.log("Usu\xe1rio n\xe3o encontrado")):r.length>0&&(r[0].username===n.emaillogin&&r[0].password===n.password?(e("1234"),t.push("/list")):alert("Usu\xe1rio ou senha incorreta")),Array.from(document.querySelectorAll("input")).forEach((function(e){return e.value=""}))}))},initialValues:{emaillogin:"",password:""},render:function(e){e.values,e.errors,e.touched,e.isValid,e.setFieldValue;return Object(h.jsxs)(N.c,{className:"formik__login",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)(N.b,{type:"email",autoFocus:!0,name:"emaillogin"}),Object(h.jsx)(N.a,{name:"emaillogin"}),Object(h.jsx)("label",{children:"Senha"}),Object(h.jsx)(N.b,{type:"password",name:"password"}),Object(h.jsx)("div",{className:"btn",children:Object(h.jsxs)("button",{className:"btn__enter",type:"submit",children:[" ","Entrar"," "]})})]})}})]}),Object(h.jsxs)("div",{className:"registration",children:[Object(h.jsx)("h3",{children:"Registrar"}),Object(h.jsx)(N.d,{validationSchema:w,onSubmit:function(e,t){p.a.post("https://my-json-server.typicode.com/kemps-medeiros/db-vingadores/administradores",{username:e.emailRegister,password:e.passwordRegister}).then((function(e){console.log(e),alert("Usu\xe1rio Cadastrado com Sucesso")})),t.resetForm()},initialValues:{emailRegister:"",passwordRegister:""},render:function(e){e.values,e.errors,e.touched,e.isValid,e.setFieldValue;return Object(h.jsxs)(N.c,{className:"formik__register",children:[Object(h.jsxs)("div",{className:"form__register__fields",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)(N.b,{type:"text",name:"emailRegister"}),Object(h.jsx)(N.a,{name:"emailRegister"})]}),Object(h.jsxs)("div",{className:"form__register__fields",children:[Object(h.jsx)("label",{children:"Senha"}),Object(h.jsx)(N.b,{type:"password",name:"passwordRegister"}),Object(h.jsx)(N.a,{name:"passwordRegister"})]}),Object(h.jsx)("div",{className:"btn",children:Object(h.jsx)("button",{className:"btn__register",type:"submit",children:"Registrar"})})]})}})]})]})})})},q=n(40),U=n.n(q),A={};try{if(!window.localStorage)throw Error("no local storage");A.set=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},A.get=function(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(n){return null}},A.remove=function(e){return localStorage.removeItem(e)}}catch(P){A.set=U.a.set,A.get=U.a.getJSON,A.remove=U.a.remove}var F=A;var T=function(e){var t=e.children,n=function(e){var t=Object(s.useState)((function(){return F.get(e)})),n=Object(b.a)(t,2),r=n[0],a=n[1];return[r,Object(s.useCallback)((function(t){F.set(e,t),a(t)}),[e]),Object(s.useCallback)((function(){F.remove(e),a(void 0)}),[e])]}("token"),r=Object(b.a)(n,2),a=r[0],c=r[1];return Object(h.jsx)(O.Provider,{value:{token:a,setToken:c},children:t})},V=(n(240),function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)("div",{id:"include",children:Object(h.jsxs)("div",{className:"container__include",children:[Object(h.jsx)("h1",{children:"Inclus\xe3o de novo Usu\xe1rio"}),Object(h.jsx)("div",{className:"form",children:Object(h.jsx)(N.d,{validationSchema:C,onSubmit:function(e,t){p.a.post("http://localhost:5000/usuarios",{nome:e.name,cpf:e.cpf,email:e.email,"endere\xe7o":{cep:e.cep,rua:e.rua,numero:e.numero,bairro:e.bairro,cidade:e.cidade}}).then((function(e){console.log(e)})),t.resetForm(),alert("USU\xc1RIO CADASTRADO COM SUCESSO")},initialValues:{name:"",cpf:"",email:"",cep:"",rua:"",numero:"",bairro:"",cidade:""},render:function(e){e.values,e.errors,e.touched;var t=e.isValid,n=e.setFieldValue;return Object(h.jsxs)(N.c,{className:"form__formik",children:[Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsx)("label",{children:"Nome"}),Object(h.jsx)(N.b,{name:"name",type:"text"}),Object(h.jsx)(N.a,{name:"name"})]}),Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsx)("label",{children:"CPF"}),Object(h.jsx)(N.b,{name:"cpf",type:"text"}),Object(h.jsx)(N.a,{name:"cpf"})]}),Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsx)("label",{children:"Email"}),Object(h.jsx)(N.b,{name:"email",type:"email"}),Object(h.jsx)(N.a,{name:"email"})]}),Object(h.jsx)("div",{className:"endereco__text",children:Object(h.jsx)("h3",{children:"Endere\xe7o"})}),Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsxs)("div",{className:"cep__search",children:[Object(h.jsx)("label",{children:"CEP"}),Object(h.jsx)("div",{className:"div__search",children:Object(h.jsx)("button",{className:"search",children:"Buscar CEP: "})})]}),Object(h.jsx)(N.b,{name:"cep",type:"text",onBlur:function(e){return function(e,t){var n=e.target.value,s=null===n||void 0===n?void 0:n.replace(/[^0-9]/g,"");8===(null===s||void 0===s?void 0:s.length)&&fetch("https://viacep.com.br/ws/".concat(s,"/json/")).then((function(e){return e.json()})).then((function(e){t("rua",e.logradouro),t("bairro",e.bairro),t("cidade",e.localidade),console.log(e)}))}(e,n)}}),Object(h.jsx)(N.a,{name:"cep"})]}),Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsx)("label",{children:"Rua"}),Object(h.jsx)(N.b,{name:"rua",type:"text"}),Object(h.jsx)(N.a,{name:"rua"})]}),Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsx)("label",{children:"N\xfamero"}),Object(h.jsx)(N.b,{name:"numero",type:"number"}),Object(h.jsx)(N.a,{name:"numero"})]}),Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsx)("label",{children:"Bairro"}),Object(h.jsx)(N.b,{name:"bairro",type:"text"}),Object(h.jsx)(N.a,{name:"bairro"})]}),Object(h.jsxs)("div",{className:"form__field",children:[Object(h.jsx)("label",{children:"Cidade"}),Object(h.jsx)(N.b,{name:"cidade",type:"text"}),Object(h.jsx)(N.a,{name:"cidade"})]}),Object(h.jsx)("div",{className:"btn__div",children:Object(h.jsx)("button",{className:"btn__include",type:"submit",disabled:!t,children:"Cadastrar Novo Usu\xe1rio"})})]})}})})]})})]})}),I=function(e){var t=e.component,n=Object(o.a)(e,["component"]),r=Object(s.useContext)(O).token;return Object(h.jsx)(l.b,Object(i.a)(Object(i.a)({},n),{},{render:function(){return r?Object(h.jsx)(t,Object(i.a)({},n)):Object(h.jsx)(l.a,{to:"/"})}}))},L=function(){return Object(h.jsx)(d.a,{children:Object(h.jsx)(T,{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/",component:R}),Object(h.jsx)(I,{exact:!0,path:"/list",component:k}),Object(h.jsx)(I,{exact:!0,path:"/include",component:V})]})})})};var D=function(){return Object(h.jsx)(L,{})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.1bfe8b69.chunk.js.map