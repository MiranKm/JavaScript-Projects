const noteInput = document.querySelector('.note-input');
const noteHolder = document.querySelector('.note-holder');
const insertNoteBtn = document.querySelector('.insert-note');

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
}

const insertNote = note => {
    const noteMock = `<li class="item" item-id="${note.id}">${note.note}  id-> ${note.id}</li>`
    noteHolder.insertAdjacentHTML('afterend', noteMock)
}

const note = new Note()

insertNoteBtn.addEventListener('click', e => {
    if (noteInput.value) {
        const newNote = {
            note: noteInput.value,
            id: note.getNotesLength() + 1
        }
        note.addNote(newNote.note, newNote.id)
        insertNote(newNote)

        // console.log(note.note.length);
        noteInput.value = ""
    }
})