var player = {
    money: 0.0,
    moneyPerClick: 1,
    totalMoneyEarned: 0
}

function addMoney(money) {
	player.money = Math.round((player.money + money)*100)/100;
	if(money > 0){
		player.totalMoneyEarned = Math.round((player.totalMoneyEarned + money)*100)/100;
	}
	if(player.money < 0) player.money = 0;
}

$(document).ready(function(){
    $("#addmoneyBtn").click(function(){
        addMoney(player.moneyPerClick);
        $('#moneyDisplay').innerHTML="player.totalMoneyEarned";
    });    
    
});