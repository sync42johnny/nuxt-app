export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie('authToken');

  if (process.server) {
    console.log('authToken.value in app.global', authToken.value);
  }
});
