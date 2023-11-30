let on = 0


function imgclick()
{
    if(on == 0){ 
        let trigger = document.querySelectorAll('*');
        
        
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.fontFamily = "baelz";
        }    
        document.getElementById('myimg').src="https://www.pokepedia.fr/images/thumb/2/2c/Morpeko_%28Mode_Affam%C3%A9%29-EB.png/225px-Morpeko_%28Mode_Affam%C3%A9%29-EB.png"
        
        document.getElementById('left_elements').style.backgroundColor='rgb(130,84,148)'
        document.getElementById('nav').style.backgroundColor='rgb(107,107,107)'

        trigger = document.querySelectorAll('nav>a');
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.backgroundColor = "rgb(107,107,107)";
            trigger[i].style.color = 'red'
        }
        
        let boxchange = document.querySelectorAll('.boxelement>img');
        for(var i=0; i<boxchange.length; i++){
            boxchange[i].src='https://static.wikia.nocookie.net/villains/images/5/52/Ashley_graves_official_artwork.png/revision/latest?cb=20230526020542'
        }   
        on = 1




    } else {
        let trigger = document.querySelectorAll('*');
        console.log(trigger);
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.fontFamily = 'Shantell Sans';
        }
        document.getElementById('myimg').src='https://www.pokepedia.fr/images/thumb/c/c8/Morpeko_%28Mode_Rassasi%C3%A9%29-EB.png/375px-Morpeko_%28Mode_Rassasi%C3%A9%29-EB.png';

        document.getElementById('left_elements').style.backgroundColor='rgb(241,238,157)'
        document.getElementById('nav').style.backgroundColor='rgb(190,157,105)'

        trigger = document.querySelectorAll('nav>a');
        for(var i=0; i<trigger.length; i++){
            trigger[i].style.backgroundColor = "rgb(190,157,105)";
            trigger[i].style.color = 'black'
        }
        
        let boxchange = document.querySelectorAll('.boxelement>img');
        for(var i=0; i<boxchange.length; i++){
            boxchange[i].src='https://64.media.tumblr.com/0cada83f9b0fc6f78e14790951bf6876/233b9c85ca629fa7-57/s540x810/f2848eaf6da869965e5be30cb1278d40dc819f55.gif'
        }


        on = 0
    }

    

}
 