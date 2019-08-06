const noteInput = document.querySelector('.note-input');
const noteHolder = document.querySelector('.note-holder');
const insertNoteBtn = document.querySelector('.insert-note');
const noteDeleteBtn = document.querySelector('.deleteBtn');
const noteShowCase = document.querySelector('.note-showcase');


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
        const index = this.note.findIndex(indexes => indexes.id === id)
        this.note.splice(index, 1)
    }
}

const insertNote = note => {
    const noteMock = `<li class="item" item-id="${note.id}">${note.note}  id-> ${note.id} <span class="deleteBtn">X</span></li>`
    noteHolder.insertAdjacentHTML('afterend', noteMock)
}

const note = new Note()
insertNoteBtn.addEventListener('click', e => {
    addNote()

})
window.addEventListener("keydown", e => {
    // console.log(e.keyCode);
    if (e.key === "Enter" || e.keyCode === 13) {
        addNote();
    }
})


const addNote = () => {
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
}

noteShowCase.addEventListener('click', deleteNoteFun)

function deleteNoteFun(e) {
    // console.log(e.target.matches('.deleteBtn '));
    const id = e.target.getAttribute('item-id')
    console.log(id);

    if (e.target.matches('.deleteBtn')) {
        const li= e.target.parentElement
        console.log(li);
        noteShowCase.removeChild(li)
        note.deleteNote(id)
    }
}