import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardDesign from "../commonComponents/CardDesign";
import Interactions from './subComponents/InteractionContainer';
import CommentContainer from './subComponents/CommentContainer';
import Author from './subComponents/Author';
import SubPost from './subComponents/SubPost';
import { getSubPostData } from '../utills';

const mapStateToProps = (state,ownProps) => {
    const elementTypeData = state[ownProps.element_type] || {};
    return {
        ...elementTypeData[ownProps.element_id]
    };
};

class Post extends Component{
    render(){
        const {
            author_id,
            element_id,
            element_type,
            totalComments=0
        } = this.props;
        const interactionProps = {
            element_id,
            element_type
        };
        const commentProps = {
            element_type,
            totalComments
        };
        const subPostProps = getSubPostData(element_type,this.props);
        return (
            <CardDesign>
                <Author authorId={author_id} />
                <SubPost {...subPostProps} />
                <Interactions {...interactionProps} />
                <CommentContainer {...commentProps} />
            </CardDesign>
        );
    }
}
export default connect(mapStateToProps)(Post);