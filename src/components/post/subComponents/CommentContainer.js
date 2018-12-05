import React, {Component} from 'react';
import UserProfileIcon from './UserProfileIcon';
import { getPostTypeText } from '../../utills';

export default class CommentContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            commentData : props.commentData || [],
        };
    }
    getComments = (commentData)=>{
        return commentData.map((value, index)=>{
            return (
                <div className="comment" key={`comment-${index}`}>
                    <div className="comment-middle-section">
                        <div className="comment-text-container">
                            <div className="user-name">{value.customerData.name}</div>
                            <div>{value.commentText}</div>
                        </div>
                    </div>
                </div>
            );
        })
    }
    addNewComment = (data)=>{
        this.setState((prevState=>{
            prevState.commentData.push(data);
            return prevState;
        }));
    }
    postComment = ()=>{

    }
    render () {
        const postTypeText = getPostTypeText(this.props.element_type);
        return (
            <div className="comment-conatainer">
                {this.getComments(this.state.commentData)}
                <div className="add-comment">
                    <UserProfileIcon />
                    <div className="write-something-wrapper">
                        <input placeholder="Write Something here..." />
                        <button onClick={this.postComment} >{postTypeText}</button>
                    </div>
                </div>
            </div>
        );
    }
}