import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig{
    private _config:{[key:string]:string};
    /**
     *
     */
    constructor() {
       this._config={
        PathAPI:'';
       }
    }
   
    getAllSetting():{[key:string]:string}{
      return this._config;
    }

    get(key:string){
        return this._config[key];
    }
}