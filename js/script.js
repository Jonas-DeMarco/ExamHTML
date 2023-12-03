let on = 0





//event listener pour menu burger
window.onload = function(){
    document.getElementById("hamburger").onclick = function(){
      this.classList.toggle("is-active");
      if(this.classList.contains('is-active')){
        document.getElementById('nav').style.removeProperty('display')
      }
      else{
        document.getElementById('nav').style.display=('none')
      };

      
    }

    
    

  
  let links = document.getElementsByClassName('navlink');
        for (let i = 0; i<links.length;i++){
        let link = links[i];
        link.onclick = function(){
            document.getElementById("hamburger").classList.remove("is-active");
            document.getElementById('nav').style.display=('none')
            } };
            
            



}
    




function imgclick(ImgSrc)
{   
    if(on == 0){ 
        let trigger = document.querySelectorAll('*');
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.fontFamily = "baelz";
        }    
        document.getElementById('myimg').src="./images/EL_Rata.png"
        
        document.getElementById('left_elements').style.backgroundColor='#8efff5'
        document.getElementById('nav').style.backgroundColor='#ffe500'
        document.getElementById('hamburger').style.backgroundColor='#ffe500'
        
        trigger = document.querySelectorAll('nav>a');
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.backgroundColor = "#ffe500";
            trigger[i].style.color = 'red'
            
        }
        
        let boxchange = document.querySelectorAll('.boxelement>img');
        for(var i=0; i<boxchange.length; i++){
            boxchange[i].classList.toggle('imgchange1');
        
        }
        
        on = 1




    } else {
        console.log(ImgSrc);
        let trigger = document.querySelectorAll('*');
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.fontFamily = '';
        }
        document.getElementById('myimg').src="./images/faker.jpg";

        document.getElementById('left_elements').style.backgroundColor='rgb(226,1,45)'
        document.getElementById('nav').style.backgroundColor='blanchedalmond'
        document.getElementById('hamburger').style.backgroundColor='blanchedalmond'

        trigger = document.querySelectorAll('nav>a');
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.backgroundColor = "blanchedalmond";
            trigger[i].style.color = 'black'
        }
        
        let boxchange = document.querySelectorAll('.boxelement>img');
        for(var i=0; i<boxchange.length; i++){
            boxchange[i].classList.toggle('imgchange1');
        
        }


        on = 0
    }


}