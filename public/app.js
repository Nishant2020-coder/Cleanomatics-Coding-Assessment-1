document.getElementById('calculate-btn').addEventListener('click', function() {
    const distance = document.getElementById('distance').value;
    const vehicle = document.querySelector('input[name="vehicle"]:checked').value;
  
    const vehicles = {
      "Maruti Suzuki Alto": { speed: 140, efficiency: 22.05, capacity: 35, range: 771.75 },
      "Hyundai i20": { speed: 180, efficiency: 20.35, capacity: 37, range: 753.05 },
      "Tata Nexon": { speed: 180, efficiency: 17.57, capacity: 44, range: 772.68 },
      "Honda City": { speed: 180, efficiency: 17.80, capacity: 40, range: 712.00 },
      "Mahindra Thar": { speed: 155, efficiency: 15.20, capacity: 57, range: 866.40 },
      "Toyota Innova Crysta": { speed: 179, efficiency: 11.25, capacity: 55, range: 618.75 },
      "Kia Seltos": { speed: 170, efficiency: 16.80, capacity: 50, range: 840.00 },
      "Renault Kwid": { speed: 150, efficiency: 22.30, capacity: 28, range: 624.40 },
      "Ford EcoSport": { speed: 182, efficiency: 15.90, capacity: 52, range: 826.80 },
      "Tata Tiago": { speed: 150, efficiency: 23.84, capacity: 35, range: 834.40 },
    };
  
    const selectedVehicle = vehicles[vehicle];
  
    const time = distance / selectedVehicle.speed;
    const fuelConsumption = distance / selectedVehicle.efficiency;
    const outOfRange = distance > selectedVehicle.range;
  
    let resultText = `Time to travel ${distance} km with ${vehicle}: ${time.toFixed(2)} hours.`;
    if (outOfRange) {
      resultText += ` This distance is out of range for ${vehicle}.`;
    } else {
      resultText += ` Fuel consumption: ${fuelConsumption.toFixed(2)} liters.`;
    }
  
    document.getElementById('result').innerText = resultText;
  
    const comparisonResults = Object.keys(vehicles).map(v => {
      const vehicleData = vehicles[v];
      const vTime = distance / vehicleData.speed;
      const vOutOfRange = distance > vehicleData.range;
      const vFuelConsumption = distance / vehicleData.efficiency;
      return `${v}: ${vTime.toFixed(2)} hours, ${vOutOfRange ? 'Out of Range' : `${vFuelConsumption.toFixed(2)} liters`}`;
    }).join('\n');
  
    document.getElementById('comparison').innerText = comparisonResults;
  });
  