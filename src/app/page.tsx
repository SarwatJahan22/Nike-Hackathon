import Hero from './components/Hero';
import ProductList from './productlist/page';
import JoinUs from './joinus/page';
import LogIn from './login/page';
import ProductDetail from './productdetail/page';
import ContactUs from './contactus/page';
import Cart from './cart/page';
const Home = () => {
    return (

    <div className='max-w-7xl mx-auto h-[5925]'>

<Hero/>
<ProductList/>
<ProductDetail/>
<ContactUs/>
<LogIn/>
<Cart/>
<JoinUs/>

    </div>
    );
};

export default Home;

