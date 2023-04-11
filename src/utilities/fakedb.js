// use local storage to manage cart data
const addToDb = (jobs) => {
  let shoppingCart = getShoppingCart();
  let job = [];
  // add quantity
  const exist = shoppingCart.find((aj) => aj.id == jobs.id);
  if (exist) {
    job = [...shoppingCart];
  } else {
    job = [...shoppingCart, jobs];
  }
  localStorage.setItem("applied-job", JSON.stringify(job));
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("applied-job", JSON.stringify(shoppingCart));
  }
};

const getShoppingCart = () => {
  let shoppingCart = [];

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("applied-job");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-job");
};

export { addToDb, removeFromDb, getShoppingCart, deleteShoppingCart };
