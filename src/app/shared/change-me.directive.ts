import { Directive ,ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appChangeMe]',
  standalone: false
})
export class ChangeMeDirective {
@Input() myCustomColor='';
  constructor(private er:ElementRef) 
  {
      this.er.nativeElement.style.color='red';
  }

  ngOnInit(){
    this.er.nativeElement.style.color=this.myCustomColor;
  }

}
