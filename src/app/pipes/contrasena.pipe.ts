import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, active:boolean=true): string {
    if (active==true){
      let final:string = "";
      for (let i=0; i< value.length;i++){
          final +="*";
      }
      return final;

    }else{
      return value;
    }

  }

}
