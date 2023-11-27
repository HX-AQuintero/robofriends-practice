import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { connect } from 'react-redux';
import { setSearchField, requestRobotsApi } from '../redux/actions/actions';
import CardList from '../components/cardList-component/CardList';
import Header from '../components/header-component/Header';
import SearchBox from '../components/searchbox-component/SearchBox';
import Scroll from '../components/scroll-component/Scroll';
import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobotsApi()),
  };
};

const App = ({
  searchField,
  robots,
  isPending,
  onRequestRobots,
  onSearchChange,
}) => {
  useEffect(() => {
    onRequestRobots();
  }, []);

  const filteredRobots = robots?.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='tc'>
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {isPending ? (
          <h1>Loading</h1>
        ) : (
          <ErrorBoundary fallback={<h1>Oooops something went wrong!</h1>}>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        )}
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
