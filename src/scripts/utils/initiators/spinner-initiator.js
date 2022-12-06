const showLoading = () => {
  document.getElementById('loading').style.display = 'inline-block';
}

const hideLoading = () => {
  document.getElementById('loading').style.display = 'none';
}

export { showLoading, hideLoading };