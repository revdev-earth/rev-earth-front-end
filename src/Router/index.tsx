import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import { Navigate } from "react-router-dom"
import MyApp from "./routes/MyApp"
import Home from "./routes/Home"
import Dashboard from "./routes/Dashboard"
import Header from "./fragments/Header"
import Backgrund from "./fragments/Backgrund"
import Ideas from "./routes/Ideas"
import Proyectos from "./routes/Proyectos"

export default function () {
  const Perfil = MyApp
  const TermsAndConditions = MyApp
  const Participa = MyApp
  const Sorteos = MyApp
  const NotFound = MyApp
  const Access = MyApp
  const Public = MyApp

  const ProxyHome = () => {
    const authenticated = true

    if (authenticated) return <Outlet />

    return <Navigate to="/public" replace={true} />
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Backgrund />
          <div className="min-h-screen min-w-screen dark:bg-emerald-950 flex items-center justify-center">
            <Outlet />
          </div>
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "ideas",
          element: <Ideas />
        },
        {
          path: "proyectos",
          element: <Proyectos />
        },
        {
          path: "myApp",
          element: <MyApp />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    },

    {
      path: "access",
      element: <Access />
    },

    {
      path: "/",
      element: <ProxyHome />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />
        },

        {
          path: "perfil",
          element: <Perfil />
        }
      ]
    },

    {
      path: "public",
      children: [
        {
          index: true,
          element: <Public />
        },
        {
          path: "terms_and_conditions",
          element: <TermsAndConditions />
        },
        {
          path: "participa",
          element: <Participa />
        },
        {
          path: "sorteos",
          element: <Sorteos />
        }
      ]
    }
  ])

  return <RouterProvider {...{ router }} />
}
