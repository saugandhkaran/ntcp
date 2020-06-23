<template>
  <div class="home">
    <div class="section">
      <h2>Confirmation</h2>
      <div class="flex-container column center">
        <img class="photo" :src="defaulterChallanDetails.photo" />
        <h3> Defaulter details</h3>
        <div class="entry flex-container between">
          <h3>Name</h3>
          <p>{{defaulterChallanDetails.name}}</p>
        </div>
        <div class="entry flex-container between">
          <h3>Date</h3>
          <p>{{defaulterChallanDetails.issueDate}}</p>
        </div>
        <div class="entry flex-container between">
          <h3>Amount</h3>
          <p>{{defaulterChallanDetails.amount}}</p>
        </div>
        <div class="entry flex-container between">
          <h3>Remarks</h3>
          <p>{{defaulterChallanDetails.remarks}}</p>
        </div>
        <div class="status-section">
          <img src="../assets/check.svg" class="confirm"/>
          <p>Defaulter details recorded</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ConfirmFiling',
  components: {
  },
  data () {
    return {
      defaulterChallanDetails: this.$store.getters.defaulterChallanDetails
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.photo {
  width: 200px;
  margin-bottom: 50px;
}

.entry {
  width: 280px;
  padding: 5px;
  border-bottom: 1px solid grey;
}

.status-section {
  .confirm {
    margin-top: 40px;
    width: 80px;
  }
  p {
    margin: 10px 0px;
  }
}

</style>