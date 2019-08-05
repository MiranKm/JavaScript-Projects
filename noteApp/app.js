const noteInput = document.querySelector('.note-input');
const noteHolder = document.querySelector('.note-holder');
const insertNoteBtn = document.querySelector('.insert-note');
const noteDeleteBtn = document.querySelector('.deleteBtn');

class Note {
    constructor() {
        this.note = []
    }


    addNote(note, id) {
        const noteItem = {
            note,
            id
        }
        this.note.push(noteItem)
    }

    getNotesLength() {
        return this.note.length;
    }

    deleteNote(id) {
        const index = this.note.findIndex(indexes => index.id === id)
        this.note.splice(index, 1)
    }
}

const insertNote = note => {
    const noteMock = `<li class="item" item-id="${note.id}">${note.note}  id-> ${note.id} <span class="deleteBtn">X</span></li>`
    noteHolder.insertAdjacentHTML('afterend', noteMock)
}

const note = new Note()
var shouldAbleToDelete = false;
insertNoteBtn.addEventListener('click', e => {
    if (noteInput.value) {
        const newNote = {
            note: noteInput.value,
            id: note.getNotesLength() + 1
        }
        note.addNote(newNote.note, newNote.id)
        insertNote(newNote)
        shouldAbleToDelete = true;

        // console.log(note.note.length);

        noteInput.value = ""

    }

  
})
if (shouldAbleToDelete) {
    noteDeleteBtn.addEventListener('click', event => {
        console.log(event.srcElement);
    })
 
}