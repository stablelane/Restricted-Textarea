const textArea = document.getElementById('text-area')

textArea.addEventListener('keypress',(e)=>{
    const words = document.getElementById('text-area').value
    if(words.length+1 <= 100) {
        const count = document.getElementById('count').textContent = `${words.length+1}/100`
        limitstyle("remove")
    }
    
    else { 
        limitstyle("add")
        document.getElementById('text-area').value = words.slice(0,99)   
        textArea.classList.add('limit')
    }
})
function limitstyle(cmnd) {
    if(cmnd === "add") {
        textArea.classList.add('limit')
        document.getElementById('count').style.color = 'red'
    }
    else {
        textArea.classList.remove('limit')
        document.getElementById('count').style.color = ''
    }
}
