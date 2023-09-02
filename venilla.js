const root = document.querySelector(':root')
const menu = document.getElementById('menu')
const header = document.querySelector('.header')
let Theme = true 


function invertColor(){

    if(Theme){
        menu.style.filter = 'invert()'
    }
    else{
        menu.style.filter = 'invert(0)'
    }

}
function headerbg(){
    if(Theme){
        header.classList.add('header-adder')
    }
    else{
        header.classList.remove('header-adder')
    }
}
function changeTheme(){
    let rs = getComputedStyle(root)
   
    if(Theme){
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');
        console.log(rs.getPropertyValue('--bgcblack'));
        headerbg()
        invertColor()

    }

    else{
        root.style.setProperty('--black', 'black');
        root.style.setProperty('--white', 'white');
        headerbg()
        invertColor()
    }
    Theme = !Theme  
}

document.body.style.filter = 'blur(9)'

const images = ["./assets/img_1.jpg","./assets/KaSVZO2q_400x400.jpg","./assets/bootstrap-social.png","./assets/fr.jpg","./assets/github-cover.jpg",
'./assets/img-javascript.webp',"./assets/img-sass.png","./assets/Best-JavaScript-Frameworks-to-use-in-2020.jpg","./assets/vscode.jpg"
]

const mainimg = document.getElementById('main-img')
let adder = 0
mainimg.setAttribute('src',images[adder])

function imgChanger(){
    adder++
    mainimg.setAttribute('src',images[adder])
}

setInterval(() => {imgChanger()},3000)