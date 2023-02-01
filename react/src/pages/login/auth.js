import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarList from '../home/compose/nav';
import Footer from '../home/compose/footer';

import LoginContent from './compose/content';

const Auth = () => {
    return( 
        <div>
            <NavBarList />
            <LoginContent />
            <Footer />
        </div>
    )
}

export default Auth
