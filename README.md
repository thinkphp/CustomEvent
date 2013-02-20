Custom Events
-------------

Events are a manifestation of the observer pattern, a well-defined computer science design pattern for 
loose coupling (allows you to make changes to one module without affecting the others).

Syntax
------

var o = new CustomEvent()

* o.addEvent(evType, listener)
* o.removeEvent(evType, listener)
* o.fireEvent(evType)


Usage
-----


    var arr = [9,8,7,5,4,3,2,1,0,-1,-2,-3],

        ob = new CustomEvent()

    addEvent( $('btn'), 'click', function( event ){
 
         ob.fireEvent("start");

         doBubble(0, 0, arr.length-1, function(i,j){

                 var aux;

                 if(arr[j] > arr[j+1]) {
                    aux = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = aux
                  }

                  draw();
         })

    }, false);

    function doBubble(i, j, len, callback) {

             callback(i,j);
 
             if( ++j >= len) {
                 j = 0
                 i++
             }

             if(i<len) window.setTimeout(function(){

                           doBubble(i, j, len, callback)

             }, 100); else ob.fireEvent('sorted')
    }

    function draw() { dom.$("input").innerHTML = arr.join(", ") }

    draw()

    //assign a handler for the event 'start'
    ob.addEvent("start", function(){

       if(window.event) console.log('start sorting!!!');
    })

    //assign a handler for the event 'sorted'
    ob.addEvent("sorted", function(){

       if(window.event) console.log('end sorting!!!');

       alert('sorted!!!');
    })
