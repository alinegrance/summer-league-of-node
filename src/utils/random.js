//funçao que gera um token de 16 characteres aleatórios

module.exports = () => (Math.random().toString(36).slice(2) + Math.random().toString(36)
  .slice(2)).slice(0, 16);

