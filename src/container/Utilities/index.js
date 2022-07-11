export const isLogin = () => {
  const localdata = localStorage.getItem("rudra");
  if (localdata === "rudra") {
    return true;
  } else {
    return false;
  }
};
