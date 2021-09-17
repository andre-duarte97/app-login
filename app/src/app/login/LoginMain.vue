<template>
  <div class="container-fluid" style="z-index:9; position: relative">
    <div class="row">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button style="color: #9D9D9D;padding: 7px 10px 6px;" type="button" class="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#navbar-collapse-login" aria-expanded="false">
              <i class="fa fa-bars fa-2x"></i>
            </button>
            <a class="navbar-brand" href="#">
              <img alt="Login" style="max-width: 100px; height:45px" src="">
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div style="padding-top:15vh" class="row hidden-xs"></div>
    <div class="row" style="padding-bottom: 80px;padding-top:80px;">
        <div class="col-xs-12 col-sm- col-md-4 col-md-offset-4 text-center">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title text-center text-primary">
                Entrar
                <img src="" class="img-responsive center-block animated zoomIn hidden" alt="Logo AirMail"
                  style="max-width:50%;"> </h3>
            </div>
            <div class="panel-body">
              <LoginForm></LoginForm>
              <div class="collapse" id="recuperar">
                <hr>
                <h5>Recuperar</h5>
                <RecoveryPasswordForm></RecoveryPasswordForm>
              </div>
            </div>
            <div class="panel-footer">
              <button class="btn-link btn-block" @click.prevent="doSignUp()">
                Não tem uma conta ?
                <br>
                Cadastre-se Agora!
                </button>
            </div>
          </div>
        </div>
    </div>
    <AppFooter />
  </div>

</template>
<script>
  import AppFooter from '../../components/root/Footer'
  import LoginForm from './LoginForm'
  import RecoveryPasswordForm from './RecoveryPasswordForm'
  export default {
    name: 'AppMainLogin',
    data () {
      return {
        showRecovery: false
      }
    },
    components: {
      LoginForm,
      RecoveryPasswordForm,
      AppFooter
    },
    methods: {
      doSignUp () {
        window.open('/', '_blank')
      }
    }
  }

</script>
<style>
  body {
    height: 100vh;
  }
  .scroll-top-wrapper.show {
    display: none !important;
  }
  .swal2-container {
    z-index: 99999999;
  }
  .img-slide {
    margin-bottom: 20px !important;
  }
  .info-slide {
    padding: 0px 30px;
  }
</style>
