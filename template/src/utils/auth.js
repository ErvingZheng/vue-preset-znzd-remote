// token
export function getToken() {
  return sessionStorage.getItem("token");
}
export function setToken(token) {
  return sessionStorage.setItem("token", token);
}
export function removeToken() {
  return sessionStorage.removeItem("token");
}

// role
export function getRole() {
  return sessionStorage.getItem("role");
}
export function setRole(role) {
  return sessionStorage.setItem("role", role);
}
export function removeRole() {
  return sessionStorage.removeItem("role");
}
