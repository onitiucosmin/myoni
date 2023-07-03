import { Component } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public faFacebook = faFacebook;
  public faInstagram = faInstagram;
  public faLinkedin = faLinkedin;
  public faGithub = faGithub

  // This function will scroll the window to the top
  public scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}
