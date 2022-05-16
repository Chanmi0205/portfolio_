const calculator = {

    name : "계산기", 

    add : function ( num1, num2 ) {
        return ( num1 + num2 );
    },

    
    minus : function ( num1, num2 ) {
        if ( (num1-num2) > 0 ) {
            return ( num1 - num2 );
        }
        else {
            return  -((num1 - num2));
        }
    },

    
    multify : function ( num1, num2 ) {
        return ( num1 / num2 );
    },

    
    squared : function ( num1, num2 ) {
        return ( num1 * num2 );
    },

    mod : function ( num1, num2 ) {
        return ( num1 % num2 );
    } 

}