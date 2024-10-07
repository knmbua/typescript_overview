const noteform = document.querySelector('#note-form');


function addNote(event: Event){
  event.preventDefault();

  console.log('submit')
}

noteform?.addEventListener('click', addNote);