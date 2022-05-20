import { Injectable } from "@angular/core";
import { ApiService } from "@ns/planner";

@Injectable({ providedIn : 'root' })
export class HttpService implements ApiService
{
    public load() : void
    {
        console.warn("uTime");
    }
} 