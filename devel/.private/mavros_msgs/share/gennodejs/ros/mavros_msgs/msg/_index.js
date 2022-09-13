
"use strict";

let ManualControl = require('./ManualControl.js');
let RadioStatus = require('./RadioStatus.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let LogData = require('./LogData.js');
let RCOut = require('./RCOut.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let FileEntry = require('./FileEntry.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let PositionTarget = require('./PositionTarget.js');
let ExtendedState = require('./ExtendedState.js');
let ParamValue = require('./ParamValue.js');
let Tunnel = require('./Tunnel.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let Waypoint = require('./Waypoint.js');
let VFR_HUD = require('./VFR_HUD.js');
let Vibration = require('./Vibration.js');
let LogEntry = require('./LogEntry.js');
let RTKBaseline = require('./RTKBaseline.js');
let Mavlink = require('./Mavlink.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let GPSRTK = require('./GPSRTK.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let ESCInfo = require('./ESCInfo.js');
let DebugValue = require('./DebugValue.js');
let LandingTarget = require('./LandingTarget.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let HilControls = require('./HilControls.js');
let Param = require('./Param.js');
let VehicleInfo = require('./VehicleInfo.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let StatusText = require('./StatusText.js');
let MountControl = require('./MountControl.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let ESCStatus = require('./ESCStatus.js');
let ActuatorControl = require('./ActuatorControl.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let RTCM = require('./RTCM.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let HomePosition = require('./HomePosition.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let HilSensor = require('./HilSensor.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let BatteryStatus = require('./BatteryStatus.js');
let HilGPS = require('./HilGPS.js');
let GPSINPUT = require('./GPSINPUT.js');
let WaypointReached = require('./WaypointReached.js');
let Altitude = require('./Altitude.js');
let WaypointList = require('./WaypointList.js');
let Thrust = require('./Thrust.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let RCIn = require('./RCIn.js');
let CommandCode = require('./CommandCode.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let Trajectory = require('./Trajectory.js');
let State = require('./State.js');
let GPSRAW = require('./GPSRAW.js');
let TerrainReport = require('./TerrainReport.js');

module.exports = {
  ManualControl: ManualControl,
  RadioStatus: RadioStatus,
  MagnetometerReporter: MagnetometerReporter,
  LogData: LogData,
  RCOut: RCOut,
  NavControllerOutput: NavControllerOutput,
  FileEntry: FileEntry,
  TimesyncStatus: TimesyncStatus,
  PositionTarget: PositionTarget,
  ExtendedState: ExtendedState,
  ParamValue: ParamValue,
  Tunnel: Tunnel,
  HilStateQuaternion: HilStateQuaternion,
  WheelOdomStamped: WheelOdomStamped,
  AttitudeTarget: AttitudeTarget,
  Waypoint: Waypoint,
  VFR_HUD: VFR_HUD,
  Vibration: Vibration,
  LogEntry: LogEntry,
  RTKBaseline: RTKBaseline,
  Mavlink: Mavlink,
  ESCTelemetry: ESCTelemetry,
  GPSRTK: GPSRTK,
  OnboardComputerStatus: OnboardComputerStatus,
  ESCInfo: ESCInfo,
  DebugValue: DebugValue,
  LandingTarget: LandingTarget,
  CamIMUStamp: CamIMUStamp,
  HilControls: HilControls,
  Param: Param,
  VehicleInfo: VehicleInfo,
  PlayTuneV2: PlayTuneV2,
  StatusText: StatusText,
  MountControl: MountControl,
  EstimatorStatus: EstimatorStatus,
  HilActuatorControls: HilActuatorControls,
  ESCStatus: ESCStatus,
  ActuatorControl: ActuatorControl,
  OverrideRCIn: OverrideRCIn,
  RTCM: RTCM,
  CameraImageCaptured: CameraImageCaptured,
  CompanionProcessStatus: CompanionProcessStatus,
  ESCStatusItem: ESCStatusItem,
  ESCInfoItem: ESCInfoItem,
  HomePosition: HomePosition,
  GlobalPositionTarget: GlobalPositionTarget,
  HilSensor: HilSensor,
  ADSBVehicle: ADSBVehicle,
  BatteryStatus: BatteryStatus,
  HilGPS: HilGPS,
  GPSINPUT: GPSINPUT,
  WaypointReached: WaypointReached,
  Altitude: Altitude,
  WaypointList: WaypointList,
  Thrust: Thrust,
  ESCTelemetryItem: ESCTelemetryItem,
  RCIn: RCIn,
  CommandCode: CommandCode,
  OpticalFlowRad: OpticalFlowRad,
  Trajectory: Trajectory,
  State: State,
  GPSRAW: GPSRAW,
  TerrainReport: TerrainReport,
};
