export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) {
    console.log('in confirm')
    const event = useRequestEvent();

    try {

      const { data } = await useFetch('/api');

      console.log(data.value?.hello);

      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGV2LmJpdHBsYXkuaW8vYXBpL3YyL2xvZ2luL3ZlcmlmeS9hNDEzNWU4NS1hZmRjLTQ5MGEtYTYwZC1jZGQxYWRmYTIyNzUiLCJpYXQiOjE2OTIwMDEyMDksImV4cCI6MTY5MzIxMDgwOSwibmJmIjoxNjkyMDAxMjA5LCJqdGkiOiJneGpHWUYxS29WSERpWkhuIiwic3ViIjoiMjMzIiwicHJ2IjoiNGZiYmU1Zjg5ODFmYjA3MDk0MDc0ZGE1ODQ4Y2QyNTEyMzdkMWQ2NSJ9.k0dvFdvhnn136VpNyv9VfhJIU6olpU5hXhbEwGB6AJ8';
      
      useCookie('authToken').value = token;
      
      const cookie = event.node.req.headers.cookie;
      
      event.node.req.headers.cookie = cookie
        ? cookie + `;authToken=${token}`
        : `authToken=${token}`;
      
        return navigateTo('/main');
    } catch (error) {
      // return navigateTo('/404');
    }
  }
});
