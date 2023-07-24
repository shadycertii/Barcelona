let search = document.getElementById('input')
let Name = document.getElementById('name')
let position = document.getElementById('position')
let age = document.getElementById('age')
let country = document.getElementById('country')
let height = document.getElementById('height')
let foot = document.getElementById('foot')
let fullN = document.getElementById('fullN')
let shirt = document.getElementById('shirt')
let pimage = document.querySelector('.img-fluid')

let players = [
{
 Name: "Lionel Andreas Messi (GOAT)",
 position: "Right Wing (RWF)",
 age: "26",
 country: "Argentina",
 height: "170cm",
 shirt: "10",
 foot: "Right Foot",
 fullN: "AMF, SS, CF, CMF",
 pimage: "./images/goat2.JPG"
},
{
    Name: "Luis Alberto Suarez Diaz",
    position: "Center Forward (CF)",
    age: "28",
    country: "Uruguay",
    height: "182cm",
    shirt: "9",
    foot: "Left",
    fullN: "LWF, SS, ST",
    pimage: "./images/suarez.JPEG"
   },
   {
    Name: "Neymar da Silver Santos Junior",
    position: "Left Wing (lWF)",
    age: "23",
    country: "Brazil",
    height: "175cm",
    shirt: "11",
    foot: "none",
    fullN: "AMF, SS, CF, CMF",
    pimage: "./images/neymar4.JPG"
   },
   {
    Name: "Andreas Iniesta",
    position: "Right Wing (RWF)",
    age: "31",
    country: "Spain",
    height: "171cm",
     shirt: "8",
    foot: "Right Foot",
    fullN: "AMF, DMF, LWF",
    pimage: "./images/iniesta.JPG"
   },
   {
    Name: "Xavi Hernandez",
    position: "Center Midfeild(CMF)",
    age: "35",
    country: "Spain",
    height: "170cm",
    shirt: "6",
    foot: "Right Foot",
    fullN: "AMF, DMF",
    pimage: "./images/xavi.JPG"
   },
   {
    Name: "Sergio Busquets",
    position: "Defensive Midfeild(CDM)",
    age: "27",
    country: "Spain",
    height: "189cm",
    shirt: "5",
    foot: "Left Foot",
    fullN: "CMF",
    pimage: "./images/busi.JPG"
   },  
   {
    Name: "Jordi Alba",
    position: "Left Back(LB)",
    age: "26",
    country: "Spain",
    height: "170cm",
    shirt: "18",
    foot: "None",
    fullN: "LMF, LWF",
    pimage: "./images/alba.JPG"
   },  
   {
    Name: "Gerard Pique",
    position: "Center Back(CB)",
    age: "28",
    country: "Spain",
    height: "194cm",
    shirt: "3",
    foot: "Left Foot",
    fullN: "DMF,RB",
    pimage: "./images/pique.JPG"
   },
   {
    Name: "Javier Alejandro Mascherano",
    position: "Center Back(CB)",
    age: "31",
    country: "Argentina",
    height: "174cm",
    shirt: "14",
    foot: "Left Foot",
    fullN: "DMF",
    pimage: "./images/mach.JPG"
   },
   {
    Name: "Daniel Alves",
    position: "Right Back(RB)",
    age: "32",
    country: "Brazil",
    height: "172cm",
    shirt: "2",
    foot: "Right Foot",
    fullN: "RMF",
    pimage: "./images/alves.JPG"
   },
   {
    Name: "Claudio Bravo",
    position: "Goal Keeper(GK)",
    age: "32",
    country: "Chile",
    height: "185cm",
    shirt: "13",
    foot: "Right Foot",
    fullN: "None",
    pimage: "./images/bravo.JPG"
   },
]

// get =Full name,age,weak foot, images, shirt number, height

search.addEventListener('keyup', (e)=>{

if(e.key === 'Enter'){
    
if(search.value == ''){
    document.getElementById('inputdivp').style.display = 'block';
    document.getElementById('playerD').style.display = 'none'
 
}
else{
    let final = players.find((item)=> item.Name.toLowerCase().includes(search.value.toLowerCase().trim()))

if(final){
    document.getElementById('inputdivp').style.display = 'none';

   Name.textContent = final.Name
   position.textContent = final.position
   age.textContent = final.age
   country.textContent = final.country 
   shirt.textContent = final.shirt
   height.textContent = final.height
   foot.textContent = final.foot
   fullN.textContent = final.fullN
   pimage.src = final.pimage

   search.value = ''
   document.getElementById('playerD').style.display = 'none'
}
else{
    document.getElementById('playerD').style.display = 'block'
    document.getElementById('inputdivp').style.display = 'none';
}
}
}
})   




document.getElementById('clickbtn').addEventListener('click', ()=>{         
        if(search.value == ''){
            document.getElementById('inputdivp').style.display = 'block';
            document.getElementById('playerD').style.display = 'none'
         search.style.display = '2px red solid'
        }
        else{
            let final = players.find((item)=> item.Name.toLowerCase().includes(search.value.toLowerCase().trim()))
        
        if(final){
            document.getElementById('inputdivp').style.display = 'none';
        
           Name.textContent = final.Name
           position.textContent = final.position
           age.textContent = final.age
           country.textContent = final.country 
           shirt.textContent = final.shirt
           height.textContent = final.height
           foot.textContent = final.foot
           fullN.textContent = final.fullN
           pimage.src = final.pimage
        
           search.value = ''
           document.getElementById('playerD').style.display = 'none'
        }
        else{
            document.getElementById('playerD').style.display = 'block'
            document.getElementById('inputdivp').style.display = 'none';
        }
        }
        }
        )