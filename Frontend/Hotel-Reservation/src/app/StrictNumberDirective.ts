import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
    selector: '[NumberOnly]'
})

export class StrictNumberDirective {

    private regex: RegExp = new RegExp('^[0-9]*$');
    private specialKeys: Array<string> = ['Backspace' , 'ArrowRight', 'ArrowLeft', 'Tab'];

    constructor(private elementRef: ElementRef) { }

    /**
     * Key board action
     * @param event
     */
    @HostListener('keydown', ['$event'])onKeyDown(event:KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !==-1) {
        return;
    }
    const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
    console.log(event.key);
    if (inputValue && !String(inputValue).match(this.regex)) {
        event.preventDefault();
    }
    return;
    }
}