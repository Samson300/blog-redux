import { connect } from 'react-redux';
import BlogList from '../components/BlogsList';

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const makeBlogListSmart = connect(mapStateToProps);
const SmartBlogList = makeBlogListSmart(BlogList);

export default SmartBlogList;