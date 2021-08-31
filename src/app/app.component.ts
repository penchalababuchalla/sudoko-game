import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='';
  selectCol = 0;
  selectRow = 0;
  isdisabled = true;
  count = 0;
  isHide = true;
  
  matrix=[
    ["","5","","1","","2","","3",""],
    ["","","","5","","3","","2",""],
    ["","2","","9","","","","","5"],
    ["2","","","","9","","","7",""],
    ["","","3","","","","8","","1"],
    ["","1","","7","","6","","4",""],
    ["7","","","8","","5","","",""],
    ["","4","","3","","","","5",""],
    ["","9","","","1","7","","8","6"]
  ]

  matrixClass=[
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""]
  ]
  onClick(i:number,j:number){

    this.selectRow = i;
    this.selectCol = j;
    
  }
  changeValue(num: string){

    this.matrix[this.selectRow][this.selectCol] = num;
    
    for(let i=0;i<this.matrix[this.selectRow].length;i++){
      if(this.selectCol != i) {
        if(num == this.matrix[this.selectRow][i]){
          this.matrixClass[this.selectRow][this.selectCol] = "red";
          this.matrix[this.selectRow][this.selectCol]="";
          this.count =this.count +1;
          if(this.count==3){
            this.isHide = false;
          }
          return
        }
        else{
          this.matrixClass[this.selectRow][this.selectCol] = "gray";
        }
      }
    }
    for(let j=0;j<this.matrix[this.selectCol].length;j++){
      if(this.selectRow !=j) {
        if(num ==this.matrix[j][this.selectCol]){
          this.matrixClass[this.selectRow][this.selectCol] = "red";
          this.matrix[this.selectRow][this.selectCol]="";
          this.count =this.count +1;
           if(this.count==3){
            this.isHide = false;
          }
          return
        }
        else{
          this.matrixClass[this.selectRow][this.selectCol] = "gray";
        }
      }
    }
    
    let blockRow = Math.floor(this.selectRow / 3) * 3;
    var blockCol = Math.floor(this.selectCol / 3) * 3;
  
    for(let i = blockRow; i < blockRow + 3; i++) {
      for(let j = blockCol; j < blockCol + 3; j++){
        
        if(this.selectRow != i && this.selectCol != j){
          if(num == this.matrix[i][j]){
            this.matrixClass[this.selectRow][this.selectCol] = "red";
            this.matrix[this.selectRow][this.selectCol]="";
            this.count =this.count +1;
            if(this.count==3){
            this.isHide = false;
            }
            return
          }
          else{
            this.matrixClass[this.selectRow][this.selectCol] = "gray";
          }
        }
      }
    }
  }
}
