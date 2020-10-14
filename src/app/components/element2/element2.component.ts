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
  selector: 'app-element2',
  templateUrl: './element2.component.html',
  styleUrls: ['./element2.component.scss']
})
export class Element2Component implements OnInit {
  @ViewChild("helperContainer", {read: ViewContainerRef}) container;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  componentRef: ComponentRef<any>

  ngOnInit() {
    Promise.resolve(null).then(() => this.createComponent(1));
  }

  createComponent(type) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(HelperComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.numberPage = type;
  }
}
