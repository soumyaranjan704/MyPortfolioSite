import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EducationSite';
  public newsLetterGetData:any[]=[];
    
  constructor(private utilityService: UtilityService) { 
    
  }
  ngOnInit(): void {

    this.getNewsDataFromApi();
 
  }

  getNewsDataFromApi(){
    let url=environment.getNewsLetter;
    this.utilityService.getDataToService(url).subscribe(response =>{
     this.newsLetterGetData=response;
    }, error=>{
      console.log('error is',error)
    });
     
  }
}
