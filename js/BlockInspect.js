 document.GlobalEventHandlers.onkeypress = function (event) {
               event = (event || window.event);
               if (event.KeyboardEvent.keyCode == 123) {
                  //alert('No F-12');
                   return false;
               }
            }
            document.onmousedown = function (event) {
               event = (event || window.event);
               if (event.KeyboardEvent.keyCode == 123) {
                   //alert('No F-keys');
                   return false;
               }
            }
            document.onkeydown = function (event) {
               event = (event || window.event);
               if (event.KeyboardEvent.keyCode == 123) {
                   //alert('No F-keys');
                   return false;
               }
            }
    

           document.onkeydown = function(e) {
             if(e.KeyboardEvent.keyCode == 123) {
              return false;
             }
             if(e.ctrlKey && e.shiftKey && e.KeyboardEvent.keyCode == 'I'.charCodeAt(0)){
              return false;
             }
             if(e.ctrlKey && e.shiftKey && e.KeyboardEvent.keyCode == 'J'.charCodeAt(0)){
              return false;
             }
             if(e.ctrlKey && e.KeyboardEvent.keyCode == 'U'.charCodeAt(0)){
              return false;
             }

             if(e.ctrlKey && e.shiftKey && e.KeyboardEvent.keyCode == 'C'.charCodeAt(0)){
              return false;
             }
          }

          document.addEventListener("contextmenu", function(e){
              e.preventDefault();
          }, false);