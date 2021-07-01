import React from 'react'
import bluff from "./Images/bluff.png"
import CategoryStyle from './css/category.module.css'

class Logo extends React.Component {

    render() {
        return (
            <div>
                <a href="/"> <img className={CategoryStyle.logo} src={bluff} alt="logo"/></a>
            </div>

        )
    }
}

export default Logo