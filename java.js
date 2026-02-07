function ativarPowerUp() {
    doubleShotActive = true;
    powerupTimer = 1200; // Alterado para 20 segundos (60fps * 20)
    document.getElementById('powerup-timer').style.display = 'block';
}

