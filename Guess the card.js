let cards=[
    {
        image:"https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1",
        value:1,
        status:"closed"
    },
    {
        image:"https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1",
        value:1,
        status:"closed"
    },        
    {
        image:"https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwc2tpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:2,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwc2tpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:2,
        status:"closed"
    },
    {
        image:"https://www.nutrition-and-you.com/image-files/mango-fruit-1.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://www.nutrition-and-you.com/image-files/mango-fruit-1.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://thumbs.dreamstime.com/b/bunch-ripe-litchi-lychee-liechee-liche-lizhi-li-zhi-lichee-sole-member-genus-soapberry-family-sapindaceae-fresh-160563834.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://thumbs.dreamstime.com/b/bunch-ripe-litchi-lychee-liechee-liche-lizhi-li-zhi-lichee-sole-member-genus-soapberry-family-sapindaceae-fresh-160563834.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:5,
        status:"closed"
    },
    {
        image:"https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlcnJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:5,
        status:"closed"
    }
]
let temp;
for(let i=cards.length-1;i>=0;i--){
    
    let j=Math.floor(Math.random()*(i+1));
    temp =cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}

alert("START")

function displayCards(data){
    
    let cardsString ="";
    
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        
        `;

    });
        
    document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){

            score++;
            document.getElementById('score').innerText=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
           alert("GAME OVER");
           location.reload();

        }

    }
    displayCards(cards);

}
