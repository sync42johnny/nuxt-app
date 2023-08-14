export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie('authToken');

  console.log('authToken in auth', authToken.value);
  
  if (!authToken.value) {
    return navigateTo('/');
  }
});
