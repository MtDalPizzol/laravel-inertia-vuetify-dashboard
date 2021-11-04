<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
        class="py-8"
      >
        <v-card
          flat
          rounded="lg"
        >
          <v-card-text>
            <v-text-field
              label="Texto do menu"
              outlined
              dense
            />
            <v-text-field
              label="URL"
              outlined
              dense
            ></v-text-field>
            <v-textarea
              label="SVG"
              outlined
              dense
            />
          </v-card-text>
          <v-card-actions class="px-4 py-0">
            <v-btn
              :fab="$vuetify.breakpoint.mobile"
              :depressed="!$vuetify.breakpoint.mobile"
              :rounded="!$vuetify.breakpoint.mobile"
              :class="{
                'px-6': !$vuetify.breakpoint.mobile
              }"
              dark
              color="green lighten-2"
            >
              <v-icon
                v-html="mdiContentSaveOutline"
                v-if="$vuetify.breakpoint.mobile"
              />
              <span v-else>Salvar</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import App from '@/App'
import { mdiContentSaveOutline } from '@mdi/js'

export default {
  layout: App,
  data () {
    return {
      mdiContentSaveOutline
    }
  }
}
</script>

<style>
</style>
