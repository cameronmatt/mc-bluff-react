import React from 'react'
import { Link } from 'react-router-dom'
import NavList from './css/navlist.module.css'


class Nav extends React.Component {

    render() {
        //console.log('prod',this.props.products)
        return (
            <div>
                <ul className={NavList.list}>
                    <li><Link to='/' className={NavList.back}>Back</Link></li>
                    <li><Link to='/' className={NavList.home}>Home</Link></li>
                    <li className={NavList.cat}>Categories</li>
                    <li><Link to='/menswear' className={NavList.mens}>Menswear</Link></li>
                    <li><Link to='/womenswear' className={NavList.womens}>Womenswear</Link></li>
                    <li><Link to='/electronics' className={NavList.elec}>Electronics</Link></li>
                    <li><Link to='/jewelery' className={NavList.jewel}>Jewelery</Link></li>
                </ul>
            </div>

        )
    }
}

export default Nav