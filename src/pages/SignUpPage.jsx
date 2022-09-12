import { SignUpForm } from "../components"
import {Box, Typography} from '@mui/material'

const SignUpPage = (props) => {
  return (
    <Box>
      <SignUpForm {...props} />
    </Box>
  )
}

export default SignUpPage