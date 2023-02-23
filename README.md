# League of Node
## Uma jornada de exercícios de revisão de node, express e mysql 
___

## Proposta:
### Dia 1
   - construção dos endpoints
   - estrutura do 'banco' em aquivos de texto
___

## Endpoints a serem desenvolvidos:
  - post ('/login'): verifica usuário e retorna token de autenticaçao
    body: { username, password }

  - post ('/user'): cria novo usuário e retorna token de autenticação
    body: {email, username, password}

  - get ('/user'): lista todos os usuarios com seus personagens

  - post('/user/character/:id'): adiciona um personagem existente a um usuário.

  - put('/user/character/:id'): edita o nível do personagem de um usuário. 

  - delete('/user'): deleta usuário e tudo relacionado a ele.