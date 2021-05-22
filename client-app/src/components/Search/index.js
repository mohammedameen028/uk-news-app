import React, { useEffect, useState } from 'react';
import './index.css';
import SearchField from 'react-search-field';
import Header from '../Header';
import ApiService from '../../services';
import Loader from '../Loader';
import View from '../View';

// Search bar, making an api call based on keyword entered.
const Search = () => {

  //Using react hooks here to persist the state and make the api call  
  const [state, setState] = useState({ keyword: '', data: {}, isLoading: false });

  useEffect(() => {
    state.keyword && ApiService.getSearchKeyword(state.keyword).then(({ data }) => {
      setState({
        data,
        isLoading: false,
        keyword: state.keyword
      });
    });
  }, [state.keyword]); //updating the dom on when ever change to the keyword 

  const onClick = (keyword) => {
    setState({
      keyword,
      isLoading: true,
    });
  };

  //have loader in place until the data is returned from api
  if (state.isLoading) {
    return (
      <Loader loading />
    );
  }

  console.log('state:::', state.data.articles);
  const { data: { articles = [] }, keyword = '' } = state;

  return (
    <div>
      <Header />
      <div style={{paddingTop:"40px"}}>
      <SearchField
        classNames="search"
        placeholder="Search with the keyword..."
        onSearchClick={onClick}
      />
      </div>
      {/* View component is reuseable  */}
      {articles && <View keyword={keyword} articles={articles} />} 
    </div>
  );
};

export default Search;
