const toastBox = document.getElementById("toastBox");

function showToast(type) {
  let toast = document.createElement('div');
  toast.classList.add('toast', type);

  // Define messages + icons
  let msg = '';
  let icon = '';
  if (type === 'success') {
    msg = 'Successfully submitted!';
    icon = '<i class="fa-solid fa-circle-check"></i>';
  } else if (type === 'error') {
    msg = 'Please fix the error!';
    icon = '<i class="fa-solid fa-circle-xmark"></i>';
  } else if (type === 'invalid') {
    msg = 'Invalid input, check again!';
    icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
  }

  toast.innerHTML = `${icon} ${msg}`;
  toastBox.appendChild(toast);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.remove();
  }, 4000);
}
