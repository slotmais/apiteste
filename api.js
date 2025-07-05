function abrirJogo(gameCode) {
  fetch('https://api.supremabet.online/game', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      agent_code: 'china23',
      token: 'f2e678c417c9f5de60f06f37fad73588',
      game_code: gameCode,
      user_id: 'demo_user_123',
      balance: 1000
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      window.open(data.game_url, '_blank');
    } else {
      alert('Erro: ' + data.message);
    }
  })
  .catch(err => {
    console.error(err);
    alert("Falha ao conectar à API.");
  });
}
