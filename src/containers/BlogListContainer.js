import { connect } from 'react-redux';
import BlogList from '../components/BlogsList';
import { selectPost } from '../actions';

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => {
            dispatch(selectPost(id));
        }
    };
};

const makeBlogListSmart = connect(mapStateToProps, mapDispatchToProps);
const SmartBlogList = makeBlogListSmart(BlogList);

export default SmartBlogList;