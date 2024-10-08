import getNotes from './getNotes';

function outputNotes(){
    // Get the notes array from localStorage
    const notesArray = getNotes();
    const noteOutput = document.querySelector <HTMLElement>('#note-output');
    // Loop over the array of note objexts and output an article element into the section output for each object in the array
    if(!notesArray.length && noteOutput) {
        noteOutput.innerHTML = '<p>No notes have been added...</p>';
    } else if (notesArray.length && noteOutput){
        noteOutput.innerHTML =''
    }
    

    for (let index = 0; index < notesArray.length; index++) {
        const noteObj = notesArray[index];
    
        noteOutput?.insertAdjacentHTML('beforeend', `
          <article class="mb-4">
            <h3>${noteObj.text}</h3>
            <p>Added On: ${noteObj.date}</p>
            <button data-index="${index}" class="btn btn-danger">Delete</button>
            <hr>
          </article>
        `);
      }
}

export default outputNotes;