
var enemyHealth = healthCalcE();
var heroHealth = healthCalcH();
var char;
var char1;
var enemyIndex = 1;
var heroIndex = 0;
var fireCool = 0;
// occasional bug where the attack stays after a defense
//figure out why i can't use an object for enemy health
// need a game end function where the buttons no longer work.

// enemy initializer
var enemy = {

    image: function (){
       
      var num = Math.floor(Math.random() * 3);
      char = "enemy" + num + '.jpg';
      document.getElementById('enemy').src = char;
      document.getElementById('enemy').style.height = '350px';
      document.getElementById('enemy').style.width = '280px';
      document.getElementById('enemy').style.position = 'fixed';
      document.getElementById('enemy').style.top = '300x';
      document.getElementById('enemy').style.right = '280px';
      // cant fix for some reason
      document.getElementById('eh').textContent = enemyHealth;
      document.getElementById('hh').textContent = heroHealth;
    },

    timer: function (){

      setTimeout(enemy.timer1, 300);
    },
    timer1: function (){
  
     document.getElementById('choose').textContent = 'The Monster Attacks!'
     if (hero.defend === 1){
       
        function enemyBlock(){
      document.getElementById('choose').textContent = 'You Block Some Incoming Damage!'
      document.getElementById('char').src = 'shield.jpg'
      setTimeout(enemy.attack, 800)
        }
       setTimeout(enemyBlock, 800);


     }
     else{
     setTimeout(enemy.attack, 800);
   }
   },
    attack: function (){

      var dam;
      
      if (enemyIndex > 0){
      
      document.getElementById('char').src = 'clawM.png';
       setTimeout(regular, 1000)
       enemyIndex ++
      
        if (enemyIndex > 2){
          console.log('ran');
          enemyIndex = 0;
          document.getElementById('choose').textContent = 'It is getting ready for a swing!';
          setTimeout(scare, 4999)
        }
    }

      else if (enemyIndex === 0){
      document.getElementById('char').src = 'claw.png';
      setTimeout(heavy, 300);
      enemyIndex ++;
    
    }

      function regular (){
    
      
       dam = Math.ceil((Math.random() * 7) * 2);
       if (hero.defend === 1) {
        hero.defend = 0;
        heroHealth -= (Math.floor(dam / 2));
       document.getElementById('hh').textContent = heroHealth;
       document.getElementById('char').src = char1;
       
       if (enemyIndex !== 0){
         document.getElementById('choose').textContent = '';
       }
       endCheck();

       }
       else if (hero.defend === 0) {

        heroHealth -= dam 
       document.getElementById('hh').textContent = heroHealth;
       document.getElementById('char').src = char1;
       
       if (enemyIndex !== 0){
         document.getElementById('choose').textContent = '';
       }
       endCheck();

       }


       }
             
    

      function scare (){
         document.getElementById('choose').textContent = '';
      }
       // add a defend parameter
      function heavy (){
    
     
       dam = Math.ceil((Math.random() * 12) * 2); 

      if (hero.defend === 1){
        hero.defend = 0;
       heroHealth -= (Math.floor(dam / 2));
       document.getElementById('hh').textContent = heroHealth;
       document.getElementById('choose').textContent = '';
       document.getElementById('char').src = char1;
       endCheck();
     }
     else {
      heroHealth -= dam;
       document.getElementById('hh').textContent = heroHealth;
       document.getElementById('choose').textContent = '';
       document.getElementById('char').src = char1;
       endCheck();
     }

     }

      function endCheck(){

          if (heroHealth <= 0){
             document.getElementById('choose').textContent = 'You Died!'

          }
          else if (enemyHealth <= 0){
            document.getElementById('choose').textContent = 'The Monster Was Defeated!'
          }
      }
    },

};
//health calc

function healthCalcE (){
   return 60 + (Math.ceil(Math.random() * 19));
}
function healthCalcH (){
   return 65 + (Math.ceil(Math.random() * 15));
}

//intilizie game app (kinda drunk)
var startGame = { 

      char1: function (){
          document.getElementById('char').src = "char1.jpg";
          document.getElementById('char').style.height = '350px';
          document.getElementById('char').style.width = '230px';
          document.getElementById('char').style.visibility = 'visible';
          char1 = 'char1.jpg';
          startGame.init();
      },
      char2: function(){
          document.getElementById('char').src = "char2.png";
          document.getElementById('char').style.visibility = 'visible';
          char1 = 'char2.png'
          startGame.init();
          
          
      },
      init: function (){
          document.getElementById('char1').style.display = "none";
          document.getElementById('char2').style.display = "none";
          document.getElementById('char').style.height = '350px';
          document.getElementById('char').style.width = '230px';
          document.getElementById('char').style.position = 'fixed';
          document.getElementById('char').style.left = '300px';
          document.getElementById('char').style.top = '280px';
          document.getElementById('choose').textContent = "";
          document.getElementById('att').style.visibility = "visible";
          document.getElementById('def').style.visibility = "visible";
          document.getElementById('fire').style.visibility = "visible";
          document.getElementById('hpe').style.visibility = "visible";
          document.getElementById('hph').style.visibility = "visible";
          enemy.image();
          // figure out why i can't style a gro
//up that becomes visible
          
      }
      
}
// build a hero and enemy data object app controller
var hero = {
  defend: 0,
  defendToggle: function (){
     hero.defend ++;
     enemy.timer();
  },
  endCheck:  function(){

          if (heroHealth <= 0){
             document.getElementById('choose').textContent = 'You Died!'

          }
          else if (enemyHealth <= 0){
            document.getElementById('choose').textContent = 'The Monster Was Defeated!'
            setTimeout(endGame, 2000)
          }
      },

  attack: function (){

     setTimeout(startB, 300)

     function startB () {

      document.getElementById('enemy').src = 'clawM.png'

     setTimeout(startA, 200)
   };
    function startA () {
     var dam = Math.ceil((Math.random() * 6) * 2 );
     enemyHealth -= dam;
       document.getElementById('eh').textContent = enemyHealth;
       document.getElementById('enemy').src = char;
    
       if (fireCool > 2){
          fireCool = 0;
       }
       else if (fireCool !== 0){
         fireCool++
       }
       hero.endCheck();
       if (enemyHealth >= 0){
        enemy.timer();
      }

     };
  },
  reset: function (){
    document.getElementById('choose').textContent = '';
  },
// work on cooldown
  fireball: function (){
     if (fireCool === 0){
     setTimeout(init, 300)
     function init () {document.getElementById('enemy').src = 'fireball.png'
     setTimeout(init2, 200)
   }
    function init2 (){
      var dam = Math.floor((Math.random() * 12) * 2);
      document.getElementById('enemy').src = char;
      enemyHealth -= dam;
      document.getElementById('eh').textContent = enemyHealth;
      endCheck();
      fireCool++;
      if (enemyHealth >= 0){
        enemy.timer();
      }

    }
    function endCheck(){

          if (heroHealth <= 0){
             document.getElementById('choose').textContent = 'You Died!'

          }
          else if (enemyHealth <= 0){
            document.getElementById('choose').textContent = 'The Monster Was Defeated!'
            setTimeout(endGame, 2000)
          }
      }

  }
  else {
    document.getElementById('choose').textContent = 'The Spell Is Not Ready Yet!'
    setTimeout(hero.reset, 2000);
  }
},
}
function endGame(){
  document.getElementById('choose').textContent = 'You Triumph Over The Beast!'
}


// event listeners 
document.getElementById("char1").addEventListener('click', startGame.char1);
document.getElementById("char2").addEventListener('click', startGame.char2);
document.getElementById("att").addEventListener('click', hero.attack);
document.getElementById("def").addEventListener('click', hero.defendToggle);
document.getElementById("fire").addEventListener('click', hero.fireball);

// build a game controller






//console.log(hero.attack());

//console.log(hero.attack());