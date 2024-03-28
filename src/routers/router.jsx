import NotFound from "../components/NotFound";
import Result from "../components/Result";


export const routes = [
     {
        component: <Result/>,
         url: "/",
    },
     {
        component: <Result/>,
         url: "/search",
    },
     {
        component: <Result/>,
         url: "/images",
    },
     {
          component: <Result/>,
         url: "/videos",
    },
     {
          component: <Result/>,
        url:"/news",
    },
     {
        component: <NotFound />,
        url:"*",
    },
]