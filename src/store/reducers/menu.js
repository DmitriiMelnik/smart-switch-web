import { MenuActionType, MenuType } from "../../constants";

const addRoom = (state, action) => {
  let id = 1;
  if (state.length) {
    id = state[state.length - 1].id + 1;
  }
  return [
    ...state,
    {
      id,
      name: action.name,
      type: MenuType.ITEM
    }
  ];
};

const removeRoom = (state, action) => {
  return state.filter(item => item.id != action.id);
}

const addDevice = (state, action) => {
  return state.map(item => {
    if (parseInt(item.id) === parseInt(action.roomId)) {
      let newDevice = {
        id: action.roomId,
        deviceTitel: action.deviceTitel,
        deviceModel: action.deviceModel,
        deviceName: action.deviceName,
        deviceFunction: action.deviceFunction
      };
      if (item.devices && item.devices.length) {
        newDevice.id = item.devices[item.devices.length - 1].id + 1;
        item.devices.push(newDevice);
      } else {
        item.devices = [newDevice];
      }
    }
    return item;
  });
}

const menu = (state = [], action) => {
  switch (action.type) {
    case MenuActionType.ADD_ROOM:
      return addRoom(state, action);
    case MenuActionType.REMOVE_ROOM:
      return removeRoom(state, action);
    case MenuActionType.ADD_DEVICE:
      return addDevice(state, action);
    default:
      return state;
  }
};

export default menu;
