import React, {useCallback } from 'react';
import IUser from '../states/IUser';
import CountButton from './CountButton';
import TextBox from './TextBox';

const UserForm: React.FC<IUser> = props =>{
    const { name, count } = props;
    const onNameChange = useCallback((value: string) => {

    }, []);
    const onCountClick = useCallback(() => {

    }, []);

    return (
        <div>
            <p>
                <TextBox value={name} label="ユーザー名" onChangeText={onNameChange} />
                { }
            </p>
            <p>
                <CountButton count={count} label="訪問" onClick={onCountClick} />
                { }     
            </p>
        </div>
    );
};