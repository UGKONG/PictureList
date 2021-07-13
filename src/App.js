/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useMemo, useRef} from 'react';
import logo from './logo.png';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faSearch} from '@fortawesome/free-regular-svg-icons';
import Header from './components/Header';
import PictureList from './components/PictureList';
import { createEvent } from '@testing-library/dom';

function App() {

  const searchInput = useRef(null);
  const [$imgSearch, $setImgSearch] = useState('');
  const [$imgList, $setImgList] = useState([]);
  const [$listPage, $setListPage] = useState(1);
  const [loadding, setLoadding] = useState(false);
  const $url = 'https://pixabay.com/api/?';
  const $option = {
    key: 'key=16682621-dc6a4ac72962315d360d16da9',
    safe: '&editors_choice=true',
    count: '&per_page=20',
    page: '&page='
  };
  
  const scrollDown = (e) => {
    let bodyHeight = document.body.scrollHeight;
    let rootHeight = document.body.querySelector('#root').offsetHeight
    let all = bodyHeight - rootHeight;
    let now = window.scrollY;
    
    if(now >= all) {
      setLoadding(true);
      $setListPage((prev) => prev += 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollDown);
    
    fetch($url + $option.key + $option.safe + $option.count + $option.page + $listPage)
      .then((response) => response.json())
      .then((responseData) => {
        $setImgList((lastData) => {
          $setImgSearch('');
          searchInput.current.value = '';
          setLoadding(false);
          return lastData.concat(responseData.hits);
        });
      });
      
    return () => {
      window.removeEventListener('scroll', scrollDown);
    }
  }, [$listPage]);

  return (
    <div id="App">
      <Header 
        logo = {logo}
        searchInput = {searchInput}
        setImgSearch = {$setImgSearch}
      />
      <PictureList 
        list = {$imgList}
        searchInput = {searchInput}
        searchValue = {$imgSearch}
        loadding = {loadding}
        setLoadding = {setLoadding}
      />
    </div>
  );
}

export default App;
