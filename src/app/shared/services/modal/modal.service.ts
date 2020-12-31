import {
	ApplicationRef,
	ComponentFactoryResolver,
	ComponentRef,
	EmbeddedViewRef,
	Injectable,
	Injector,
	Type,
} from '@angular/core';
import { ModalModule } from './modal.module';
import { ModalComponent } from './modal.component';
import { take } from 'rxjs/operators';
import { ModalConfig, ModalInjector } from './modal.injector';

@Injectable({
	providedIn: ModalModule,
})
export class ModalService {
	dialogComponentRef!: ComponentRef<ModalComponent>;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private appRef: ApplicationRef,
		private injector: Injector,
	) {}

	public async present(componentType: Type<any>, config: ModalConfig = { data: {} }): Promise<any> {
		return new Promise((resolve, reject) => {
			this.appendModalComponentToBody(config);

			this.dialogComponentRef.instance.onClose.pipe(take(1)).subscribe(
				data => {
					this.removeModalComponentFromBody();
					resolve(data);
				},
				err => reject(err),
			);

			this.dialogComponentRef.instance.childComponentType = componentType;
		});
	}

	private appendModalComponentToBody(config: ModalConfig) {
		// create a map with the config
		const map = new WeakMap();
		map.set(ModalConfig, config);

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);

		// use our new injector
		const componentRef = componentFactory.create(new ModalInjector(this.injector, map));
		this.appRef.attachView(componentRef.hostView);

		const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
		document.body.appendChild(domElem);

		this.dialogComponentRef = componentRef;
	}

	public removeModalComponentFromBody() {
		this.appRef.detachView(this.dialogComponentRef.hostView);
		this.dialogComponentRef.destroy();
	}
}
