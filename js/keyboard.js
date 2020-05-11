function keyboard(value) {
  
    let key = {};
    key.value = value;
    key.isDown = false;
    key.isUp = true;
    //key.isPress = false;
    key.press = undefined;
    key.release = undefined;
    //key.touch = undefined;

    //The `downHandler`
    key.downHandler = event => {
      if (event.key === key.value) {
        if (key.isUp && key.press) key.press();
        key.isDown = true;
        key.isUp = false;
        event.preventDefault();
      }
    };
  
    //The `upHandler`
    key.upHandler = event => {
      if (event.key === key.value) {
        if (key.isDown && key.release) key.release();
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    };
/* 
    key.pressHandler = event => {
      console.log("se presiono:"+event.key+' y key vlaue es:'+key.value)
        if (event.key === " ") {
          key.touch();
       // if (key.isDown && key.release) 
        
        key.isDown = false;
        key.isUp = true;
        event.preventDefault();
      }
    }
*/
    //Attach event listeners
    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);
    //const pressListener = key.pressHandler.bind(key);
    
    window.addEventListener(
      "keydown", downListener, false
    );
    window.addEventListener(
      "keyup", upListener, false
    );
    

    // Detach event listeners
    key.unsubscribe = () => {
      window.removeEventListener("keydown", downListener);
      window.removeEventListener("keyup", upListener);
      //window.removeEventListener("keypress",pressListener);
    };
    
    return key;
  }