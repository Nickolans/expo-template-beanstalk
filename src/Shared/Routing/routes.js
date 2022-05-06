import HomeScene from "../../Views/homeScene"

const public_routes = [
  { path: "/", exact: true, component: HomeScene }
]

const private_routes = [
  { path: "/private-example", exact: true, component: HomeScene }
]

const routes = {
  public: public_routes,
  private: private_routes
}

export default routes;