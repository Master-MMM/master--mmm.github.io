let body=document.body;

let Ogl=document.createElement('div');
Ogl.classList.add('Ogl');
Ogl.align='center';
Ogl.appendChild(document.createTextNode('Мастерская'));
body.appendChild(Ogl);

let games=document.createElement('div');
games.classList.add('games');
games.align='center';
games.appendChild(document.createTextNode('Игры'));
games.content=document.createElement('div');
games.content.classList.add('content', 'hidden');
games.content.games={
kybit:new Image, 
kvest:new Image, 
}
games.content.games.kybit.src='kybit.jpg';
games.content.games.kvest.src='kvest.jpg';

for(x in games.content.games){
games.content.games[x].classList.add('game');
games.content.appendChild(games.content.games[x]);
}





games.onclick=()=>{
games.n=!games.n;
if(games.n){
games.content.classList.remove('hidden')
}
else{
games.content.classList.add('hidden')
}
}
body.appendChild(games);
body.appendChild(games.content);





alert()