<template>
<card-modal
  :data="$data"
  :edit="editClient"
  :create="createClient"
  @close="$emit('close')">
  <template slot="modal-body">
    <div class="form-group row">
      <div class="col">
        <input
          id="client-name"
          name="client-name"
          ref="client-name"
          v-model="name"
          class="form-control-plaintext form-control-title"
          placeholder="Unnamed"
          required>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4 text-muted">
        Archive
      </div>
      <div class="col-sm-8">
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="client-archive"
            name="client-archive"
            v-model="archive">
          <label class="custom-control-label text-muted" for="client-archive"/>
        </div>
      </div>
    </div>
  </template>
</card-modal>
</template>


<script>
import {mapActions} from 'vuex';

import CardModal from '../cards/card-modal.vue';


export default {
  components: {
    CardModal,
  },
  props: {
    client: {
      type: Object,
    },
  },
  data() {
    return {
      id: this.client ? this.client.id : null,
      url: this.client ? this.client.url : null,
      name: this.client ? this.client.name : null,
      archive: this.client ? this.client.archive : false,
    }
  },
  methods: {
    ...mapActions({
      editClient: 'clients/editClient',
      createClient: 'clients/createClient',
    }),
  },
  mounted() {
    this.$refs['client-name'].focus();
  },
};
</script>
