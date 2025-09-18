// Simple front-end interactivity
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('signupForm');
  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    alert('Thank you, ' + data.get('name') + '! Your interest has been registered (demo).');
    form.reset();
  });
});
