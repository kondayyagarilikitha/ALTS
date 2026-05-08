import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      alert('Please enter valid positive values!');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
    const roundedBmi = bmiValue.toFixed(2);

    setBmi(roundedBmi);

    let bmiStatus = '';
    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmiValue < 24.9) {
      bmiStatus = 'Normal weight';
    } else if (bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);
  };

  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setStatus('');
  };

  const getStatusColor = () => {
    if (status === 'Underweight') return 'blue';
    if (status === 'Normal weight') return 'green';
    if (status === 'Overweight') return 'orange';
    return 'red';
  };

  // 🔥 Recommendations Logic
  const getRecommendations = () => {
    if (!status) return null;

    if (status === 'Underweight') {
      return {
        diet: ['Milk, eggs, bananas', 'Rice, potatoes, whole grains', 'Nuts and dry fruits'],
        exercise: ['Light strength training', 'Push-ups, squats'],
        yoga: ['Bhujangasana', 'Vajrasana'],
        precautions: ['Eat more frequently', 'Avoid junk food weight gain', 'Check for deficiencies']
      };
    }

    if (status === 'Normal weight') {
      return {
        diet: ['Balanced diet (fruits, vegetables)', 'Whole grains, protein foods'],
        exercise: ['Walking, jogging', 'Light workouts'],
        yoga: ['Surya Namaskar', 'Tadasana'],
        precautions: ['Maintain routine', 'Avoid inactivity']
      };
    }

    if (status === 'Overweight') {
      return {
        diet: ['Low sugar, low oil food', 'More vegetables and fruits', 'High fiber diet'],
        exercise: ['Brisk walking', 'Cycling, skipping'],
        yoga: ['Trikonasana', 'Bhujangasana'],
        precautions: ['Avoid junk food', 'Drink more water', 'No crash dieting']
      };
    }

    if (status === 'Obesity') {
      return {
        diet: ['Low calorie diet', 'Avoid fast food', 'Eat more fiber'],
        exercise: ['Walking', 'Light cardio'],
        yoga: ['Pranayama', 'Gentle yoga'],
        precautions: ['Consult doctor', 'Monitor BP and sugar', 'Start slow exercises']
      };
    }
  };

  const recommendations = getRecommendations();

  return (
    <div className='container'>
      <h1>BMI Calculator</h1>

      <div className='input-group'>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder='Enter your weight'
          />
        </label>
      </div>

      <div className='input-group'>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder='Enter your height'
          />
        </label>
      </div>

      <button onClick={calculateBMI}>Calculate</button>
      <button onClick={resetFields}>Reset</button>

      {bmi && (
        <div className='result'>
          <h3>Your BMI: {bmi}</h3>
          <h3 style={{ color: getStatusColor() }}>
            Status: {status}
          </h3>

          {/* 🔥 Recommendations Section */}
          {recommendations && (
            <div className="recommendations">
              <h3>🥗 Diet:</h3>
              <ul>
                {recommendations.diet.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>🏃 Exercises:</h3>
              <ul>
                {recommendations.exercise.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>🧘 Yoga:</h3>
              <ul>
                {recommendations.yoga.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3>⚠️ Precautions:</h3>
              <ul>
                {recommendations.precautions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;