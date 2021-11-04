<template>
  <div>
    <v-container class="pt-12">
      <v-row>
        <v-col cols="12">
          <v-card rounded="lg">
            <v-data-table
              :items="posts"
              :headers="headers"
            >
              <template #item.image="{ value }">
                <v-img
                  :src="value"
                  class="rounded-lg my-2"
                />
              </template>
              <template #item.status="{ item }">
                <v-switch
                  color="success"
                  v-model="item.status"
                  inset
                />
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      width="600"
      v-model="$root.showAddDialog"
      :overlay-color="$vuetify.theme.dark ? 'white' : 'black'"
    >
      <v-card rounded="lg">
        <v-card-title class="mb-6">Adicionar rascunho</v-card-title>
        <v-card-text>
          <v-form>
            <v-textarea
              label="Título"
              outlined
              dense
            />
            <v-select
              label="Autor"
              :items="['John Petrucci', 'Dave Murray', 'Adriam Smith']"
              outlined
            ></v-select>
            <v-file-input
              outlined
              :prepend-icon="null"
              label="Selecione a capa..."
            >
              <template #prepend-inner>
                <v-icon v-html="mdiCamera" />
              </template>
            </v-file-input>
            <v-switch
              label="Ativo"
              inset
              color="green"
            ></v-switch>
          </v-form>
        </v-card-text>
        <v-card-actions class="d-flex py-4">
          <v-spacer />
          <v-btn
            rounded
            depressed
            dark
            large
            color="green"
            class="px-4"
          >Salvar rascunho</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import App from '@/App'
import { mdiCamera } from '@mdi/js'

export default {
  layout: App,
  props: {
    posts: Array
  },
  data () {
    return {
      mdiCamera,
      headers: [{
        text: 'Capa',
        value: 'image'
      },
      {
        text: 'Título',
        value: 'title'
      }, {
        text: 'Autor',
        value: 'author'
      }, {
        text: 'Ativo',
        value: 'status'
      }]
    }
  }
}
</script>

<style>
</style>
