import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Logger } from './logger/logger.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ToastService } from './toast/toast.service';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
        RouterModule
    ],
    declarations: [],
	
    exports: [ ],
	
    providers: [
        Logger,
        ToastService
    ]
})

export class CoreModule {
    /* make sure CoreModule is imported only by one NgModule the AppModule */
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}