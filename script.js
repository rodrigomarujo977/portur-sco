const btn = document.getElementById('btn-cor');

btn.addEventListener('click', function() {
  const cores = ['#f0f0f0', '#1a1a2e', '#2d6a4f', '#4a0e0e'];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

  document.documentElement.style.setProperty('--cor-fundo', corAleatoria);
});
