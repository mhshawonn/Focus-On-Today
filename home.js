const checkBoxList= document.querySelectorAll('.checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const progressBar = document.querySelector('.progress-text')
const progressValue = document.querySelector('.progress-value')
const errorLabel = document.getElementById('goal');


checkBoxList.forEach((checkbox)=>{

    checkbox.addEventListener('click',(e)=>{
        const allField=[...inputFields].every(function(input){
            return input.value
        })
        if(allField){
            checkbox.parentElement.classList.toggle('completed')
            
        }
        else{
            errorLabel.style.display = 'block';
        }
        
    })

    inputFields.forEach((input) => {
        input.addEventListener('focus', () => {
            errorLabel.style.display='none'
        })
    })
})

 
