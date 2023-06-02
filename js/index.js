let allVehicles = [];

logVehicle = () => {
    let type = document.getElementById("type").value
    let make = document.getElementById("make").value
    let model = document.getElementById("model").value
    let plateNumber = document.getElementById("plateNumber").value
    let condition = document.getElementById("condition").value

    var vehicleArray = [type, make, model, plateNumber, condition];

    console.log(vehicleArray)
}


