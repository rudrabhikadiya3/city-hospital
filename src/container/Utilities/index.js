export const isLogin = () => {
  const localdata = localStorage.getItem("rudra");
  if (localdata) {
    return true;
  } else {
    return false;
  }
};
