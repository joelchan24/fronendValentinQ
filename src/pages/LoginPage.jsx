import {LoginForm} from '../components'
import {Box, Typography} from '@mui/material'


const AuthPage = (props) => {
  return (
    <Box>
      <LoginForm {...props} />
    </Box>
  )
}

export default AuthPage