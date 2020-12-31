import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	OnDestroy,
	Type,
	ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from '../../directives/insertion.directive';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit, OnDestroy {
	public componentRef!: ComponentRef<any>;
	public childComponentType!: Type<any>;
	@ViewChild(InsertionDirective)
	insertionPoint!: InsertionDirective;
	protected data = {};
	private readonly _onClose = new Subject<any>();
	public onClose = this._onClose.asObservable();

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private cd: ChangeDetectorRef,
	) {}

	ngAfterViewInit() {
		this.loadChildComponent(this.childComponentType);
		this.cd.detectChanges();
	}

	ngOnDestroy() {
		if (this.componentRef) {
			this.componentRef.destroy();
		}
	}

	onOverlayClicked(evt: MouseEvent) {
		this.close({});
	}

	onDialogClicked(evt: MouseEvent) {
		evt.stopPropagation();
	}

	loadChildComponent(componentType: Type<any>) {
		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

		const viewContainerRef = this.insertionPoint.viewContainerRef;
		viewContainerRef.clear();

		this.componentRef = viewContainerRef.createComponent(componentFactory);
	}

	close(data: any) {
		this._onClose.next(data);
	}
}
