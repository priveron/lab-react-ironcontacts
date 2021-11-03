import './App.css';
import contacts from "./contacts.json";
import React from 'react';
const first = contacts.splice(0, 5);

function App() {
  const [list, setList] = React.useState(first);

  function deleteList(i) {
    list.splice(i, 1);
    return [...list];
  }
  function sortName() {
    return [...list.sort((a, b) => a.name.localeCompare(b.name))]
  }
  
  function sortPopularity() {
    return [...list.sort((a, b) => b.popularity - a.popularity)]
  }
  
  function getRandom() {
    return [...list, contacts[Math.floor(Math.random() * contacts.length)]]
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan="3">IronContacts</th>
          </tr>
          <tr>
            <th>
              <button onClick={() => setList(getRandom())}>Add Random</button>
            </th>
            <th>
              <button onClick={() => setList(sortName())}>Sort by Name</button>
            </th>
            <th>
              <button onClick={() => setList(sortPopularity())}>Sort by Popularity</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((v, i) => (
            <tr key={v.id}>
              <td><img src={v.pictureUrl} alt="" /></td>
              <td>{v.name}</td>
              <td>{v.popularity}</td>
              <td><button onClick={() => setList(deleteList(i))}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
