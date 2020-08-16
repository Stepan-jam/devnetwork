import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import CommentForm from '../post/CommentForm'
import CommentItem from '../post/CommentItem'
import { getPost } from '../../actions/post'

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost])

    return loading || post === null
        ? (<Spinner />)
        : (
            <>
                <Link to='/posts' className='btn'>
                    Back to Posts
                </Link>
                <PostItem post={post} showActions={false} /> {/* 1 */}
                <CommentForm postId={post._id} />
                <div className="comments">
                    {post.comments.map(comment => (
                        <CommentItem
                            key={comment._id}
                            comment={comment}
                            postId={post._id}
                        />
                    ))}
                </div>
            </>
        )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)

// 1
// У компонента PostItem есть поле defaultProps. Оно по умолчанию true и отрисовывает нужную для этого
// компонента логику. Но если передать в него пропс с false то логика изменится нужным нам образом