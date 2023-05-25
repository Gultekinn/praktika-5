import Add from "../pages/Site/Add/Add"
import Detail from "../pages/Site/Detail/Detail"
import Home from "../pages/Site/Home/Home"
import Wishlist from "../pages/Site/wishlist/Wishlist"
import SiteRoot from "../SiteRouter/SiteRoot"

export const ROUTES = [{
    path: "/",
    element: <SiteRoot />,
    children: [
        {
            path: "",
            element: <Home />
        },
        {
            path: "add",
            element: <Add />
        },
        {
            path: "wishlist",
            element: <Wishlist />
        },
        {
            path: "/:id",
            element: <Detail />
        }]
}]