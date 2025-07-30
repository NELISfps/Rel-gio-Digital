function atualizarRelogio() {
      const agora = new Date();

      // Hora
      let horas = agora.getHours().toString().padStart(2, '0');
      let minutos = agora.getMinutes().toString().padStart(2, '0');
      let segundos = agora.getSeconds().toString().padStart(2, '0');
      document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;

      // Data
      let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
      let diaSemana = diasSemana[agora.getDay()];
      let dia = agora.getDate().toString().padStart(2, '0');
      let mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
      let ano = agora.getFullYear();
      document.getElementById('data').textContent = `${diaSemana}, ${dia}/${mes}/${ano}`;
    }

    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();