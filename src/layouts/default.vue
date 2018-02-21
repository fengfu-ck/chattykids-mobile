<template>
	<q-layout id="ck-layout" :left-breakpoint="769" :right-breakpoint="1024" ref="layout" view="lHr Lpr lFr" :left-class="{'bg-grey-2': true}">
		<q-layout-header v-show="showHeader">
			<q-toolbar color="white">
				<q-btn flat @click="$refs.layout.toggleLeft()">
					<q-icon name="menu" class="ck-orange" />
				</q-btn>
				
				<q-toolbar-title>
					<a @click="goHome">
						<img class="logo absolute-center"  src="statics/chattykidslogo.svg" alt="" >
					</a>
					<q-icon v-show="showBack" name="arrow back" class="float-right ck-orange" @click="goBack" />
				</q-toolbar-title>
			</q-toolbar>
		</q-layout-header>

		<q-layout-drawer
			v-model="leftDrawerOpen"
			content-class="bg-grey-2"
		>
			<q-list
				no-border
				link
				inset-delimiter
			>
				<q-list-header>Essential Links</q-list-header>
				<q-item @click.native="openURL('http://quasar-framework.org')">
					<q-item-side icon="school" />
					<q-item-main label="Docs" sublabel="quasar-framework.org" />
				</q-item>
				<q-item @click.native="openURL('https://github.com/quasarframework/')">
					<q-item-side icon="code" />
					<q-item-main label="GitHub" sublabel="github.com/quasarframework" />
				</q-item>
				<q-item @click.native="openURL('http://forum.quasar-framework.org')">
					<q-item-side icon="record_voice_over" />
					<q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
				</q-item>
				<q-item @click.native="openURL('https://gitter.im/quasarframework/Lobby')">
					<q-item-side icon="chat" />
					<q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
				</q-item>
				<q-item @click.native="openURL('https://twitter.com/quasarframework')">
					<q-item-side icon="rss feed" />
					<q-item-main label="Twitter" sublabel="@quasarframework" />
				</q-item>
			</q-list>
		</q-layout-drawer>

		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>

<script>
import { openURL, QIcon } from 'quasar'

export default {
	components: { QIcon },
	name: 'LayoutDefault',
	data () {
		return {
			showHeader: true,
			showBack: true,
			leftDrawerOpen: false
		}
	},
	methods: {
		openURL,
		username() {

		},

		launch (url) {

		},

		logout() {

		},

		exitApp() {

		},

		goHome() {
			this.$router.push('/')
		},

		goBack() {
			this.$router.go(-1)
		},		
	}
}
</script>

<style lang="stylus" scoped>

.title-color
	color #F28322

.logo
	width 150px

.firm-name
	font-size 20px
	text-align center

</style>
