import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/services/live.service';
import { Live } from 'src/app/shared/models/live.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  public livesPrevious: Array<Live>;
  public livesNext: Array<Live>;
  public loadingLivesPrevious: boolean = false;
  public loadingLivesNext: boolean = false;

  constructor(public liveService: LiveService, public domSanitazer: DomSanitizer) { }

  ngOnInit(): void {
    this.getLives();
  }

  public getLives():void {
    this.liveService
      .getLivesWithFlags('false')
      .subscribe(data => {
        this.livesPrevious = data;
        this.livesPrevious.forEach(live => {
          live.safeUrl = this.domSanitazer.bypassSecurityTrustResourceUrl(live.url);
        });
        this.loadingLivesPrevious = true;
      });

    this.liveService
      .getLivesWithFlags('true')
      .subscribe(data => {
        this.livesNext = data;
        this.livesNext.forEach(live => {
          live.safeUrl = this.domSanitazer.bypassSecurityTrustResourceUrl(live.url);
        });
        this.loadingLivesNext = true;
      });
  }

}
