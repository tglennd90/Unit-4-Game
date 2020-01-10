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

            $("#ruby").val(crystalValue)
            $("#diamond").val(crystalValue)
            $("#sapphire").val(crystalValue)
            $("#emerald").val(crystalValue)

            // $("ruby").on("click", addCrysUserScore)
            
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

        // function addCrysUserScore() {
        //     // document.getElementById("userScore").innerHTML = "Your number is currently at: " + (userScore + val(crystalValue));
        //     console.log("test")
        // }
        
        $("#ruby").on("click", function rubyClick() {
            console.log($("#ruby").val())
        });
        
        $("#diamond").on("click", function diamondClick() {
            console.log($("#diamond").val())
        });

        $("#sapphire").on("click", function sapphireClick() {
            console.log($("#sapphire").val())
        });

        $("#emerald").on("click", function emeraldClick() {
            console.log($("#emerald").val())
        });
    
// Main Process //
// ==========================================================//

    // Initial Page Load //
        
        $(document).ready(pageLoad);

        