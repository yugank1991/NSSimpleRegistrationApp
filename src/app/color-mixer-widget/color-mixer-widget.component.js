"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ColorMixerWidgetComponent = /** @class */ (function () {
    function ColorMixerWidgetComponent() {
        this.colorType = 1;
        this.fanType = 0;
        this.color = {};
    }
    ColorMixerWidgetComponent.prototype.ngOnInit = function () {
        this.color = {
            red: 100,
            green: 100,
            blue: 100,
            colorTemp: 32
        };
    };
    ColorMixerWidgetComponent.prototype.setColorType = function (index) {
        this.colorType = index;
    };
    ColorMixerWidgetComponent.prototype.setFanType = function (index) {
        this.fanType = index;
    };
    ColorMixerWidgetComponent.prototype.sliderChange = function (value, type) {
        var slider = value.object;
        this.color[type] = slider.value;
    };
    ColorMixerWidgetComponent = __decorate([
        core_1.Component({
            selector: "ns-color-mixer-widget",
            moduleId: module.id,
            templateUrl: "./color-mixer-widget.component.html",
        }),
        __metadata("design:paramtypes", [])
    ], ColorMixerWidgetComponent);
    return ColorMixerWidgetComponent;
}());
exports.ColorMixerWidgetComponent = ColorMixerWidgetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItbWl4ZXItd2lkZ2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbG9yLW1peGVyLXdpZGdldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFRbEQ7SUFJSTtRQUhPLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLEVBQUUsQ0FBQztJQUVsQixDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxHQUFHLEVBQUUsR0FBRztZQUNSLEtBQUssRUFBRSxHQUFHO1lBQ1YsSUFBSSxFQUFFLEdBQUc7WUFDVCxTQUFTLEVBQUUsRUFBRTtTQUNoQixDQUFBO0lBQ0wsQ0FBQztJQUNELGdEQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUNELDhDQUFVLEdBQVYsVUFBVyxLQUFLO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELGdEQUFZLEdBQVosVUFBYSxLQUFLLEVBQUUsSUFBSTtRQUNwQixJQUFJLE1BQU0sR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNwQyxDQUFDO0lBeEJRLHlCQUF5QjtRQUxyQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFDQUFxQztTQUNyRCxDQUFDOztPQUNXLHlCQUF5QixDQXlCckM7SUFBRCxnQ0FBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNsaWRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlci9zbGlkZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtY29sb3ItbWl4ZXItd2lkZ2V0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbG9yLW1peGVyLXdpZGdldC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xvck1peGVyV2lkZ2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgY29sb3JUeXBlID0gMTtcbiAgICBwdWJsaWMgZmFuVHlwZSA9IDA7XG4gICAgcHVibGljIGNvbG9yID0ge307XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29sb3IgPSB7XG4gICAgICAgICAgICByZWQ6IDEwMCxcbiAgICAgICAgICAgIGdyZWVuOiAxMDAsXG4gICAgICAgICAgICBibHVlOiAxMDAsXG4gICAgICAgICAgICBjb2xvclRlbXA6IDMyXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Q29sb3JUeXBlKGluZGV4KSB7XG4gICAgICAgIHRoaXMuY29sb3JUeXBlID0gaW5kZXg7XG4gICAgfVxuICAgIHNldEZhblR5cGUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5mYW5UeXBlID0gaW5kZXg7XG4gICAgfVxuICAgIHNsaWRlckNoYW5nZSh2YWx1ZSwgdHlwZSkge1xuICAgICAgICBsZXQgc2xpZGVyID0gPFNsaWRlcj52YWx1ZS5vYmplY3Q7XG4gICAgICAgIHRoaXMuY29sb3JbdHlwZV0gPSBzbGlkZXIudmFsdWU7XG4gICAgfVxufSJdfQ==