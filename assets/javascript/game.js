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

            document.getElementById("userScore").innerHTML = "Your number is currently at: " + "    " + userScore;
            
            if (userScore === computerNumber) {
                wins++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }

            if (userScore > computerNumber) {
                losses++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }
            
        });
        
        $("#diamond").on("click", function diamondClick() {
            userScore = userScore + diamondValue;

            document.getElementById("userScore").innerHTML = "Your number is currently at: " + "    " + userScore;

            if (userScore === computerNumber) {
                wins++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }

            if (userScore > computerNumber) {
                losses++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }
        });

        $("#sapphire").on("click", function sapphireClick() {
            userScore = userScore + sapphireValue;

            document.getElementById("userScore").innerHTML = "Your number is currently at: " + "    " + userScore;

            if (userScore === computerNumber) {
                wins++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }

            if (userScore > computerNumber) {
                losses++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }
        });

        $("#emerald").on("click", function emeraldClick() {
            userScore = userScore + emeraldValue;

            document.getElementById("userScore").innerHTML = "Your number is currently at: " + "    " + userScore;

            if (userScore === computerNumber) {
                wins++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }

            if (userScore > computerNumber) {
                losses++
                document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
                reset();
            }
        });
    
    // Reset //
    // ======================== // 

        function reset() {
            computerNumber = compNum();
            userScore = 0;

            document.getElementById("gameNumber").innerHTML = "Number to match: " + "    " + computerNumber;
            document.getElementById("userScore").innerHTML = "Your number is currently at: " + "    " + userScore;            
        }

// Main Process //
// ========================================================== //

    // Initial Page Load //
    // ======================== // 
        
        document.getElementById("gameNumber").innerHTML = "Number to match: " + "    " + computerNumber;
        document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
        document.getElementById("userScore").innerHTML = "Your number is currently at: " + "    " + userScore;
        
        $(document).ready(pageLoad);

    

        
        
       
       