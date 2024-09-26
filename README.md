# Firebase AuthUser App

App React que utiliza Firebase para autenticação e Firestore para armazenar dados de usuários. O projeto inclui funcionalidades de registro, login e gerenciamento de dados de usuários.

## Funcionalidades
Registro de novos usuários com nome, sobrenome, data de nascimento, e-mail e senha.
Login de usuários registrados.
Armazenamento de informações dos usuários no Firestore.
Mensagens de erro e sucesso durante o processo de autenticação.

## Pré-requisitos

* Node.js (versão 12 ou superior)
* npm ou yarn

## Instalação

    
Clone o repositório para sua máquina local e depois acesse a pasta do projeto

```bash
  cd firebase-authuser-app
```

Instale as dependências necessárias:

```bash
  npm install
```
ou, se estiver usando yarn:

```bash
  yarn install
```

### Configuração do Firebase
Você deve configurar o Firebase no projeto antes de executar a aplicação.

* Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
* Ative a autenticação por e-mail/senha no console do Firebase.
* Crie um banco de dados Firestore no modo "teste" para facilitar o desenvolvimento inicial.
* Crie um arquivo .env.local na raiz do projeto com suas credenciais do Firebase.

`REACT_APP_FIREBASE_API_KEY`

`REACT_APP_FIREBASE_AUTH_DOMAIN`

`REACT_APP_FIREBASE_PROJECT_ID`

`REACT_APP_FIREBASE_STORAGE_BUCKET`

`REACT_APP_FIREBASE_MESSAGING_SENDER_ID`

`REACT_APP_FIREBASE_APP_ID`

Depois de configurar as dependências e o Firebase, você pode rodar o projeto localmente com o comando:

```bash
  npm start
```
ou, se estiver usando yarn:

```bash
  yarn start
```
O projeto estará disponível em http://localhost:3000.

```bash
  npm build
```



## Contribuição

Se quiser contribuir para este projeto, siga as etapas abaixo:

1. Fork o projeto
2. Crie uma nova branch (`git checkout -b feature-nova-funcionalidade`)
3. Faça commit de suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para a branch principal (`git push origin feature-nova-funcionalidade`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.
