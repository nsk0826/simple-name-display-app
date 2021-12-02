import React, {useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserAction } from '../actions/UserActions';
import { IState } from '../states/IState';
import IUser from '../states/IUser';
import CountButton from './CountButton';
import TextBox from './TextBox';

const UserForm: React.FC = () => {
    const { name, count } = useSelector<IState, IUser>(a => a.user);
    const dispatch = useDispatch();
    const onNameChange = useCallback((value: string) => {
        dispatch(changeUserAction({ name: value }));
    }, []);
    const onCountClick = useCallback(() => {
        dispatch(changeUserAction({ count: count + 1}));
    }, [count]);

    return (
        <div>
            <p>
                <TextBox type="text" value={name} label="ユーザー名" onChangeText={onNameChange} />
            </p>
            <p>
                <CountButton count={count} label="訪問" onClick={onCountClick} /> 
            </p>
        </div>
    );
};

export default UserForm;