import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout'
import NoPage from './components/NoPage'
import Login from './components/Login'
import Shows from './components/Shows'
import Sets from './components/Sets'
import Create from './components/Create'

export default function Index() {
  const [user, setUser] = React.useState(0)
  const [shows, setShows] = React.useState([])
  const [show, setShow] = React.useState(0)
  const [set, setSet] = React.useState(0)
  const [sets, setSets] = React.useState([])
  const [setNames, setSetNames] = React.useState([])
  const [tracks, setTracks] = React.useState([])
  const [setList, setSetList] = React.useState({})
  const [deleteID, setDeleteID] = React.useState(0)
  const [check, setCheck] = React.useState(1)

  function changeUser(user) {
    setUser(user)
  }
  function changeShow(show) {
    setShow(show)
  }
  function changeSet(set) {
    setSet(set)
  }
  function changeSetList(setlist){
    setSetList(setlist)
  }

  React.useEffect(() => {fetch("http://localhost:5555/shows").then(response => response.json()).then(data => setShows(data))},[])
  React.useEffect(() => {fetch("http://localhost:5555/set_names").then(response => response.json()).then(data => setSetNames(data))},[])
  React.useEffect(() => {fetch("http://localhost:5555/sets").then(response => response.json()).then(data => setSets(data))},[])
  React.useEffect(() => {fetch("http://localhost:5555/tracks").then(response => response.json()).then(data => setTracks(data))},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login changeUser={changeUser}/>} />
          <Route path="shows" element={<Shows changeShow={changeShow} shows={shows} />} />
          <Route path="*" element={<NoPage />} />
          <Route path="sets" element={<Sets user={user} show={show} sets={sets} setNames={setNames} changeSet={changeSet}/>} />
          <Route path="create" element={<Create user={user} show={show} set={set} sets={sets} tracks={tracks} changeSetList={changeSetList} setList={setList} deleteID={deleteID} setDeleteID={setDeleteID} check={check} setCheck={setCheck}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
