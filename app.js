(() => {
  const $counter = document.getElementById("js-counter");
  const $buttons = document.getElementsByClassName("js-button");
  const $reset = document.getElementById("reset");

  const clickHandler = (e) => {
      const $targetButton = e.currentTarget;
      let currentCount = parseInt($counter.textContent);
      if($targetButton.textContent === "+"){
          if(currentCount === 10){
              alert("Maximum value reached");
              return;
          }else{
            $counter.textContent = currentCount + 1;
          }
      } else {
          if(currentCount === -10){
              alert("Minimum value reached");
              return;
          }
          $counter.textContent = currentCount - 1;
      }
  }
  for (let index = 0; index < $buttons.length; index++) {
    $buttons[index].addEventListener("click", (e) => clickHandler(e))
  }

  $reset.addEventListener("click", (e) => {
    $counter.textContent = 0;
  })
})();