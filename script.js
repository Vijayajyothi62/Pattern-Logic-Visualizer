
function generatePattern() {
    // Get input values
    let n = document.getElementById("numberInput").value;
    let type = document.getElementById("patternType").value;
    let output = "";

    // Input validation
    if (n === "" || n <= 0 || n>30) {
        document.getElementById("output").textContent = "Please enter a number between 0 and 30";
        return;
    }

    if (type === "") {
        document.getElementById("output").textContent = "Please select a pattern type";
        return;
    }

    // Convert n to number
    n = parseInt(n);

    // Generate pattern based on selection
    if (type === "star") {
        // Star Pattern
        for (let i = 1; i <= n; i++) {
            output += "*".repeat(i) + "\n";
        }
    } else if (type === "number") {
        // Number Pattern
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                output += j;
            }
            output += "\n\n";
        }
    } else if (type === "inverted") {
        // Inverted Star Pattern
        for (let i = n; i >= 1; i--) {
            output += "*".repeat(i) + "\n";
        }
    }
else if (type === "floyd") {
    // Floyd's Triangle Pattern
    let num = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += num + " ";
            num++;
        }
        output += "\n";
    }
}


    // Show the output
    document.getElementById("output").textContent = output;
}
