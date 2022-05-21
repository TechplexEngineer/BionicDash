// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {time} from '../models';
import {net} from '../models';
import {goNTCore} from '../models';
import {message} from '../models';
import {storage} from '../models';

export function GetStringArray(arg1:string,arg2:Array<string>):Promise<Array<string>>;

export function PutStringArray(arg1:string,arg2:Array<string>):Promise<boolean>;

export function SetDeadline(arg1:time.Time):Promise<Error>;

export function SetReadDeadline(arg1:time.Time):Promise<Error>;

export function GetString(arg1:string,arg2:string):Promise<string>;

export function IsPersisted(arg1:string):Promise<boolean>;

export function LocalAddr():Promise<net.Addr>;

export function SetWriteDeadline(arg1:time.Time):Promise<Error>;

export function Close():Promise<Error>;

export function GetNumberArray(arg1:string,arg2:Array<number>):Promise<Array<number>>;

export function PutBoolean(arg1:string,arg2:boolean):Promise<boolean>;

export function PutNumber(arg1:string,arg2:number):Promise<boolean>;

export function RemoteAddr():Promise<net.Addr>;

export function Write(arg1:Array<number>):Promise<number|Error>;

export function AddKeyListener(arg1:string,arg2:goNTCore.ListenerCallback):Promise<number>;

export function PutString(arg1:string,arg2:string):Promise<boolean>;

export function Delete(arg1:string):void;

export function GetBoolean(arg1:string,arg2:boolean):Promise<boolean>;

export function GetBooleanArray(arg1:string,arg2:Array<boolean>):Promise<Array<boolean>>;

export function GetKeys():Promise<Array<string>>;

export function RemoveListener(arg1:number):void;

export function DeleteAll():void;

export function PutBooleanArray(arg1:string,arg2:Array<boolean>):Promise<boolean>;

export function PutRaw(arg1:string,arg2:Array<number>):Promise<boolean>;

export function Read(arg1:Array<number>):Promise<number|Error>;

export function SendMsg(arg1:message.Messager):Promise<Error>;

export function ContainsKey(arg1:string):Promise<boolean>;

export function GetNumber(arg1:string,arg2:number):Promise<number>;

export function GetRaw(arg1:string,arg2:Array<number>):Promise<Array<number>>;

export function GetSnapshot():Promise<Array<storage.SnapShotEntry>>;

export function PutNumberArray(arg1:string,arg2:Array<number>):Promise<boolean>;
