var CustomEvent = {

    _listeners: {},

    addEvent: function(evType, listener) {

      if(typeof this._listeners[ evType ] === 'undefined') {

              this._listeners[ evType ] = [] 
      }

      this._listeners[evType].push( listener )

    },

    removeEvent: function( evType, whichListener) {

      if(this._listeners[ evType ] instanceof Array) {
 
           var listeners = this._listeners[ evType ],

               n = listeners.length, 

               i;

           for(i = 0; i < n; i++) {

               if(listeners[ i ] == whichListener) {

                    //The splice() method adds/removes items to/from an array, and returns the removed items and 
                    //this method changes the original array.
                    //@param (Integer)  i       - an integer that specifies at what position to add/remove items. 
                    //                          - note: use negative values to specify the position from the end of the array.
                    //@param (Interger) howmany - the number of items to be removed. if set to 0, no items will be removed. 
                    //@param (any)      item2,item3 - the new item(s) to be added to the array.   
                    listeners.splice(i, 1); 

                    break; 
               }//endif

           }//endfor  

      }//endif

   },

   fireEvent: function() {

            var event = null;

            if(arguments[0] && typeof arguments[0] === 'string') {

                event = {type: arguments[0], pass: arguments[1]}
            }

            if(typeof event == null) {

               throw new Error("missing event")
            }
     
            var listeners = this._listeners[ event.type ],

                n = listeners.length,

                i;
 
            for(i = 0; i < n; i++) {
 
                listeners[ i ].call(this, event.pass || null) 
            }                 
    }

};