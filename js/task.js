
const contactForm = document.getElementById('new-contact')

contactForm.addEventListener('submit', function (event) {
  event.preventDefault()
  
  const taskNameInputField = document.getElementById('taskname')
  
  

  const newContact = {
    taskname: taskNameInputField.value,
    
  }

  console.log('CONTATTO SALVATO', newContact)
 
  const newContactCard = document.createElement('div')
  newContactCard.classList.add('contact-card')
 
  newContactCard.innerHTML = `
    <p>${newContact.taskNameInputFieldName} </p>
    
    <button onclick="deleteCard(event)">ELIMINA</button>
  `

  
  const sectionForCards = document.getElementById('saved-contacts')
  sectionForCards.appendChild(newContactCard)

 
})

const deleteCard = function (e) {
  const clickedButton = e.target
  console.log(clickedButton.parentElement)
  const reallyRemove = confirm('Vuoi davvero eliminare?')
  if (reallyRemove) {
    clickedButton.parentElement.remove()  
  }
}