<template>
  <div class="home">
    <div class="section">
      <h2>Please select your district</h2>
      <div class="flex-container center">
        <div v-for="district in districts" :key="district.name">
          <div @click="goToPenaltyForm(district.name)" class="district">{{district.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      districts : [{
        'name': 'Ranchi'
      },
      {
        'name': 'Khunti'
      },
      {
        'name': 'Palamu'
      },
      {
        'name': 'Deoghar'
      },
      {
        'name': 'Jamtara'
      },
      {
        'name': 'Dumka'
      },
      {
        'name': 'Dhanbad'
      },
      {
        'name': 'Simdega'
      },
      {
        'name': 'Hazaribagh'
      },
      {
        'name': 'Sahebganj'
      },
      {
        'name': 'Giridih'
      }]
    }
  },
  methods: {
    goToPenaltyForm (district) {
      this.$router.push(`/complaintFiling`)
    }
  }
}
</script>

<style scoped lang="scss">
  .district {
    padding: 10px 20px;
    background-color: rgb(38, 156, 38);
    margin: 5px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
  }

  .section {
    padding: 40px;
    h2 {
      padding: 10px;
    }
  }
</style>