import React from 'react'
import Users from './Users'
import Posts from './Posts'

const Layout = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', alignItems: 'start', gap: '20px' }}>
            <Posts />
            <Users />
        </div>
    )
}

export default Layout