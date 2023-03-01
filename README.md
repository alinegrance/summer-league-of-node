# League of Node
## Uma jornada de exercícios de revisão de node, express e mysql 
___

## Proposta:
### Dia 1
   - Construção dos endpoints
   - Estrutura do 'banco' em aquivos de texto

### Dia 2
   - Refatoração do dia um para camadas msc 
   - Utilização de banco de dados mysql

## Dia 3
   - Utilização de JWT
   - Refatoração da camada model para sequelize.
___

## Endpoints a serem desenvolvidos:
  - post ('/login'): verifica usuário e retorna token de autenticaçao
    body: { username, password }

  - post ('/user'): cria novo usuário e retorna token de autenticação
    body: {email, username, password}

  - get ('/user'): lista usuário logado com seus personagens

  - post('/user/character/:id'): adiciona um personagem existente a um usuário.

  - put('/user/character/:id'): edita a maestria do personagem de um usuário. 

  - delete('/user'): deleta usuário e tudo relacionado a ele.