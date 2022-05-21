<script lang="ts">
    import Tree from "../low-components/tree.svelte";

    let tree = [];

    let filter = "";

    (async () => {
        let keys;
        if (window.backend) {
            keys = await window.backend.Client.GetSnapshot("");
        } else {
            keys = [
                {
                    "key": "/FMSInfo/.type",
                    "value": "\"FMSInfo\"",
                    "type": "string ",
                    "id": 0,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/EventName",
                    "value": "\"\"",
                    "type": "string ",
                    "id": 1,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/FMSControlData",
                    "value": "32",
                    "type": "double",
                    "id": 2,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/GameSpecificMessage",
                    "value": "\"\"",
                    "type": "string ",
                    "id": 3,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/IsRedAlliance",
                    "value": "true",
                    "type": "boolean ",
                    "id": 4,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/MatchNumber",
                    "value": "0",
                    "type": "double",
                    "id": 5,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/MatchType",
                    "value": "0",
                    "type": "double",
                    "id": 6,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/ReplayNumber",
                    "value": "0",
                    "type": "double",
                    "id": 7,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/FMSInfo/StationNumber",
                    "value": "1",
                    "type": "double",
                    "id": 8,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/.status/LW Enabled",
                    "value": "false",
                    "type": "boolean ",
                    "id": 9,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Drivetrain/.command",
                    "value": "\"none\"",
                    "type": "string ",
                    "id": 10,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Drivetrain/.default",
                    "value": "\"DriveWithJoystick\"",
                    "type": "string ",
                    "id": 11,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Drivetrain/.hasCommand",
                    "value": "false",
                    "type": "boolean ",
                    "id": 12,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Drivetrain/.hasDefault",
                    "value": "true",
                    "type": "boolean ",
                    "id": 13,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Drivetrain/.name",
                    "value": "\"Drivetrain\"",
                    "type": "string ",
                    "id": 14,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Drivetrain/.type",
                    "value": "\"LW Subsystem\"",
                    "type": "string ",
                    "id": 15,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/.type",
                    "value": "\"LW Subsystem\"",
                    "type": "string ",
                    "id": 16,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[0]/.name",
                    "value": "\"DigitalInput[0]\"",
                    "type": "string ",
                    "id": 17,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[0]/.type",
                    "value": "\"Digital Input\"",
                    "type": "string ",
                    "id": 18,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[0]/Value",
                    "value": "true",
                    "type": "boolean ",
                    "id": 19,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[2]/.name",
                    "value": "\"DigitalInput[2]\"",
                    "type": "string ",
                    "id": 20,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[2]/.type",
                    "value": "\"Digital Input\"",
                    "type": "string ",
                    "id": 21,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[2]/Value",
                    "value": "true",
                    "type": "boolean ",
                    "id": 22,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[4]/.name",
                    "value": "\"DigitalInput[4]\"",
                    "type": "string ",
                    "id": 23,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[4]/.type",
                    "value": "\"Digital Input\"",
                    "type": "string ",
                    "id": 24,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[4]/Value",
                    "value": "true",
                    "type": "boolean ",
                    "id": 25,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[6]/.name",
                    "value": "\"DigitalInput[6]\"",
                    "type": "string ",
                    "id": 26,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[6]/.type",
                    "value": "\"Digital Input\"",
                    "type": "string ",
                    "id": 27,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DigitalInput[6]/Value",
                    "value": "true",
                    "type": "boolean ",
                    "id": 28,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[0]/.name",
                    "value": "\"Duty Cycle[0]\"",
                    "type": "string ",
                    "id": 29,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[0]/.type",
                    "value": "\"Duty Cycle\"",
                    "type": "string ",
                    "id": 30,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[0]/Frequency",
                    "value": "0",
                    "type": "double",
                    "id": 31,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[0]/Output",
                    "value": "0",
                    "type": "double",
                    "id": 32,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[1]/.name",
                    "value": "\"Duty Cycle[1]\"",
                    "type": "string ",
                    "id": 33,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[1]/.type",
                    "value": "\"Duty Cycle\"",
                    "type": "string ",
                    "id": 34,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[1]/Frequency",
                    "value": "0",
                    "type": "double",
                    "id": 35,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[1]/Output",
                    "value": "0",
                    "type": "double",
                    "id": 36,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[2]/.name",
                    "value": "\"Duty Cycle[2]\"",
                    "type": "string ",
                    "id": 37,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[2]/.type",
                    "value": "\"Duty Cycle\"",
                    "type": "string ",
                    "id": 38,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[2]/Frequency",
                    "value": "0",
                    "type": "double",
                    "id": 39,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[2]/Output",
                    "value": "0",
                    "type": "double",
                    "id": 40,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[3]/.name",
                    "value": "\"Duty Cycle[3]\"",
                    "type": "string ",
                    "id": 41,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[3]/.type",
                    "value": "\"Duty Cycle\"",
                    "type": "string ",
                    "id": 42,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[3]/Frequency",
                    "value": "0",
                    "type": "double",
                    "id": 43,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Duty Cycle[3]/Output",
                    "value": "0",
                    "type": "double",
                    "id": 44,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[0]/.name",
                    "value": "\"DutyCycle Encoder[0]\"",
                    "type": "string ",
                    "id": 45,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[0]/.type",
                    "value": "\"AbsoluteEncoder\"",
                    "type": "string ",
                    "id": 46,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[0]/Distance",
                    "value": "0",
                    "type": "double",
                    "id": 47,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[0]/Distance Per Rotation",
                    "value": "360",
                    "type": "double",
                    "id": 48,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[0]/Is Connected",
                    "value": "true",
                    "type": "boolean ",
                    "id": 49,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[2]/.name",
                    "value": "\"DutyCycle Encoder[2]\"",
                    "type": "string ",
                    "id": 50,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[2]/.type",
                    "value": "\"AbsoluteEncoder\"",
                    "type": "string ",
                    "id": 51,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[2]/Distance",
                    "value": "0",
                    "type": "double",
                    "id": 52,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[2]/Distance Per Rotation",
                    "value": "360",
                    "type": "double",
                    "id": 53,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[2]/Is Connected",
                    "value": "true",
                    "type": "boolean ",
                    "id": 54,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[4]/.name",
                    "value": "\"DutyCycle Encoder[4]\"",
                    "type": "string ",
                    "id": 55,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[4]/.type",
                    "value": "\"AbsoluteEncoder\"",
                    "type": "string ",
                    "id": 56,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[4]/Distance",
                    "value": "0",
                    "type": "double",
                    "id": 57,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[4]/Distance Per Rotation",
                    "value": "360",
                    "type": "double",
                    "id": 58,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[4]/Is Connected",
                    "value": "true",
                    "type": "boolean ",
                    "id": 59,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[6]/.name",
                    "value": "\"DutyCycle Encoder[6]\"",
                    "type": "string ",
                    "id": 60,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[6]/.type",
                    "value": "\"AbsoluteEncoder\"",
                    "type": "string ",
                    "id": 61,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[6]/Distance",
                    "value": "0",
                    "type": "double",
                    "id": 62,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[6]/Distance Per Rotation",
                    "value": "360",
                    "type": "double",
                    "id": 63,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/DutyCycle Encoder[6]/Is Connected",
                    "value": "true",
                    "type": "boolean ",
                    "id": 64,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[1]/.name",
                    "value": "\"PIDController[1]\"",
                    "type": "string ",
                    "id": 65,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[1]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 66,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[1]/d",
                    "value": "0",
                    "type": "double",
                    "id": 67,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[1]/i",
                    "value": "0",
                    "type": "double",
                    "id": 68,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[1]/p",
                    "value": "5",
                    "type": "double",
                    "id": 69,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[1]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 70,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[2]/.name",
                    "value": "\"PIDController[2]\"",
                    "type": "string ",
                    "id": 71,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[2]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 72,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[2]/d",
                    "value": "0.015",
                    "type": "double",
                    "id": 73,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[2]/i",
                    "value": "0.0001",
                    "type": "double",
                    "id": 74,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[2]/p",
                    "value": "0.4",
                    "type": "double",
                    "id": 75,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[2]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 76,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[3]/.name",
                    "value": "\"PIDController[3]\"",
                    "type": "string ",
                    "id": 77,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[3]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 78,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[3]/d",
                    "value": "0",
                    "type": "double",
                    "id": 79,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[3]/i",
                    "value": "0",
                    "type": "double",
                    "id": 80,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[3]/p",
                    "value": "5",
                    "type": "double",
                    "id": 81,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[3]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 82,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[4]/.name",
                    "value": "\"PIDController[4]\"",
                    "type": "string ",
                    "id": 83,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[4]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 84,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[4]/d",
                    "value": "0.015",
                    "type": "double",
                    "id": 85,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[4]/i",
                    "value": "0.0001",
                    "type": "double",
                    "id": 86,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[4]/p",
                    "value": "0.4",
                    "type": "double",
                    "id": 87,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[4]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 88,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[5]/.name",
                    "value": "\"PIDController[5]\"",
                    "type": "string ",
                    "id": 89,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[5]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 90,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[5]/d",
                    "value": "0",
                    "type": "double",
                    "id": 91,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[5]/i",
                    "value": "0",
                    "type": "double",
                    "id": 92,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[5]/p",
                    "value": "5",
                    "type": "double",
                    "id": 93,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[5]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 94,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[6]/.name",
                    "value": "\"PIDController[6]\"",
                    "type": "string ",
                    "id": 95,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[6]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 96,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[6]/d",
                    "value": "0.015",
                    "type": "double",
                    "id": 97,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[6]/i",
                    "value": "0.0001",
                    "type": "double",
                    "id": 98,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[6]/p",
                    "value": "0.4",
                    "type": "double",
                    "id": 99,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[6]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 100,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[7]/.name",
                    "value": "\"PIDController[7]\"",
                    "type": "string ",
                    "id": 101,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[7]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 102,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[7]/d",
                    "value": "0",
                    "type": "double",
                    "id": 103,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[7]/i",
                    "value": "0",
                    "type": "double",
                    "id": 104,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[7]/p",
                    "value": "5",
                    "type": "double",
                    "id": 105,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[7]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 106,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[8]/.name",
                    "value": "\"PIDController[8]\"",
                    "type": "string ",
                    "id": 107,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[8]/.type",
                    "value": "\"PIDController\"",
                    "type": "string ",
                    "id": 108,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[8]/d",
                    "value": "0.015",
                    "type": "double",
                    "id": 109,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[8]/i",
                    "value": "0.0001",
                    "type": "double",
                    "id": 110,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[8]/p",
                    "value": "0.4",
                    "type": "double",
                    "id": 111,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/PIDController[8]/setpoint",
                    "value": "0",
                    "type": "double",
                    "id": 112,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Scheduler/.name",
                    "value": "\"Scheduler\"",
                    "type": "string ",
                    "id": 113,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Scheduler/.type",
                    "value": "\"Scheduler\"",
                    "type": "string ",
                    "id": 114,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Scheduler/Ids",
                    "value": "",
                    "type": "array double ",
                    "id": 115,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/Scheduler/Names",
                    "value": "",
                    "type": "array string ",
                    "id": 116,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/navX-Sensor/.name",
                    "value": "\"navX-Sensor\"",
                    "type": "string ",
                    "id": 117,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/navX-Sensor/.type",
                    "value": "\"Gyro\"",
                    "type": "string ",
                    "id": 118,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/LiveWindow/Ungrouped/navX-Sensor/Value",
                    "value": "0",
                    "type": "double",
                    "id": 119,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Enable Joystick/Position",
                    "value": "3,2",
                    "type": "array double ",
                    "id": 120,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Enable Joystick/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 121,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Enable Joystick/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 122,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Enable Slew/Position",
                    "value": "8,2",
                    "type": "array double ",
                    "id": 123,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Enable Slew/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 124,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Enable Slew/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 125,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Front/Position",
                    "value": "4,0",
                    "type": "array double ",
                    "id": 126,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Front/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 127,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Front/Size",
                    "value": "2,1",
                    "type": "array double ",
                    "id": 128,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Gyro Heading/Position",
                    "value": "4,6",
                    "type": "array double ",
                    "id": 129,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Gyro Heading/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 130,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Gyro Reset/Position",
                    "value": "0,2",
                    "type": "array double ",
                    "id": 131,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Gyro Reset/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 132,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Gyro Reset/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 133,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LF Heading/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 134,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LF Heading/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 135,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LF Speed/Position",
                    "value": "2,0",
                    "type": "array double ",
                    "id": 136,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LF Speed/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 137,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LR Heading/Position",
                    "value": "0,6",
                    "type": "array double ",
                    "id": 138,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LR Heading/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 139,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LR Speed/Position",
                    "value": "2,6",
                    "type": "array double ",
                    "id": 140,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/LR Speed/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 141,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RF Heading/Position",
                    "value": "6,0",
                    "type": "array double ",
                    "id": 142,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RF Heading/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 143,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RF Speed/Position",
                    "value": "8,0",
                    "type": "array double ",
                    "id": 144,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RF Speed/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 145,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RR Heading/Position",
                    "value": "6,6",
                    "type": "array double ",
                    "id": 146,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RR Heading/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 147,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RR Speed/Position",
                    "value": "8,6",
                    "type": "array double ",
                    "id": 148,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/RR Speed/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 149,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Use Overrides/Position",
                    "value": "5,2",
                    "type": "array double ",
                    "id": 150,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Use Overrides/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 151,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/Use Overrides/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 152,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/xSpeed Override/Position",
                    "value": "0,4",
                    "type": "array double ",
                    "id": 153,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/xSpeed Override/PreferredComponent",
                    "value": "\"Number Slider\"",
                    "type": "string ",
                    "id": 154,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/xSpeed Override/Size",
                    "value": "3,2",
                    "type": "array double ",
                    "id": 155,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/ySpeed Override/Position",
                    "value": "3,4",
                    "type": "array double ",
                    "id": 156,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/ySpeed Override/PreferredComponent",
                    "value": "\"Number Slider\"",
                    "type": "string ",
                    "id": 157,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/ySpeed Override/Size",
                    "value": "4,2",
                    "type": "array double ",
                    "id": 158,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/zSpeed Override/Position",
                    "value": "7,4",
                    "type": "array double ",
                    "id": 159,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/zSpeed Override/PreferredComponent",
                    "value": "\"Number Slider\"",
                    "type": "string ",
                    "id": 160,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Drivetrain/zSpeed Override/Size",
                    "value": "3,2",
                    "type": "array double ",
                    "id": 161,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Enable Control/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 162,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Enable Control/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 163,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Enable Control/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 164,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/LF/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 165,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/LF/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 166,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/LF/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 167,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/LR/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 168,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/LR/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 169,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/LR/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 170,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/Position",
                    "value": "2,0",
                    "type": "array double ",
                    "id": 171,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 172,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 173,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/Properties/Number of columns",
                    "value": "2",
                    "type": "double",
                    "id": 174,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/Properties/Number of rows",
                    "value": "2",
                    "type": "double",
                    "id": 175,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/RF/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 176,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/RF/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 177,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/RF/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 178,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/RR/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 179,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/RR/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 180,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/RR/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 181,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Module Selector/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 182,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Selected Module/Position",
                    "value": "4,0",
                    "type": "array double ",
                    "id": 183,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Selected Module/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 184,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/0/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 185,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/0/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 186,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/0/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 187,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/100/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 188,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/100/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 189,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/100/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 190,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/1000/Position",
                    "value": "3,0",
                    "type": "array double ",
                    "id": 191,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/1000/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 192,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/1000/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 193,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/1500/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 194,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/1500/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 195,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/1500/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 196,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/2000/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 197,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/2000/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 198,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/2000/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 199,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/500/Position",
                    "value": "2,0",
                    "type": "array double ",
                    "id": 200,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/500/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 201,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/500/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 202,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Apply/Position",
                    "value": "3,1",
                    "type": "array double ",
                    "id": 203,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Apply/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 204,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Apply/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 205,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Position",
                    "value": "12,0",
                    "type": "array double ",
                    "id": 206,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 207,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 208,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Properties/Number of columns",
                    "value": "4",
                    "type": "double",
                    "id": 209,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Properties/Number of rows",
                    "value": "2",
                    "type": "double",
                    "id": 210,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/Size",
                    "value": "6,2",
                    "type": "array double ",
                    "id": 211,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/input/Position",
                    "value": "2,1",
                    "type": "array double ",
                    "id": 212,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Translation Setpoints/input/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 213,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Error/Position",
                    "value": "6,2",
                    "type": "array double ",
                    "id": 214,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Error/PreferredComponent",
                    "value": "\"Graph\"",
                    "type": "string ",
                    "id": 215,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Error/Size",
                    "value": "6,5",
                    "type": "array double ",
                    "id": 216,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Heading/Position",
                    "value": "0,2",
                    "type": "array double ",
                    "id": 217,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Heading/PreferredComponent",
                    "value": "\"Graph\"",
                    "type": "string ",
                    "id": 218,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Heading/Size",
                    "value": "6,5",
                    "type": "array double ",
                    "id": 219,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Apply/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 220,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Apply/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 221,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Apply/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 222,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 223,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 224,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/Properties/Number of columns",
                    "value": "2",
                    "type": "double",
                    "id": 225,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/Properties/Number of rows",
                    "value": "4",
                    "type": "double",
                    "id": 226,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kD/Position",
                    "value": "0,3",
                    "type": "array double ",
                    "id": 227,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kD/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 228,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kF/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 229,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kF/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 230,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kI/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 231,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kI/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 232,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kIz/Position",
                    "value": "0,2",
                    "type": "array double ",
                    "id": 233,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kIz/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 234,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kP/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 235,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/kP/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 236,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/max/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 237,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/max/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 238,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/min/Position",
                    "value": "1,2",
                    "type": "array double ",
                    "id": 239,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Inner/min/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 240,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Position",
                    "value": "12,2",
                    "type": "array double ",
                    "id": 241,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 242,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 243,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Properties/Number of columns",
                    "value": "1",
                    "type": "double",
                    "id": 244,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Properties/Number of rows",
                    "value": "2",
                    "type": "double",
                    "id": 245,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw PID/Size",
                    "value": "3,5",
                    "type": "array double ",
                    "id": 246,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/-90/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 247,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/-90/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 248,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/-90/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 249,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/0/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 250,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/0/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 251,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/0/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 252,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/135/Position",
                    "value": "3,0",
                    "type": "array double ",
                    "id": 253,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/135/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 254,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/135/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 255,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/180/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 256,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/180/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 257,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/180/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 258,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/45/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 259,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/45/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 260,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/45/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 261,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/90/Position",
                    "value": "2,0",
                    "type": "array double ",
                    "id": 262,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/90/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 263,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/90/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 264,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Apply/Position",
                    "value": "3,1",
                    "type": "array double ",
                    "id": 265,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Apply/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 266,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Apply/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 267,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Position",
                    "value": "6,0",
                    "type": "array double ",
                    "id": 268,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 269,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 270,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Properties/Number of columns",
                    "value": "4",
                    "type": "double",
                    "id": 271,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Properties/Number of rows",
                    "value": "2",
                    "type": "double",
                    "id": 272,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/Size",
                    "value": "6,2",
                    "type": "array double ",
                    "id": 273,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/input/Position",
                    "value": "2,1",
                    "type": "array double ",
                    "id": 274,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Module/Yaw Setpoints/input/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 275,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Enable Control/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 276,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Enable Control/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 277,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Enable Control/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 278,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/LF/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 279,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/LF/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 280,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/LF/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 281,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/LR/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 282,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/LR/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 283,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/LR/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 284,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/Position",
                    "value": "2,0",
                    "type": "array double ",
                    "id": 285,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 286,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 287,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/Properties/Number of columns",
                    "value": "2",
                    "type": "double",
                    "id": 288,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/Properties/Number of rows",
                    "value": "2",
                    "type": "double",
                    "id": 289,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/RF/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 290,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/RF/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 291,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/RF/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 292,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/RR/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 293,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/RR/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 294,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/RR/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 295,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Module Selector/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 296,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Error/Position",
                    "value": "6,2",
                    "type": "array double ",
                    "id": 297,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Error/PreferredComponent",
                    "value": "\"Graph\"",
                    "type": "string ",
                    "id": 298,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Error/Size",
                    "value": "6,5",
                    "type": "array double ",
                    "id": 299,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Apply/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 300,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Apply/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 301,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Apply/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 302,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 303,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 304,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/Properties/Number of columns",
                    "value": "2",
                    "type": "double",
                    "id": 305,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/Properties/Number of rows",
                    "value": "4",
                    "type": "double",
                    "id": 306,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kD/Position",
                    "value": "0,3",
                    "type": "array double ",
                    "id": 307,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kD/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 308,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kF/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 309,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kF/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 310,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kI/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 311,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kI/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 312,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kIz/Position",
                    "value": "0,2",
                    "type": "array double ",
                    "id": 313,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kIz/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 314,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kP/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 315,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/kP/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 316,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/max/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 317,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/max/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 318,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/min/Position",
                    "value": "1,2",
                    "type": "array double ",
                    "id": 319,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Inner/min/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 320,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Position",
                    "value": "12,2",
                    "type": "array double ",
                    "id": 321,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 322,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 323,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Properties/Number of columns",
                    "value": "1",
                    "type": "double",
                    "id": 324,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Properties/Number of rows",
                    "value": "2",
                    "type": "double",
                    "id": 325,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor PID/Size",
                    "value": "3,5",
                    "type": "array double ",
                    "id": 326,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor RPM/Position",
                    "value": "0,2",
                    "type": "array double ",
                    "id": 327,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor RPM/PreferredComponent",
                    "value": "\"Graph\"",
                    "type": "string ",
                    "id": 328,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor RPM/Size",
                    "value": "6,5",
                    "type": "array double ",
                    "id": 329,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/A/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 330,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/A/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 331,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/A/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 332,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/B/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 333,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/B/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 334,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/B/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 335,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/Position",
                    "value": "4,0",
                    "type": "array double ",
                    "id": 336,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 337,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 338,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/Properties/Number of columns",
                    "value": "2",
                    "type": "double",
                    "id": 339,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/Properties/Number of rows",
                    "value": "1",
                    "type": "double",
                    "id": 340,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Motor Selector/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 341,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Mod/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 342,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Mod/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 343,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Motor/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 344,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Motor/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 345,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Position",
                    "value": "6,0",
                    "type": "array double ",
                    "id": 346,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 347,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Properties/Number of columns",
                    "value": "2",
                    "type": "double",
                    "id": 348,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Properties/Number of rows",
                    "value": "1",
                    "type": "double",
                    "id": 349,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Selected/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 350,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/0/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 351,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/0/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 352,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/0/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 353,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/100/Position",
                    "value": "1,0",
                    "type": "array double ",
                    "id": 354,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/100/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 355,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/100/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 356,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/1000/Position",
                    "value": "3,0",
                    "type": "array double ",
                    "id": 357,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/1000/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 358,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/1000/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 359,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/1500/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 360,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/1500/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 361,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/1500/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 362,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/2000/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 363,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/2000/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 364,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/2000/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 365,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/500/Position",
                    "value": "2,0",
                    "type": "array double ",
                    "id": 366,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/500/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 367,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/500/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 368,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Apply/Position",
                    "value": "3,1",
                    "type": "array double ",
                    "id": 369,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Apply/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 370,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Apply/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 371,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Position",
                    "value": "8,0",
                    "type": "array double ",
                    "id": 372,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 373,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 374,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Properties/Number of columns",
                    "value": "4",
                    "type": "double",
                    "id": 375,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Properties/Number of rows",
                    "value": "2",
                    "type": "double",
                    "id": 376,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/Size",
                    "value": "6,2",
                    "type": "array double ",
                    "id": 377,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/input/Position",
                    "value": "2,1",
                    "type": "array double ",
                    "id": 378,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Motor/Setpoints/input/Size",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 379,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LF/Encoder LF offset/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 380,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LF/Position",
                    "value": "1,1",
                    "type": "array double ",
                    "id": 381,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LF/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 382,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LF/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 383,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LF/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 384,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LF/Zero!/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 385,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LF/Zero!/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 386,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LR/Encoder LR offset/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 387,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LR/Position",
                    "value": "1,3",
                    "type": "array double ",
                    "id": 388,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LR/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 389,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LR/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 390,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LR/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 391,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LR/Zero!/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 392,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder LR/Zero!/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 393,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RF/Encoder RF offset/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 394,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RF/Position",
                    "value": "3,1",
                    "type": "array double ",
                    "id": 395,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RF/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 396,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RF/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 397,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RF/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 398,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RF/Zero!/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 399,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RF/Zero!/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 400,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RR/Encoder RR offset/Position",
                    "value": "0,0",
                    "type": "array double ",
                    "id": 401,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RR/Position",
                    "value": "3,3",
                    "type": "array double ",
                    "id": 402,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RR/PreferredComponent",
                    "value": "\"Grid Layout\"",
                    "type": "string ",
                    "id": 403,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RR/Properties/Label position",
                    "value": "\"HIDDEN\"",
                    "type": "string ",
                    "id": 404,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RR/Size",
                    "value": "2,2",
                    "type": "array double ",
                    "id": 405,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RR/Zero!/Position",
                    "value": "0,1",
                    "type": "array double ",
                    "id": 406,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Robot Setup/Encoder RR/Zero!/PreferredComponent",
                    "value": "\"Toggle Button\"",
                    "type": "string ",
                    "id": 407,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Tabs",
                    "value": "\"Team4909\",\"Robot Setup\",\"Motor\",\"Module\",\"Drivetrain\"",
                    "type": "array string ",
                    "id": 408,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Team4909/Encoder LF/PreferredComponent",
                    "value": "\"List Layout\"",
                    "type": "string ",
                    "id": 409,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Team4909/Encoder LR/PreferredComponent",
                    "value": "\"List Layout\"",
                    "type": "string ",
                    "id": 410,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Team4909/Encoder RF/PreferredComponent",
                    "value": "\"List Layout\"",
                    "type": "string ",
                    "id": 411,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/.metadata/Team4909/Encoder RR/PreferredComponent",
                    "value": "\"List Layout\"",
                    "type": "string ",
                    "id": 412,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/.type",
                    "value": "\"ShuffleboardTab\"",
                    "type": "string ",
                    "id": 413,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/Enable Joystick",
                    "value": "true",
                    "type": "boolean ",
                    "id": 414,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/Enable Slew",
                    "value": "true",
                    "type": "boolean ",
                    "id": 415,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/Front/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 416,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/Gyro Heading",
                    "value": "-0",
                    "type": "double",
                    "id": 417,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/Gyro Reset",
                    "value": "false",
                    "type": "boolean ",
                    "id": 418,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/LF Heading",
                    "value": "0",
                    "type": "double",
                    "id": 419,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/LF Speed",
                    "value": "0",
                    "type": "double",
                    "id": 420,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/LR Heading",
                    "value": "0",
                    "type": "double",
                    "id": 421,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/LR Speed",
                    "value": "0",
                    "type": "double",
                    "id": 422,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/RF Heading",
                    "value": "0",
                    "type": "double",
                    "id": 423,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/RF Speed",
                    "value": "0",
                    "type": "double",
                    "id": 424,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/RR Heading",
                    "value": "0",
                    "type": "double",
                    "id": 425,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/RR Speed",
                    "value": "0",
                    "type": "double",
                    "id": 426,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/Use Overrides",
                    "value": "false",
                    "type": "boolean ",
                    "id": 427,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/xSpeed Override",
                    "value": "0",
                    "type": "double",
                    "id": 428,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/ySpeed Override",
                    "value": "0",
                    "type": "double",
                    "id": 429,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Drivetrain/zSpeed Override",
                    "value": "0",
                    "type": "double",
                    "id": 430,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Maintenance/Joystick Enabled",
                    "value": "true",
                    "type": "boolean ",
                    "id": 431,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/.type",
                    "value": "\"ShuffleboardTab\"",
                    "type": "string ",
                    "id": 432,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Enable Control",
                    "value": "false",
                    "type": "boolean ",
                    "id": 433,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Module Selector/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 434,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Module Selector/LF",
                    "value": "false",
                    "type": "boolean ",
                    "id": 435,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Module Selector/LR",
                    "value": "false",
                    "type": "boolean ",
                    "id": 436,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Module Selector/RF",
                    "value": "false",
                    "type": "boolean ",
                    "id": 437,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Module Selector/RR",
                    "value": "false",
                    "type": "boolean ",
                    "id": 438,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Selected Module",
                    "value": "\"\"",
                    "type": "string ",
                    "id": 439,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 440,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/0",
                    "value": "false",
                    "type": "boolean ",
                    "id": 441,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/100",
                    "value": "false",
                    "type": "boolean ",
                    "id": 442,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/1000",
                    "value": "false",
                    "type": "boolean ",
                    "id": 443,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/1500",
                    "value": "false",
                    "type": "boolean ",
                    "id": 444,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/2000",
                    "value": "false",
                    "type": "boolean ",
                    "id": 445,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/500",
                    "value": "false",
                    "type": "boolean ",
                    "id": 446,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/Apply",
                    "value": "false",
                    "type": "boolean ",
                    "id": 447,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Translation Setpoints/input",
                    "value": "3000",
                    "type": "double",
                    "id": 448,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Error",
                    "value": "0",
                    "type": "double",
                    "id": 449,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Heading",
                    "value": "0",
                    "type": "double",
                    "id": 450,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 451,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Apply",
                    "value": "false",
                    "type": "boolean ",
                    "id": 452,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 453,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/kD",
                    "value": "0",
                    "type": "double",
                    "id": 454,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/kF",
                    "value": "0",
                    "type": "double",
                    "id": 455,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/kI",
                    "value": "0",
                    "type": "double",
                    "id": 456,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/kIz",
                    "value": "0",
                    "type": "double",
                    "id": 457,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/kP",
                    "value": "0",
                    "type": "double",
                    "id": 458,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/max",
                    "value": "0",
                    "type": "double",
                    "id": 459,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw PID/Inner/min",
                    "value": "0",
                    "type": "double",
                    "id": 460,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/-90",
                    "value": "false",
                    "type": "boolean ",
                    "id": 461,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 462,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/0",
                    "value": "false",
                    "type": "boolean ",
                    "id": 463,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/135",
                    "value": "false",
                    "type": "boolean ",
                    "id": 464,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/180",
                    "value": "false",
                    "type": "boolean ",
                    "id": 465,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/45",
                    "value": "false",
                    "type": "boolean ",
                    "id": 466,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/90",
                    "value": "false",
                    "type": "boolean ",
                    "id": 467,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/Apply",
                    "value": "false",
                    "type": "boolean ",
                    "id": 468,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Module/Yaw Setpoints/input",
                    "value": "-45",
                    "type": "double",
                    "id": 469,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/.type",
                    "value": "\"ShuffleboardTab\"",
                    "type": "string ",
                    "id": 470,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Enable Control",
                    "value": "false",
                    "type": "boolean ",
                    "id": 471,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Module Selector/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 472,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Module Selector/LF",
                    "value": "false",
                    "type": "boolean ",
                    "id": 473,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Module Selector/LR",
                    "value": "false",
                    "type": "boolean ",
                    "id": 474,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Module Selector/RF",
                    "value": "false",
                    "type": "boolean ",
                    "id": 475,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Module Selector/RR",
                    "value": "false",
                    "type": "boolean ",
                    "id": 476,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor Error",
                    "value": "0",
                    "type": "double",
                    "id": 477,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 478,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Apply",
                    "value": "false",
                    "type": "boolean ",
                    "id": 479,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 480,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/kD",
                    "value": "3",
                    "type": "double",
                    "id": 481,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/kF",
                    "value": "0",
                    "type": "double",
                    "id": 482,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/kI",
                    "value": "0",
                    "type": "double",
                    "id": 483,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/kIz",
                    "value": "300",
                    "type": "double",
                    "id": 484,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/kP",
                    "value": "0.1",
                    "type": "double",
                    "id": 485,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/max",
                    "value": "0",
                    "type": "double",
                    "id": 486,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor PID/Inner/min",
                    "value": "0",
                    "type": "double",
                    "id": 487,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor RPM",
                    "value": "0",
                    "type": "double",
                    "id": 488,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor Selector/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 489,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor Selector/A",
                    "value": "false",
                    "type": "boolean ",
                    "id": 490,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Motor Selector/B",
                    "value": "false",
                    "type": "boolean ",
                    "id": 491,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Selected/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 492,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Selected/Mod",
                    "value": "\"\"",
                    "type": "string ",
                    "id": 493,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Selected/Motor",
                    "value": "\"\"",
                    "type": "string ",
                    "id": 494,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 495,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/0",
                    "value": "false",
                    "type": "boolean ",
                    "id": 496,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/100",
                    "value": "false",
                    "type": "boolean ",
                    "id": 497,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/1000",
                    "value": "false",
                    "type": "boolean ",
                    "id": 498,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/1500",
                    "value": "false",
                    "type": "boolean ",
                    "id": 499,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/2000",
                    "value": "false",
                    "type": "boolean ",
                    "id": 500,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/500",
                    "value": "false",
                    "type": "boolean ",
                    "id": 501,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/Apply",
                    "value": "false",
                    "type": "boolean ",
                    "id": 502,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Motor/Setpoints/input",
                    "value": "3000",
                    "type": "double",
                    "id": 503,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/.type",
                    "value": "\"ShuffleboardTab\"",
                    "type": "string ",
                    "id": 504,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder LF/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 505,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder LF/Encoder LF offset",
                    "value": "0",
                    "type": "double",
                    "id": 506,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder LF/Zero!",
                    "value": "false",
                    "type": "boolean ",
                    "id": 507,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder LR/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 508,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder LR/Encoder LR offset",
                    "value": "0",
                    "type": "double",
                    "id": 509,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder LR/Zero!",
                    "value": "false",
                    "type": "boolean ",
                    "id": 510,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder RF/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 511,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder RF/Encoder RF offset",
                    "value": "0",
                    "type": "double",
                    "id": 512,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder RF/Zero!",
                    "value": "false",
                    "type": "boolean ",
                    "id": 513,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder RR/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 514,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder RR/Encoder RR offset",
                    "value": "0",
                    "type": "double",
                    "id": 515,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Robot Setup/Encoder RR/Zero!",
                    "value": "false",
                    "type": "boolean ",
                    "id": 516,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/.type",
                    "value": "\"ShuffleboardTab\"",
                    "type": "string ",
                    "id": 517,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LF/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 518,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LF/angle deg",
                    "value": "0",
                    "type": "double",
                    "id": 519,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LF/goal deg",
                    "value": "0",
                    "type": "double",
                    "id": 520,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LF/output +-%",
                    "value": "-0",
                    "type": "double",
                    "id": 521,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LR/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 522,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LR/angle deg",
                    "value": "0",
                    "type": "double",
                    "id": 523,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LR/goal deg",
                    "value": "0",
                    "type": "double",
                    "id": 524,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder LR/output +-%",
                    "value": "-0",
                    "type": "double",
                    "id": 525,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RF/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 526,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RF/angle deg",
                    "value": "0",
                    "type": "double",
                    "id": 527,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RF/goal deg",
                    "value": "0",
                    "type": "double",
                    "id": 528,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RF/output +-%",
                    "value": "-0",
                    "type": "double",
                    "id": 529,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RR/.type",
                    "value": "\"ShuffleboardLayout\"",
                    "type": "string ",
                    "id": 530,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RR/angle deg",
                    "value": "0",
                    "type": "double",
                    "id": 531,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RR/goal deg",
                    "value": "0",
                    "type": "double",
                    "id": 532,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Encoder RR/output +-%",
                    "value": "-0",
                    "type": "double",
                    "id": 533,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF A/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 534,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF A/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 535,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF A/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 536,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF A/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 537,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF A/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 538,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF B/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 539,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF B/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 540,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF B/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 541,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF B/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 542,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LF B/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 543,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR A/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 544,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR A/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 545,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR A/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 546,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR A/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 547,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR A/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 548,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR B/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 549,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR B/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 550,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR B/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 551,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR B/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 552,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor LR B/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 553,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF A/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 554,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF A/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 555,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF A/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 556,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF A/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 557,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF A/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 558,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF B/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 559,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF B/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 560,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF B/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 561,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF B/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 562,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RF B/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 563,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR A/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 564,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR A/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 565,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR A/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 566,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR A/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 567,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR A/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 568,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR B/PID/MotorFalcon500-kD",
                    "value": "7",
                    "type": "double",
                    "id": 569,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR B/PID/MotorFalcon500-kFF",
                    "value": "0",
                    "type": "double",
                    "id": 570,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR B/PID/MotorFalcon500-kI",
                    "value": "0.005",
                    "type": "double",
                    "id": 571,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR B/PID/MotorFalcon500-kIz",
                    "value": "300",
                    "type": "double",
                    "id": 572,
                    "sn": 1,
                    "is_persistent": false
                },
                {
                    "key": "/Shuffleboard/Team4909/Motor RR B/PID/MotorFalcon500-kP",
                    "value": "0.7",
                    "type": "double",
                    "id": 573,
                    "sn": 1,
                    "is_persistent": false
                }
            ];
        }
        keys = keys.sort((a, b) => {
            if (a.key < b.key) {
                return -1
            } else if (a.key > b.key) {
                return 1
            }
            return 0
        })
        let level = {tree};

        keys.forEach(path => {
            path.key.split('/').reduce((r, name, i, a) => {
                if (name === "") {
                    return r
                }
                if (!r[name]) {
                    r[name] = {tree: []};
                    const obj = {
                        name,
                        value: "",
                        path: path.key,
                        children: r[name].tree
                    };
                    // console.log(path.key)
                    if (path.key.endsWith(name)) {
                        obj.value = path.value
                    }

                    if (!Array.isArray(r.tree)) {
                        r.tree = [];
                    }

                    r.tree.push(obj)
                    tree = tree;  // make the reactivity work
                }

                return r[name];
            }, level)
        })
        tree = tree; // make the reactivity work
        // console.log(JSON.stringify(tree, null, 4))

    })();
</script>

<div class="d-flex flex-column mt-2 bg-light border-end" style="max-height: 100vh; overflow-y: scroll">
    <div>
        <h2 class="text-center fs-5">Data Sources</h2>
    </div>
    <!--    <button class="btn btn-primary">Toggle Hidden Entries</button>-->
    <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="Filter List" bind:value={filter}>
        <label for="floatingInput">Filter List</label>
    </div>

    <div class="mx-2">
        <Tree {tree} let:node let:leaf>
            {#if node.path.toLowerCase().includes(filter.toLowerCase())}
                <div class="name" title={leaf ? node.value : undefined}>
                    {node.name}
                    <div class="float-end">
                        {node.value}
                    </div>
                </div>
            {/if}
        </Tree>
    </div>
</div>