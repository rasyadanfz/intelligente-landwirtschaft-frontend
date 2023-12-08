import IndexPage from "./pages/IndexPage";
import RequestSeed from "./pages/RequestSeed";
import Field from "./pages/Field";

export interface RoutesInterface {
    path: string;
    element: JSX.Element;
}

const routeList: RoutesInterface[] = [
    {
        path: "/",
        element: <IndexPage />,
    },
    {
        path: "/field",
        element: <Field />,
    },{
        path:"/request-seed",
        element: <RequestSeed/>
    }
];

export default routeList;
