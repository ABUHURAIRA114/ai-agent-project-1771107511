index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root"></div>
    <script src="index.js"></script>
</body>
</html>
```

style.css
```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

#root {
    width: 80%;
    margin: 40px auto;
    text-align: center;
}
```

index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
```

App.jsx
```jsx
import React from 'react';

function App() {
    return (
        <div>
            <h1>Personal Website</h1>
        </div>
    );
}

export default App;
```