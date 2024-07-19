import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            {/* <span className={'username'}> */}
            <span className="text-3xl font-bold underline">
                {user?.username}
            </span>
            <div className="text-3xl font-bold underline">asdasdasdasdsad</div>
        </div>
    );
};

export default Header;
