<template>
  <div class="penalty-form">
    <div class="section">
      <!-- <form @submit="issueChallan()"> -->
        <div class="flex-container column center">
          <div class="form-control">
            <div v-if="!penaltyFormObject.photo" class="photo"><h3>Upload a picture</h3></div>
            <div v-if="penaltyFormObject.photo" class="photo">
              <img :src="uploadedPhotoUrl" class="photo"/>
            </div>
            <input ref="photo_upload" @change="uploadPhoto()" class="inputfile" placeholder="photo" type="file"/>
          </div>
          <div class="form-control">
            <p>Issue date</p>
            <input v-model="penaltyFormObject.issueDate" type="date" />
          </div>
          <div class="form-control">
            <p>Name</p>
            <input v-model="penaltyFormObject.name" type="text" />
          </div>
          <div class="form-control">
            <p>Amount</p>
            <input v-model="penaltyFormObject.amount" type="text" />
          </div>
          <div class="form-control">
            <p>Remarks</p>
            <textarea v-model="penaltyFormObject.remarks" type="text"></textarea>
          </div>
          <button type="submit" @click="issueChallan()" class="btn-primary">Issue challan</button>
        </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'PenaltyForm',
  components: {
    
  },
  data () {
    return {
      penaltyFormObject: {
        issueDate: new Date(),
        name: '',
        amount: '',
        remarks: '',
        photo: ''
      },
      uploadedPhotoUrl: ''
    }
  },
  methods: {
    uploadPhoto () {
      // this.penaltyFormObject.photo = this.$refs.photo_upload.files[0];
      console.log(this.penaltyFormObject.photo)
      this.uploadedPhotoUrl = URL.createObjectURL(this.$refs.photo_upload.files[0])
      this.penaltyFormObject.photo = this.uploadedPhotoUrl
    },
    issueChallan () {
      this.$store.commit('updateChallanData', this.penaltyFormObject);
      this.$router.push('/confirmFiling');
    }
  }
}
</script>

<style scoped lang="scss">
.penalty-form {
  margin-top: 20px;
}
  .photo {
    width: 280px;
    height: 280px;
    background-color: grey;
    h3 {
      padding-top: 200px;
    }
  }
  .form-control {
    .inputfile {
      width: 150px;
    }
  }
</style>