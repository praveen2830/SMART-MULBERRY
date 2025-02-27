import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [detectionResult, setDetectionResult] = useState('');

      const detectLeaf = () => {
        // Placeholder function for leaf detection
        // In a real application, this would involve image analysis
        const leafTypes = ['healthy', 'leaf_rust', 'leaf_spot', 'powdery_mildew'];
        const randomLeafType = leafTypes[Math.floor(Math.random() * leafTypes.length)];

        if (randomLeafType === 'healthy') {
          setDetectionResult('This is a healthy leaf.');
        } else if (randomLeafType === 'leaf_rust') {
          setDetectionResult('This leaf has leaf rust.');
        } else if (randomLeafType === 'leaf_spot') {
          setDetectionResult('This leaf has leaf spot.');
        } else if (randomLeafType === 'powdery_mildew') {
          setDetectionResult('This leaf has powdery mildew.');
        } else {
          setDetectionResult('Could not detect leaf type.');
        }
      };

      return (
        <div className="mobile-container">
          <header>
            <h1>Mulberry Leaves Detection</h1>
          </header>
          <main>
            <p>Upload an image of a mulberry leaf to detect its type.</p>
            <input type="file" accept="image/*" />
            <button onClick={detectLeaf}>Detect Leaf Type</button>
            <div className="result">
              {detectionResult && <p>{detectionResult}</p>}
            </div>
          </main>
          <footer>
            <p>&copy; 2024</p>
          </footer>
        </div>
      );
    }

    export default App;
