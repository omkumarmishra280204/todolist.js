var btn = document.querySelector('button')
var percent = document.querySelector('#percent')
var growth = document.querySelector('#growth')

var num = 0
var body = document.querySelector('body')

btn.addEventListener('click', function () {
    num = 0 // reset on every click
    var int = setInterval(function () {
        num++
        percent.innerHTML = num + '%'
        growth.style.width = num + '%'
    }, 40)

    setTimeout(function () {
        clearInterval(int)
    }, 4000)

    // IMAGE RANDOMLY ADD HO YEH BHI BUTTON CLICK KE ANDAR HI HO
    var x = Math.random() * 90
    var y = Math.random() * 90
    var rot = Math.random() * 360

    var img = document.createElement('img')
    img.src = 'https://www.freeiconspng.com/thumbs/cartoon-png/spongebob-cartoon-png-32.png'
    img.style.position = 'absolute'
    img.style.left = x + '%'
    img.style.top = y + '%'
    img.style.transform = 'rotate(' + rot + 'deg)'
    img.style.width = '80px'

    body.appendChild(img)
})
