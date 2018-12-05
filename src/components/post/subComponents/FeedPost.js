import React, {Component} from 'react';
import CardDesign from "../../commonComponents/CardDesign";
import Interactions from './InteractionContainer';
import CommentContainer from './CommentContainer';
import Author from './Author';

export default class FeedPost extends Component{
    render(){
        const {
            authorId,
            totalLikes=0,
            totalComments=0,
            onLikeClick
        } = this.props;
        const interactionProps = {
            totalLikes,
            totalComments,
            handleLikeIconClick : ()=>onLikeClick(totalLikes + 1)
        };
        const commentProps = {
            totalComments
        };
        return (
            <CardDesign className="post-holder card-box">
                <Author authorId={authorId} />
                <Interactions {...interactionProps} />
                <CommentContainer {...commentProps} />
            </CardDesign>
        );
    }
}