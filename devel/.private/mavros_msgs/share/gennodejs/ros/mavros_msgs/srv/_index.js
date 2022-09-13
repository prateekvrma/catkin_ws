
"use strict";

let FileRename = require('./FileRename.js')
let CommandHome = require('./CommandHome.js')
let LogRequestList = require('./LogRequestList.js')
let FileRead = require('./FileRead.js')
let FileMakeDir = require('./FileMakeDir.js')
let FileList = require('./FileList.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let FileClose = require('./FileClose.js')
let StreamRate = require('./StreamRate.js')
let ParamPush = require('./ParamPush.js')
let WaypointPull = require('./WaypointPull.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let SetMavFrame = require('./SetMavFrame.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let FileChecksum = require('./FileChecksum.js')
let MountConfigure = require('./MountConfigure.js')
let CommandLong = require('./CommandLong.js')
let LogRequestData = require('./LogRequestData.js')
let ParamGet = require('./ParamGet.js')
let CommandTOL = require('./CommandTOL.js')
let FileTruncate = require('./FileTruncate.js')
let FileOpen = require('./FileOpen.js')
let CommandAck = require('./CommandAck.js')
let FileWrite = require('./FileWrite.js')
let MessageInterval = require('./MessageInterval.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let ParamPull = require('./ParamPull.js')
let FileRemove = require('./FileRemove.js')
let SetMode = require('./SetMode.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let ParamSet = require('./ParamSet.js')
let CommandInt = require('./CommandInt.js')
let WaypointClear = require('./WaypointClear.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let CommandBool = require('./CommandBool.js')
let WaypointPush = require('./WaypointPush.js')

module.exports = {
  FileRename: FileRename,
  CommandHome: CommandHome,
  LogRequestList: LogRequestList,
  FileRead: FileRead,
  FileMakeDir: FileMakeDir,
  FileList: FileList,
  CommandTriggerControl: CommandTriggerControl,
  FileClose: FileClose,
  StreamRate: StreamRate,
  ParamPush: ParamPush,
  WaypointPull: WaypointPull,
  LogRequestEnd: LogRequestEnd,
  SetMavFrame: SetMavFrame,
  WaypointSetCurrent: WaypointSetCurrent,
  FileChecksum: FileChecksum,
  MountConfigure: MountConfigure,
  CommandLong: CommandLong,
  LogRequestData: LogRequestData,
  ParamGet: ParamGet,
  CommandTOL: CommandTOL,
  FileTruncate: FileTruncate,
  FileOpen: FileOpen,
  CommandAck: CommandAck,
  FileWrite: FileWrite,
  MessageInterval: MessageInterval,
  FileRemoveDir: FileRemoveDir,
  CommandVtolTransition: CommandVtolTransition,
  ParamPull: ParamPull,
  FileRemove: FileRemove,
  SetMode: SetMode,
  CommandTriggerInterval: CommandTriggerInterval,
  ParamSet: ParamSet,
  CommandInt: CommandInt,
  WaypointClear: WaypointClear,
  VehicleInfoGet: VehicleInfoGet,
  CommandBool: CommandBool,
  WaypointPush: WaypointPush,
};
