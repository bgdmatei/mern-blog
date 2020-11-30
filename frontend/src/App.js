import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';
import CreateArticle from './screens/CreateArticleScreen';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3 '>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/article/:id' component={ArticleScreen} exact />
          <Route path='/new' component={CreateArticle} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
