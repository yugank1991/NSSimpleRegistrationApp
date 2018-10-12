import { Component, OnInit } from "@angular/core";
import { Slider } from "tns-core-modules/ui/slider/slider";

@Component({
    selector: "ns-color-mixer-widget",
    moduleId: module.id,
    templateUrl: "./color-mixer-widget.component.html",
})
export class ColorMixerWidgetComponent implements OnInit {
    public colorType = 1;
    public fanType = 0;
    public color = {};
    constructor() {
    }

    ngOnInit(): void {
        this.color = {
            red: 100,
            green: 100,
            blue: 100,
            colorTemp: 32
        }
    }
    setColorType(index) {
        this.colorType = index;
    }
    setFanType(index) {
        this.fanType = index;
    }
    sliderChange(value, type) {
        let slider = <Slider>value.object;
        this.color[type] = slider.value;
    }
}