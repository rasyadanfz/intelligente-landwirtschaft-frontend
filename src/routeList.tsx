import IndexPage from "./pages/IndexPage";
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
    },
];

export default routeList;
