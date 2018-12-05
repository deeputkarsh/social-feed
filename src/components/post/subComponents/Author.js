import React, {Component} from 'react';
import { connect } from 'react-redux';
import UserProfileIcon from './UserProfileIcon'

const mapStateToProps = (state,ownProps) => {
    const userData = state.users || {};
    return {
        ...userData[ownProps.authorId],
    };
};
class Author extends Component {
    renderAllProps () {
        const allPropToHtm = [];
        for(const key in this.props){
            if(this.props.hasOwnProperty(key)) {
                const value = this.props[key];
                if(value && (typeof value === 'string' || typeof value === 'number')) {
                    allPropToHtm.push(
                        <div key={`author-${key}`}>
                            <span>{key} : </span>
                            <span>{value}</span>
                        </div>
                    );
                }
            }
        }
        return allPropToHtm;
    }
    render(){
        return (
            <div className="author-container">
                <UserProfileIcon imageUrl = {this.props.avatar} name={this.props.name} />
                <div>
                    <div className="user-name">{this.props.name}</div>
                    <div className="user-lifestage-status">{this.props.str_lifestage}</div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Author);