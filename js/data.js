var player = {
    moneyPerClick: 1,
    totalMoneyEarned: 0
}

function addMoney(money) {
	player.totalMoneyEarned += money;
}

$(document).ready(function(){
    $("#addmoneyBtn").click(function(){
        addMoney(player.moneyPerClick);
        document.getElementById('moneyDisplay').innerHTML = player.totalMoneyEarned;
    });    
});