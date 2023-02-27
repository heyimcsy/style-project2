import React from 'react';
import './App.css';

const App = () => {
  const users = [
    { id: 1, age:30, name: "송중기"},
    { id: 2, age:24, name: "송강"},
    { id: 3, age:21, name: "김유정"},
    { id: 4, age:29, name: "구교환"},
  ];
  return (
    <div className="app-style">
      {users.map((item) => {
        return (
          <div key={item.id} className='box-style'>
            {item.age} - {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default App;
