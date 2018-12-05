import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateLike } from '../../actions';

const mapStateToProps = (state,ownProps) => {
    const elementTypeData = state[ownProps.element_type] || {};
    return {
        postData: elementTypeData[ownProps.element_id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLikeClick: (data) => dispatch(updateLike(data))
    }
};

class Post extends Component{
    
    componentWillMount () {
        //TODO this code splitting is unnecessary remove
        //as both the components are almost same
        switch (this.props.element_type){
            case 'feedposts' :
                import(/* webpackChunkName: "feedposts" */ './subComponents/FeedPost').then(Component => {
                    this.Component = Component
                    this.forceUpdate()
                })
            break;
            case 'questions' :
                import(/* webpackChunkName: "questions" */'./subComponents/QuestionPost').then(Component => {
                    this.Component = Component
                    this.forceUpdate()
                })
            break;
            default :
                
        }
    }

    render(){
        const childProps = {
            ...this.props.postData,
            onLikeClick: (newLikeCount)=>{
                const updateOptions = {
                    element_id: this.props.element_id,
                    element_type: this.props.element_type,
                    newLikeCount
                };
                this.props.onLikeClick(updateOptions)
            },
            authorId : this.props.author_id
        }
        return this.Component ? <this.Component.default {...childProps} /> : null;
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);