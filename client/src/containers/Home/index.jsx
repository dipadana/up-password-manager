import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataPassword } from '../../store/action'
import './home.scss'
import Header from '../../components/Header'
import Card from '../../components/Card'

export default function Home  (props) {

  const passwordData = useSelector(state => state.password.passwordData)
  const [allPasswordData, setAllPasswordData] = useState([])
  const [keyWord, setKeyWord] = useState('')
  const dispatch = useDispatch()

  function fetchData() {
    dispatch(fetchDataPassword())
    .then(data => {
      setAllPasswordData(data)
    })
  }

  function handleChange (data) {
    setKeyWord(data)
  }
  
  function searchData (e) {
    e.preventDefault()
    let temp = []
    for(let i = 0; i < passwordData.length; i++){
      let filterRegex = new RegExp(keyWord, 'gi')
      if(passwordData[i].urlData.match(filterRegex)){
        temp.push(passwordData[i])
      }
    }
    setAllPasswordData(temp)
  }

  useEffect(() => {
    if(keyWord === ''){
      setAllPasswordData(passwordData)
    }
  },[keyWord])

  useEffect(() => {
    console.log("masuk")
    fetchData()
  },[])

  return(
    <div data-testid="home-page">
      <div className="container">
        <Header />
        <form onSubmit={ (e) => searchData(e) } value={keyWord} className="d-flex mt-4 mb-4">
          <input onChange={ e => handleChange(e.target.value) } type="text" className="search-bar" placeholder="Search by url" />
          <button className="search-btn">Search</button>
        </form>
        <div className="row mt-2">
          {
            allPasswordData.map((data,i) => 
              <div key={data._id} data-testid="home-card-child" className="col-12 col-md-6 col-lg-4 mt-3">
                <Card
                  url={data.urlData}
                  nameData={data.nameData}
                  _id={data._id}
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}