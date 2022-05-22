import { assert, expect, test } from 'vitest'
import {buildTree, NTelement} from "./utils";



test('buildTree', () => {
  let elements = [
    {
      key: "Drivetrain/RF Speed/Size",
      fullPath: "/Shuffleboard/.metadata/Drivetrain/RF Speed/Size"
    },{
      key: "Drivetrain/RF Speed/Position",
      fullPath: "/Shuffleboard/.metadata/Drivetrain/RF uSpeed/Position"
    }
  ] as NTelement[]
  let tree = buildTree(elements)
  expect(tree).toMatchSnapshot()
})

test('buildTree without fullPath', () => {
  let elements = [
    {
      key: "Drivetrain/RF Speed/Size"
    },{
      key: "Drivetrain/RF Speed/Position"
    }
  ] as NTelement[]
  let tree = buildTree(elements)
  expect(tree).toMatchSnapshot()
})