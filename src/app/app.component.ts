import { Component } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'security';
  public unSafeURL: string = 'javascript:alert("This is an ATTACK")';
  public unSafeString: string =
    'This is just a string <script>Injected Script</script>';

  //public youTubeURL: string = 'https://www.youtube.com/shorts/Zkr44DHh7_U';

  public youTubeURL: string = 'https://www.youtube.com/embed/Zkr44DHh7_U';

  public geneuieURL: SafeUrl = '';
  public safeYouTuebURL: SafeResourceUrl = '';
  public genueineString: string = '';

  constructor(public sanitizer: DomSanitizer) {
    this.geneuieURL = this.sanitizer.bypassSecurityTrustUrl(this.unSafeURL);
    this.safeYouTuebURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.youTubeURL
    );
  }
}
