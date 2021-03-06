import { Tabs } from "webextension-polyfill-ts";

export const INIT_ANALYSIS = "INIT_ANALYSIS";
export const ANALYSE_TEXT = "ANALYSE_TEXT";
export const GRAB_AND_ANALYSE = "GRAB_AND_ANALYSE";
export const GET_SCORE = "GET_SCORE";
export const RECORD_ANALYTICS = "RECORD_ANALYTICS";
export const STATE_CONNECT = "STATE_CONNECT";
export const ANALYSE_TEXT_ERROR = "ANALYSE_TEXT_ERROR";
export const PUSH_CONTENT_CONFIG = "CONTENT_PUSH_CONFIG";
export const PAGE_HEARTBEAT = "PAGE_HEARTBEAT";
export const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";
export interface Action<T = any> {
  type: string;
  payload?: T;
  tabFallback?: Tabs.Tab;
}
export interface Heartbeat {
  hostname: string;
  firstHeartbeat: boolean;
  path: string;
}
