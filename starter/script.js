'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for(let i= 0; i < btnsOpenModal.length; i++) {

  const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
  }
  btnsOpenModal[i].addEventListener('click', openModel);

  const closeModel = function closeModel(){
     modal.classList.add('hidden');
     overlay.classList.add('hidden');

  }

  btnCloseModal.addEventListener('click',closeModel );
  overlay.addEventListener('click', closeModel)


  //Press key to hide modaL
  document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if(e.key==='Escape' && !modal.classList.contains('hidden')){
      
        closeModel();
      }
    }
  
  
  )
}
