class Cat {
    constructor(nickname, breed, food, sex) {
        this.nickname = nickname;
        this.breed = breed;
        this.food = food;
        this.sex = sex;
    }
}

class Friend{
    constructor(name,email,telefon){
        this.name = name;
        this.email=email;
        this.telefon=telefon;
    }
}

function friendCat(){
    let nameFriend = document.querySelector('#text').value;
    let emailFriend = document.querySelector('#adres').value;
    let telefonFriend = document.querySelector('#contact').value;
    let friendFriend = new Friend(nameFriend,emailFriend,telefonFriend);
    console.log(friendFriend);
};

function catMe() {
    let nickName = document.querySelector('#nickname').value;
    let breedCat = document.querySelector('#breed').value;
    let foodCat =[];
    let sexCat = document.querySelector('input[name="sex"]:checked').value;
    checkboxes(foodCat);
    let cat = new Cat(nickName, breedCat, foodCat, sexCat);
    console.log(cat);
};


    function checkboxes(foodCat){
        let food= document.querySelectorAll('.food');
        for(i = 0; i < food.length; i++){
            if (food[i].checked) {
                foodCat.push(food[i].value);
            }
        }
    };



let btn = document.querySelector('#btn');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    catMe();
    friendCat();
    
})