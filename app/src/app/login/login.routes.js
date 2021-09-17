import LoginMain from 'src/app/login/LoginMain'
import Logout from 'src/app/login/Logout'
import RecoveryMain from 'src/app/login/RecoveryMain'
import SignUp from 'src/app/login/SignUp'
export default [
  { path: '/login', name: 'LoginMain', component: LoginMain },
  { path: '/recovery', name: 'RecoveryMain', component: RecoveryMain },
  { path: '/logout', name: 'Logout', component: Logout },
  { path: '/sign-up/:uuid', name: 'SignUp', component: SignUp }
]
