import { waitForElementToBeRemoved } from '@testing-library/react';
import logo from './imagens/images.png';
import Menu from './TextMenu';
import './App.css';
import { FaHome } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} className='logo' alt='Logo' />
            <ul>
                <Menu icone={<GoHomeFill />} nome="Home" />
                <Menu icone={<IoSearch />}nome="explore" />
                <Menu icone={<AiOutlineMessage />}nome="Menssagens"/>
                <Menu icone={<FaRegHeart />}nome="Notifications"/>
                <Menu icone={<MdOutlineCreateNewFolder />}nome="create"/>
                <Menu className='profile' icone={<FaRegCircle />} nome="Profile"/>
            </ul>
        </div>
    )
}
// export default ConteudoLateralEsquerda;