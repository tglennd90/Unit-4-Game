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
    
// Main Process //
// ==========================================================//