
import http from '../../http'
import { sweet } from '../../helpers/sweet'

export const login = async userAuth => {
  try {
    const response = await http.post('login', userAuth)
    if (response.data.token && response.data.user) {
      const user = JSON.stringify(response.data.user)
      const token = response.data.token
      window.sessionStorage.setItem('token', token)
      window.sessionStorage.setItem('user', user)
      http.interceptors.request.use(config => {
        config.headers['Authorization'] = `JWT ${token}`
        config.headers['UserApp'] = user
        return config
      })
      http.interceptors.request.use(config => {
        config.headers['Authorization'] = `JWT ${token}`
        config.headers['UserApp'] = user
        return config
      })
      return response.data
    }
  } catch (error) {
    const statusCode = error.response.status
    if (statusCode === 401) {
      const message = error.response.data.message
      sweet('Aviso', message, error)
    }
  }
}

export const logout = () => {
  window.sessionStorage.clear()
  window.location.href = '/login'
}

export const recoveryPassword = emailUserRecovery => {
  return http.post('/usuarios/password-recovery', { emailUserRecovery })
  .then(response => response.data)
  .catch(() => {
    sweet('Aviso', 'Houve um problema na recuperação da senha', 'Aviso')
  })
}