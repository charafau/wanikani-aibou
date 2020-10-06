window.onload = async () => {
  const storage = new Storage();

  const controller = new HomeController(storage);
  let user = controller.loadUserData();
  if(user){
    document.getElementById("username").innerHTML = user.username;
    document.getElementById("level").innerHTML = `Level ${user.level}`;
  }


  
};
