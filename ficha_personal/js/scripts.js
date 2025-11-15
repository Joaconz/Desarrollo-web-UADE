(function(){
  const toggleButtons = document.querySelectorAll('#darkToggle');
  function applyTheme(theme){
    if(theme === 'dark'){
      document.documentElement.setAttribute('data-theme','dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
  const stored = localStorage.getItem('ficha_theme') || 'light';
  applyTheme(stored);

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cur = localStorage.getItem('ficha_theme') || 'light';
      const next = (cur === 'dark') ? 'light' : 'dark';
      localStorage.setItem('ficha_theme', next);
      applyTheme(next);
    });
  });

  function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const form = document.getElementById('contactForm');
  if(form){
    const nameI = document.getElementById('name');
    const emailI = document.getElementById('email');
    const msgI = document.getElementById('message');
    const errName = document.getElementById('err-name');
    const errEmail = document.getElementById('err-email');
    const errMsg = document.getElementById('err-message');
    const clearBtn = document.getElementById('clearBtn');

    function clearErrors(){
      errName.textContent = '';
      errEmail.textContent = '';
      errMsg.textContent = '';
    }

    clearBtn.addEventListener('click', () => {
      form.reset();
      clearErrors();
      nameI.focus();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();
      let ok = true;

      if(!nameI.value.trim()){
        errName.textContent = 'El nombre es obligatorio.';
        ok = false;
      }
      if(!emailI.value.trim()){
        errEmail.textContent = 'El email es obligatorio.';
        ok = false;
      } else if(!validateEmail(emailI.value.trim())){
        errEmail.textContent = 'Por favor ingrese un email valido.';
        ok = false;
      }
      if(!msgI.value.trim()){
        errMsg.textContent = 'El mensaje no puede estar vacio.';
        ok = false;
      } else if(msgI.value.trim().length < 10){
        errMsg.textContent = 'El mensaje debe tener al menos 10 caracteres.';
        ok = false;
      }

      if(ok){
        alert('Mensaje enviado exitosamente.');
        form.reset();
        clearErrors();
      }
    });
  }
})();
