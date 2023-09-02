const root = document.querySelector(':root')
const menu = document.getElementById('menu')
let Theme = true 


function invertColor(){

    if(Theme){
        menu.style.filter = 'invert()'
    }
    else{
        menu.style.filter = 'invert(0)'
    }

}
function changeTheme(){
    let rs = getComputedStyle(root)
   
    if(Theme){
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');
        console.log(rs.getPropertyValue('--bgcblack'));
        //root.style.setProperty('--bgcblack',rgb(236, 236, 236));

        invertColor()

    }
    else{
        root.style.setProperty('--black', 'black');
        root.style.setProperty('--white', 'white');
       // root.style.setProperty('--bgcblack','rgb(236, 236, 236)' );

        invertColor()
    }
    Theme = !Theme  
}

document.body.style.filter = 'blur(9)'