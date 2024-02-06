export const load = async (event) => {
  
  await new Promise(resolve => setTimeout(() => {
    console.log('loaded layout');
    resolve(null);
  }, 1000));
  return { loaded: true };
}