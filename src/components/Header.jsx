import React, {  useRef } from 'react'
import {useDispatch} from 'react-redux';
import { Fetching } from '../store/store';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const UserInp = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const Enter = (event)=>{
        if (event.key === 'Enter') {
            const meal = UserInp.current.value;
            dispatch(Fetching(meal));
             navigate("/result"); 
            UserInp.current.value = ' ';
        }
    }


    return (
        <div className='Header'>
            <a href="#" className="logo">
            Food <span>Recipes!</span>
            </a>
            <i id="menu-icon"></i>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#RecipeBooks">Recipe Books</a>
                <a href="#contact">Contact</a>
            </nav>

            <input type="search"  id="UserInp"  placeholder='Search Recipe' ref={UserInp}  onKeyDown={Enter}  />
        </div>
    )
}

export default Header
