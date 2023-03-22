function greeting(){
    let username = 'gabs';

    function diaplayUserName(){
        return 'Hello ${username}';
    }
        return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());