<template>
  <form accept-charset="UTF-8" role="form">
    <fieldset>
      <div class="form-group">
        <div class="input-group input-group-lg"> <span class="input-group-addon bg-warning" id="basic-addon1"> <i class="fa fa-envelope fa-fw"></i> </span>
          <input class="form-control" placeholder="E-mail" name="username" v-model="auth.username" type="text" required>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group input-group-lg"> <span class="input-group-addon" id="basic-addon2"> <i class="fa fa-key fa-fw"></i> </span>
          <input class="form-control" placeholder="Senha" name="password" v-model="auth.password" required type="password" value="">
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block" id="loginBtn" data-loading-text="Entrando..." type="submit" @click.prevent="doLogin()">Login</button>
      <!-- <p style="margin: 5px;" class="text-center">OU</p> -->
      <!-- <button class="btn btn-lg btn-primary btn-block" @click.prevent="doSignUp()">Cadastre-se</button> -->
      <button class="btn-link btn-block" data-toggle="collapse" data-target="#recuperar" type="button">Esqueci Minha Senha</button>
    </fieldset>
  </form>
</template>
<script>
  export default {
    name: 'AppFormLogin',
    data () {
      return {
        auth: {
          username: '',
          password: ''
        }
      }
    },
    mounted () {
      window.sessionStorage.clear()
    }
  }

</script>
<style>
</style>
