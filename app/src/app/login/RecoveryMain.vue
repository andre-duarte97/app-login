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
              <img alt="Ar Mail Logo" style="max-width: 100px; height:45px" src="">
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-collapse-login">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="">
                  <i class="fa fa-chevron-left" aria-hidden="true"></i> Voltar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div style="padding-top:15vh" class="row"></div>
    <div class="row" style="padding-bottom: 80px;padding-top:35px;">
      <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1 text-center">
        <img src="" class="img-responsive center-block animated zoomIn" alt="Recuperar Senha" style="max-width:35%; margin-bottom:10px;">
        <div class="" style="margin-bottom: 25px;"></div>
      </div>
      <div class="col-xs-12 col-sm-5 col-md-4">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center text-primary">
              Recuperar Senha
            </h3>
          </div>
          <div class="panel-body">
            <RecoveryPasswordForm></RecoveryPasswordForm>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
  import AppFooter from '../../components/root/Footer'
  import RecoveryPasswordForm from './RecoveryPasswordForm'
  export default {
    name: 'AppMainRecovery',
    data () {
      return {
        showRecovery: false
      }
    },
    components: {
      RecoveryPasswordForm,
      AppFooter
    }
  }
</script>
<style>
  body {
    height: 100vh;
  }
  .footer {
    background-color: #0a437c;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 2;
    display: flex;
    align-content: center;
    vertical-align: middle;
    align-items: center;
  }
  .footer div{ width: 100%}
  .footer a{ color:#fac812;}
  .scroll-top-wrapper.show {
    display: none !important;
  }
  .swal2-container {
    z-index: 99999999;
  }
</style>
