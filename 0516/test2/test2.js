// const playName = "전사";
// const playerLv = 10;
// const playerMp = 200;
// const playerHp = 1000;

const player = {

    name : "전사",
    
    greet : function ( name ) {
        this.name = name;
        console.log(`내 직업은 ${name}입니다.`);
    }

//    playerLv : 10,
//    playerMp : 20,
//    playerHp : 1000,

}

const calculator = {

    name : "계산기", 

    add : function ( num1, num2 ) {
        return ( num1 + num2 );
    },

    
    minus : function ( num1, num2 ) {
        if ( num1-num2 > 0 ) {
            return ( num1 - num2 );
        }
        else {
            return ( -1 * ( num1 - num2 ));
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

// calcuatir = {}


//function add(num1, num2)  {
//    const result = num1 + num2;
//    return result;
//    console.log(num1 + num2);
// }

// function minus(num1, num2) {
//    console.log(num1 - num2);    
// }


// function divide(num1, num2)  {
//    console.log(num1 / num2);
// }

// function multify(num1, num2) {
//   console.log(num1 * num2);    
// }

// console.log(add(1, 2));


// add(1, 2);

// minus(1, 2);

// divide (1, 2);

// multify(1, 2);

// const username = "yeji";
// console.log(`Hello ${username}`);
// console.log(`Enter your email`);

//    function mod(num1, num2) {
//        console.log(num1 % num2);
//    }

//    let num1 = Number(prompt("숫자 1을 입력하세요."));
//    let num2 = Number(prompt("숫자 2를 입력하세요."));

    // add(num1, num2);
    // minus(num1, num2);
    // divide(num1, num2);
    // multify(num1, num2);

//    mod(num1, num2);
