input.onButtonPressed(Button.A, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID1)
})
input.onButtonPressed(Button.B, function () {
    PlanetX_AILens.learnObject(PlanetX_AILens.learnID.ID2)
})
let val1 = 0
let inc = 0
basic.showIcon(IconNames.Heart)
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Things)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID1)) {
        basic.showNumber(1)
        val1 = 1
        nezhaV2.move(nezhaV2.MotorPostion.M1, 25, nezhaV2.MovementDirection.CW, inc, nezhaV2.SportsMode.Degree)
        inc += 10
        serial.writeLine("" + (inc))
    } else if (PlanetX_AILens.objectCheck(PlanetX_AILens.learnID.ID2)) {
        basic.showNumber(2)
    } else {
        basic.showIcon(IconNames.No)
    }
})
