import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { updateLike } from '../../../reduxHelpers/actions';
import { getPostTypeText } from '../../utills';

const mapStateToProps = (state,ownProps) => {
    const elementTypeData = state[ownProps.element_type] || {};
	const elementData = elementTypeData[ownProps.element_id] || {}
	return {
		totalLikes : elementData.totalLikes,
		totalComments : elementData.totalComments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLikeClick: (data) => dispatch(updateLike(data))
    }
}

class InteractionContainer extends Component {
	handleLikeIconClick = ()=>{
		const {
			element_id,
			onLikeClick,
			element_type,
			totalLikes=0,
		} = this.props;
		onLikeClick({
			element_id,
			element_type,
			newLikeCount: totalLikes + 1
		});
	}
	handleCommentClick = ()=>{
		//commentClickHandler
	}
	render(){
		const {
			element_type,
			totalLikes=0,
			totalComments=0,
		} = this.props;
		const postTypeText = getPostTypeText(element_type);
		return (
			<div className="interaction-container">
				<div className="interaction-row">
					<div className="count-text">{totalLikes} Likes</div>
					<div className="count-text">{`${totalComments} ${postTypeText}s`}</div>
				</div>
				<div className="interaction-row" >
					<div className = "icon-container cursor-pointer" onClick={this.handleLikeIconClick} >
						<i className="icon-heart" />
						<span>Like</span>
					</div>
					<div className = "icon-container cursor-pointer" onClick = {this.handleCommentClick}>
						<i className="icon-comment" />
						<span>{postTypeText}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(InteractionContainer);