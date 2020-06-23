<template>
  <div class="complaint-filing">
    <div class="section">
      <h2>Complaint Form</h2>
      <div class="flex-container center">
        <penalty-form></penalty-form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import PenaltyForm from '../components/PenaltyForm'

export default {
  name: 'ComplaintFiling',
  components: {
    'penalty-form': PenaltyForm
  },
  data () {
    return {
      districts : []
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
  .complaint-filing {
    padding-top: 20px;
  }
</style>