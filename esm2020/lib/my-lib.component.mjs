import { Component, Input } from '@angular/core';
import * as moment from 'moment-timezone';
import * as i0 from "@angular/core";
export class MyLibComponent {
    constructor() { }
    ngOnInit() {
        console.log('Input JSON to share: ', this.JSON, 'at', moment.unix(new Date().getTime() / Math.pow(10, 3)).tz('Europe/Madrid').format('YYYY-MM-DD HH:mm:ss'));
    }
    ngOnChanges(change) {
        console.log('Received controller change: ', change);
    }
}
MyLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: MyLibComponent, selector: "lib-my-lib", inputs: { JSON: "JSON" }, usesOnChanges: true, ngImport: i0, template: `<p>lib-my-lib works!</p>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', template: `<p>lib-my-lib works!</p>` }]
        }], ctorParameters: function () { return []; }, propDecorators: { JSON: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL215LWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sS0FBSyxNQUFNLE1BQU0saUJBQWlCLENBQUM7O0FBUTFDLE1BQU0sT0FBTyxjQUFjO0lBSXpCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQzlKLENBQUM7SUFFSCxXQUFXLENBQUMsTUFBcUI7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzsyR0FaVSxjQUFjOytGQUFkLGNBQWMsaUdBSGYsMEJBQTBCOzJGQUd6QixjQUFjO2tCQUwxQixTQUFTOytCQUNFLFlBQVksWUFDWiwwQkFBMEI7MEVBSzNCLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50LXRpbWV6b25lJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbXktbGliJyxcbiAgdGVtcGxhdGU6IGA8cD5saWItbXktbGliIHdvcmtzITwvcD5gLFxuICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE15TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMgIHtcblxuICBASW5wdXQoKSBKU09OOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnSW5wdXQgSlNPTiB0byBzaGFyZTogJywgdGhpcy5KU09OLCAnYXQnLCAgbW9tZW50LnVuaXgoIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gTWF0aC5wb3coMTAsMykpLnR6KCdFdXJvcGUvTWFkcmlkJykuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJykpO1xuICAgIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2U6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgY29udHJvbGxlciBjaGFuZ2U6ICcsIGNoYW5nZSlcbiAgfVxuXG5cbn1cblxuIl19