
const button = document.createElement('button')
button.innerText = 'Click me'
button.onclick = () =>
{
    alert('Hello, World!')
}

document.body.appendChild(button)