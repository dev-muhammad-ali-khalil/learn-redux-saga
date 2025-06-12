import React, { useEffect } from 'react'
import { getPosts } from '../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'


const Posts = () => {
    const posts = useSelector((state) => state.postData.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
            {
                posts?.map((post) => (
                    <div key={post.id} style={{ width: '24%', textTransform: 'capitalize', border: '1.5px solid rgba(0, 0, 0, 0.1)', borderRadius: '10px', boxSizing: 'border-box', padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
                        <h2>{post.title}</h2>
                        <p style={{ textAlign: 'justify' }}>{post.body}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default Posts