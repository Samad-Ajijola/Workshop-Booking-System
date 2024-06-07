document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Fetch form values
    var name = document.getElementById("name").value;
    var age = parseInt(document.getElementById("age").value);
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var workshop = document.getElementById("workshop").value;
    var date = document.getElementById("date").value;
    var participants = parseInt(document.getElementById("participants").value);
    
    // Perform validation
    if (!name || !age || !phone || !email || !workshop || !date || !participants) {
        alert("Please fill in all fields");
        return;
    }

    // Perform age validation
    if (age < 18){
        alert("You must be at least 18 years old to register")
    }else{age > 18
        
    }

    // Calculate total cost
    var totalCost = calculateTotalCost(workshop, participants);
    
    // Show registration summary
    document.getElementById("summary").innerText = "Name: " + name + "\nAge: " + age + "\nPhone: " + phone + "\nEmail: " + email + "\nWorkshop: " + workshop + "\nDate: " + date + "\nParticipants: " + participants;
    document.getElementById("totalCost").innerText = totalCost;
    document.getElementById("registrationSummary").style.display = "block";
});

// Function to calculate total cost
function calculateTotalCost(workshop, participants) {
    // logic:
    var costPerParticipant = 5000;
    if (workshop === "coding") {
        costPerParticipant = 1000;
    } else if (workshop === "art") {
        costPerParticipant = 800;
    } else if (workshop === "music") {
        costPerParticipant = 1200;
    } else if (workshop === "photography") {
        costPerParticipant = 1000;
    }
    return costPerParticipant * participants;
}