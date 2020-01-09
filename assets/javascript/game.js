// Global Variables //
// ==========================================================//

    // User Stats //
        
        var wins = 0;
        var losses = 0;

    // User Score //

        var userScore = 0;

    // Computer Number (Number user is to guess) //

        var computerNumber = compNum();

    // Crystal Value //

        var crystalValue = crysVal();
        
// Functions //
// ==========================================================//

    // Initial Page Load //

        function pageLoad() {
            document.getElementById("gameNumber").innerHTML = "Number to match: " + "    " + computerNumber;
            document.getElementById("userStats").innerHTML = "Wins: " + wins + "    " + "Losses: " + losses;
            document.getElementById("userScore").innerHTML = "Your number is currently at: " + "    " + userScore;

            $("ruby").val(crystalValue)
            $("diamond").val(crystalValue)
            $("sapphire").val(crystalValue)
            $("emerald").val(crystalValue)
        }

    // Generate Computer Number //

        function compNum(min, max) {
            var min = 19;
            var max = 120;

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    // Generate Crystal Value //

        function crysVal(min, max) {
            var min = 1;
            var max = 12;

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }      

    // When clicked, add Crystal Value to User Score //

       
        
    
// Main Process //
// ==========================================================//

    // Initial Page Load //
        
        pageLoad();

    