function isEmailValid(email: string | undefined) {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function isPasswordValid(password: string | undefined) {
  if (!password) return false;
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
  return passwordRegex.test(password.trim());
}

export { isEmailValid, isPasswordValid };
