import {MenuActionType} from '../../constants'

export const addRoom = name => ({
  type: MenuActionType.ADD_ROOM,
  name
})

export const removeRoom = id => ({
  type: MenuActionType.REMOVE_ROOM,
  id
})

export const addDevice = (roomId, deviceTitel, deviceModel, deviceName, deviceFunction) => ({
  type: MenuActionType.ADD_DEVICE,
  roomId,
  deviceTitel,
  deviceModel,
  deviceName,
  deviceFunction
})