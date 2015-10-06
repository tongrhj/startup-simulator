var player = {
    money: 0.0,
    moneyPerClick: 1,
    totalMoneyEarned: 0
}

function addMoney(money) {
	player.totalMoneyEarned = player.money + money;
}

$(document).ready(function(){
    $("#addmoneyBtn").click(function(){
        addMoney(player.moneyPerClick);
        $('#moneyDisplay').innerHTML="player.totalMoneyEarned";
    });    
});