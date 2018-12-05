import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateFeedData } from './reduxHelpers/actions';
import './styles/App.scss';
import './styles/fonts.css';
import PostContainer from './components/PostContainer';

const mapStateToProps = state => {
    return {
        feedData: state.feedData
    };
};
const mapDispatchToProps = dispatch => ({
    updateFeedData: (data) => dispatch(updateFeedData(data))
})

class App extends Component {
    componentDidMount () {
        axios.get('/feedData.json').then(data=>{
            this.props.updateFeedData(data.data);
        })
    }
    render() {
        return (
            <div className="social-feed">
                <PostContainer postList = {this.props.feedData} />
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
