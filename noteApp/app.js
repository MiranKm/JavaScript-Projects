const noteInput = document.querySelector('.note-input');
const noteHolder = document.querySelector('.note-holder');
const insertNoteBtn = document.querySelector('.insert-note');


const insertNote = note => {
    const noteMock = `<li class="item">${note}</li>`
    noteHolder.insertAdjacentHTML('afterend', noteMock)
}


insertNoteBtn.addEventListener('click', e => {
    if (noteInput.value) {
        insertNote(noteInput.value)
    }
})