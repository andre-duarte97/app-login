<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <input type="email" class="form-control" placeholder="Seu E-mail Cadastrado" required v-model="emailRecovery" maxlength="150">
    </div>
    <vue-recaptcha
            ref="invisibleRecaptcha"
            @verify="onVerify"
            @expired="onExpired"
            size="invisible"
            sitekey="6LfL9lsUAAAAAHOdDdu89LqyxYlECq5ubfMP-fkQ">
          </vue-recaptcha>
    <button class="hidden" type="button" @click="resetRecaptcha"> Reset ReCAPTCHA </button>
    <button class="btn btn-xs btn-danger btn-block" type="submit" id="recBtn" :disabled="$v.$invalid" @click.prevent="recovery">Enviar</button>
  </form>
</template>
<script>
import swal from 'sweetalert'
import VueRecaptcha from 'vue-recaptcha'
import { required, email } from 'vuelidate/lib/validators'
import { isEmpty } from 'lodash'
import { recoveryPassword } from './login.service'
export default {
  name: 'AppFormRecoveryPassword',
  data () {
    return {
      emailRecovery: ''
    }
  },
  components: {
    VueRecaptcha
  },
  methods: {
    recovery () {
      const recBtn = document.getElementById('recBtn')
      recBtn.classList.add('disabled')
      recBtn.setAttribute('disabled', true)
      recBtn.innerHTML = 'Enviando...'
      const emailRecovery = this.emailRecovery.replace(/ /g, '') // Remove os espacos
      recoveryPassword(emailRecovery)
      .then(response => {
        console.log(response)
        swal('Aviso', 'Uma mensagem  com instruções, foi enviada para o e-mail informado', 'info')
        .then(() => {
          this.emailRecovery = ''
          recBtn.innerHTML = 'Enviar'
          recBtn.classList.remove('disabled')
          recBtn.removeAttribute('disabled')
        })
      })
    },
    onSubmit () {
      this.$refs.invisibleRecaptcha.execute()
    },
    onVerify (response) {
      console.log('Verify: ' + response)
      this.recovery()
    },
    onExpired () {
      this.$refs.recaptcha.reset()
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
    }
  },
  computed: {
    isValid () {
      return !isEmpty(this.emailRecovery)
    }
  },
  validations: {
    emailRecovery: { required, email }
  }
}
</script>
<style>
.grecaptcha-badge{z-index: 3;}
</style>
