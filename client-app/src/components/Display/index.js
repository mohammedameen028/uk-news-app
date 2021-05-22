import React, { useEffect, useState } from 'react';
import './index.css';
import ApiService from '../../services';
import Header from '../Header';
import Loader from '../Loader';
import View from '../View';

//Display component - to Display the latest news
const Display = () => {

  //Using react hooks to persist and make api call
  const [state, setState] = useState({ data: {}, isLoading: true });

  useEffect(() => {
    ApiService.getLatestNews().then(({ data }) => {
      setState({
        data,
        isLoading: false,
      });
    });
  }, []);

  //Some Object destructing
  const { data: { articles = [] } } = state;

  //Loader component until the response returns back from api
  if (state.isLoading) {
    return (
      <Loader loading />
    );
  }

  return (
    <div>
      <Header />
      <View articles={articles} />
    </div>
  );
};

export default Display;
