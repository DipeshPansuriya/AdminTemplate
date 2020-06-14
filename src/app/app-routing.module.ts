import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";

// export const Approutes: Routes = [
//     {
//         path: "",
//         component: FullComponent,
//         canActivate: [AuthGuard],
//         children: [
//             { path: "", redirectTo: "/login", pathMatch: "full" },
//             {
//                 path: "starter",
//                 loadChildren: () =>
//                     import("./starter/starter.module").then(
//                         m => m.StarterModule
//                     )
//             }
//         ]
//     },
//     {
//         path: "**",
//         redirectTo: "/login"
//     },
//     {
//         path: "login",
//         component: LoginComponent
//     }
// ];

export const Approutes: Routes = [
    {
        path: "",
        component: BlankComponent,
        children: [
            {
                path: "",
                redirectTo: "login",
                pathMatch: "full"
            },
            {
                path: "login",
                loadChildren: () =>
                    import("./pages/login/login.module").then(
                        m => m.LoginModule
                    )
            }
        ]
    },
    {
        path: "",
        component: FullComponent,
        //canActivate: [AuthGuardGuard],
        children: [
            {
                path: "",
                redirectTo: "home",
                pathMatch: "full"
            },
            {
                path: "home",
                loadChildren: () =>
                    import("./pages/home/home.module").then(m => m.HomeModule)
            }
            // {
            //   path: "people",
            //   loadChildren: () =>
            //     import("./pages/people/people.module").then(m => m.PeopleModule)
            // },
            // {
            //   path: "starships",
            //   loadChildren: () =>
            //     import("./pages/starships/starships.module").then(
            //       m => m.StarshipsModule
            //     )
            // }
        ]
    },
    {
        path: "**",
        redirectTo: ""
    }
];
