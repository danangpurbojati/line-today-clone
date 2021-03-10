import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import News from './components/News';
import { AppWrapper, StickyNav } from './AppStyles';

const App = () => {
  const [categories, setcategories] = useState([])
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://today.line.me/id/portaljson')
      .then(response => {
        setNews(response.data.result.categories);
        setcategories(response.data.result.categoryList);
      })
  }, [news, categories])


  return (
    <AppWrapper>
      <Container style={{backgroundColor: "white", padding: "0"}} maxWidth="md">
        <BrowserRouter>

            <StickyNav >
              <Navbar categories={categories} />
            </StickyNav>

            <Switch>
              {
                news.map(newsByCategory => (
                    <Route key={newsByCategory.id} path={`/${newsByCategory.name}`} >
                      <News news={newsByCategory.templates} />
                    </Route>
                  )  
                )
              }
              <Route path='/' exact> 
                <Redirect to="/TOP" />
              </Route>            
            </Switch>
                   
        </BrowserRouter>
      </Container>
    </AppWrapper>
  )
}

export default App