export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useCookie('authToken');

  const token = useRequestEvent()?.context.authToken;

  console.log(authToken.value);


  console.log('to in auth', to.fullPath);
  console.log('from in auth', from.fullPath)


  if (!authToken.value) {
    return navigateTo('/');
  }
});
