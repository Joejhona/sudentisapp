<template>
  <div class="animated fadeIn">
    <h1>Bienvenid@ {{name}}</h1>
    <h3>Resumen - Prueba</h3>
    <b-row>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-primary">
          <b-card-body class="pb-0">
            <i class="icon-book-open fa-3x float-right"></i>
            <h4 class="mb-0">37</h4>
            <p>Historias</p>
          </b-card-body>
          <card-line1-chart-example chartId="card-chart-01" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-info">
          <b-card-body class="pb-0">
            <i class="icon-note fa-3x float-right"></i>
            <h4 class="mb-0">77</h4>
            <p>Atenciones</p>
          </b-card-body>
          <card-line2-chart-example chartId="card-chart-02" class="chart-wrapper px-3" style="height:70px;" :height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-success">
          <b-card-body class="pb-0">
            <i class="icon-clock fa-3x float-right"></i>
            <h4 class="mb-0">15</h4>
            <p>Citas</p>
          </b-card-body>
          <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
      <b-col sm="6" lg="3">
        <b-card no-body class="bg-warning">
          <b-card-body class="pb-0">
            <i class="icon-people fa-3x float-right"></i>
            <h4 class="mb-0">7</h4>
            <p>Dentistas</p>
          </b-card-body>
          <card-line3-chart-example chartId="card-chart-03" class="chart-wrapper" style="height:70px;" height="70"/>
        </b-card>
      </b-col>
    </b-row>
    <h3>Citas de Hoy - Prueba</h3>
    <b-row>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-clock"></i>
          </div>
          <div class="h4 mb-0">9:30 a.m.</div>
          <small class="text-muted text-uppercase font-weight-bold">Juan Perez</small>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-clock"></i>
          </div>
          <div class="h4 mb-0">10:30 a.m.</div>
          <small class="text-muted text-uppercase font-weight-bold">Yazmin Ticse</small>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-info">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-clock"></i>
          </div>
          <div class="h4 mb-0">12:30 m.</div>
          <small class="text-muted text-uppercase font-weight-bold">Juan Perez</small>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-clock"></i>
          </div>
          <div class="h4 mb-0">2:30 p.m.</div>
          <small class="text-muted text-uppercase font-weight-bold">Yazmin Ticse</small>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-clock"></i>
          </div>
          <div class="h4 mb-0">4:00 p.m.</div>
          <small class="text-muted text-uppercase font-weight-bold">Juan Perez</small>
        </b-card>
      </b-col>
      <b-col sm="6" md="2">
        <b-card class="text-white bg-success">
          <div class="h1 text-muted text-right mb-4">
            <i class="icon-clock"></i>
          </div>
          <div class="h4 mb-0">6:00 p.m.</div>
          <small class="text-muted text-uppercase font-weight-bold">Yazmin Ticse</small>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <h3>Atenciones de Hoy - Prueba</h3>
    <b-row>
      <b-col md="12">
        <b-card>
          <h3>Clinica Dental Arequipa</h3>
          <b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="light">
            <div slot="user" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.value.new">Nuevo</template>
                  <template v-else>Recurrente</template>
                </span> | Registrado: {{item.value.registered}}
              </div>
            </div>
            <div slot="doctor" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                Ingreso: {{item.value.registered}}
              </div>
            </div>
            <i slot="country" class="h4 mb-0" :class="flag(item.value.flag)" slot-scope="item" :title="item.value.flag" :id="item.value.flag"></i>
            <i class="flag-icon flag-icon-pw h1" title="pw" id="pw"></i>
            <div slot="usage" slot-scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.value.period}}</small>
                </div>
              </div>
              <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
            </div>
            <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
            <div slot="activity" slot-scope="item">
              <strong>{{item.value}}</strong>
            </div>
          </b-table>
          <hr>
          <h3>Clinica Dental Lima</h3>
          <b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="light">
            <div slot="user" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                <span>
                  <template v-if="item.value.new">Nuevo</template>
                  <template v-else>Recurrente</template>
                </span> | Registrado: {{item.value.registered}}
              </div>
            </div>
            <div slot="doctor" slot-scope="item">
              <div>{{item.value.name}}</div>
              <div class="small text-muted">
                Ingreso: {{item.value.registered}}
              </div>
            </div>
            <i slot="country" class="h4 mb-0" :class="flag(item.value.flag)" slot-scope="item" :title="item.value.flag" :id="item.value.flag"></i>
            <i class="flag-icon flag-icon-pw h1" title="pw" id="pw"></i>
            <div slot="usage" slot-scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value.value}}%</strong>
                </div>
                <div class="float-right">
                  <small class="text-muted">{{item.value.period}}</small>
                </div>
              </div>
              <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
            </div>
            <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
            <div slot="activity" slot-scope="item">
              <strong>{{item.value}}</strong>
            </div>
          </b-table>
        </b-card>
      </b-col>
    </b-row>


  </div>
</template>

<script>
import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
import CardBarChartExample from './dashboard/CardBarChartExample'
import MainChartExample from './dashboard/MainChartExample'
import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
import CalloutChartExample from './dashboard/CalloutChartExample'
import { Callout } from '@coreui/vue'

export default {
  name: 'dashboard',
  components: {
    Callout,
    CardLine1ChartExample,
    CardLine2ChartExample,
    CardLine3ChartExample,
    CardBarChartExample,
    MainChartExample,
    SocialBoxChartExample,
    CalloutChartExample
  },
  data: function () {
    return {
      name: "Dr. Joel Ticse",
      selected: 'Month',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Martin Vizcarra', new: true, registered: '7 Julio, 2017' },
          doctor: { name: 'Joel Ticse', new: true, registered: '7 Julio, 2007' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '15 Mayo'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Orestes Cachay', new: false, registered: '7 Julio, 2007' },
          doctor: { name: 'Joel Ticse', new: true, registered: '7 Julio, 2007' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '03 Mayo'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Daniel A. Carrión', new: false, registered: '17 Diciembre, 2007' },
          doctor: { name: 'Joel Ticse', new: true, registered: '7 Julio, 2007' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '07 Mayo'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'George Forsyth', new: true, registered: '27 Enero, 2019' },
          doctor: { name: 'Roxana Rímac', new: true, registered: '7 Diciembre, 2007' },
          country: { name: 'F   rance', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: '15 Junio'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Jorge Muñoz', new: false, registered: '17 Febrero, 2016' },
          doctor: { name: 'Roxana Rímac', new: true, registered: '7 Diciembre, 2007' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: '04 Mayo'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Augusto B. Leguia', new: true, registered: '17 Enero, 2017' },
          doctor: { name: 'Roxana Rímac', new: true, registered: '7 Diciembre, 2007' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: '17 Abril'
        }
      ],
      tableFields: {
        user: {
          label: 'Pacientes'
        },
        doctor: {
          label: 'Doctor'
        },
        usage: {
          label: 'Avance de Tratamiento'
        },
        activity: {
          label: 'Proxima Cita'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
    }
  }
}

</script>

<style>
  /* IE fix */
  #card-chart-01, #card-chart-02 {
    width: 100% !important;
  }
</style>