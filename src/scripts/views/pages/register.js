const Register = {
  async render() {
    return `
      <form-register></form-register>
  `;
  },

  async afterRender() {
    const bodyPd = document.getElementById('body-pd');
    bodyPd.classList.remove('body-pd');
    bodyPd.classList.remove('body-logged-in');
  },

};
export default Register;
