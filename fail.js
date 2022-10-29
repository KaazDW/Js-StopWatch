        const timerdiv = document.getElementById('timer');
        const errortxt = document.getElementById('errormsg');
        let inter;
        var Pause = true;
        var top = ">";

        function Timer(){
  
            if (inter !== undefined) {

              clearInterval(inter);
              inter = undefined;
            }
            var number = document.getElementById("number").value;
            if (number <= 0){
              errortxt.innerText="fatal error ";
              return;
            } else{
              errortxt.innerText="running...";
              
            }
            departMinutes = number;
            var tempsseconds = departMinutes * 60;
            console.log(number.value);
            timerdiv.innerText = "initialisation..." ;
            let nsecondes = 0 - 1; 
            let nminutes = 0;
            


            inter = setInterval(() => {
                let minutes = parseInt(tempsseconds / 60, 10);
                let secondes = parseInt(tempsseconds % 60, 10);
                nsecondes++;
                nsecondes = nsecondes < 10 ? "0" + nsecondes : nsecondes;
                // nminutes = nminutes < 10 ? "0" + nminutes : nminutes;
                // nsecondes = nsecondes == 0 ? "0" + nsecondes : nsecondes;
                if(nsecondes > 59){
                  nminutes++;
                  nsecondes = 0;
                }
                console.log(minutes + " : " + secondes +" || " + nminutes + ":" + nsecondes);
                // if(minutes < 10) minutes = "0" + minutes;
                // else minutes = minutes;
                minutes = minutes <= 10 ? "0" + minutes : minutes; 
                secondes = secondes <= 10 ? "0" + secondes : secondes;
                    //chainage optionnel :
                        //donne à la variable minutes -> si la condition "minutes < 10" est vérifié
                        //la valeur "0" + minutes
                        //sinon -> applique uniquement la valeur minutes

                tempsseconds = tempsseconds <= 0 ? 0 : tempsseconds - 1;

                if(minutes < 0 && tempsseconds < 0) {
                  clearInterval(inter);
                  inter = undefined;
                }          

                timerdiv.innerText = minutes + "." + secondes + " - " + nminutes + ":" + nsecondes;
            }, 1000);
          }