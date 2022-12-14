import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetUserData, SetUserData } from '../actions/user.action';
import { UserData } from '../Models/userData';

export class userDataModel {
  data!: UserData[];
}

@State<userDataModel>({
  name: 'userData',
  defaults: {
    data: [],
  },
})
@Injectable()
export class UserDataState {
  constructor() {}

  @Selector()
  static getUserData(state: userDataModel) {
    return state.data;
  }

  @Action(SetUserData)
  setUserData(ctx: StateContext<userDataModel>, { payload }: SetUserData) {
    console.log(payload);
    if (!payload) return;
    const state = ctx.getState();

    ctx.patchState({ data: [payload] });
  }

  @Action(GetUserData)
  getTodos({ getState }: StateContext<GetUserData>) {
    console.log(getState(), 'Action');
    return getState();
  }
}
