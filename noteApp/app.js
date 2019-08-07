const noteInput = document.querySelector('.note-input');
const noteHolder = document.querySelector('.note-holder');
const insertNoteBtn = document.querySelector('.insert-note');
const noteDeleteBtn = document.querySelector('.deleteBtn');
const noteShowCase = document.querySelector('.note-showcase');


const state = {}
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
        this.presistTheData()


    }

    getNotesLength() {
        return this.note.length;
    }

    deleteNote(id) {
        const index = this.note.findIndex(indexes => indexes.id === id)
        this.note.splice(index, 1)
        this.presistTheData()
    }
    presistTheData() {
        localStorage.setItem("notes", JSON.stringify(this.note));
    }

    readPresistedData() {
        const data = JSON.parse(localStorage.getItem("notes"))
        if (data) this.note = data
    }
}

const insertNote = note => {
    const noteMock = `<li class="item" item-id="${note.id}">${note.note}<span class="deleteBtn">X</span></li>`
    noteHolder.insertAdjacentHTML('afterend', noteMock)
}

insertNoteBtn.addEventListener('click', e => {
    addNote()
})

window.addEventListener("keydown", e => {
    // console.log(e.keyCode);
    if (e.key === "Enter" || e.keyCode === 13) {
        addNote();
    }
})

window.addEventListener('load', e => {
    state.note = new Note()
    state.note.readPresistedData();
    for (note of state.note.note) {
        insertNote(note)
    }

})
const addNote = () => {
    if (!state.note) state.note = new Note()
    if (noteInput.value) {
        const newNote = {
            note: noteInput.value,
            id: state.note.getNotesLength() + 1
        }
        state.note.addNote(newNote.note, newNote.id)
        insertNote(newNote)
        // console.log(note.note.length);
        noteInput.value = ""
    }
}

noteShowCase.addEventListener('click', deleteNoteFun)

function deleteNoteFun(e) {
    // console.log(e.target.matches('.deleteBtn '));
    const id = e.target.getAttribute('item-id')
    if (e.target.matches('.deleteBtn')) {
        if (confirm("are you sure wanna delete this?")) {
            const li = e.target.parentElement
            console.log(li);
            noteShowCase.removeChild(li)
            state.note.deleteNote(id)
        }
    }
}