import { actionCreatorFactory } from 'typescript-fsa';
import IUser from '../states/IUser';

const actionCreator = actionCreatorFactory('user-action');

export const changeUserAction = actionCreator<Partial<IUser>>('change-user');