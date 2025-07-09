Funcionalidade: login incorreto no...

Cenário: Realizar um login não válido no sistema

Passos:

Uusuário acessa a página de login.
Usuário preenche o campo "Usuário".
Usuário não preenche o campo "Senha".
Usuário clica no botão "LOGIN".

Resultado esperado:

O sistema não deve permitir que o usuário faça o login e deve retornar uma mensagem de erro

REGRA DE NEGÓCIO:

O login deve ser válido e ter sido previamente cadastrado no sistema por um usuário administrador.