import {Injectable} from '@angular/core';
import {BaseServiceService} from "../base-service.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class DevCenterService extends BaseServiceService {

  constructor(
    http: HttpClient,
    router: Router,
  ) {
    super(http, router)
  }

}
