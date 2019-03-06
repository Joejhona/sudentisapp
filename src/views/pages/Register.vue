<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Register</h1>
                <p class="text-muted">Crea tu cuenta</p>
                <b-form-group :invalid-feedback="errors.first('username')"
                              :state="!errors.has('username')">
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="text" 
                                  class="form-control" 
                                  placeholder="Username" 
                                  autocomplete="username"
                                  :state="errors.has('username') ? false : null"
                                  v-validate="'required|alpha_dash|max:20'"
                                  name="username"
                                  v-model="username"
                                   />
                  </b-input-group>
                </b-form-group>
                <b-form-group :invalid-feedback="errors.first('email')"
                              :state="!errors.has('email')" >
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text>@</b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input :state="errors.has('email') ? false : null"
                                  v-model="emailText"
                                  placeholder="Enter email"
                                  v-validate="'required|email'"
                                  name="email"
                                  type="text"
                                  class="form-control" 
                                  autocomplete="email" />
                  </b-input-group>
                </b-form-group>
                <b-form-group :invalid-feedback="errors.first('password')"
                              :state="!errors.has('password')" >
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="password" 
                                  class="form-control" 
                                  placeholder="Password" 
                                  autocomplete="new-password" 
                                  :state="errors.has('password') ? false : null"
                                  v-validate="'required|max:20'"
                                  name="password"
                                  v-model="password"
                                  ref="password" />
                  </b-input-group>
                </b-form-group>
                <b-form-group :invalid-feedback="errors.first('password')"
                              :state="!errors.has('password_confirmation')" >
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input type="password" 
                                  class="form-control" 
                                  placeholder="Repeat password" 
                                  autocomplete="new-password" 
                                  :state="errors.has('password_confirmation') ? false : null"
                                  v-validate="'required|confirmed:password'"
                                  name="password_confirmation"
                                  data-vv-as="password" />
                  </b-input-group>
                </b-form-group>
                <b-button variant="success" block>Create Account</b-button>
              </b-form>
            </b-card-body>
            <b-card-footer class="p-4">
              <b-row>
                <b-col cols="6">
                  <b-button block class="btn btn-facebook"><span>facebook</span></b-button>
                </b-col>
                <b-col cols="6">
                  <b-button block class="btn btn-twitter" type="button"><span>twitter</span></b-button>
                </b-col>
              </b-row>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return{
      emailText: undefined,
      username: undefined,
      password: undefined,
    }
  }
}
</script>
