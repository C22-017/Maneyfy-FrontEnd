const Login = {
  async render() {
    return `
      <form-login></form-login>
  `;
  },

  async afterRender() {
    const bodyPd = document.getElementById('body-pd');
    bodyPd.classList.remove('body-pd');
    bodyPd.classList.remove('body-logged-in');
  },

};
export default Login;
