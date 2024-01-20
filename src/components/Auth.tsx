import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const Auth = (WrappedComponent: any) => {


    return function Auth(props: any) {

        // You can access the Redux state using useSelector hook
        const isAuthenticated = useSelector((state: any) => state.usersReducer.isAuthenticated);

        // If the user is authenticated, render the wrapped component.
        // Otherwise, redirect to a login page or show an authentication message.
        return isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (
            <Navigate to="/" />
            // Replace '/login' with the path to your login page or authentication route.
        );
    };
};

export default Auth;
