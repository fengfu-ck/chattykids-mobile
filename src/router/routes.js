
let load = (component) => () => import(`src/${component}.vue`)
let loadPage = (page) => () => import(`src/pages/${page}.vue`)

export default [
	{
		path: '/',
		component: load('layouts/default'),
		children: [
			{ path: '', component: loadPage('index') }
		]
	},

	{ // Always leave this as last one
		path: '*',
		component: () => import('pages/404')
	}
]
