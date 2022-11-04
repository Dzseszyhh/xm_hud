
$(function () {

    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }
    display(true)
    $("#society-container").hide();

    function moneyFormat(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var isArmorShown = false;
    var isStaminaShown = false;
    var isOxygenShown = false;
    var isCashShown = false;
    var isDirtyShown = false;

    window.addEventListener('message', function(event) {
        if (event.data.type === "ui") {
            if (event.data.status == true) {
                display(true)
            }
            else {
                display(false)
            }
        }
        else if (event.data.type === "update") {
            var date = new Date();
            document.getElementById("date").innerHTML = ("0" + date.getHours()).slice(-2)+":"+("0" + date.getMinutes()).slice(-2);
            document.getElementById("id").innerHTML = event.data.id;
            document.getElementById("health").style.width = event.data.health + "%";
            document.getElementById("armor").style.width = event.data.armor + "%";
            document.getElementById("hunger").style.width = event.data.food + "%";
            document.getElementById("thirst").style.width = event.data.water + "%";

            if (event.data.cash > 0) {
                if (!isCashShown) {
                    $("#cash-container").css({width:'100%', left:'100%', opacity: 0});
                    $("#cash-container").show();
                    $("#cash-container").animate({width:'100%', left:'0%', opacity: 1}, 500);
                    isCashShown = true;
                }
            }
            if (event.data.armor > 0) {
                if (!isArmorShown) {
                    $("#armor-container").show();
                    
                    isArmorShown = true;
                }
                document.getElementById("armor").style.width = event.data.armor + "%";
            }

            else if (event.data.armor == 0){
                if (isArmorShown) {
                    isArmorShown = false; 
                }
            }

            else {
                $("#cash-container").fadeOut(600);
                isCashShown = false;   
            }
        }
    



        else if (event.data.type === "isBoss") {
            if (event.data.isBoss == true) {
                $("#society-container").css({width:'0%', left:'100%', opacity: 0});
                $("#society-container").show();
                $("#society-container").animate({width:'80%', left:'0%', opacity: 1}, 500);
                
            }
            else {
                $("#society-container").css({width:'100%', left:'0%', opacity: 1});
                $("#society-container").fadeOut(600);
            }            
        }
    })

    
})