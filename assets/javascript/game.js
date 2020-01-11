$(document).ready( function() {

// Global Variables //
// ========================================================== //

    // User Stats //
    // ======================== //  

    var wins = 0;
    var losses = 0;

// User Score //
// ======================== // 

    var userScore = 0;

// Computer Number (Number user is to guess) //
// ======================== // 

    var computerNumber = compNum();

// Crystal Value //
// ======================== // 

    var rubyValue = crysVal();
    var diamondValue = crysVal();
    var sapphireValue = crysVal();
    var emeraldValue = crysVal();
    
// Functions //
// ========================================================== //

// Initial Page Load //
// ======================== // 

    function pageLoad() {
        rubyValue = crysVal();
        diamondValue = crysVal();
        sapphireValue = crysVal();
        emeraldValue = crysVal();

        $("#ruby").val(rubyValue)
        $("#diamond").val(diamondValue)
        $("#sapphire").val(sapphireValue)
        $("#emerald").val(emeraldValue)  
    }

// Generate Computer Number //
// ======================== // 

    function compNum(min, max) {
        var min = 19;
        var max = 120;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// Generate Crystal Value //
// ======================== // 

    function crysVal(min, max) {
        var min = 1;
        var max = 12;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }      

// When clicked, add Crystal Value to User Score //
// ======================== // 
    
    $("#ruby").on("click", function rubyClick() {
        userScore = userScore + rubyValue;

        $("#userScore").html("Your number is currently at: " + "    " + userScore); 
        
        if (userScore === computerNumber) {
            wins++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }

        if (userScore > computerNumber) {
            losses++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }
        
    });
    
    $("#diamond").on("click", function diamondClick() {
        userScore = userScore + diamondValue;

        $("#userScore").html("Your number is currently at: " + "    " + userScore);

        if (userScore === computerNumber) {
            wins++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }

        if (userScore > computerNumber) {
            losses++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }
    });

    $("#sapphire").on("click", function sapphireClick() {
        userScore = userScore + sapphireValue;

        $("#userScore").html("Your number is currently at: " + "    " + userScore);

        if (userScore === computerNumber) {
            wins++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }

        if (userScore > computerNumber) {
            losses++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }
    });

    $("#emerald").on("click", function emeraldClick() {
        userScore = userScore + emeraldValue;

        $("#userScore").html("Your number is currently at: " + "    " + userScore);

        if (userScore === computerNumber) {
            wins++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }

        if (userScore > computerNumber) {
            losses++
            $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
            reset();
        }
    });

// Reset //
// ======================== // 

    function reset() {
        

        pageLoad()
        computerNumber = compNum();
        userScore = 0;

        $("#gameNumber").html("Number to match: " + "    " + computerNumber);
        $("#userScore").html("Your number is currently at: " + "    " + userScore);            
    }

// Main Process //
// ========================================================== //

// Initial Page Load //
// ======================== // 
    
    $("#gameNumber").html("Number to match: " + "    " + computerNumber);
    $("#userStats").html("Wins: " + wins + "    " + "Losses: " + losses);
    $("#userScore").html("Your number is currently at: " + "    " + userScore);
    
});



    
    
   
   