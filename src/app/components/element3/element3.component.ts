import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {HelperComponent} from "../helper/helper.component";

@Component({
  selector: 'app-element3',
  templateUrl: './element3.component.html',
  styleUrls: ['./element3.component.scss']
})
export class Element3Component implements OnInit {
  @ViewChild("helperContainer", {read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  componentRef: ComponentRef<any>

  ngOnInit() {
    Promise.resolve(null).then(() => this.createComponent(2));
  }

  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(HelperComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.numberPage = type;
  }
}
