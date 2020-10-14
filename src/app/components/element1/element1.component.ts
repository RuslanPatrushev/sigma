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
  selector: 'app-element1',
  templateUrl: './element1.component.html',
  styleUrls: ['./element1.component.scss'],
})
export class Element1Component implements OnInit {
  @ViewChild("helperContainer", {read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  componentRef: ComponentRef<any>

  ngOnInit() {
    Promise.resolve(null).then(() => this.createComponent(0));
  }

  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(HelperComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.numberPage = type;

  }

}
