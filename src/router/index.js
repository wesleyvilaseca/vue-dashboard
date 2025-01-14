import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import ModulesView from '../views/modules/ModulesView.vue';
import ModuleView from '../views/modules/ModuleView.vue';
import ModuleDisciplineView from '../views/modules/ModuleDisciplineView.vue';

import store from "@/store/index";

const routes = [
    // Home
  {
    path: '/',
    name: 'home',
    meta: {
      title: "Home - " + store.state.nameSite,
      layout: 'AdminLayout'
    },
    component: HomeView
  },
  {
    path: '/disciplinas',
    name: 'modules',
    meta: {
      title: "Disciplinas",
      layout: 'AdminLayout'
    },
    component: ModulesView
  },
  {
    path: '/disciplina/:id',
    name: 'disciplina',
    meta: {
      title: "Disciplina",
      layout: 'AdminLayout'
    },
    component: ModuleView
  },
  {
    path: '/disciplina/:id/trilha/:lessonId',
    name: 'trilha',
    meta: {
      title: "Trilha",
      layout: 'AdminLayout'
    },
    component: ModuleDisciplineView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

/**
 * Responsável por formatar as metas tags */
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
      // Add the meta tags to the document head.
      .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
