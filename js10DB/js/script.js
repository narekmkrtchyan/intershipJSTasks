const URL = "http://localhost:3000/students";
let students = [];
let deleteBtn = createElement('button', '', 'fa fa-trash delete-btn');
let editBtn = createElement('button', '', 'fa fa-edit edit-btn');
let isCreating = false;
const modal = document.querySelector('#modal');
const tbody = document.querySelector('#studentsTable tbody');

fetch(URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    students = data;
    createStudentsElement(students);
  })

function createStudentsElement(data) {
  data.map(student => {
    addStudentElement(student);
  });
}

function addStudentElement(student) {
  let elem = createElement(
    'tr',
    [
      createElement('td', student.id),
      createElement('td', student.name, 'name'),
      createElement('td', student.email, 'email'),
      createElement('td', [deleteBtn, editBtn]),
    ],
    `student-${student.id}`,
  );

  tbody.append(elem);
  elem.querySelector('.delete-btn').addEventListener('click', (e => {
    deleteItem(student);
    elem.remove();
  }));
  elem.querySelector('.edit-btn').addEventListener('click', (e => {
    modal.setAttribute('studentId', student.id);
    isCreating = false;
    modal.querySelector('#name').value = student.name;
    modal.querySelector('#email').value = student.email;
    modalShow();
  }));
}

function addStudent() {
  isCreating = true;
  modalShow();
}

async function deleteItem(data) {
  const response = await fetch(URL + `/${data.id}`, {
    method: 'DELETE', 
  });

  students = students.filter(s => s.id !== data.id);
  return response.json();
}

async function createItem(data) {
  const response = await fetch(URL, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  students.push(data);
  addStudentElement(data);

  return response.json();
}

async function updateItem(data) {
  const response = await fetch(URL + `/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  students.map(s => {
    if (s.id === data.id) {
      s.name = data.name;
      s.email = data.email;
    }
  });

  tbody.querySelector(`.student-${data.id} .name`).innerHTML = data.name;
  tbody.querySelector(`.student-${data.id} .email`).innerHTML = data.email;

  return response.json();
}

function createElement(tag, content = '', classNames = '') {
  let elem = document.createElement(tag);

  if (classNames.length) {
    elem.className = classNames;
  }
  if (typeof content === 'string' || typeof content === 'number') {
    elem.innerHTML = content;
  } else {
    elem.innerHTML = getContent(content);
  }
  return elem;
}

function getContent(content) {
  let changedContent = '';

  if (Array.isArray(content)) {
    content.map(c => {
      if (Array.isArray(c)) {
        changedContent += getContent(c);
      } else {
        if (typeof c === 'string' || typeof c === 'number') {
          changedContent += c;
        } else {
          changedContent += c.outerHTML;
        }
      }
    });
  } else {
    changedContent = content.outerHTML;
  }

  return changedContent;
}


function submit() {
  let id;
  if (isCreating) {
    id = students[students.length - 1].id + 1;
  } else {
    id = modal.getAttribute('studentId');
  }

  const data = {
    name: modal.querySelector('#name').value,
    email: modal.querySelector('#email').value,
    id: id,
  };

  if (isCreating) {
    createItem(data);
  } else {
    updateItem(data);
  }
  modalHide();
}

function cancel() {
  modalHide();
}

function modalHide() {
  modal.querySelector('#name').value = '';
  modal.querySelector('#email').value = '';
  modal.classList.add('hidden');
}

function modalShow() {
  modal.classList.remove('hidden');
}