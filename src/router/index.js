import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("@/views/HomeView.vue"),
        },
        {
            path: "/skills",
            name: "skills",
            component: () => import("@/views/SkillView.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("@/views/AboutView.vue"),
        },
        {
            path: "/certification",
            name: "certification",
            component: () => import("@/views/CertificationView.vue"),
        },
    ],
});

export default router;