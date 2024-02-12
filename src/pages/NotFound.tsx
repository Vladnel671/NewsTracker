import React from 'react'

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        background: '#101418',
        display: 'flex',
        height: 'calc(100vh - 60px)',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: '30px',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h1>404 - Not Found</h1>
    </div>
  )
}

export default NotFound
