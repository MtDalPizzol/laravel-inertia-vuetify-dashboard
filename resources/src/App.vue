<template>
  <v-app>
    <v-navigation-drawer
      app
      dark
      color="primary darken-3"
      v-model="drawer"
      width="300"
      :mini-variant="mini && !$vuetify.breakpoint.mobile"
      :expand-on-hover="mini && !$vuetify.breakpoint.mobile"
    >
      <v-list
        nav
        dense
      >
        <v-list-group>
          <template #activator>
            <!-- <v-avatar size="32">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png" />
            </v-avatar> -->
            <v-list-item
              class="px-0"
              style="height: 60px;"
            >
              <v-list-item-avatar size="24">
                <v-img src="https://cdn.vuetifyjs.com/images/john.png" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  John Doe
                </v-list-item-title>
                <v-list-item-subtitle>
                  johndoe@hardocing.com.br
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-icon v-html="mdiChevronDown" />
              </v-list-item-action>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(item, key) in accountMenu"
            :key="key"
            link
          >
            <v-list-item-icon>
              <v-icon v-html="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item, key) in menu"
          :key="key"
          link
          :input-value="item.active"
        >
          <v-list-item-icon>
            <v-icon v-html="item.icon" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      hide-on-scroll
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="drawer = !drawer"
      >
        <v-icon v-html="mdiMenu" />
      </v-app-bar-nav-icon>
      <v-btn
        icon
        v-if="!$vuetify.breakpoint.mobile"
        @click="mini = !mini"
      >
        <v-icon v-html="mdiMenuOpen" />
      </v-btn>
      <v-btn
        icon
        v-if="!$vuetify.breakpoint.mobile"
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon v-html="mdiThemeLightDark" />
      </v-btn>
      <v-app-bar-title v-text="title" />
      <v-spacer />
      <v-btn
        color="success"
        depressed
        rounded
        @click="$root.showAddDialog = true"
      >
        <v-icon
          left
          v-html="mdiPlus"
        />
        Adicionar post
      </v-btn>
    </v-app-bar>

    <v-main class="mb-10">
      <slot />
    </v-main>

    <v-footer
      app
      absolute
      inset
      height="56"
    >
      <span>Hardcoding</span>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mdiViewDashboardOutline,
  mdiMenu,
  mdiKeyChainVariant,
  mdiPostOutline,
  mdiAccountGroupOutline,
  mdiCogOutline,
  mdiPower,
  mdiBadgeAccountHorizontalOutline,
  mdiChevronDown,
  mdiMenuOpen,
  mdiThemeLightDark,
  mdiPlus
} from '@mdi/js'

export default {
  name: 'App',
  data: () => ({
    drawer: true,
    mini: false,
    mdiMenu,
    mdiMenuOpen,
    mdiChevronDown,
    mdiThemeLightDark,
    mdiPlus,
    accountMenu: [
      {
        icon: mdiBadgeAccountHorizontalOutline,
        text: 'Minha conta'
      },
      {
        icon: mdiPower,
        text: 'Logout'
      }
    ],
    menu: [
      {
        icon: mdiViewDashboardOutline,
        text: 'Dashboard'
      },
      {
        icon: mdiPostOutline,
        text: 'Posts',
        active: true
      },
      {
        icon: mdiAccountGroupOutline,
        text: 'Usuários'
      },
      {
        icon: mdiKeyChainVariant,
        text: 'Permissões'
      },
      {
        icon: mdiCogOutline,
        text: 'Configurações'
      }
    ]
  }),
  computed: {
    title () {
      return this.$page.props.title
    }
  }
}
</script>
