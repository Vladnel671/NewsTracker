import CircularProgress from '@mui/material/CircularProgress'

const Loader = () => (
  <div
    style={{
      background: 'transparent',
      display: 'flex',
      height: 'calc(100vh - 60px)',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: '30px',
      alignItems: 'center',
    }}
  >
    <CircularProgress style={{ color: 'white' }} />
  </div>
)

export default Loader
